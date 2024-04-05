// @ts-check

import tseslint from "typescript-eslint";
import common from "./flat/common.js";
import node from "./flat/node.js";
import prettier from "./flat/prettier.js";

export default tseslint.config(...common, ...node, ...prettier);
