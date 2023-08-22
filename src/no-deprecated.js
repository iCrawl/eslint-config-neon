const plugins = (old = true) => (old ? ["import"] : { import: require("eslint-plugin-import") });

const rules = {
	"import/no-deprecated": 1,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		plugins: plugins(),
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig} */
	flat: [
		{
			plugins: plugins(false),
			rules,
		},
	],
};
