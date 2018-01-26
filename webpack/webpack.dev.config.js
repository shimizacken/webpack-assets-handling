"use strict"

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const extractBootstrap = new ExtractTextPlugin('bootstrap.[contenthash].css');
const extractMain = new ExtractTextPlugin('main.[contenthash].css');
const extractControls = new ExtractTextPlugin('controls.[contenthash].css');
const extractSASS = new ExtractTextPlugin('sideMenu.[contenthash].css');

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
            },
            {
                test: /bootstrap\.min\.css$/,
                use: extractBootstrap.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
            ,
            {
                test: /sideMenu\.scss$/,
                use: extractSASS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
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
        port: PORT,
        // proxy: {
        //     '/cxwebclient/api': {
        //         target: TARGET_PORTAL_URL
        //     },
        //     '/cxrestapi': {
        //         target: TARGET_REST_API_URL
        //     }
        // }
    }
};