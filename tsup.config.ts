import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";
import { defineConfig, type Options } from "tsup";

const baseOptions: Options = {
	clean: true,
	dts: true,
	entry: ["src/*.ts"],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	bundle: true,
	target: "es2022",
	tsconfig: "./tsconfig.json",
	keepNames: true,
	treeshake: true,
	esbuildPlugins: [esbuildPluginFilePathExtensions()],
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
