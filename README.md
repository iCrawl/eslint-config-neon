# Neon ESLint Config

<div align="center">
 <br />
 <p>
  <a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/v/eslint-config-neon.svg?maxAge=3600" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-neon"><img src="https://img.shields.io/npm/dt/eslint-config-neon.svg?maxAge=3600" alt="npm downloads" /></a>
 </p>
</div>

## Installation

neon comes as a complete package, none of the configs require any additional dependecies.

```sh-session
npm install eslint eslint-config-neon
yarn add eslint eslint-config-neon
pnpm add eslint eslint-config-neon
```

## Usage

This package includes the following configurations:

- [`eslint-config-neon/common`](./src/common.ts) – The neon code style guide.
- [`eslint-config-neon/angular`](./src/angular.ts) – for usage with [Angular](https://angular.io/).
- [`eslint-config-neon/astro`](./src/astro.ts) – for usage with [Astro](https://astro.build/).
- [`eslint-config-neon/browser`](./src/browser.ts) – for usage with DOM and other browser APIs.
- [`eslint-config-neon/cypress`](./src/cypress.ts) – for usage with [Cypress](https://cypress.io/).
- [`eslint-config-neon/edge`](./src/edge.ts) – for usage with an edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.
- [`eslint-config-neon/jsx`](./src/jsx.ts) – for usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).
- [`eslint-config-neon/jsx-a11y`](./src/jsx-a11y.ts) – for usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
- [`eslint-config-neon/module`](./src/module.ts) – for usage with ESM modules.
- [`eslint-config-neon/next`](./src/next.ts) – for usage with [Next.js](https://nextjs.org/).
- [`eslint-config-neon/no-deprecated`](./src/no-deprecated.ts) - for reporting deprecated APIs (very slow on big repos, especially monorepos).
- [`eslint-config-neon/node`](./src/node.ts) – for usage with Node.js.
- [`eslint-config-neon/prettier`](./src/prettier.ts) – for usage with [Prettier](https://prettier.io/).
- [`eslint-config-neon/react`](./src/react.ts) – for usage with [React](https://reactjs.org/).
- [`eslint-config-neon/rxjs`](./src/rxjs.ts) – for usage with [RxJS](https://rxjs.dev/).
- [`eslint-config-neon/rxjs-angular`](./src/rxjs-angular.ts) – for usage [RxJS](https://rxjs.dev/) and [Angular](https://angular.io/).
- [`eslint-config-neon/svelte`](./src/svelte.ts) – for usage with [Svelte](https://svelte.dev/).
- [`eslint-config-neon/svelte-typescript`](./src/svelte-typescript.ts) – for usage with [Svelte](https://svelte.dev/) and [TypeScript](http://typescriptlang.org/).
- [`eslint-config-neon/typescript`](./src/typescript.ts) – for usage with [TypeScript](http://typescriptlang.org/).
- [`eslint-config-neon/vue`](./src/vue.ts) – for usage with [Vue](https://vuejs.org/).
- [`eslint-config-neon/vue-typescript`](./src/vue-typescript.ts) – for usage with [Vue](https://vuejs.org/) and [TypeScript](http://typescriptlang.org/).

### Configuration

It is important to note that this package only exports [ESLint Flat Config][]! This means that you _have_ to use `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs` to use this package. See the ESLint documentation on flat config for more information.

```js
import { common, typescript, prettier } from "eslint-config-neon";

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
import { common, node, typescript, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...typescript,
	...node,
	...prettier,
	{
		languageOptions: {
			project: "./tsconfig.json",
		},
	},
];
```

<br>
</details>

<details>
<summary>React / Next</summary>
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
import { common, browser, node, typescript, react, next, edge, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	...common,
	...browser,
	...node,
	...typescript,
	...react,
	...next,
	...edge,
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
			"react/react-in-jsx-scope": 0,
			"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		},
	},
];
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
import { common, browser, node, typescript, angular, rxjs, rxjsangular, prettier } from "eslint-config-neon";

export default [
	{
		ignore: ["**/dist/*"],
	},
	{
		files: ["*.ts"],
		...common,
		...browser,
		...node,
		...typescript,
		...angular,
		...rxjs,
		...rxjsangular,
		...prettier,
	},
	{
		files: ["*.html"],
		...(await import("eslint-config-neon/angular")),
	},
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

### Usage with Prettier

Prettier and neon are already compatible. Just add it as the last config in your `extends` configuration, e.g.

```js
import { prettier } from "eslint-config-neon";

export default [...prettier];
```

This configuration disables all neon rules that conflict with Prettier.

[ESLint Flat Config]: https://eslint.org/blog/2022/08/new-config-system-part-2/
