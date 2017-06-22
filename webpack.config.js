
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'index': ['./lib/index.js']
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            // publicPath: ''
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    include: path.join(__dirname, 'lib'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['env']
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
