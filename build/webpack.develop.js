const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    overlay: {
      errors: true,
      warning: true
    },
    host: process.env.HOST,
    port: process.env.PORT
  }
});
