var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
	entry: './js/client.js',
    module: {
		rules: [{
			test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + "/src/",
        historyApiFallback: true
    }
}

