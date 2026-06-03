# Neon ESLint Config

<div align="center">
 <br />
 <p>
  <a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/v/eslint-config-neon.svg?maxAge=3600" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/dt/eslint-config-neon.svg?maxAge=3600" alt="npm downloads" /></a>
 </p>
</div>

Shared lint configuration for ESLint and Oxlint. Neon publishes composable ESLint Flat Config arrays, importable Oxlint Config Modules, and optional Oxlint JS Plugin Configs for rules that Oxlint cannot run natively yet.

## Installation

Install `eslint-config-neon` with the lint runner you use. Framework and ESLint plugin packages used by the configs are bundled as dependencies of this package.

```sh-session
npm install --save-dev eslint eslint-config-neon
yarn add --dev eslint eslint-config-neon
pnpm add --save-dev eslint eslint-config-neon
```

```sh-session
npm install --save-dev oxlint eslint-config-neon
yarn add --dev oxlint eslint-config-neon
pnpm add --save-dev oxlint eslint-config-neon
```

Install both runners if your project uses both ESLint and Oxlint.

## ESLint Usage

Neon's ESLint configs are [ESLint Flat Config][] arrays. Use `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs`; legacy `.eslintrc` config is not supported.

```js
import common from 'eslint-config-neon/common';
import node from 'eslint-config-neon/node';
import prettier from 'eslint-config-neon/prettier';
import typescript from 'eslint-config-neon/typescript';

export default [
	{
		ignores: ['dist/**', 'coverage/**'],
	},
	...common,
	...node,
	...typescript,
	...prettier,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
];
```

You can also import named exports from the package root:

```js
import { common, node, prettier, typescript } from 'eslint-config-neon';
```

Prefer subpath imports when the config name contains a hyphen, because the root export uses JavaScript identifier aliases such as `jsxa11y`, `rxjsangular`, `sveltetypescript`, and `vuetypescript`.

## Oxlint Usage

Neon's Oxlint configs are importable modules for `oxlint.config.ts`.

```ts
import { defineConfig } from 'oxlint';

import common from 'eslint-config-neon/oxlint/common';
import node from 'eslint-config-neon/oxlint/node';
import prettier from 'eslint-config-neon/oxlint/prettier';
import typescript from 'eslint-config-neon/oxlint/typescript';

export default defineConfig({
	extends: [common, node, typescript, prettier],
	ignorePatterns: ['dist/**', 'coverage/**'],
	options: {
		typeAware: true,
		typeCheck: true,
	},
});
```

You can also import named Oxlint Config Modules from `eslint-config-neon/oxlint`:

```ts
import { common, node, prettier, typescript } from 'eslint-config-neon/oxlint';
```

### JS Plugin Configs

Some ESLint plugin rules do not have native Oxlint support. For those rules, Neon publishes optional JS Plugin Configs with a `.jsplugins` suffix.

```ts
import { defineConfig } from 'oxlint';

import common from 'eslint-config-neon/oxlint/common';
import commonJsPlugins from 'eslint-config-neon/oxlint/common.jsplugins';
import typescript from 'eslint-config-neon/oxlint/typescript';
import typescriptJsPlugins from 'eslint-config-neon/oxlint/typescript.jsplugins';

export default defineConfig({
	extends: [common, commonJsPlugins, typescript, typescriptJsPlugins],
});
```

Use these only when you want the extra ESLint-plugin-backed rules and accept Oxlint's JavaScript plugin bridge limitations. Native Oxlint Config Modules are the default path.

Raw generated JSON artifacts are still published behind the `.json` suffix, for example `eslint-config-neon/oxlint/common.json` and `eslint-config-neon/oxlint/common.jsplugins.json`.

## Available Configs

