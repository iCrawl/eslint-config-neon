const prettier = require("eslint-config-prettier");

const rules = {
	...prettier.rules,

	"arrow-body-style": 0,
	"line-comment-position": 0,
	"no-inline-comments": 0,
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
