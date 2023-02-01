const { resolve } = require('path')

const config = {
    target: ["web", "es5"],
    mode: 'production',
    entry: resolve(__dirname, './src'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'index.js',
        clean: true,
        library: {
            type: 'commonjs2',
            export: 'default',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    devtool: 'source-map',
}

module.exports = config
