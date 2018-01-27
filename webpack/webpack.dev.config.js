"use strict"

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const extractBootstrap = new ExtractTextPlugin('bootstrap.[contenthash].css');

const extractCustomCss = new ExtractTextPlugin('portal.[contenthash].css');

const extractMain = new ExtractTextPlugin('main.[contenthash].css');
const extractControls = new ExtractTextPlugin('controls.[contenthash].css');
const extractSASS = new ExtractTextPlugin('top-menu.[contenthash].css');

const EXCLUDE_FOLDERS = /node_modules/;
const PORT = 8282;

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:' + PORT + '/',
            './src/app.js'
        ],
        vendor: ["react", "react-dom"]
    },
    output: {
        publicPath: '/',
        path: path.resolve('build'),
        filename: 'bundle.dev.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.webpack.js', '.web.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: EXCLUDE_FOLDERS
        },
        {
            test: /(main|controls|common)\.css$/,
            use: extractCustomCss.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },/*
        {
            test: /main\.css$/,
            use: extractMain.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
          },
          {
              test: /controls\.css$/,
              use: extractControls.extract({
                  fallback: "style-loader",
                  use: "css-loader"
              })
            },*/
            {
                test: /bootstrap\.css$/,
                use: extractBootstrap.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    fallback: ["style-loader"], // translates CSS into CommonJS
                    use: ["css-loader", "sass-loader"] // compiles Sass to CSS
                })
            }
        ]
    },
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
        extractCustomCss,
        extractMain,
        extractControls,
        extractSASS,
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js",
            minChunks: Infinity
        }),
        new WebpackCleanupPlugin()
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        noInfo: true,
        historyApiFallback: true,
        port: PORT
    }
};