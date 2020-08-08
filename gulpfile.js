const { task, src } = require("gulp");
const debug = require("gulp-debug");

task("default", () => src("*").pipe(debug()));
