const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
    header: './src/header.js',
    sidebar: './src/sidebar.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo',
      template: './src/template.html',
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map', 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};