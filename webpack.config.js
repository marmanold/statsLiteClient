/*jslint esversion: 6*/
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = {
	entry: ['./src/main.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'stats-lite-client.bundle.js'
	},
	module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: true,
                    compact: true, 
                    plugins: ['transform-runtime']
                }
            }
        }]
    },
    plugins: [
        new MinifyPlugin({removeConsole:true},{comments:false})
    ],
    target: 'web'
};
