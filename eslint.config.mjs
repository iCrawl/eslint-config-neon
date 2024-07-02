// @ts-check

import common from "./dist/esm/common.mjs";
import node from "./dist/esm/node.mjs";
import prettier from "./dist/esm/prettier.mjs";
import typescript from "./dist/esm/typescript.mjs";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...common,
	...node,
	...typescript,
	{
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	},
	...prettier,
];

export default config;
