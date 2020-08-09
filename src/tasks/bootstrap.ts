import gulp from "gulp";
import babel from "gulp-babel";
import eslint from "gulp-eslint";

const bootstrap_gulp_directory = () =>
  gulp
    .src("src/**/*.ts")
    .pipe(babel())
    .pipe(eslint({ fix: true }))
    .pipe(gulp.dest("gulp"));

gulp.task("bootstrap", gulp.series(bootstrap_gulp_directory));
