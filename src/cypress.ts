import type { TSESLint } from "@typescript-eslint/utils";
import cypress from "eslint-plugin-cypress/flat";

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
		plugins: {
			cypress,
		},
		rules,
	},
];

export default config;
