const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { buildLoaders } = require("./webpack-configuration/build-loaders");

module.exports = (env) => {
  const isDev = env?.mode === "dev" ? true : false;
  const config = {
    mode: isDev ? "development" : "production",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
    module: { rules: buildLoaders() },
    resolve: {},
    devtool: "inline-source-map",
    devServer: {
      static: "./build",
      port: 5000,
      open: true,
    },
    performance: {
      hints: isDev ? false : "warning",
    },
  };

  return config;
};
