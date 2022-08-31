const prettier = require("eslint-config-prettier");

module.exports = {
	rules: {
		...prettier.rules,

		"arrow-body-style": 0,
		"line-comment-position": 0,
		"no-inline-comments": 0,
	},
};
