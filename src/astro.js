const astroPlugin = require("eslint-plugin-astro");

const astroRules = {
	"react/jsx-key": 0,
	"react/no-unknown-property": 0,
	"react/self-closing-comp": 0,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		languageOptions: {
			globals: astroPlugin.environments.astro.globals,
			parserOptions: {
				extraFileExtensions: [".astro"],
			},
		},
	},
	{
		languageOptions: {
			parser: require("astro-eslint-parser"),
		},
		plugins: {
			astro: astroPlugin,
		},
		rules: astroRules,
	},
	{
		files: ["**/*.astro/*.js", "*.astro/*.js"],
	},
];
