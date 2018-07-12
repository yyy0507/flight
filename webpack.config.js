var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:"development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,//实时刷新,
    hot: true,
    port: 3333
  },
  module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node-modules)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015']
			}
		},{
			test:/\.scss$/,
			loader: "style-loader!css-loader!sass-loader"
		}]
	},
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
};