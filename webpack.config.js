const path = require('path');
const webpack = require('webpack');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const CopyWebapckPlugin = require('copy-webpack-plugin');
const UglifyJsWebapckPlugin=require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env=>{
    return {
        mode:env.NODE_ENV,
        entry: {
            app: './main.js',
            vendor:['vue','vue-router']
        },
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: '[name].js',
            chunkFilename:'[name].js'
        },
        optimization:{
            splitChunks:{
                chunks: 'initial',
                cacheGroups: {
                    vendor:{
                        test: /node_modules\//,
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    }
                }
            },
            minimizer:[
                new UglifyJsWebapckPlugin({
                    uglifyOptions:{
                        compress:false
                    }
                })
            ]
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
                use: [ MiniCssExtractPlugin.loader,'css-loader']
            },{
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                       limit: 8192,
                       name:'images/[name].[hash:7].[ext]'
                    }
                }]
            },{
                test: /\.(eot|woff|ttf|woff2|otf)$/,
                exclude: /^node_modules$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                       limit: 8192,
                       name:'fonts/[name].[hash:7].[ext]'
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
            new CleanWebapckPlugin([path.resolve(__dirname,'docs')]),
            new HtmlWebapckPlugin({
                filename: 'index.html',
                template: 'index.html',
                favicon: path.resolve(__dirname,'image','logo.png')
            }),
            new CopyWebapckPlugin([
            {
                from: path.resolve(__dirname,'node_modules','jquery/dist','jquery.min.js'),
                to: 'externals'
            }
            ]),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        externals:{
            jquery:'jQuery',
        }
    };
}