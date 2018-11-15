const webpack = require('webpack');
const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {

	context: path.resolve(__dirname, 'src'),

	entry: { 
		app: [
		'./js/app.js',
		// './scss/style.scss'
		'./scss/style1.css'
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
	},

	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},

	plugins: [

	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		jquery: 'jquery',
		Popper: ['popper.js', 'default']
	})

	]

}