module.exports = {
	parserOptions: {
		parser: "@typescript-eslint/parser",
		extraFileExtensions: [".astro"],
	},
	plugins: ["react"],
	overrides: [
		{
			files: ["*.astro"],
			plugins: ["astro"],
			env: {
				"astro/astro": true,
			},
			parser: "astro-eslint-parser",
			rules: {
				"deprecation/deprecation": 0,
				"react/jsx-key": 0,
				"react/no-unknown-property": 0,
				"react/self-closing-comp": 0,
			},
		},
		{
			files: ["**/*.astro/*.js", "*.astro/*.js"],
		},
	],
};
