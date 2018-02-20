const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanUp = require('webpack-cleanup-plugin');

const ExtractCSS = new ExtractTextPlugin('app.[hash].css');

const config = {
    entry: './src/app.js',
    output: {
        path: Path.resolve(__dirname , 'dist'),
        filename: 'app.[hash].js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractCSS.extract({
                    use: [
                        'css-loader',
                        {
                            'loader': 'sass-loader',
                            options: {
                                outputStyle : 'expanded'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.sass$/,
                use: ExtractCSS.extract({
                    use: [
                        'css-loader',
                        {
                            'loader': 'sass-loader',
                            options: {
                                outputStyle : 'expanded'
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        ExtractCSS,
        new CleanUp('dist')
    ]
};


module.exports = config;