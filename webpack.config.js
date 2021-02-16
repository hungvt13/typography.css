const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./js/main.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string (default)
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web", // enum
}