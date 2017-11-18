// webpack plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {

  entry: {
    'app': [
      './src/examples/app.js'
    ],
    'vendor': './src/vendor.js',
    'lib': [
      './src/map/index.js'
    ]
  },

  resolve: {

    extensions: ['.js', '.scss', '.css'],

    modules: ['node_modules']

  },

  module: {

    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000'
      }

    ]

  },

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor', 'lib'],
      minChunks: Infinity
    }),
    new LoaderOptionsPlugin({
      options: {
        worker: {
          output: {
            filename: "hash.worker.js",
            chunkFilename: "[id].hash.worker.js"
          }
        }
      }
    })
  ]

};
