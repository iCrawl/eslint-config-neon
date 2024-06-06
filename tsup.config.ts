import { defineConfig, type Options } from "tsup";

const baseOptions: Options = {
	clean: true,
	dts: true,
	entry: ["src/*.ts"],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	bundle: false,
	target: "es2022",
	tsconfig: "./tsconfig.json",
	keepNames: true,
	treeshake: true,
};

export default [
	defineConfig({
		...baseOptions,
		outDir: "dist/cjs",
		format: "cjs",
	}),
	defineConfig({
		...baseOptions,
		outDir: "dist/esm",
		format: "esm",
		outExtension: () => ({ js: ".mjs" }),
	}),
];
