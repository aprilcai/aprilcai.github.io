var webpack = require('webpack')
var path    = require('path')
var outputPath = path.join(__dirname , '.build/')
module.exports = {
	entry: './index.js',

	output: {
		path: outputPath,
		filename: 'index.js'
	},

	module: {
		loaders: [
			{test: /\.css$/, loader: 'style!css'}
		]
	}
}