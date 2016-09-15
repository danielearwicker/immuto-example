var webpack = require('webpack');

module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/built'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel-loader?presets[]=es2015!ts-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  externals: {
  }
}
