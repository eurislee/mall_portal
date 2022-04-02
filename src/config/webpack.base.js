const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "../../dist"),
        filename: "js/[name].[contenthash:8].js",
        chunkFilename: "js/[name].[contenthash:8].js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                  loader: "babel-loader",
                },
              },
              {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
              },
              {
                test: /\.styl$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
              },
              {
                test: /\.(jpe?g|png|gif)$/,
                options: {
                  esModule: false,
                  limit: 4096,
                },
                loader: 'url-loader',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/, 
                options: {
                  esModule: false
                },
                loader: 'file-loader'
              },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".styl", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/assets/static/main.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css',
            ignoreOrder: true
          }),

          new webpack.DefinePlugin({
            
          })
    ]
};