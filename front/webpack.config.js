const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    mobx: './src/mobx/index.jsx',
    'react-context': './src/react-context/index.jsx',
    'react-pure': './src/react-pure/index.jsx',
    redux: './src/redux/index.jsx',
    'unstated-next': './src/unstated-next/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: /node_modules/
      }
    ]
  }
};
