# Code page [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/code-page/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/code-page)

Get and set the current Windows terminal code page.

[![NPM Badge](https://nodei.co/npm/code-page.png)](https://npmjs.com/package/code-page)

## Install

```sh
npm install code-page
```

## Usage

```js
const codePage = require("code-page");

(async () => {
	await codePage()
	//=> 850

	await codePage(65001) // Set to unicode

	await codePage()
	//=> 65001
})()
```

## API

### codePage(page)

#### page

Type: `number`

The page number to set.
