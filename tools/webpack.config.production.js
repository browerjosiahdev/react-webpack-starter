module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-addons-transition-group': 'var React.addons.TransitionGroup',
      'react-addons-pure-render-mixin': 'var React.addons.PureRenderMixin'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style', 'css?modules', 'sass']
            }
        ]
    },
    devtool: 'source-map'
};
