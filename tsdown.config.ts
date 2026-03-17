import { defineConfig, type UserConfig } from "tsdown";

const baseOptions: UserConfig = {
	clean: true,
	entry: ["src/*.ts"],
	dts: true,
	unbundle: true,
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: "es2022",
	tsconfig: "./tsconfig.json",
	treeshake: true,
};

export default [
	defineConfig({
		...baseOptions,
		outDir: "dist/cjs",
		format: "cjs",
		banner: {
			js: '"use strict";',
		},
	}),
	defineConfig({
		...baseOptions,
		outDir: "dist/esm",
		format: "esm",
	}),
];
