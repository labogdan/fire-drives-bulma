# Start package for Firefli Drives Project

This is a small package built from Bulma Start, and modified for Drives

## Install

```sh
npm install bulma-start
```
_then_

```sh
npm run build-all
```

## Setup

<b>Note:</b> After NPM install, it is necessary to edit framework code:
(this has now been fixed in a newer version of the css framework, but I don't want to
change versions and introduce any regression)

node_modules/bulma/sass/components/navbar.sass

On line 236:

+desktop .navbar, .navbar-menu, .navbar-start, .navbar-end

change +desktop to +tablet

On line 200, right before .navbar > .container display: block

change +touch to +mobile


For the search results ajax call, you need to point instance to correct endpoint. Right now it points to stub json file:

js/main.js --> var loadMore = new LoadMore("#loadMore", "stub/load-results.json");

That should be it.

## What's included

The `npm` dependencies included in `package.json` are:

* <code>[bulma](https://github.com/jgthms/bulma)</code>
* <code>[node-sass](https://github.com/sass/node-sass)</code> to compile your own Sass file
* <code>[postcss-cli](https://github.com/postcss/postcss-cli)</code> and <code>[autoprefixer](https://github.com/postcss/autoprefixer)</code> to add support for older browsers
* <code>[babel-cli](https://babeljs.io/docs/usage/cli/)</code>, <code>[babel-preset-env](https://github.com/babel/babel-preset-env)</code> and <code>[babel-preset-es2015-ie](https://github.com/jmcriffey/babel-preset-es2015-ie)</code> for compiling ES6 JavaScript files
* <code>[html-includes](https://www.npmjs.com/package/html-includes)</code> for splitting html files into templates


Apart from `package.json`, the following files are included:

* `.babelrc` configuration file for [Babel](https://babeljs.io/)
* `.gitignore` common [Git](https://git-scm.com/) ignored files
* `index.html` this HTML5 file
* `_sass/main.scss` a basic SCSS file that **imports Bulma** and explains how to **customize** your styles, and compiles to `css/main.css`
* `_javascript/main.js` an ES6 JavaScript that compiles to `lib/main.js`

## Copyright and license

Code copyright 2017 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma-start/blob/master/LICENSE).
