const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js']
  },
  plugins: [
    new ExtractTextPlugin('./assets/bundle.css'),
  ],
  entry: [
    './src/sass/app.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /(node_modules)/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader',
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  require('postcss-cssnext')()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // Related to: https://github.com/webpack-contrib/sass-loader/issues/351
                outputStyle: 'compact',
                includePaths: [
                  path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, 'node_modules/compass-mixins/lib')
                ]
              }
            },
            {
              loader: '@epegzz/sass-vars-loader',
              options: {
                files: [
                  path.resolve(__dirname, 'src/styles/colours.js')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  devtool: 'source-map'
}
