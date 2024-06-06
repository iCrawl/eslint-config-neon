import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import angularParser from "@angular-eslint/template-parser";
import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
	"@angular-eslint/component-class-suffix": 2,
	"@angular-eslint/contextual-decorator": 2,
	"@angular-eslint/contextual-lifecycle": 2,
	"@angular-eslint/directive-class-suffix": 2,
	"@angular-eslint/no-attribute-decorator": 2,
	"@angular-eslint/no-conflicting-lifecycle": 2,
	"@angular-eslint/no-empty-lifecycle-method": 2,
	"@angular-eslint/no-forward-ref": 0,
	"@angular-eslint/no-host-metadata-property": 2,
	"@angular-eslint/no-input-prefix": 0,
	"@angular-eslint/no-input-rename": 0,
	"@angular-eslint/no-inputs-metadata-property": 2,
	"@angular-eslint/no-lifecycle-call": 2,
	"@angular-eslint/no-output-native": 2,
	"@angular-eslint/no-output-on-prefix": 2,
	"@angular-eslint/no-output-rename": 0,
	"@angular-eslint/no-outputs-metadata-property": 2,
	"@angular-eslint/no-pipe-impure": 0,
	"@angular-eslint/no-queries-metadata-property": 2,
	"@angular-eslint/prefer-on-push-component-change-detection": 2,
	"@angular-eslint/prefer-output-readonly": 2,
	"@angular-eslint/relative-url-prefix": 2,
	"@angular-eslint/sort-ngmodule-metadata-arrays": 2,
	"@angular-eslint/use-component-selector": 0,
	"@angular-eslint/use-component-view-encapsulation": 2,
	"@angular-eslint/use-injectable-provided-in": 2,
	"@angular-eslint/use-lifecycle-interface": 2,
	"@angular-eslint/use-pipe-transform-interface": 2,
	"import-x/extensions": 0,
};

const templateRules: TSESLint.FlatConfig.Rules = {
	"@angular-eslint/template/alt-text": 2,
	"@angular-eslint/template/elements-content": 2,
	"@angular-eslint/template/label-has-associated-control": 1,
	"@angular-eslint/template/table-scope": 2,
	"@angular-eslint/template/valid-aria": 2,
	"@angular-eslint/template/banana-in-box": 2,
	"@angular-eslint/template/button-has-type": 2,
	"@angular-eslint/template/click-events-have-key-events": 2,
	"@angular-eslint/template/conditional-complexity": 0,
	"@angular-eslint/template/cyclomatic-complexity": 0,
	"@angular-eslint/template/eqeqeq": 2,
	"@angular-eslint/template/i18n": 0,
	"@angular-eslint/template/mouse-events-have-key-events": 2,
	"@angular-eslint/template/no-any": 0,
	"@angular-eslint/template/no-autofocus": 2,
	"@angular-eslint/template/no-call-expression": 2,
	"@angular-eslint/template/no-distracting-elements": 2,
	"@angular-eslint/template/no-duplicate-attributes": 2,
	"@angular-eslint/template/no-negated-async": 2,
	"@angular-eslint/template/no-positive-tabindex": 2,
	"@angular-eslint/template/use-track-by-function": 2,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			"@angular-eslint": angularEslintPlugin,
			"@angular-eslint/template": angularEslintTemplatePlugin,
		},
		processor: "@angular-eslint/template/extract-inline-html",
		rules,
	},
	{
		languageOptions: {
			parser: angularParser,
		},
		plugins: {
			"@angular-eslint/template": angularEslintTemplatePlugin,
		},
		rules: templateRules,
	},
];

export default config;
