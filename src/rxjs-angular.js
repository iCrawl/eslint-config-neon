const rules = {
	"rxjs-angular/prefer-async-pipe": 0,
	"rxjs-angular/prefer-composition": 0,
	"rxjs-angular/prefer-takeuntil": 0,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		plugins: {
			"rxjs-angular": require("eslint-plugin-rxjs-angular"),
		},
		rules,
	},
];
