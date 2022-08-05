# Alpine JS Cursor

Create a custom cursor with Alpine JS and easily apply hover effects 👆

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-cursor@latest/dist/cursor.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

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

## Example

This plugin makes use of the [custom-cursor package](https://github.com/markmead/custom-cursor).

```html
<body x-data x-cursor>
  ...
</body>
```

### Modifiers

You can pass a single modifier to `x-cursor` which will modifier how many cursor are created.

```html
<body x-data x-cursor.5>
  ...
</body>
```

In this example it will create 5 cursor.

### Attributes

You can use the `x-cursor-target` attribute to pass through an array of HTML elements that will apply a unique CSS class name to the `<body>` tag that you can use for hover effects.

```html
<body x-data x-cursor x-cursor-targets='["button", "#form", ".click"]'>
  ...
</body>
```

In this example it will create the following classes.

- `cursor-hover--button`
- `cursor-hover--form`
- `cursor-hover--click`

Which you can then use in CSS like this.

```css
.cursor-hover--button [data-cursor] {
  background: #00f;
}
```

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-cursor)
![](https://img.shields.io/npm/v/alpinejs-cursor)
![](https://img.shields.io/npm/dt/alpinejs-cursor)
![](https://img.shields.io/github/license/markmead/alpinejs-cursor)
