const mdxPlugin = require("eslint-plugin-mdx");

const plugins = {
	mdx: mdxPlugin,
};

const rules = {
	"mdx/remark": 2,
};

const settings = {
	"mdx/code-blocks": true,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		languageOptions: {
			parser: require("eslint-mdx"),
			parserOptions: {
				extensions: [".mdx", ".md"],
			},
		},
		processor: "mdx/remark",
		plugins,
		rules,
		settings,
	},
	{
		languageOptions: {
			parserOptions: {
				...mdxPlugin.configs["code-blocks"].parserOptions,
			},
		},
		plugins,
		rules: {
			...mdxPlugin.configs["code-blocks"].rules,
		},
	},
];
