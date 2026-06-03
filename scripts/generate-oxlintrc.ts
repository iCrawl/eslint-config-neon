import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

import {
	eslintRules,
	importRules,
	jestRules,
	jsdocRules,
	jsxA11yRules,
	nextjsRules,
	nodeRules,
	promiseRules,
	reactRules,
	reactHooksRules,
	reactPerfRules,
	typescriptRules,
	unicornRules,
	vitestRules,
	typescriptTypeAwareRules,
} from './generated-oxlint-rules';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const execFileAsync = promisify(execFile);

type RuleRecord = Record<string, unknown>;

type OxlintJsPlugin = { name: string; specifier: string };

const OXLINT_SUPPORTED_RULES: Record<string, 'off'> = {
	...eslintRules,
	...importRules,
	...jestRules,
	...jsdocRules,
	...jsxA11yRules,
	...nextjsRules,
	...nodeRules,
	...promiseRules,
	...reactRules,
	...reactHooksRules,
	...reactPerfRules,
	...typescriptRules,
	...unicornRules,
	...vitestRules,
	...typescriptTypeAwareRules,
};

const OXLINT_PLUGIN_ORDER = [
	'import',
	'jsdoc',
	'jsx-a11y',
	'jest',
	'vitest',
	'nextjs',
	'node',
	'promise',
	'react',
	'react-hooks',
	'react-perf',
	'typescript',
	'unicorn',
] as const;

const CONFIG_ENV_BY_NAME: Record<string, Record<string, boolean>> = {
	browser: { browser: true },
	node: { node: true },
};

/**
 * When oxlint doesn't support a rule natively, we can pass it through as a JS plugin rule.
 * We deliberately alias all JS plugins under a custom namespace so it's obvious which rules
 * are coming from JS plugins (and to avoid conflicts with oxlint's reserved plugin names).
 */
const JS_PLUGIN_ALIAS_SCOPE = '@neon';
const JS_PLUGIN_ALIAS_PREFIX = 'eslint-';

// Some ESLint plugins currently rely on APIs oxlint doesn't implement in its JS plugin bridge.
// We still emit them (so they're visible in generated configs), but we scope them to a pattern
// that shouldn't match real project files to avoid hard runtime errors.
const JS_PLUGIN_NAMESPACE_DISABLED = new Set<string>([
	'import-x', // uses `context.parserPath` in resolver code paths
]);

const JS_PLUGIN_SPECIFIER_BY_NAMESPACE: Record<string, string> = {
	// Scoped plugins
	'@angular-eslint': '@angular-eslint/eslint-plugin',
	'@angular-eslint/template': '@angular-eslint/eslint-plugin-template',
	'@next/next': '@next/eslint-plugin-next',
	'@stylistic': '@stylistic/eslint-plugin',

	// Unscoped plugins
	'import-x': 'eslint-plugin-import-x',
	react: 'eslint-plugin-react',
	'react-hooks': 'eslint-plugin-react-hooks',
	'react-refresh': 'eslint-plugin-react-refresh',
	rxjs: 'eslint-plugin-rxjs-x',
	'rxjs-angular': 'eslint-plugin-rxjs-angular-x',
	sonarjs: 'eslint-plugin-sonarjs',
	svelte3: 'eslint-plugin-svelte3',
	tsdoc: 'eslint-plugin-tsdoc',
	'typescript-sort-keys': 'eslint-plugin-typescript-sort-keys',
	unicorn: 'eslint-plugin-unicorn',
	vue: 'eslint-plugin-vue',
	// Note: native oxlint plugins (import/jsdoc/node/...) are supported and will be matched first.
};

function normalizeJsPluginRuleName(rule: string): string {
	let normalized = rule;

	// Flatten scoped namespaces used by some configs/plugins
	for (const prefix of ['@stylistic/js/', '@stylistic/ts/', '@stylistic/jsx/']) {
		if (normalized.startsWith(prefix)) {
			normalized = `@stylistic/${normalized.slice(prefix.length)}`;
			break;
		}
	}

	// Alias normalization (eslint-config-prettier may include both keys for compatibility)
	if (normalized === '@stylistic/func-call-spacing') {
		normalized = '@stylistic/function-call-spacing';
	}

	return normalized;
}

