const execa = require("execa");

try {
  require("./gulp");
} catch (e) {
  execa.sync("gulp", ["--gulpfile=gulpfile-bootstrap.mjs"], {
    stdio: "inherit",
  });

  require("./gulp");
}
