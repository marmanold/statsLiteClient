var path = require('path');

module.exports = {
	entry: ['whatwg-fetch', './src/main.js'], 
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'stats-lite-client.bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	}
};
