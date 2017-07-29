const path = require('path');

module.exports = {
    entry: './src/index.js',    //entry를 기준으로 필요한 모듈을 다 불러 bundle.js로 만든다.
    output: {
        path: __dirname+ '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ]
    }
};