const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new TerserWebpackPlugin({
            parallel: true, 
            extractComments: false, 
            terserOptions: {
              compress: { 
                drop_console: true,
                pure_funcs: ['console.log']
              },
              output: {
                comments: true
              }
            }
          }),
          new CssMinimizerPlugin({

          }),
        ],
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 8,
            maxInitialRequests: 6,
            minSize: 10000,
            cacheGroups: {
              react: { // 分离react和react-dom
                name: 'chunk-react',
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, // 匹配规则
                priority: 20 // 匹配优先级
              },
              vendors: { // 其他npm依赖（生产环境）
                name: 'chunk-vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: 'initial'
              },
              common: { // 组件公共抽离
                name: 'chunk-common',
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true
              }
            }
          }
      },
}

module.exports = merge(baseConfig, prodConfig);