function sanitizeForJsPluginAlias(namespace: string): string {
	return namespace.replace(/^@/, '').replaceAll('/', '-');
}

function parsePluginRuleName(ruleName: string): { localRuleName: string; namespace: string } | null {
	if (!ruleName.includes('/')) return null;

	// Scoped plugin:
	// - "@scope/rule" (e.g. "@stylistic/no-extra-semi")
	// - "@scope/name/rule" (e.g. "@angular-eslint/template/alt-text")
	if (ruleName.startsWith('@')) {
		const firstSlash = ruleName.indexOf('/');
		if (firstSlash === -1) return null;
		const secondSlash = ruleName.indexOf('/', firstSlash + 1);
		if (secondSlash === -1) {
			return {
				namespace: ruleName.slice(0, firstSlash),
				localRuleName: ruleName.slice(firstSlash + 1),
			};
		}

		return {
			namespace: ruleName.slice(0, secondSlash),
			localRuleName: ruleName.slice(secondSlash + 1),
		};
	}

	// Unscoped plugin: "plugin/rule"
	const firstSlash = ruleName.indexOf('/');
	return {
		namespace: ruleName.slice(0, firstSlash),
		localRuleName: ruleName.slice(firstSlash + 1),
	};
}

function getAliasedJsPlugin(namespace: string): OxlintJsPlugin | null {
	const specifier = JS_PLUGIN_SPECIFIER_BY_NAMESPACE[namespace];
	if (!specifier) return null;

	return {
		name: `${JS_PLUGIN_ALIAS_SCOPE}/${JS_PLUGIN_ALIAS_PREFIX}${sanitizeForJsPluginAlias(namespace)}`,
		specifier,
	};
}

function toSourceRuleName(oxlintRuleName: string): string {
	if (oxlintRuleName.startsWith('node/')) {
		return oxlintRuleName.replace('node/', 'n/');
	}

	// ESLint's Next.js plugin uses "@next/next/*", but oxlint uses "nextjs/*".
	if (oxlintRuleName.startsWith('nextjs/')) {
		return oxlintRuleName.replace('nextjs/', '@next/next/');
	}

	// eslint-plugin-import-x uses the "import-x/" namespace, but oxlint uses "import/".
	if (oxlintRuleName.startsWith('import/')) {
		return oxlintRuleName.replace('import/', 'import-x/');
	}

	if (oxlintRuleName.startsWith('typescript/')) {
		return oxlintRuleName.replace('typescript/', '@typescript-eslint/');
	}

	return oxlintRuleName;
}

function toOxlintRuleName(generatedRuleName: string): string {
	if (generatedRuleName.startsWith('n/')) {
		return generatedRuleName.replace('n/', 'node/');
	}

	// ESLint's Next.js plugin uses "@next/next/*", but oxlint uses "nextjs/*".
	if (generatedRuleName.startsWith('@next/next/')) {
		return generatedRuleName.replace('@next/next/', 'nextjs/');
	}

	if (generatedRuleName.startsWith('@typescript-eslint/')) {
		return generatedRuleName.replace('@typescript-eslint/', 'typescript/');
	}

	return generatedRuleName;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}

function extractRulesFromConfigExport(configExport: unknown): RuleRecord {
	const rules: RuleRecord = {};

	const mergeRules = (maybeRules: unknown) => {
		if (!isRecord(maybeRules)) return;
		Object.assign(rules, maybeRules);
	};

	if (Array.isArray(configExport)) {
		for (const item of configExport) {
			if (!isRecord(item)) continue;
			mergeRules(item.rules);
		}

		return rules;
	}

	// Support odd shapes (kept for backwards compatibility with older exports):
	// - FlatConfig object with a `rules` field
	// - A plain rules object (exported directly)
	if (isRecord(configExport)) {
		if ('rules' in configExport) {
			mergeRules(configExport.rules);
		} else if (
			'files' in configExport ||
			'languageOptions' in configExport ||
			'plugins' in configExport ||
			'settings' in configExport ||
			'processor' in configExport ||
			'linterOptions' in configExport
		) {
			mergeRules((configExport as { rules?: unknown }).rules);
		} else {
			Object.assign(rules, configExport);
		}
	}

	return rules;
}

