const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: debug ? "development" : "production",
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["./src/js/scripts.js", "./src/scss/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts.min.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }]
  },
  plugins: debug ? [
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.min.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
};
