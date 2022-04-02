const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devConfig = {
    mode: "development",
    output: {
        filename: "js/[name].js",
        chunkFilename: "js/[name].js",
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        open: true,
        port: 9000,
        compress: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(baseConfig, devConfig);