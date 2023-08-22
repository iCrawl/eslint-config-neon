const rules = {
	"import/extensions": 0,
	"no-restricted-globals": 0,
	"n/prefer-global/buffer": [2, "always"],
	"n/prefer-global/console": [2, "always"],
	"n/prefer-global/process": [2, "always"],
	"n/prefer-global/text-decoder": [2, "always"],
	"n/prefer-global/text-encoder": [2, "always"],
	"n/prefer-global/url": [2, "always"],
	"n/prefer-global/url-search-params": [2, "always"],
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
