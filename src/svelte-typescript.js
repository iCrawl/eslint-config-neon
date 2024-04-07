const settings = {
	"svelte3/typescript": true,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".svelte"],
			},
		},
		settings,
	},
];
