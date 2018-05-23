const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: {entry1:'./src/index.js',entry2:'./src/print.js'},
	output: {
		filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
	},
	// devServer: {
  //   contentBase: false,
  //   host: 'localhost',
  //   port: 8080,
  //   open: true,
  //   publicPath: '/',
  //   historyApiFallback: {
  //     rewrites: [
  //       { from: /.*/, to: path.posix.join('/', 'index.html') },
  //     ],
  //   },
	// },
	plugins: [
		new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['common','entry1'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/test.html',
      chunks: ['common', 'entry2'],
      filename: 'test.html',
      inject: true
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
			chunks: 'all',
			name: 'common'
		}
	}
}
