var path = require('path'); 
module.exports= {
    entry: __dirname,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'builded.js'
    },
    watch:true,
    watchOptions:{
        // aggrigateTimeout: 100
    },
    module: {
        // preloaders:[{
        //     test.js: /\.js/,
        //     loader: 'eslint-loader',
        //     exclude: /node_modules/,
        //     query:{
        //         rules: {
        //             semi:0
        //             }
        //         }
        //     }
        // ],
        loaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/,
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     loaders:['style-loader', 'css-loader']
            // }
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     loaders:['style-loader', 'css-loader', 'sass-loader']
            // }

        ]

    },
    resolve:{
        extensions:['js', 'cofee','','ts'],
        alias:{
            // api:path.resolve(__dirname,'api.js')
        }
    }
    // watch = {

    // }
}