type OxlintOverride = {
	files: string[];
	rules: RuleRecord;
};

type JsPluginOverridesExtraction = { jsPlugins: OxlintJsPlugin[]; overrides: OxlintOverride[] };

const jsPluginRuleNamesBySpecifier = new Map<string, Set<string> | null>();

async function getJsPluginRuleNames(specifier: string): Promise<Set<string> | null> {
	if (jsPluginRuleNamesBySpecifier.has(specifier)) {
		return jsPluginRuleNamesBySpecifier.get(specifier) ?? null;
	}

	try {
		const mod = await import(specifier);
		const plugin = (mod as { default?: unknown }).default ?? mod;

		if (!isRecord(plugin) || !('rules' in plugin) || !isRecord((plugin as { rules?: unknown }).rules)) {
			jsPluginRuleNamesBySpecifier.set(specifier, null);
			return null;
		}

		const rules = (plugin as { rules: Record<string, unknown> }).rules;
		const ruleNames = new Set(Object.keys(rules));
		jsPluginRuleNamesBySpecifier.set(specifier, ruleNames);
		return ruleNames;
	} catch {
		jsPluginRuleNamesBySpecifier.set(specifier, null);
		return null;
	}
}

const JS_PLUGIN_FILES_BY_NAMESPACE: Record<string, string[]> = {
	// Framework-specific formats
	vue: ['**/*.vue'],
	svelte3: ['**/*.svelte'],
	astro: ['**/*.astro'],
	mdx: ['**/*.mdx'],
	'@angular-eslint/template': ['**/*.html'],

	// Code plugins
	'@angular-eslint': ['**/*.ts'],
	'typescript-sort-keys': ['**/*.{ts,tsx,cts,mts}'],
	tsdoc: ['**/*.{ts,tsx,cts,mts}'],

	// Defaults (JS/TS)
	react: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'react-hooks': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'react-refresh': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'import-x': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	sonarjs: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	rxjs: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'rxjs-angular': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	unicorn: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'@stylistic': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
	'@next/next': ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
};

function getJsPluginFiles(namespace: string): string[] {
	if (JS_PLUGIN_NAMESPACE_DISABLED.has(namespace)) {
		return ['**/*.oxlint-disabled'];
	}

	return JS_PLUGIN_FILES_BY_NAMESPACE[namespace] ?? ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'];
}

async function getUnmatchedJsPluginOverrides(
	fileRules: RuleRecord,
	matchedSourceRuleNames: ReadonlySet<string>,
): Promise<JsPluginOverridesExtraction> {
	const jsPluginsByName = new Map<string, OxlintJsPlugin>();
	const overridesByPluginName = new Map<string, OxlintOverride>();

	const sortedRuleNames = Object.keys(fileRules).sort((a, b) => a.localeCompare(b));
	for (const rawRuleName of sortedRuleNames) {
		if (matchedSourceRuleNames.has(rawRuleName)) continue;

		const value = fileRules[rawRuleName];
		const normalizedRuleName = normalizeJsPluginRuleName(rawRuleName);
		const parsed = parsePluginRuleName(normalizedRuleName);
		if (!parsed) continue;

		const jsPlugin = getAliasedJsPlugin(parsed.namespace);
		if (!jsPlugin) continue;

		// Skip rules that are not present in the referenced JS plugin package.
		const jsPluginRuleNames = await getJsPluginRuleNames(jsPlugin.specifier);
		if (!jsPluginRuleNames?.has(parsed.localRuleName)) continue;

		jsPluginsByName.set(jsPlugin.name, jsPlugin);

		const override = overridesByPluginName.get(jsPlugin.name) ?? {
			files: getJsPluginFiles(parsed.namespace),
			rules: {},
		};

		// Prefix/alias the namespace to clearly indicate JS plugin passthrough.
		const aliasedRuleName = `${jsPlugin.name}/${parsed.localRuleName}`;
		override.rules[aliasedRuleName] = value;
		overridesByPluginName.set(jsPlugin.name, override);
	}

	const jsPlugins = [...jsPluginsByName.values()].sort((a, b) => a.name.localeCompare(b.name));

	// Consolidate overrides that share the same `files` patterns.
	// This avoids emitting many overrides that differ only by rules contents.
	const overridesByFilesKey = new Map<string, OxlintOverride>();

	const stablePluginOrder = [...overridesByPluginName.keys()].sort((a, b) => a.localeCompare(b));
	for (const pluginName of stablePluginOrder) {
		const override = overridesByPluginName.get(pluginName);
		if (!override) continue;

		const filesKey = JSON.stringify([...override.files].sort((a, b) => a.localeCompare(b)));
		const existing = overridesByFilesKey.get(filesKey);
		if (!existing) {
			overridesByFilesKey.set(filesKey, {
				files: override.files,
				rules: { ...override.rules },
			});
			continue;
		}

		// Merge in stable order. Rule keys are namespaced, so collisions are unlikely;
		// if they do happen, later ones override earlier ones.
		Object.assign(existing.rules, override.rules);
	}

	const overrides = [...overridesByFilesKey.values()].sort((a, b) => {
		const aKey = a.files.join('|');
		const bKey = b.files.join('|');
		return aKey.localeCompare(bKey);
	});

	return { jsPlugins, overrides };
}

