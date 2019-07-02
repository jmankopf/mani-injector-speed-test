const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const WebpackCdnPlugin = require('webpack-cdn-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.ts',
    // resolve: {symlinks: false},
    output: {
        hashDigestLength: 5,
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // externals: {
    //     three:'THREE'
    // },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Breakout'}),
        // new WebpackCdnPlugin({
        //     modules: [
        //         {
        //             name: 'vue',
        //             var: 'Vue',
        //             path: 'dist/vue.runtime.min.js'
        //         }
        //     ],
        //     publicPath: '/node_modules'
        // }),
        // new CopyWebpackPlugin([
        //     {from: './src/assets', to: './assets'},
        //     // {from: './src/favicon.ico', to: './'}
        // ]),
    ]
};
