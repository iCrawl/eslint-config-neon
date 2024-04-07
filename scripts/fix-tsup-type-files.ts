import { findFilesRecursivelyStringEndsWith } from "@sapphire/node-utilities";
import { rename } from "node:fs/promises";
import { join } from "node:path";

const inputPath = "dist/esm/";

const fullInputPathUrl = join(process.cwd(), inputPath);

for await (const file of findFilesRecursivelyStringEndsWith(fullInputPathUrl, ".d.ts")) {
	await rename(file, file.replace(/\.d\.ts$/, ".d.mts"));
}

console.log(`✅ Renamed .d.ts files in ${fullInputPathUrl} to .d.mts`);
