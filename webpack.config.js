const path = require('path'), 
      HTMLWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      WebpackShellPlugin = require('webpack-shell-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [ 
    new HTMLWebpackPlugin({ template: path.join(paths.SRC, 'index.html') }),
    new ExtractTextPlugin('style.bundle.css'),
    new WebpackShellPlugin({
      onBuildExit: [
        'cp dist/app.bundle.js server/bin/app.bundle.js',
        'cp dist/app.bundle.js.map server/bin/app.bundle.js.map'
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ use: 'css-loader' })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};