function inferPluginsFromRules(rules: RuleRecord): string[] {
	const present = new Set<string>();

	for (const ruleName of Object.keys(rules)) {
		// JS plugins are separate from oxlint-native plugins.
		if (ruleName.startsWith('@stylistic/')) continue;

		// Next.js rules are emitted as "nextjs/*"
		if (ruleName.startsWith('nextjs/')) {
			present.add('nextjs');
			continue;
		}

		const slashIndex = ruleName.indexOf('/');
		if (slashIndex === -1) continue; // core rules

		present.add(ruleName.slice(0, slashIndex));
	}

	return OXLINT_PLUGIN_ORDER.filter((plugin) => present.has(plugin));
}

async function writeJsonFile(filePath: string, value: unknown): Promise<void> {
	const json = `${JSON.stringify(value, null, 2)}\n`;
	const tmpPath = `${filePath}.tmp`;
	await fs.writeFile(tmpPath, json, 'utf8');
	await fs.rename(tmpPath, filePath);
}

async function writeTextFile(filePath: string, text: string): Promise<void> {
	const tmpPath = `${filePath}.tmp`;
	await fs.writeFile(tmpPath, text, 'utf8');
	await fs.rename(tmpPath, filePath);
}

function toOxlintModuleSource(value: unknown): string {
	return `import type { OxlintConfig } from 'oxlint';

const config = ${JSON.stringify(value, null, '\t')} satisfies OxlintConfig;

export default config;
`;
}

function toExportIdentifier(moduleName: string): string {
	const parts = moduleName.match(/[\dA-Za-z]+/g) ?? [];
	const [firstPart, ...restParts] = parts;
	if (!firstPart) {
		throw new Error(`Could not create export identifier for "${moduleName}"`);
	}

	return [
		firstPart,
		...restParts.map((part) => {
			if (part.toLowerCase() === 'jsplugins') return 'JsPlugins';
			return `${part[0]?.toUpperCase() ?? ''}${part.slice(1)}`;
		}),
	].join('');
}

async function writeOxlintIndexFile(filePath: string, moduleNames: string[]): Promise<void> {
	const usedExportNames = new Set<string>();
	const exports = moduleNames.map((moduleName) => {
		const exportName = toExportIdentifier(moduleName);
		if (usedExportNames.has(exportName)) {
			throw new Error(`Duplicate generated oxlint export identifier "${exportName}"`);
		}

		usedExportNames.add(exportName);

		return `export { default as ${exportName} } from './${moduleName}';`;
	});

	await writeTextFile(filePath, `${exports.join('\n')}\n`);
}

async function formatGeneratedOxlintModules(filePaths: string[]): Promise<void> {
	if (filePaths.length === 0) return;

	const command = process.platform === 'win32' ? 'oxfmt.cmd' : 'oxfmt';
	await execFileAsync(command, filePaths, {
		cwd: path.join(__dirname, '..'),
	});
}

