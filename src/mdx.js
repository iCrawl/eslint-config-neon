module.exports = {
	overrides: [
		{
			files: ["*.{md,mdx}"],
			plugins: ["mdx"],
			parser: "eslint-mdx",
			parserOptions: {
				extensions: [".mdx", ".md"],
			},
			processor: "mdx/remark",
			rules: {
				"mdx/remark": 2,
			},
			settings: {
				"mdx/code-blocks": true,
			},
		},
		{
			files: ["**/*.{md,mdx}/**"],
			extends: ["plugin:mdx/code-blocks"],
		},
	],
};
