// eslint-disable-next-line id-length
const n = require("eslint-plugin-n");

const plugins = (old = true) =>
	old
		? ["n"]
		: {
				// eslint-disable-next-line id-length
				n,
			};

const rules = {
	"no-restricted-globals": [
		"error",
		{
			name: "Buffer",
			message: "Import Buffer from `node:buffer` instead",
		},
		{
			name: "process",
			message: "Import process from `node:process` instead",
		},
		{
			name: "setTimeout",
			message: "Import setTimeout from `node:timers` instead",
		},
		{
			name: "setInterval",
			message: "Import setInterval from `node:timers` instead",
		},
		{
			name: "setImmediate",
			message: "Import setImmediate from `node:timers` instead",
		},
		{
			name: "clearTimeout",
			message: "Import clearTimeout from `node:timers` instead",
		},
		{
			name: "clearInterval",
			message: "Import clearInterval from `node:timers` instead",
		},
		{
			name: "clearImmediate",
			message: "Import clearImmediate from `node:timers` instead",
		},
	],
	"import/no-unresolved": 0,
	"n/callback-return": 2,
	"n/exports-style": 0,
	"n/file-extension-in-import": 0,
	"n/global-require": 0,
	"n/handle-callback-err": 2,
	"n/no-callback-literal": 2,
	"n/no-deprecated-api": 2,
	"n/no-exports-assign": 2,
	"n/no-extraneous-import": 0,
	"n/no-extraneous-require": 0,
	"n/no-missing-import": 0,
	"n/no-missing-require": 0,
	"n/no-mixed-requires": 0,
	"n/no-new-require": 2,
	"n/no-path-concat": 2,
	"n/no-process-env": 0,
	"n/no-process-exit": 0,
	"n/no-restricted-import": 0,
	"n/no-restricted-require": 0,
	"n/no-sync": [
		2,
		{
			allowAtRootLevel: true,
		},
	],
	"n/no-unpublished-bin": 2,
	"n/no-unpublished-import": 0,
	"n/no-unpublished-require": 0,
	"n/no-unsupported-features/es-builtins": 0,
	"n/no-unsupported-features/es-syntax": 0,
	"n/no-unsupported-features/node-builtins": 0,
	"n/prefer-global/buffer": [2, "never"],
	"n/prefer-global/console": [2, "always"],
	"n/prefer-global/process": [2, "never"],
	"n/prefer-global/text-decoder": [2, "never"],
	"n/prefer-global/text-encoder": [2, "never"],
	"n/prefer-global/url": [2, "never"],
	"n/prefer-global/url-search-params": [2, "never"],
	"n/prefer-promises/dns": 0,
	"n/prefer-promises/fs": 0,
	"n/process-exit-as-throw": 2,
	"n/shebang": [
		2,
		{
			convertPath: {
				"src/**/*.js": ["^src/(.+?)\\.js$", "dist/$1.js"],
			},
		},
	],
	"unicorn/prefer-node-protocol": 2,
	"unicorn/require-post-message-target-origin": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		env: {
			node: true,
		},
		parserOptions: {
			ecmaFeatures: {
				globalReturn: true,
			},
		},
		plugins: plugins(),
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				globals: n.configs["recommended-module"].globals,
				parserOptions: {
					ecmaFeatures: {
						globalReturn: true,
					},
				},
			},
			plugins: plugins(false),
			rules,
		},
	],
};
