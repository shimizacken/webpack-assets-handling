<div align="center">
    <h1>webpack-handling-styles</h1>
</div>

An _hello world_ simple project that explores the [webpack](https://github.com/webpack/webpack) styles loading and processing  

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
{
    test: /(main|controls|common)\.css$/,
    use: extractCustomCss.extract({
        fallback: "style-loader",
        use: "css-loader"
    })
}
```

And add the plugin:

```js
plugins: [
    extractCustomCss
]
```