const Path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: Path.resolve(__dirname , 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};


module.exports = config;