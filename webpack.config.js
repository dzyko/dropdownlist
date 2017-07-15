const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: '/dist'
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "src")],
        compress: true,
        port: 9000
    }
}