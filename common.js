try {
	require("@rushstack/eslint-patch/modern-module-resolution");
} catch {}

module.exports = require("./src/common.js").default;
