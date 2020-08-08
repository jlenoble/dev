import gulp from "gulp";
import debug from "gulp-debug";

/**
 * Gulp
 */
export class Gulp {
  /**
   * Runs the Gulp instance: To be called last.
   *
   * @returns {void}
   */
  run(): void {
    gulp.task("default", () => gulp.src("*").pipe(debug()));
  }
}