| Config                   | ESLint import                          | Oxlint import                                 | Oxlint JS Plugin Config                             |
| ------------------------ | -------------------------------------- | --------------------------------------------- | --------------------------------------------------- |
| Common style guide       | `eslint-config-neon/common`            | `eslint-config-neon/oxlint/common`            | `eslint-config-neon/oxlint/common.jsplugins`        |
| Angular                  | `eslint-config-neon/angular`           | `eslint-config-neon/oxlint/angular`           | `eslint-config-neon/oxlint/angular.jsplugins`       |
| Astro                    | `eslint-config-neon/astro`             | `eslint-config-neon/oxlint/astro`             | -                                                   |
| Browser APIs             | `eslint-config-neon/browser`           | `eslint-config-neon/oxlint/browser`           | -                                                   |
| Cypress                  | `eslint-config-neon/cypress`           | `eslint-config-neon/oxlint/cypress`           | -                                                   |
| Edge runtime             | `eslint-config-neon/edge`              | `eslint-config-neon/oxlint/edge`              | -                                                   |
| JSX                      | `eslint-config-neon/jsx`               | `eslint-config-neon/oxlint/jsx`               | `eslint-config-neon/oxlint/jsx.jsplugins`           |
| JSX accessibility        | `eslint-config-neon/jsx-a11y`          | `eslint-config-neon/oxlint/jsx-a11y`          | -                                                   |
| MDX                      | `eslint-config-neon/mdx`               | `eslint-config-neon/oxlint/mdx`               | -                                                   |
| ESM modules              | `eslint-config-neon/module`            | `eslint-config-neon/oxlint/module`            | -                                                   |
| Next.js                  | `eslint-config-neon/next`              | `eslint-config-neon/oxlint/next`              | -                                                   |
| Deprecated API reporting | `eslint-config-neon/no-deprecated`     | `eslint-config-neon/oxlint/no-deprecated`     | `eslint-config-neon/oxlint/no-deprecated.jsplugins` |
| Node.js                  | `eslint-config-neon/node`              | `eslint-config-neon/oxlint/node`              | `eslint-config-neon/oxlint/node.jsplugins`          |
| Prettier compatibility   | `eslint-config-neon/prettier`          | `eslint-config-neon/oxlint/prettier`          | `eslint-config-neon/oxlint/prettier.jsplugins`      |
| React                    | `eslint-config-neon/react`             | `eslint-config-neon/oxlint/react`             | `eslint-config-neon/oxlint/react.jsplugins`         |
| RxJS                     | `eslint-config-neon/rxjs`              | `eslint-config-neon/oxlint/rxjs`              | `eslint-config-neon/oxlint/rxjs.jsplugins`          |
| RxJS Angular             | `eslint-config-neon/rxjs-angular`      | `eslint-config-neon/oxlint/rxjs-angular`      | `eslint-config-neon/oxlint/rxjs-angular.jsplugins`  |
| Svelte                   | `eslint-config-neon/svelte`            | `eslint-config-neon/oxlint/svelte`            | `eslint-config-neon/oxlint/svelte.jsplugins`        |
| Svelte TypeScript        | `eslint-config-neon/svelte-typescript` | `eslint-config-neon/oxlint/svelte-typescript` | -                                                   |
| TypeScript               | `eslint-config-neon/typescript`        | `eslint-config-neon/oxlint/typescript`        | `eslint-config-neon/oxlint/typescript.jsplugins`    |
| Vue                      | `eslint-config-neon/vue`               | `eslint-config-neon/oxlint/vue`               | `eslint-config-neon/oxlint/vue.jsplugins`           |
| Vue TypeScript           | `eslint-config-neon/vue-typescript`    | `eslint-config-neon/oxlint/vue-typescript`    | -                                                   |

## Composition Recipes

Compose the configs that match your runtime, language, framework, and formatter. Put `prettier` last when you use Prettier.

| Project type       | Suggested configs                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Node TypeScript    | `common`, `node`, `typescript`, `prettier`                                               |
| Browser TypeScript | `common`, `browser`, `typescript`, `prettier`                                            |
| React              | `common`, `browser`, `typescript`, `react`, `prettier`                                   |
| Next.js            | `common`, `browser`, `node`, `typescript`, `react`, `next`, `prettier`                   |
| Astro              | `common`, `browser`, `node`, `typescript`, `react`, `astro`, `prettier`                  |
| Vue TypeScript     | `common`, `browser`, `node`, `typescript`, `vue`, `vue-typescript`, `prettier`           |
| Angular            | `common`, `browser`, `node`, `typescript`, `angular`, `rxjs`, `rxjs-angular`, `prettier` |

For ESLint, each config is an array and should be spread into your exported Flat Config. For Oxlint, each config is an object and should be added to `extends`.

## Notes

### Merging ESLint Config Objects

When you need to apply the same nested option to every ESLint config object, deep merge the objects instead of replacing them. This is most common when scoping a composed config to specific files or adding `languageOptions.parserOptions.project`.

```js
import merge from 'lodash.merge';

import common from 'eslint-config-neon/common';
import prettier from 'eslint-config-neon/prettier';
import typescript from 'eslint-config-neon/typescript';

export default [
	...[...common, ...typescript, ...prettier].map((config) =>
		merge(config, {
			files: ['src/**/*.ts'],
			languageOptions: {
				parserOptions: {
					project: './tsconfig.eslint.json',
				},
			},
		}),
	),
];
```

`lodash.merge` is included as a dependency of this package.

### Reducing Downloaded Dependencies

This package depends on the plugins needed by all supported configs. If you never use a particular config, you can ask your package manager to skip that dependency.

For example, projects that do not use `eslint-config-neon/vue` or `eslint-config-neon/vue-typescript` can skip `eslint-plugin-vue`:

```json
{
	"overrides": {
		"eslint-plugin-vue": "npm:@favware/skip-dependency@latest"
	}
}
```

Use `resolutions` instead of `overrides` when using Yarn.

[ESLint Flat Config]: https://eslint.org/docs/latest/use/configure/configuration-files
