'use strict';

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
};