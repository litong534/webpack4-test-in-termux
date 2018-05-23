const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: {entry1:'./src/index.js',entry2:'./src/print.js'},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('dist')
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			hash: true
		}),
		new CleanWebpackPlugin(['dist'])
	],
	module: {
		rules: [
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /jpe?g|png|gif$/,
				loader: 'url-loader'
			}
		]
	},
	optimization: {
		splitChunks: {
			minSize:1,
			chunks: 'initial',
			name: 'common'
		}
	}
}
