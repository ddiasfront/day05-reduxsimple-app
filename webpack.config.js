var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'stage-2' ]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
