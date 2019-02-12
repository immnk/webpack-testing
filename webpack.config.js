const debug = process.env.NODE_ENV !== "production";
console.log("Webpack is running in " + process.env.NODE_ENV + " mode");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: debug ? "development" : "production",
  watch: debug,
  watchOptions: {
    ignored: ["dist/*.js", "node_modules", ".git"]
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
    }, {
      test: /\.html$/,
      loader: "html-loader"
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: debug ? "css/main.css" : "css/main.min.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
    ],
  }
};