try {
	require("@rushstack/eslint-patch/modern-module-resolution");
} catch (error) {
	console.error(error);
}

module.exports = require("./src/common.js");
