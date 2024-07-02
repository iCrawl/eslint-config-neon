import type { TSESLint } from "@typescript-eslint/utils";
import globals from "globals";

const rules: TSESLint.FlatConfig.Rules = {
	"unicorn/prefer-dom-node-append": 2,
	"unicorn/prefer-dom-node-dataset": 2,
	"unicorn/prefer-dom-node-remove": 2,
	"unicorn/prefer-dom-node-text-content": 2,
	"unicorn/prefer-keyboard-event-key": 2,
	"unicorn/prefer-modern-dom-apis": 2,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: globals.browser,
		},
		rules,
	},
];

export default config;
