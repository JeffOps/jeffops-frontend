const webpack = require("webpack");
const path    = require("path");

const BUILD_DIR = path.resolve(__dirname, "dist");
const APP_DIR   = path.resolve(__dirname, "app");


var config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ["babel?cacheDirectory"],
        include: APP_DIR,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
