# webpack-handling-styles

An _hello world_ simple project that explores the [webpack](https://github.com/webpack/webpack) styles loading and processing  

The order of the extract plugins determines the order of the css files in the HTML file:

```bash
plugins: [
    extractBootstrap,
    extractMain,
    extractControls,
    extractSASS
]