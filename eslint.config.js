const common = require("./flat/common.js");
const node = require("./flat/node.js");
const prettier = require("./flat/prettier.js");

module.exports = [...common, ...node, ...prettier];
