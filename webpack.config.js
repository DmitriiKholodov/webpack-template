const webpack = require('webpack');
const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

	context: path.resolve(__dirname, 'src'),

	entry: { 
		app: [
		'./js/app.js'
		],
		
	},

	output: { 
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'js/[name].js',
		publicPath: 'dist/'
	},

	devServer: {
		hot: true,
    	contentBase: 'app/',
    	watchContentBase: true,
	}
}