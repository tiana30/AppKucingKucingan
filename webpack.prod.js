const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

 
module.exports = merge(common, 
{
    entry: {
        app: './src/app.js',
        main:'./src/scripts/view/main.js',
        info: './src/scripts/view/main-info.js',
      },

   mode: "production",
   module: {
       rules: [
           {
            test: /\.js$/,
               exclude: "/node_modules/",
               use: [
                   {
                       loader: "babel-loader",
                       options: {
                           presets: ["@babel/preset-env"]
                       }
                   }
               ]
            },

            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader',
                ],
            }
       ]
   },

   plugins: [new htmlWebpackPlugin({
    title: 'main',
    filename: 'index.html',
    chunks: ['main'],
    template: './src/index.html',
}),
    new htmlWebpackPlugin({
        title: 'info',
        filename: 'info.html',
        chunks: ['info'],
        template: './src/page/info.html',
    }),
  ], 

output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
   
})