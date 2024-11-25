import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginSonarjs from "eslint-plugin-sonarjs";

const rules: TSESLint.FlatConfig.Rules = {
	"sonarjs/no-all-duplicated-branches": 2,
	"sonarjs/no-element-overwrite": 2,
	"sonarjs/no-empty-collection": 2,
	"sonarjs/no-extra-arguments": 2,
	"sonarjs/no-identical-conditions": 2,
	"sonarjs/no-identical-expressions": 2,
	"sonarjs/no-ignored-return": 2,
	"sonarjs/no-one-iteration-loop": 2,
	"sonarjs/no-use-of-empty-return-value": 2,
	"sonarjs/non-existent-operator": 2,
	"sonarjs/elseif-without-else": 0,
	"sonarjs/max-switch-cases": 0,
	"sonarjs/no-collapsible-if": 2,
	"sonarjs/no-collection-size-mischeck": 2,
	"sonarjs/no-duplicate-string": 0,
	"sonarjs/no-duplicated-branches": 2,
	"sonarjs/no-gratuitous-expressions": 2,
	"sonarjs/no-identical-functions": 2,
	"sonarjs/no-inverted-boolean-check": 2,
	"sonarjs/no-nested-switch": 2,
	"sonarjs/no-nested-template-literals": 0,
	"sonarjs/no-redundant-boolean": 2,
	"sonarjs/no-redundant-jump": 2,
	"sonarjs/no-same-line-conditional": 2,
	"sonarjs/no-small-switch": 0,
	"sonarjs/no-unused-collection": 2,
	"sonarjs/no-useless-catch": 0,
	"sonarjs/prefer-immediate-return": 2,
	"sonarjs/prefer-object-literal": 2,
	"sonarjs/prefer-single-boolean-return": 2,
	"sonarjs/prefer-while": 2,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			sonarjs: eslintPluginSonarjs,
		},
		rules,
	},
];

export default config;
