static2000-swig
===============

Swig adapter for [Static2000](https://github.com/judas-christ/static2000).

## Installation

Via npm:

```bash
$ npm install static2000-swig
```

## Usage

To use swig templates with static2000, install this adapter and specify it as the `templateAdapter` in static2000. Create templates and content as `.html` files.

From the command line:

```bash
$ static2000 --templateAdapter static2000-swig
```

Or with the API:

```js
var static2000 = require('static2000');

static2000({ templateAdapter: 'static2000-swig '});
```

## Globals

This adapter imports `[templates folder]/includes/globals.html` in all files as `globals` so macros defined there are available both in the body of content and in templates:

```htmldjango
{{ globals.myMacro() }}
```

