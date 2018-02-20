const Path = require('path');
const EXtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: './src/app.js',
    output: {
        path: Path.resolve(__dirname , 'dist'),
        filename: 'app.bundle.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: EXtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new EXtractTextPlugin('app.css')
    ]
};


module.exports = config;