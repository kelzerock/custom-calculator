const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { buildLoaders } = require('./webpack-configuration/build-loaders');

module.exports = (env) => {
  const isDev = env?.mode === 'dev';
  const config = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'main-[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ],
    module: { rules: buildLoaders() },
    resolve: {
      extensions: ['.js', '.css', '.scss'],
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './build',
      port: 5000,
      open: true,
    },
    performance: {
      hints: isDev ? false : 'warning',
    },
  };

  return config;
};
