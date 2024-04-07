const prettier = require("eslint-config-prettier");

const rules = {
	...prettier.rules,

	"arrow-body-style": 0,
	"line-comment-position": 0,
	"no-inline-comments": 0,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		rules,
	},
];
