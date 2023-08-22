const parser = (old = true) => (old ? "@typescript-eslint/parser" : require("@typescript-eslint/parser"));

const settings = {
	"svelte3/typescript": true,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parser: parser(),
		parserOptions: {
			extraFileExtensions: [".svelte"],
		},
		settings,
	},
	/** @type {import('eslint').Linter.FlatConfig} */
	flat: [
		{
			languageOptions: {
				parser: parser(false),
				parserOptions: {
					extraFileExtensions: [".svelte"],
				},
			},
			settings,
		},
	],
};
