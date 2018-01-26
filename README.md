<div align="center">
    <h1>webpack-handling-styles</h1>
</div>

An _hello world_ project that explores [webpack](https://github.com/webpack/webpack) styles loading and processing  

<h2 align="center">Conclusions</h2>

The order of the [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) plugins, will be the order of the `*.css` files in the HTML file:

```js
plugins: [
    extractBootstrap,
    extractMain,
    extractControls,
    extractSASS
]
```

For extracting multiple specific files of the same type use loader:

```js
const extractCustomCss = new ExtractTextPlugin('portal.[contenthash].css');
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /(main|controls|common)\.css$/,
        use: extractCustomCss.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    extractCustomCss
  ]
}
```