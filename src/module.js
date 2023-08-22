const plugins = (old = true) => (old ? ["unicorn"] : { unicorn: require("eslint-plugin-unicorn") });

const rules = {
	"unicorn/prefer-module": 2,
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
