module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname,
    // must be served by the server
    filename: "build/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};