module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react']}
        }]
      }
    ]
  }
};
