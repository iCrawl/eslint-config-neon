const rules = {
	"import/no-deprecated": 1,
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
