const path = require('path')
const { dependencies, version } = require('../package.json')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const util = require('./util');

let mainConfig = {
  entry: {
    main: path.join(__dirname, '../src/main/index.js')
  },
  externals: [
    ...Object.keys(dependencies || {})
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: path.join(__dirname, '../.eslintrc.js'),
            formatter: require('eslint-friendly-formatter')
          }
        }
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/SimpleNote'),
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  },
  target: 'electron-main'
}

const BASE_ENV_VARIABLES = {
  APP_VERSION: `"${version}"`,
  IS_DEV: "true",
}

/**
 * Adjust mainConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  BASE_ENV_VARIABLES.SERVER_ENV = `"${process.env.SERVER_ENV}"`

  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`
    }),
    new webpack.DefinePlugin({
      'process.env': BASE_ENV_VARIABLES,
    }),
  );
}

/**
 * Adjust mainConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  const envVariables = {
    ...BASE_ENV_VARIABLES,
    NODE_ENV: "'production'"
  }

  delete envVariables.IS_DEV;
  delete envVariables.SERVER_ENV;

  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': envVariables,
    })
  )
}

module.exports = mainConfig
