const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const isDev = argv.mode === 'development';
    return {
        entry: [
            isDev && 'react-hot-loader/patch',
            path.resolve(__dirname, './src/index.js')
        ].filter(Boolean),
        output: {
            filename: 'bundle.js'
            // path: path.resolve(__dirname, '/dist')
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                { 
                    test: /\.(js|ts)x?$/, 
                    use: ['babel-loader'],
                    exclude: /node_modules/ 
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        devtool: isDev ? 'cheap-module-source-map' : 'source-map',
        plugins: [
            // isDev && new webpack.HotModuleReplacementPlugin(),
        ].filter(Boolean),
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, './dist'),
            open: true,
            compress: true,
            hot: true,
            port: 8080,
        },
    }
}
