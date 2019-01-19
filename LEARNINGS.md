# Learnings
---

Lessons learned from this exercise are documented in this page.

## Table of contents
---

1. [Webpack](#webpack)
2. [Other lessons](#other-lessons)

## Webpack
---

I have learned how to create a javascript project and add webpack to it using `npm i webpack webpack-cli --save-dev`.

I would keep the source code with comments but lets keep it real. They key concept for me is that webpack will bundle js modules. But there are a lot of other things that I want my webpack to do. Such as
1. bunding js files and add the script to my index.html
2. copy the index file from src to dist
3. compile my SASS to css.

All the above things can be done using webpack and for that we need to tell webpack how to do through a config file. `./webpack.config.js` defines the file and location of the file relative to the project structure.

Destructuring webpack:

```
const debug = process.env.NODE_ENV !== "production";
...

module.exports = {
  // mode tells how the build should happen. Internal optimization tech used by webpack
  mode: debug ? "development" : "production",
  // watch tells webpack to listen to changes in project and run module builder
  watch: debug,
  watchOptions: {
    ignored: ['dist/*.js', 'node_modules', '.git']
  },
  context: __dirname,
  // devtool tells if sourcemaps should be built
  devtool: debug ? "inline-sourcemap" : false,
  // entry points make webpack run against the rules for each file
  entry: ["./src/js/scripts.js", "./src/scss/main.scss"],
  output: {
    // saving the entire output to dist folder
    path: path.resolve(__dirname, "dist"),
    // final file name of the bundle
    filename: "scripts.min.js"
  },
  module: {
    // this rule compiles scss into css and the loaders are applied from right to left.
    // we can similarly add a test for js/ts files and run a babel processor.
    rules: [{
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }]
  },
  plugins: [
    ...
  ],
};

```

## Other Lessons
---

1. Added mocha, istanbul and chai to create unit test cases and then use a online tool like coveralls to generate a comprehensive code coverage. this will give us a nice little badge also.
2. Added GitHub issue templates

## Issues and how did i resolve them

> `npm test` worked but coverage report was empty. So this made the coverage report not to be sent by nyc to coveralls.

Solution:
This happened because my unit test was loading sync file in before all and the unit test ran but mocha never exited after running test cases. So the solution was

`package.json`

``` json
{
  "test": "npm run lint && nyc --reporter=html --reporter=text mocha --exit",
}
```

`domModule.test.js`

``` javascript
before(function () {
  this.timeout(0); // This is important so that before doesnt timeout
  ...
  let htmlString = fs.readFileSync("./src/index.html").toString();
  ...
});
```