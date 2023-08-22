const plugins = (old = true) => (old ? ["@next/next"] : { "@next/next": require("@next/eslint-plugin-next") });

const rules = {
	"@next/next/google-font-display": 1,
	"@next/next/google-font-preconnect": 1,
	"@next/next/inline-script-id": 2,
	"@next/next/next-script-for-ga": 1,
	"@next/next/no-assign-module-variable": 2,
	"@next/next/no-before-interactive-script-outside-document": 2,
	"@next/next/no-css-tags": 1,
	"@next/next/no-document-import-in-page": 2,
	"@next/next/no-duplicate-head": 2,
	"@next/next/no-head-import-in-document": 2,
	"@next/next/no-html-link-for-pages": 0,
	"@next/next/no-img-element": 1,
	"@next/next/no-page-custom-font": 1,
	"@next/next/no-script-component-in-head": 2,
	"@next/next/no-styled-jsx-in-document": 2,
	"@next/next/no-sync-scripts": 2,
	"@next/next/no-title-in-document-head": 2,
	"@next/next/no-typos": 2,
	"@next/next/no-unwanted-polyfillio": 2,
	"import/extensions": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		plugins: plugins(),
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			plugins: plugins(false),
			rules,
		},
	],
};
