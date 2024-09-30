var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/App.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [{
                    loader: 'ts-loader',
                }],
                exclude: /node_modules/,
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts','.tsx']
    },
    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8000,
    }
};