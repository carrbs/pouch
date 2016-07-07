module.exports = {
    entry: ['./src/client.js'],
    output: {
        path: __dirname + '/static/js',
        filename: 'bundle.js',
        publicPath: '/js'
    },
    module: {
        loaders: [{loader: 'babel'}]
    }
}


