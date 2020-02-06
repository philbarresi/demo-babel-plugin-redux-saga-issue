const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = process.cwd();

// so that we can use the same webpack config across multiple projects
// this file contains settings each webpack config will reference

// path reference to our source code.
const jsSourcePath = path.join(projectRoot, "/src/js");

const entryPoints = {
  app: [path.join(projectRoot, "/src/js/index.js")]
};

module.exports = {
  // none allows us to configure the optimizations we want
  mode: "production",

  entry: () => entryPoints,

  output: {
    path: path.join(projectRoot, "/dist/"),
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js"
  },

  resolve: {
    alias: {
      "testApp.actions": path.join(projectRoot, "/src/js/actions"),
      "testApp.api": path.join(projectRoot, "/src/js/api"),
      "testApp.components": path.join(projectRoot, "/src/js/components"),
      "testApp.config": path.join(projectRoot, "/src/js/config"),
      "testApp.constants": path.join(projectRoot, "/src/js/constants"),
      "testApp.reducers": path.join(projectRoot, "/src/js/reducers"),
      "testApp.sagas": path.join(projectRoot, "/src/js/sagas"),
      "testApp.utils": path.join(projectRoot, "/src/js/utils"),
      "testApp.images": path.join(projectRoot, "/src/images"),
      "testApp.html": path.join(projectRoot, "/src/html"),
      "testApp.text": path.join(projectRoot, "/src/js/text"),
      appText: path.join(projectRoot, "/src/js/text")
    }
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: jsSourcePath,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              presets: [
                [
                  require.resolve("@babel/preset-env"),
                  {
                    useBuiltIns: "usage",
                    corejs: 3
                  }
                ],
                require.resolve("@babel/preset-react")
              ],
              plugins: ["babel-plugin-redux-saga"],
              compact: true
            }
          },
          {
            test: /\.html$/,
            include: [path.join(projectRoot, "/src/html/")],
            loader: "html-loader"
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(projectRoot, "/src/templates/template.html"),
      filename: "index.html",
      title: "test page"
    })
  ],

  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },

  performance: {
    hints: false
  }
};
