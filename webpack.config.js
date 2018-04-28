var path = require('path');
var HtmlWebapckPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename:'index.js'
    },
    plugins:[
    	new HtmlWebapckPlugin({
    		filename:'index.html',
    		template:'index.html'
    	})
    ]
}