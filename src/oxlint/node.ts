import type { OxlintConfig } from 'oxlint';

const config = {
	env: {
		node: true,
	},
	plugins: ['node', 'unicorn'],
	rules: {
		'no-restricted-globals': [
			'error',
			{
				name: 'Buffer',
				message: 'Import Buffer from `node:buffer` instead',
			},
			{
				name: 'process',
				message: 'Import process from `node:process` instead',
			},
			{
				name: 'setTimeout',
				message: 'Import setTimeout from `node:timers` instead',
			},
			{
				name: 'setInterval',
				message: 'Import setInterval from `node:timers` instead',
			},
			{
				name: 'setImmediate',
				message: 'Import setImmediate from `node:timers` instead',
			},
			{
				name: 'clearTimeout',
				message: 'Import clearTimeout from `node:timers` instead',
			},
			{
				name: 'clearInterval',
				message: 'Import clearInterval from `node:timers` instead',
			},
			{
				name: 'clearImmediate',
				message: 'Import clearImmediate from `node:timers` instead',
			},
		],
		'node/callback-return': 2,
		'node/global-require': 0,
		'node/handle-callback-err': 2,
		'node/no-exports-assign': 2,
		'node/no-new-require': 2,
		'node/no-path-concat': 2,
		'node/no-process-env': 0,
		'unicorn/prefer-node-protocol': 2,
		'unicorn/require-post-message-target-origin': 0,
	},
} satisfies OxlintConfig;

export default config;