const srcDir = path.join(__dirname, '..', 'src');
const ruleFiles = (await fs.readdir(srcDir))
	.filter((file) => file.endsWith('.ts') && file !== 'index.ts')
	.map((file) => path.join(srcDir, file))
	.sort((a, b) => a.localeCompare(b));

const configsDir = path.join(__dirname, '..', 'oxlint-configs');
const oxlintSrcDir = path.join(srcDir, 'oxlint');
await fs.rm(configsDir, { force: true, recursive: true });
await fs.rm(oxlintSrcDir, { force: true, recursive: true });
await fs.mkdir(configsDir, { recursive: true });
await fs.mkdir(oxlintSrcDir, { recursive: true });

const supportedRuleNamesInOrder = Object.keys(OXLINT_SUPPORTED_RULES);
const oxlintModuleNames: string[] = [];
const oxlintModuleFiles: string[] = [];

for (const file of ruleFiles) {
	const module = await import(pathToFileURL(file).href);
	const configExport = module.default;

	const fileRules = extractRulesFromConfigExport(configExport);

	const matchedSourceRuleNames = new Set<string>();
	const nativeMatchingRules: RuleRecord = {};
	for (const generatedRuleName of supportedRuleNamesInOrder) {
		const oxlintRuleName = toOxlintRuleName(generatedRuleName);
		const sourceRuleName = toSourceRuleName(oxlintRuleName);

		if (sourceRuleName in fileRules) {
			nativeMatchingRules[oxlintRuleName] = fileRules[sourceRuleName];
			matchedSourceRuleNames.add(sourceRuleName);
		}
	}

	// JS plugin rules: passthrough for rules oxlint doesn't support natively
	const { overrides: jsPluginOverrides, jsPlugins } = await getUnmatchedJsPluginOverrides(
		fileRules,
		matchedSourceRuleNames,
	);

	const overrides = jsPluginOverrides;

	const baseName = path.basename(file, '.ts');

	const plugins = inferPluginsFromRules(nativeMatchingRules);
	const env = CONFIG_ENV_BY_NAME[baseName];

	// 1) Native oxlint config (no JS plugins)
	const nativeOxlintrc = {
		...(env && { env }),
		plugins,
		rules: nativeMatchingRules,
	};

	await writeJsonFile(path.join(configsDir, `${baseName}.json`), nativeOxlintrc);
	const nativeModulePath = path.join(oxlintSrcDir, `${baseName}.ts`);
	await writeTextFile(nativeModulePath, toOxlintModuleSource(nativeOxlintrc));
	oxlintModuleNames.push(baseName);
	oxlintModuleFiles.push(nativeModulePath);

	console.log(
		`Generated ${baseName}.json with ${Object.keys(nativeMatchingRules).length} rules and ${plugins.length} plugins`,
	);

	// 2) JS plugin passthrough config (optional)
	if (jsPlugins.length > 0 || overrides.length > 0) {
		const jsPluginsOxlintrc = {
			jsPlugins,
			...(overrides.length > 0 && { overrides }),
			rules: {},
			plugins: [],
		};

		await writeJsonFile(path.join(configsDir, `${baseName}.jsplugins.json`), jsPluginsOxlintrc);
		const jsPluginsModulePath = path.join(oxlintSrcDir, `${baseName}.jsplugins.ts`);
		await writeTextFile(jsPluginsModulePath, toOxlintModuleSource(jsPluginsOxlintrc));
		oxlintModuleNames.push(`${baseName}.jsplugins`);
		oxlintModuleFiles.push(jsPluginsModulePath);

		console.log(
			`Generated ${baseName}.jsplugins.json with ${jsPlugins.length} jsPlugins and ${overrides.length} overrides`,
		);
	}
}

const oxlintIndexPath = path.join(oxlintSrcDir, 'index.ts');
await writeOxlintIndexFile(oxlintIndexPath, oxlintModuleNames);
oxlintModuleFiles.push(oxlintIndexPath);

await formatGeneratedOxlintModules(oxlintModuleFiles);
