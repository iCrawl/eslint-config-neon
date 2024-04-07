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

- [`eslint-config-neon/common`](./src/common.js) – The neon code style guide.
- [`eslint-config-neon/angular`](./src/angular.js) – for usage with [Angular](https://angular.io/).
- [`eslint-config-neon/astro`](./src/astro.js) – for usage with [Astro](https://astro.build/).
- [`eslint-config-neon/browser`](./src/browser.js) – for usage with DOM and other browser APIs.
- [`eslint-config-neon/cypress`](./src/cypress.js) – for usage with [Cypress](https://cypress.io/).
- [`eslint-config-neon/edge`](./src/edge.js) – for usage with an edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.
- [`eslint-config-neon/jsx`](./src/jsx.js) – for usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).
- [`eslint-config-neon/jsx-a11y`](./src/jsx-a11y.js) – for usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
- [`eslint-config-neon/module`](./src/module.js) – for usage with ESM modules.
- [`eslint-config-neon/next`](./src/next.js) – for usage with [Next.js](https://nextjs.org/).
- [`eslint-config-neon/no-deprecated`](./src/no-deprecated.js) - for reporting deprecated APIs (very slow on big repos, especially monorepos).
- [`eslint-config-neon/node`](./src/node.js) – for usage with Node.js.
- [`eslint-config-neon/prettier`](./src/prettier.js) – for usage with [Prettier](https://prettier.io/).
- [`eslint-config-neon/react`](./src/react.js) – for usage with [React](https://reactjs.org/).
- [`eslint-config-neon/rxjs`](./src/rxjs.js) – for usage with [RxJS](https://rxjs.dev/).
- [`eslint-config-neon/rxjs-angular`](./src/rxjs-angular.js) – for usage [RxJS](https://rxjs.dev/) and [Angular](https://angular.io/).
- [`eslint-config-neon/svelte`](./src/svelte.js) – for usage with [Svelte](https://svelte.dev/).
- [`eslint-config-neon/svelte-typescript`](./src/svelte-typescript.js) – for usage with [Svelte](https://svelte.dev/) and [TypeScript](http://typescriptlang.org/).
- [`eslint-config-neon/typescript`](./src/typescript.js) – for usage with [TypeScript](http://typescriptlang.org/).
- [`eslint-config-neon/vue`](./src/vue.js) – for usage with [Vue](https://vuejs.org/).
- [`eslint-config-neon/vue-typescript`](./src/vue-typescript.js) – for usage with [Vue](https://vuejs.org/) and [TypeScript](http://typescriptlang.org/).

### Configuration

It is important to note that this package only exports [ESLint Flat Config][]! This means that you _have_ to use `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs` to use this package. See the ESLint documentation on flat config for more information.

```js
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/browser")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/react")),
	...(await import("eslint-config-neon/edge")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/browser")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/react")),
	...(await import("eslint-config-neon/next")),
	...(await import("eslint-config-neon/edge")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/browser")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/react")),
	...(await import("eslint-config-neon/astro")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/browser")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/vue")),
	...(await import("eslint-config-neon/vue-typescript")),
	...(await import("eslint-config-neon/prettier")),
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
export default [
	{
		ignore: ["**/dist/*"],
	},
	{
		files: ["*.ts"],
		...(await import("eslint-config-neon/common")),
		...(await import("eslint-config-neon/browser")),
		...(await import("eslint-config-neon/node")),
		...(await import("eslint-config-neon/typescript")),
		...(await import("eslint-config-neon/angular")),
		...(await import("eslint-config-neon/rxjs")),
		...(await import("eslint-config-neon/rxjs-angular")),
		...(await import("eslint-config-neon/prettier")),
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
export default [
	...(await import("eslint-config-neon/common")),
	...(await import("eslint-config-neon/node")),
	...(await import("eslint-config-neon/typescript")),
	...(await import("eslint-config-neon/prettier")),
];
```

This configuration disables all neon rules that conflict with Prettier.

[ESLint Flat Config]: https://eslint.org/blog/2022/08/new-config-system-part-2/
