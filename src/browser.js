const globals = require("globals");

const rules = {
	"unicorn/prefer-dom-node-append": 2,
	"unicorn/prefer-dom-node-dataset": 2,
	"unicorn/prefer-dom-node-remove": 2,
	"unicorn/prefer-dom-node-text-content": 2,
	"unicorn/prefer-keyboard-event-key": 2,
	"unicorn/prefer-modern-dom-apis": 2,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		env: {
			browser: true,
		},
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				globals: globals.browser,
			},
			rules,
		},
	],
};
