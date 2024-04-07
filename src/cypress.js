const cypress = require("eslint-plugin-cypress");

const rules = {
	"cypress/assertion-before-screenshot": 2,
	"cypress/no-assigning-return-values": 2,
	"cypress/no-async-tests": 2,
	"cypress/no-force": 2,
	"cypress/no-pause": 2,
	"cypress/no-unnecessary-waiting": 2,
	"import/unambiguous": 0,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		languageOptions: {
			globals: cypress.environments.globals.globals,
		},
		plugins: {
			cypress,
		},
		rules,
	},
];
