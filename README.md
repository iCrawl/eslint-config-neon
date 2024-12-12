# Neon ESLint Config

Complete ESLint Flat Config Package

<p>
	<a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/v/eslint-config-neon.svg?maxAge=3600" alt="npm version" /></a>
	<a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/dt/eslint-config-neon.svg?maxAge=3600" alt="npm downloads" /></a>
</p>


## Installation

```sh
# NPM
npm install eslint eslint-config-neon -D

# Yarn
yarn add eslint eslint-config-neon -D

# PNPM
pnpm add eslint eslint-config-neon -D
```

## Configurations

Package includes the following configurations:

| Configuration | Description |
|---------------|-------------|
| [`eslint-config-neon/common`](./src/common.ts) | The neon code style guide. |
|[`eslint-config-neon/angular`](./src/angular.ts) | For usage with [Angular](https://angular.io/).|
|[`eslint-config-neon/astro`](./src/astro.ts) | For usage with [Astro](https://astro.build/).|
|[`eslint-config-neon/browser`](./src/browser.ts) | For usage with DOM and other browser APIs.|
|[`eslint-config-neon/cypress`](./src/cypress.ts) | For usage with [Cypress](https://cypress.io/).|
|[`eslint-config-neon/edge`](./src/edge.ts) | For usage with an edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.|
|[`eslint-config-neon/jsx`](./src/jsx.ts) | For usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).|
|[`eslint-config-neon/jsx-a11y`](./src/jsx-a11y.ts) | For usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).|
|[`eslint-config-neon/module`](./src/module.ts) | For usage with ESM modules.|
|[`eslint-config-neon/next`](./src/next.ts) | For usage with [Next.js](https://nextjs.org/).|
|[`eslint-config-neon/no-deprecated`](./src/no-deprecated.ts) | For reporting deprecated APIs (very slow on big repos, especially monorepos).|
|[`eslint-config-neon/node`](./src/node.ts) | For usage with Node.js.|
|[`eslint-config-neon/prettier`](./src/prettier.ts) | For usage with [Prettier](https://prettier.io/).|
|[`eslint-config-neon/react`](./src/react.ts) | For usage with [React](https://reactjs.org/).|
|[`eslint-config-neon/rxjs`](./src/rxjs.ts) | For usage with [RxJS](https://rxjs.dev/).|
|[`eslint-config-neon/rxjs-angular`](./src/rxjs-angular.ts) | For usage [RxJS](https://rxjs.dev/) and [Angular](https://angular.io/).|
|[`eslint-config-neon/svelte`](./src/svelte.ts) | For usage with [Svelte](https://svelte.dev/).|
|[`eslint-config-neon/svelte-typescript`](./src/svelte-typescript.ts) | For usage with [Svelte](https://svelte.dev/) and [TypeScript](http://typescriptlang.org/).|
|[`eslint-config-neon/typescript`](./src/typescript.ts) | For usage with [TypeScript](http://typescriptlang.org/).|
|[`eslint-config-neon/vue`](./src/vue.ts) | For usage with [Vue](https://vuejs.org/).|
|[`eslint-config-neon/vue-typescript`](./src/vue-typescript.ts) | For usage with [Vue](https://vuejs.org/) and [TypeScript](http://typescriptlang.org/).|

## Notes

### Flat Config only

It is important to note that this package only exports [ESLint Flat Config][]! This means that you _have_ to use at least ESLint 9 and `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs` to use this package. See the ESLint documentation on flat config for more information.

### Importing

There are two ways to import the configs:

```ts
import common from "eslint-config-neon/common";
```

or

```ts
import { common } from "eslint-config-neon";
```

### Merging Configs

In the examples below you will often see `lodash.merge` being used. This is of vital importance as objects often have to be deeply merged when using ESLint Flat Config. If you don't merge the objects, you will overwrite the previous object with the new one, and your config will be invalid.

This package ships ships a transient dependency to `lodash.merge` and `@types/lodash.merge` to make sure it is available in your project.

### Reducing downloaded bundle size

Because this eslint config has a lot of transient dependencies to offer different eslint configs the bundle size of this package will be quite large. To alleviate this somewhat you can configure your package manager to skip the dependencies that you do not need through the `resolutions` (yarn) or `overrides` (npm / pnpm) fields.

Following is an example of excluding `eslint-plugin-vue`, which you can safely do if you're not using `eslint-config-neon/vue` nor `eslint-config-neon/vue-typescript`.

**Yarn**

```json
{
	"resolutions": {
		"eslint-plugin-vue": "npm:@favware/skip-dependency@latest"
	}
}
```

**Pnpm** and **npm**

```json
{
	"overrides": {
		"eslint-plugin-vue": "npm:@favware/skip-dependency@latest"
	}
}
```

## Usage

```js
import { common, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...typescript,
	...prettier,
	{
		languageOptions: {
			project: "./tsconfig.json",
		},
	},
];
```

<details>
<summary>Node.js</summary>
<br>

```js
import { common, node, prettier } from "eslint-config-neon";
import merge from "lodash.merge";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...[...common, ...node, ...prettier].map((config) =>
		merge(config, {
			files: ["src/**/*.ts"],
			languageOptions: {
				parserOptions: {
					project: "tsconfig.eslint.json",
				},
			},
		}),
	),
];

export default config;
```

<br>
</details>

<details>
<summary>React / NextJS</summary>
<br>

React:

```js
import { common, browser, node, typescript, react, edge, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...browser,
	...node,
	...typescript,
	...react,
	...edge,
	...prettier,
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			"react/react-in-jsx-scope": 0,
			"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		},
	},
];
```

Next:

```js
import { browser, common, edge, next, node, prettier, react, typescript } from "eslint-config-neon";

import merge from "lodash.merge";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...[
		...common, 
		...browser, 
		...node, 
		...typescript, 
		...react, 
		...next, 
		...edge, 
		...prettier
	].map((config) =>
		merge(config, {
			files: ["src/**/*.ts"],
			settings: {
				react: {
					version: "detect",
				},
			},
			languageOptions: {
				parserOptions: {
					project: "tsconfig.json",
				},
			},
		}),
	),
];

export default config;
```

<br>
</details>

<details>
<summary>Astro</summary>
<br>

```js
import { common, browser, node, typescript, react, astro, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...browser,
	...node,
	...typescript,
	...react,
	...astro,
	...prettier,
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			project: "./tsconfig.json",
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		},
	},
];
```

<br>
</details>

<details>
<summary>Vue 2/3 / Nuxt</summary>
<br>

```js
import { common, browser, node, typescript, vue, vuetypescript, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...browser,
	...node,
	...typescript,
	...vue,
	...vuetypescript,
	...prettier,
	{
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	},
];
```

<br>
</details>

<details>
<summary>Angular / NX</summary>
<br>

```js
import { angular, browser, common, node, prettier, rxjs, rxjsangular, typescript } from "eslint-config-neon";

import merge from "lodash.merge";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...[
		...common, 
		...browser, 
		...node, 
		...typescript, 
		...angular, 
		...rxjs, 
		...rxjsangular, 
		...prettier
	].map((config) =>
		merge(config, {
			files: ["src/**/*.ts"],
			languageOptions: {
				parserOptions: {
					project: "tsconfig.json",
				},
			},
		}),
	),
	...angular.map((config) =>
		merge(config, {
			files: ["src/**/*.html"],
			languageOptions: {
				parserOptions: {
					project: "tsconfig.json",
				},
			},
		}),
	),
];

export default config;
```

<br>
</details>

### Usage with Prettier

Prettier and neon are already compatible. Just add it as the last config in your `extends` configuration, e.g.

```js
import prettier from "eslint-config-neon/prettier";

export default [...prettier];
```

This configuration disables all neon rules that conflict with Prettier.

[ESLint Flat Config]: https://eslint.org/blog/2022/08/new-config-system-part-2/
