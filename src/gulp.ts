import path from "path";
import globby from "globby";

export class Gulp {
  readonly gulpDir: string;

  constructor() {
    this.gulpDir = path.join(process.cwd(), "gulp");

    Object.freeze(this);
  }

  private _loadTasks() {
    const taskFilePaths = globby.sync(this.path("./tasks/**/*.js"));

    taskFilePaths.forEach((taskFilePath: string) => {
      require(taskFilePath);
    });
  }

  path(relPath: string): string {
    return path.join(this.gulpDir, relPath);
  }

  run(): void {
    this._loadTasks();
  }
}
