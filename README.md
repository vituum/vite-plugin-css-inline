<a href="https://npmjs.com/package/@vituum/vite-plugin-css-inline"><img src="https://img.shields.io/npm/v/@vituum/vite-plugin-css-inline.svg" alt="npm package"></a>
<a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@vituum/vite-plugin-css-inline.svg" alt="node compatility"></a>

# ⚡️🧃 ViteCssInline

Inlines CSS code to HTML via [@css-inline](https://github.com/Stranger6667/css-inline). It's handy for creating email templates.

```js
import cssInline from '@vituum/vite-plugin-css-inline'

export default {
  plugins: [
    cssInline({ 
      paths: [],
      tables: true,
      postcss: {},
      doctype: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
      options: {}
    })
  ]
}
```

Read the [docs](https://vituum.dev/plugins/juice.html) to learn more about the plugin options.

### Requirements

- [Node.js LTS (24.x)](https://nodejs.org/en/download/)
- [Vite](https://vitejs.dev/)
