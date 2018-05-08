const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['*', '.js', '.css', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: '#source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        inline: true,
        compress: true,
        port:8080
    },
    plugins: [
        new HtmlWebapckPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}