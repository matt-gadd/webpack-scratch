const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	extensions: ['', '.js'],
	root: __dirname,
	output: {
		path: './',
		filename: 'built.js',
	}
};
