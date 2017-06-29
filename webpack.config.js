
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'index': ['./lib/index.jsx']
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            // publicPath: ''
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    include: path.join(__dirname, 'lib'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                    }
                },
                // {
                //     test: /\.css$/,
                //     use: 'raw-loader'
                // }
            ]
        },
        plugins: [new htmlWebpackPlugin({
            filename: '../index.html',
            title: 'This is resume test page!',
            template: 'template/index.ejs',
            inject: 'body'
        })],

    };
};
