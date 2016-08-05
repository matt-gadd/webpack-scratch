const webpack = require('webpack');
const UmdFix = require('umd-require-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	extensions: ['', '.js'],
	root: __dirname,
	output: {
		path: './',
		filename: 'built.js',
	},
	plugins: [
		new UmdFix(),
	]
};
