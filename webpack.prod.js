var path = require('path');
var publicPath = '/'
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var HashOutput = require('webpack-plugin-hash-output');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].js',
        publicPath: publicPath,
        sourceMapFilename: '[name].[chunkhash].map'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
            screw_ie8: true,
            keep_fnames: true
            },
            compress: {
            screw_ie8: true
            },
            comments: false
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Webpack DevOPS',
            template: './src/assets/main.html'
        }),
        new HashOutput({
            validateOutput: true,
            validateOutputRegex: /^assets\/.*\.js$/,
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}