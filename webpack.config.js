const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	extensions: ['', '.js'],
	output: {
		path: './',
		filename: 'built.js',
	}
};
