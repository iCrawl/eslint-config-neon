const astroPlugin = require("eslint-plugin-astro");

const astroParser = (old = true) => (old ? "astro-eslint-parser" : require("astro-eslint-parser"));

const astroPlugins = (old = true) => (old ? ["astro"] : { astro: astroPlugin });

const astroRules = {
	"react/jsx-key": 0,
	"react/no-unknown-property": 0,
	"react/self-closing-comp": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parserOptions: {
			extraFileExtensions: [".astro"],
		},
		overrides: [
			{
				files: ["**/*.astro"],
				plugins: astroPlugins(),
				env: {
					"astro/astro": true,
				},
				parser: astroParser(),
				rules: astroRules,
			},
			{
				files: ["**/*.astro/*.js", "*.astro/*.js"],
			},
		],
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
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
				parser: astroParser(false),
			},
			plugins: astroPlugins(false),
			rules: astroRules,
		},
		{
			files: ["**/*.astro/*.js", "*.astro/*.js"],
		},
	],
};
