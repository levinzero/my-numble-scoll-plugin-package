const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')


module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: "./dist",
        hot: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.js|jsx$/, exclude: /(node_modules)/, include: path.resolve(__dirname, 'src'), loader: "babel-loader" },
            {
                test: /\.less$/,  use: [
                    'style-loader',
                    { loader: "css-loader",  options: { modules: true, localIdentName: '[local]__[hash:base64:5]'}}, //localIdentName定义了html里面className的显示
                    { loader: 'less-loader', options: {javascriptEnabled: true,sourceMap: true} },
                    
                ]
            },
            //正常模块编译的CSS
            // {
            //     test: /\.css$/, exclude:/node_modules/, use:[
            //         'style-loader', {loader: "css-loader", options:{modules: true, localIdentName: '[local]__[hash:base64:5]'} }
            //     ]
            // },
            // antd模块编译的CSS,需要去掉css-module方式
            // {
            //     test: /\.css$/,  use:[
            //         'style-loader', {loader: "css-loader", options:{localIdentName: '[local]__[hash:base64:5]'} }
            //     ]
            // }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        // new HtmlWebpackPlugin({title: 'micro-blog'}),
        // new CleanWebpackPlugin(['dist'])
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new optimization.minimize({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new ParallelUglifyPlugin({
        //    cacheDir: '.cache/',
        //    uglifyJS:{
        //      output: {
        //        comments: false
        //      },
        //      compress: {
        //        warnings: false
        //      }
        //    }
        //  }),

    ]

}