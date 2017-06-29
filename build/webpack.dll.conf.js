// var webpack = require('webpack')
// var path = require('path')
// module.exports = {
//     entry: {
//         lib: ['vue', 'better-scroll', 'vue-router', 'fastclick']
//     },
//     output: {
//         path: path.resolve(__dirname, '../dist'),
//         filename: '[name].js',
//         library: '[name]'
//     },
//     plugins: [
//         new webpack.DllPlugin({
//             context: __dirname,
//             path: 'manifest.json',
//             name: '[name]'
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         })
//     ]
// }
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.esm.js', 'better-scroll', 'vue-router', 'fastclick', 'babel-polyfill', 'vue-lazyload', 'axios']
    },
    output: {
        path: path.join(__dirname, '../dist/static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};