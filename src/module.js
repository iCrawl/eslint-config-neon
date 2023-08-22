const rules = {
	"unicorn/prefer-module": 2,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			rules,
		},
	],
};
