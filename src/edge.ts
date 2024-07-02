import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
	"import-x/extensions": 0,
	"no-restricted-globals": 0,
	"n/prefer-global/buffer": [2, "always"],
	"n/prefer-global/console": [2, "always"],
	"n/prefer-global/process": [2, "always"],
	"n/prefer-global/text-decoder": [2, "always"],
	"n/prefer-global/text-encoder": [2, "always"],
	"n/prefer-global/url": [2, "always"],
	"n/prefer-global/url-search-params": [2, "always"],
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
