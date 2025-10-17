import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
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
} from "./generated-oxlint-rules";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const generatedRules = {
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
};

const configPlugins: Record<string, string[]> = {
	common: ["import", "jsdoc", "unicorn", "promise"],
	astro: ["react"],
	browser: ["unicorn"],
	cypress: ["import"],
	"jsx-a11y": ["jsx-a11y"],
	jsx: ["react", "unicorn"],
	next: ["nextjs"],
	node: ["node", "unicorn"],
	prettier: ["unicorn"],
	react: ["react", "unicorn"],
	svelte: ["import"],
	typescript: ["import", "jsdoc", "typescript"],
};

const configEnv: Record<string, Record<string, boolean>> = {
	browser: { browser: true },
	node: { node: true },
};

const srcDir = path.join(__dirname, "..", "src");
const ruleFiles = (await fs.readdir(srcDir))
	.filter((file) => file.endsWith(".ts"))
	.map((file) => path.join(srcDir, file));

const configsDir = path.join(__dirname, "..", "oxlint-configs");
await fs.mkdir(configsDir, { recursive: true });

function mapRuleName(rule: string): string {
	if (rule.startsWith("node/")) {
		return rule.replace("node/", "n/");
	}

	return rule;
}

for (const file of ruleFiles) {
	const module = await import(pathToFileURL(file).href);
	const config = module.default;

	const fileRules: Record<string, number> = {};

	if (Array.isArray(config)) {
		for (const item of config) {
			if (item?.rules) {
				Object.assign(fileRules, item.rules);
			}
		}
	} else if (typeof config === "object" && config !== null) {
		if ("files" in config) {
			if (config.rules) {
				Object.assign(fileRules, config.rules);
			}
		} else {
			Object.assign(fileRules, config);
		}
	}

	const matchingRules: Record<string, number> = {};
	for (const rule of Object.keys(generatedRules)) {
		const srcRule = mapRuleName(rule);
		if (srcRule in fileRules) {
			matchingRules[rule] = fileRules[srcRule]!;
		}
	}

	if (Object.keys(matchingRules).length > 0) {
		const baseName = path.basename(file, ".ts");

		// Get plugins and env for this config
		const plugins = configPlugins[baseName] ?? [];
		const env = configEnv[baseName];

		const oxlintrc = {
			...(env && { env }),
			plugins,
			rules: matchingRules,
		};

		await fs.writeFile(path.join(configsDir, `${baseName}.oxlintrc.json`), JSON.stringify(oxlintrc, null, 2));

		console.log(
			`Generated ${baseName}.oxlintrc.json with ${Object.keys(matchingRules).length} rules and ${plugins.length} plugins`,
		);
	}
}
