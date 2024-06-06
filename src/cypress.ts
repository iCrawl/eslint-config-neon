import { fixupPluginRules } from "@eslint/compat";
import type { TSESLint } from "@typescript-eslint/utils";
// @ts-expect-error eslint-plugin-cypress is not typed
import cypress from "eslint-plugin-cypress";

const rules: TSESLint.FlatConfig.Rules = {
	"cypress/assertion-before-screenshot": 2,
	"cypress/no-assigning-return-values": 2,
	"cypress/no-async-tests": 2,
	"cypress/no-force": 2,
	"cypress/no-pause": 2,
	"cypress/no-unnecessary-waiting": 2,
	"import-x/unambiguous": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: cypress.environments.globals.globals,
		},
		plugins: {
			cypress: fixupPluginRules(cypress),
		},
		rules,
	},
];

export default config;
