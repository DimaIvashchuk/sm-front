const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

let mode = 'development';;
let target = 'web';
const isProd = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,
  entry: {
    app: ['@babel/polyfill',  path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/[name].bundle.js',
    publicPath: '/',
    assetModuleFilename: 'static/media/[name][ext]'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: isProd,
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'public/assets')
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].bundle.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' }
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.ENV_DEBUG': JSON.stringify(process.env.ENV_DEBUG),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
  },
  stats: 'minimal',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    hot: true,
    liveReload: false,
    port: process.env.FE_PORT || 3000,
    historyApiFallback: true,
    open: true
  }
};