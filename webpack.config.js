var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index-dev.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [__dirname + '/app/app.js'],
    output: {
        path: __dirname,
        filename: 'app_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, include: /app/, loader: 'babel-loader'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};