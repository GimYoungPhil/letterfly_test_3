const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]}
    ]
  },

   devServer: {
    historyApiFallback: true,
    noInfo: false,
    host: '0.0.0.0'
  },

  devtool: '#eval-source-map'
};
