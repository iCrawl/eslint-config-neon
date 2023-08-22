const plugins = (old = true) => (old ? ["rxjs"] : { rxjs: require("eslint-plugin-rxjs") });

const rules = {
	"rxjs/ban-observables": 0,
	"rxjs/ban-operators": 0,
	"rxjs/finnish": 2,
	"rxjs/just": 0,
	"rxjs/no-async-subscribe": 0,
	"rxjs/no-compat": 2,
	"rxjs/no-connectable": 2,
	"rxjs/no-create": 2,
	"rxjs/no-cyclic-action": 2,
	"rxjs/no-explicit-generics": 0,
	"rxjs/no-exposed-subjects": 0,
	"rxjs/no-finnish": 0,
	"rxjs/no-ignored-error": 0,
	"rxjs/no-ignored-notifier": 2,
	"rxjs/no-ignored-observable": 2,
	"rxjs/no-ignored-replay-buffer": 2,
	"rxjs/no-ignored-subscribe": 0,
	"rxjs/no-ignored-subscription": 0,
	"rxjs/no-ignored-takewhile-value": 2,
	"rxjs/no-implicit-any-catch": 2,
	"rxjs/no-index": 2,
	"rxjs/no-internal": 2,
	"rxjs/no-nested-subscribe": 2,
	"rxjs/no-redundant-notify": 2,
	"rxjs/no-sharereplay": 2,
	"rxjs/no-subclass": 2,
	"rxjs/no-subject-unsubscribe": 2,
	"rxjs/no-subject-value": 0,
	"rxjs/no-subscribe-handlers": 0,
	"rxjs/no-topromise": 2,
	"rxjs/no-unbound-methods": 2,
	"rxjs/no-unsafe-catch": 2,
	"rxjs/no-unsafe-first": 2,
	"rxjs/no-unsafe-subject-next": 2,
	"rxjs/no-unsafe-switchmap": 2,
	"rxjs/no-unsafe-takeuntil": 2,
	"rxjs/prefer-observer": 0,
	"rxjs/suffix-subjects": 0,
	"rxjs/throw-error": 2,
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
