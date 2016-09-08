import path from 'path';

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'd3grid.js',
    libraryTarget: 'var',
    library: 'D3Grid'
  }
};
