var debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: debug ? "development" : "production",
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/scripts.js",
  output: {
    path: __dirname + "/dist",
    filename: "scripts.min.js"
  },
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
};
