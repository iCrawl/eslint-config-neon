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

- [`neon/common`](./src/common.js) – The neon code style guide.
- [`neon/angular`](./src/angular.js) – for usage with [Angular](https://angular.io/).
- [`neon/astro`](./src/astro.js) – for usage with [Astro](https://astro.build/).
- [`neon/browser`](./src/browser.js) – for usage with DOM and other browser APIs.
- [`neon/cypress`](./src/cypress.js) – for usage with [Cypress](https://cypress.io/).
- [`neon/edge`](./src/edge.js) – for usage with an edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.
- [`neon/jsx`](./src/jsx.js) – for usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).
- [`neon/jsx-a11y`](./src/jsx-a11y.js) – for usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
- [`neon/module`](./src/module.js) – for usage with ESM modules.
- [`neon/next`](./src/next.js) – for usage with [Next.js](https://nextjs.org/).
- [`neon/no-deprecated`](./src/no-deprecated.js) - for reporting deprecated APIs (very slow on big repos, especially monorepos).
- [`neon/node`](./src/node.js) – for usage with Node.js.
- [`neon/prettier`](./src/prettier.js) – for usage with [Prettier](https://prettier.io/).
- [`neon/react`](./src/react.js) – for usage with [React](https://reactjs.org/).
- [`neon/rxjs`](./src/rxjs.js) – for usage with [RxJS](https://rxjs.dev/).
- [`neon/rxjs-angular`](./src/rxjs-angular.js) – for usage [RxJS](https://rxjs.dev/) and [Angular](https://angular.io/).
- [`neon/svelte`](./src/svelte.js) – for usage with [Svelte](https://svelte.dev/).
- [`neon/svelte-typescript`](./src/svelte-typescript.js) – for usage with [Svelte](https://svelte.dev/) and [TypeScript](http://typescriptlang.org/).
- [`neon/typescript`](./src/typescript.js) – for usage with [TypeScript](http://typescriptlang.org/).
- [`neon/vue`](./src/vue.js) – for usage with [Vue](https://vuejs.org/).
- [`neon/vue-typescript`](./src/vue-typescript.js) – for usage with [Vue](https://vuejs.org/) and [TypeScript](http://typescriptlang.org/).

### Configuration

```json
{
	"root": true,
	"extends": ["neon/common", "neon/node", "neon/typescript", "neon/prettier"],
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"]
}
```

<details>
<summary>Node.js</summary>
<br>

```json
{
	"root": true,
	"root": true,
	"extends": ["neon/common", "neon/node", "neon/typescript", "neon/prettier"],
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"]
}
```

<br>
</details>

<details>
<summary>React / Next</summary>
<br>

React:

```json
{
	"root": true,
	"extends": [
		"neon/common",
		"neon/browser",
		"neon/node",
		"neon/typescript",
		"neon/react",
		"neon/next",
		"neon/edge",
		"neon/prettier"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"],
	"rules": {
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".tsx"] }]
	}
}
```

Next:

```json
{
	"root": true,
	"extends": [
		"neon/common",
		"neon/browser",
		"neon/node",
		"neon/typescript",
		"neon/react",
		"neon/next",
		"neon/edge",
		"neon/prettier"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"],
	"rules": {
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".tsx"] }]
	}
}
```

<br>
</details>

<details>
<summary>Astro</summary>
<br>

```json
{
	"root": true,
	"extends": [
		"neon/common",
		"neon/browser",
		"neon/node",
		"neon/typescript",
		"neon/react",
		"neon/astro",
		"neon/prettier"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"],
	"rules": {
		"react/jsx-filename-extension": [1, { "extensions": [".tsx", ".astro"] }]
	}
}
```

<br>
</details>

<details>
<summary>Vue 2/3 / Nuxt</summary>
<br>

```json
{
	"root": true,
	"extends": [
		"neon/common",
		"neon/browser",
		"neon/node",
		"neon/typescript",
		"neon/vue",
		"neon/vue-typescript",
		"neon/prettier"
	],
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["**/dist/*"]
}
```

<br>
</details>

<details>
<summary>Angular / NX</summary>
<br>

```json
{
	"root": true,
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"ignorePatterns": ["!**/*"],
	"overrides": [
		{
			"files": ["*.ts"],
			"extends": [
				"neon/common",
				"neon/browser",
				"neon/node",
				"neon/typescript",
				"neon/angular",
				"neon/rxjs",
				"neon/rxjs-angular",
				"neon/prettier"
			]
		},
		{
			"files": ["*.html"],
			"extends": ["neon/angular"]
		}
	]
}
```

<br>
</details>

### Usage with Prettier

Prettier and neon are already compatible. Just add it as the last config in your `extends` configuration, e.g.

```json
{
	"extends": ["neon/common", "neon/node", "neon/typescript", "neon/prettier"]
}
```

This configuration disables all neon rules that conflict with Prettier.
