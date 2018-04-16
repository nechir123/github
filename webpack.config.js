const path = require('path');

module.exports = {
  devtool: '#eval-source-map',
  entry: './src/entry.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {

        }
      }
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {

          }
    }
  },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {

        }
      }
    }]
}

};
