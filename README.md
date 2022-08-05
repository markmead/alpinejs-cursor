**--- DELETE START ---**

# Alpine JS Plugin Template

This is a template repository to help developers quickly build Alpine JS plugins.

## How to Use

1. Clone the repository with the "Use this template" button on GitHub
2. Run `npm install` to install ES Build
3. Build your plugin

### Compiling

To compile the code you run `npm run build` which will create two files in the `/dist` directory.

### Testing

In this template you will find a `/testing/index.html` file that you can use for testing how the Alpine JS plugin works.

I recommend using [vercel/serve](https://www.npmjs.com/package/serve) to serve this file.

## Things to Change

- Find and replace "NAME" with the plugin name
- Find and replace "FILE" with the name of your compiled file
- Find and replace "PLUGIN" with the name of your exported function
- Uncomment "/testing" in the `.gitignore` file

🚨 Make sure find and replace is case sensitive

If you were creating a plugin called "Alpine JS CSV" you could do the following:

- "NAME" to "CSV"
- "FILE" to "csv"
- "PLUGIN" to "CSV"

### License

The choice of adding a license and what license is best for your project is up to you.

[Adding a License on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)

**--- DELETE END ---**

# Alpine JS NAME

Description of the plugin.

## Install

### With a CDN

```html
<script defer src="https://unpkg.com/NAME@latest/dist/FILE.min.js"></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D NAME

npm install -D NAME
```

```js
import Alpine from 'alpinejs'
import component from 'NAME'

Alpine.plugin(component)

Alpine.start()
```

## Example

Examples of how the plugin works.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-NAME)
![](https://img.shields.io/npm/v/alpinejs-NAME)
![](https://img.shields.io/npm/dt/alpinejs-NAME)
![](https://img.shields.io/github/license/markmead/alpinejs-NAME)
