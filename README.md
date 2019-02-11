# Webpack Testing

[![Build Status](https://travis-ci.org/immnk/webpack-testing.svg?branch=master)](https://travis-ci.org/immnk/webpack-testing) [![Dependencies](https://david-dm.org/immnk/webpack-testing.svg)](https://david-dm.org/) [![CodeFactor](https://www.codefactor.io/repository/github/immnk/webpack-testing/badge)](https://www.codefactor.io/repository/github/immnk/webpack-testing) [![Coverage Status](https://coveralls.io/repos/github/immnk/webpack-testing/badge.svg?branch=master)](https://coveralls.io/github/immnk/webpack-testing?branch=master) [![Tests](https://img.shields.io/badge/tests-covered-brightgreen.svg)](https://github.com/immnk/webpack-testing/issues/5)

> Webpack Testing is a repository created with the intention of using `webpack` to compile JS modules. This project create `dist` folder during build and deploy its content to `gh-pages` using [![Travis CI](https://img.shields.io/badge/travis%20ci-enabled-brightgreen.svg)](https://travis-ci.org/immnk/webpack-testing)

## Table of contents

1. [Set up](#set-up)
2. [Test](#test)
3. [Tasks](#tasks)
4. [Useful websites](#useful-websites)
5. [VS Code Plugins Recommended](#vs-code-plugins-recommended)
6. [LICENSE](#license)

## Set up

Follow the following steps:

1. `git clone https://github.com/immnk/logo-generator-app.git`
2. `cd webpack_testing && npm install`
3. For testing in dev `npm start`. To test prod `NODE_ENV=production npm start`
4. Open `dist/index.html` in browser.

## Test

1. Open webpack_testing folder where the code is cloned.
2. Open command prompt at the folder and run `npm test`

## Tasks

All tasks and issues are listed as items in [Tasks & issues in repository Issues tab](https://github.com/immnk/webpack-testing/issues)

- [x] Write a README file.
- [x] Write JS modules and compile with webpack
- [x] Make dist folder with html and js files compiled
- [x] Create SCSS and compile them with webpack
- [ ] Create API test method and set up
- [x] Add CI/CD pipelines
- [ ] Make automatic deployments on release branch
- [x] Create unit test cases with Mocha(JS test framework) and Chai(assertion library)

## VS Code Plugins Recommended

- Beautify
- Debugger for Chrome
- ESLint
- GitLens
- IntelliSense for CSS class names
- markdownlint
- vscode-icons

## Useful websites

1. Mock data - https://www.mockaroo.com/
2. Background generator - https://cssgradient.io/gradient-backgrounds/
3. Markdown tricks - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## License

[MIT License](https://github.com/immnk/webpack-testing/blob/master/LICENSE)
