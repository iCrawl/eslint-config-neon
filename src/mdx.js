const mdxPlugin = require("eslint-plugin-mdx");

const plugins = (old = true) =>
	old
		? ["mdx"]
		: {
				mdx: mdxPlugin,
			};

const parser = (old = true) => (old ? "eslint-mdx" : require("eslint-mdx"));

const rules = {
	"mdx/remark": 2,
};

const settings = {
	"mdx/code-blocks": true,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		overrides: [
			{
				files: ["**/*.{md,mdx}"],
				plugins: plugins(),
				parser: parser(),
				parserOptions: {
					extensions: [".mdx", ".md"],
				},
				processor: "mdx/remark",
				rules,
				settings,
			},
			{
				files: ["**/*.{md,mdx}/**"],
				extends: ["plugin:mdx/code-blocks"],
			},
		],
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				parser: parser(false),
				parserOptions: {
					extensions: [".mdx", ".md"],
				},
			},
			processor: "mdx/remark",
			plugins: plugins(false),
			rules,
			settings,
		},
		{
			languageOptions: {
				parserOptions: {
					...mdxPlugin.configs["code-blocks"].parserOptions,
				},
			},
			plugins: plugins(false),
			rules: {
				...mdxPlugin.configs["code-blocks"].rules,
			},
		},
	],
};
