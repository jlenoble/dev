import gulp from "gulp";
import debug from "gulp-debug";

export class Gulp {
  run() {
    gulp.task("default", () => gulp.src("*").pipe(debug()));
  }
}
