const parser = (old = true) => (old ? "@typescript-eslint/parser" : require("@typescript-eslint/parser"));

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parserOptions: {
			parser: parser(),
			extraFileExtensions: [".vue"],
		},
	},
	/** @type {import('eslint').Linter.FlatConfig} */
	flat: [
		{
			languageOptions: {
				parser: parser(false),
				parserOptions: {
					extraFileExtensions: [".vue"],
				},
			},
		},
	],
};
