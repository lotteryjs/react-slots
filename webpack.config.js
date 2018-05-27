const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    'slots.core': './src/core/index.ts',
    'slots.react': './src/ReactUI/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: "Slots",
    libraryTarget: "umd",
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['ts-loader'],
        exclude : [
          'node_modules'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]',
              camelCase: 'only'
            },
          },
          {
            loader: require.resolve('sass-loader')
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    'Android >= 3.2',
                    'Safari >= 6'
                  ]
                }),
              ],
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:4].[ext]',
              context: ''
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ForkTsCheckerWebpackPlugin({
      tslint: './tslint.json'
    }),
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};

module.exports = config;
