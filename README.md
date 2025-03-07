# Custom Cursor 👆

> [!IMPORTANT] This plugin is no longer maintained or supported.

![](https://img.shields.io/bundlephobia/min/alpinejs-cursor)
![](https://img.shields.io/npm/v/alpinejs-cursor)
![](https://img.shields.io/npm/dt/alpinejs-cursor)
![](https://img.shields.io/github/license/markmead/alpinejs-cursor)

This is a tiny JavaScript package that creates custom cursor for you with
minimal JavaScript and allows you to write hover effects for the cursor(s) in
CSS.

## Features

- 🪶 Lightweight (< 1kb minified)
- 🎨 Fully customizable with CSS
- ⚡ Simple API with minimal configuration
- 🔄 Multiple cursor support for follow-along effects
- 🎯 Target specific elements for custom hover states
- 📱 Works with mouse and touch devices

Perfect for creative websites, portfolios, and interactive experiences where you
want to replace the default cursor with something more engaging.

## Install

## CDN

For this package to work with a CDN, you'll need to access the `Cursor` class
from the `window` object.

```html
<script
  defer
  src="https://unpkg.com/alpinejs-cursor@latest/dist/cdn.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

## Package

```shell
yarn add -D alpinejs-cursor
npm install -D alpinejs-cursor
```

```js
import Alpine from 'alpinejs'
import cursor from 'alpinejs-cursor'

Alpine.plugin(cursor)

Alpine.start()
```

## Usage

Alpine JS Cursor is built upon
[Custom Cursor](https://github.com/markmead/custom-cursor), a vanilla JavaScript
library for creating custom cursors. This Alpine.js wrapper provides the same
functionality with Alpine's declarative syntax.

## Basic Example

To create a simple custom cursor:

```html
<body x-data x-cursor>
  //
</body>
```

## Advanced Examples

### Multiple Cursors

Create a trail effect with multiple cursors:

```html
<body x-data x-cursor.5>
  <!-- Creates 5 cursor elements that follow in sequence -->
</body>
```

### Custom Hover States

Define specific elements that will trigger cursor style changes:

```html
<body x-data x-cursor x-cursor-targets='["button", ".link", "#hero"]'>
  //
</body>
```

## Options

Alpine JS Cursor maintains the same API as the original Custom Cursor plugin:

| Custom Cursor Option | Alpine JS Implementation                         | Description                                     |
| -------------------- | ------------------------------------------------ | ----------------------------------------------- |
| `count`              | `x-cursor.5`                                     | Creates multiple cursor elements (trail effect) |
| `targets`            | `x-cursor-targets='["button", ".class", "#id"]'` | Elements that trigger hover states              |

For more advanced usage and options, refer to the
[Custom Cursor documentation](https://github.com/markmead/custom-cursor).
