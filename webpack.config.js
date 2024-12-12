const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'node_modules/cesium/Build/Cesium', to: 'cesium' },
            ],
        }),
    ],
    resolve: {
        alias: {
            cesium: path.resolve(__dirname, 'node_modules/cesium'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8081,
        open: true,
    },
};
