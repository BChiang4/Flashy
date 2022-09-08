const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry : path.join(__dirname,'./src/index.js'),
    output : {
        path: path.resolve(__dirname,'dist')
    },
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
        ]
    },
    devServer:{
        static: path.resolve('dist'),
        port: 8080,
        proxy: {
            '/': 'http://localhost:3000'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','index.html')
        }),
    ]
}