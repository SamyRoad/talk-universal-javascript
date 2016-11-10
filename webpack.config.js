var path = require('path');
var webpack = require('webpack');
var autoprefixer =  require('autoprefixer');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    './src/client/',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:3001/static/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.jpe?g|png|gif|svg?$/,
        loader: 'file?name=[path][name]_[hash].[ext]',
        include: path.join(__dirname, 'src'),
      },
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'not ie < 10'],
    }),
  ],

  watchOptions: {
    poll: true,
  },
};
