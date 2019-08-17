const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3001,
    publicPath: "http://localhost:3001/dist",
    hot: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  mode: "development",
  performance: {
    hints: false
  },
};
