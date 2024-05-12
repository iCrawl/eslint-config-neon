module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parserOptions: {
			extraFileExtensions: [".vue"],
		},
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				parserOptions: {
					extraFileExtensions: [".vue"],
				},
			},
		},
	],
};
