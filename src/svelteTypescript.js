const settings = {
	"svelte3/typescript": true,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parserOptions: {
			extraFileExtensions: [".svelte"],
		},
		settings,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				parserOptions: {
					extraFileExtensions: [".svelte"],
				},
			},
			settings,
		},
	],
};
