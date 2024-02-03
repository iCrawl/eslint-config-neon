const cypress = require("eslint-plugin-cypress");

const plugins = (old = true) =>
	old
		? ["cypress"]
		: {
				cypress,
			};

const rules = {
	"cypress/assertion-before-screenshot": 2,
	"cypress/no-assigning-return-values": 2,
	"cypress/no-async-tests": 2,
	"cypress/no-force": 2,
	"cypress/no-pause": 2,
	"cypress/no-unnecessary-waiting": 2,
	"import/unambiguous": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		env: {
			"cypress/globals": true,
		},
		plugins: plugins(),
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				globals: cypress.environments.globals.globals,
			},
			plugins: plugins(false),
			rules,
		},
	],
};
