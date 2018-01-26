# webpack-handling-styles

An _hello world_ simple project that explores the [webpack](https://github.com/webpack/webpack) styles loading and processing


```bash
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.dev.html',
        files: {
            css: ['style.css'],
            js: ['bundle.js'],
        }
    }),
    /* order of the plugins determie the order of the render in the HTML file! */
    extractBootstrap,
    extractMain,
    extractControls,
    extractSASS,
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.bundle.js",
        minChunks: Infinity
    }),
    new WebpackCleanupPlugin()
]