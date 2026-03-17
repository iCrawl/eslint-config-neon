import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginRxjsAngular from "eslint-plugin-rxjs-angular-x";

const rules: TSESLint.FlatConfig.Rules = {
	"rxjs-angular/prefer-async-pipe": 0,
	"rxjs-angular/prefer-composition": 0,
	"rxjs-angular/prefer-takeuntil": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			"rxjs-angular": eslintPluginRxjsAngular,
		},
		rules,
	},
];

export default config;
