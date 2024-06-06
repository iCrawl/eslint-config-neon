import { findFilesRecursivelyStringEndsWith } from "@sapphire/node-utilities";
import { writeFile } from "node:fs/promises";
import { EOL } from "node:os";
import { basename } from "node:path";

const srcURL = new URL("../src/", import.meta.url);

const filesToExport: string[] = [];

const exportAliases = new Map([["nodeprecated", "no"]]);

for await (const file of findFilesRecursivelyStringEndsWith(srcURL, ".ts")) {
	if (file.endsWith("index.ts")) {
		continue;
	}

	filesToExport.push(`./${basename(file).replace(/\.ts$/, ".js")}`);
}

const toExports = filesToExport
	.toSorted((fileOne, fileTwo) => basename(fileOne).localeCompare(basename(fileTwo)))
	.map((fileToExport) => {
		const generatedName = basename(fileToExport).replace(/\.js$/, "").replaceAll("-", "");
		return `export { default as ${exportAliases.get(generatedName) ?? generatedName} } from "${fileToExport}";`;
	})
	.join("\n");

await writeFile(new URL("../src/index.ts", import.meta.url), toExports + EOL);
