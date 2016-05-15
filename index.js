'use strict';

const express = require('express');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');

const compiler = webpack({
  // configuration
  entry: {
    'app.js': './src/app.js',
  },
  output: {
    path: '/statics',
    publicPath: '/',
    filename: '[name]',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
});

app.use(webpackDevMiddleware(compiler, {
    // options
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

/* eslint no-console:"off" */
app.listen(3000, () => {
  console.log('server listening on port 3000');
});
