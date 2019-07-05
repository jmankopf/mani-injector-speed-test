const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    // resolve: {symlinks: false},
    output: {
        hashDigestLength: 5,
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // externals: {
    //     three: 'THREE'
    // },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                target: 'es5'
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin(),

    ]
};
