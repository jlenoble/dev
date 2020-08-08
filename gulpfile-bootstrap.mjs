// If running `gulp` fails, you need to boostrap the dev env by running:
// `gulp --gulpfile=gulpfile-bootstrap.mjs`
// Subsequently, simply run `gulp` as usual

import gulp from "gulp";

gulp.task("default", () => gulp.src("src/**/*.mjs").pipe(gulp.dest("gulp")));
