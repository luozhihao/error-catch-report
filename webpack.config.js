var path = require('path');

module.exports = {
	devtool: '#source-map',
	mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client')
    }
}