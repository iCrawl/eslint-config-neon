// @ts-check

import tseslint from "typescript-eslint";
import common from "./src/common.js";
import node from "./src/node.js";
import prettier from "./src/prettier.js";

export default tseslint.config(...common, ...node, ...prettier);
