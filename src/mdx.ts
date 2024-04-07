import type { TSESLint } from "@typescript-eslint/utils";
import mdxParser from "eslint-mdx";
import mdxPlugin from "eslint-plugin-mdx";

const plugins: TSESLint.FlatConfig.Plugins = {
	// @ts-expect-error eslint-plugin-mdx needs to be updated to v9
	// TODO [V9 UPDATE]
	mdx: mdxPlugin,
};

const rules: TSESLint.FlatConfig.Rules = {
	"mdx/remark": 2,
};

const settings: TSESLint.FlatConfig.Settings = {
	"mdx/code-blocks": true,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parser: mdxParser,
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

export default config;
