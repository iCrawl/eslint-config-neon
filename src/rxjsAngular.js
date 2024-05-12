const plugins = (old = true) => (old ? ["rxjs-angular"] : { "rxjs-angular": require("eslint-plugin-rxjs-angular") });

const rules = {
	"rxjs-angular/prefer-async-pipe": 0,
	"rxjs-angular/prefer-composition": 0,
	"rxjs-angular/prefer-takeuntil": 0,
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
