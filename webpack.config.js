const debug = process.env.NODE_ENV !== "production";
console.log("Webpack is running in " + process.env.NODE_ENV + " mode");
const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: debug ? "development" : "production",
  watch: debug,
  watchOptions: {
    ignored: ['dist/*.js', 'node_modules', '.git']
  },
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
};
