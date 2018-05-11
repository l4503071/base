const path = require('path');
const webpack = require('webpack');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env=>{
    return {
        mode:env.NODE_ENV,
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: 'index.js'
        },
        resolve: {
            extensions: ['*', '.js', '.css', '.vue','.json'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'vue$': env.NODE_ENV=='production'?'vue/dist/vue.runtime.common.js':'vue/dist/vue.js'
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
                use: ['vue-style-loader','css-loader']
            },{
                 test: /\.(png|jpg|gif)$/,
                 use: [{
                    loader: 'url-loader',
                    options: {
                       limit: 8192
                    }
                }]
            }]
        },
        devtool: env.NODE_ENV=='production'?'#cheap-module-source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'docs'),
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
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    };
}