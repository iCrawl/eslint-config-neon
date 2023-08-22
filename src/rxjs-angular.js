const parser = (old = true) => (old ? "@typescript-eslint/parser" : require("@typescript-eslint/parser"));

const plugins = (old = true) => (old ? ["rxjs-angular"] : { "rxjs-angular": require("eslint-plugin-rxjs-angular") });

const rules = {
	"rxjs-angular/prefer-async-pipe": 0,
	"rxjs-angular/prefer-composition": 0,
	"rxjs-angular/prefer-takeuntil": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parser: parser(),
		plugins: plugins(),
		rules,
	},
	/** @type {import('eslint').Linter.FlatConfig} */
	flat: [
		{
			languageOptions: {
				parser: parser(false),
			},
			plugins: plugins(false),
			rules,
		},
	],
};
