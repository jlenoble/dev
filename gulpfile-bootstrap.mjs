// If running `gulp` fails, you need to boostrap the dev env by running:
// `gulp --gulpfile=gulpfile-bootstrap.mjs`
// Subsequently, simply run `gulp` as usual

import gulp from "gulp";
import babel from "gulp-babel";
import eslint from "gulp-eslint";

gulp.task("default", () =>
  gulp
    .src("src/**/*.ts")
    .pipe(babel())
    .pipe(eslint({ fix: true }))
    .pipe(gulp.dest("gulp"))
);
