const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
 
module.exports = {
   entry: {
        index: './src/app.js',
        info:'./src/info.js',
    },

   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "[name].bundle.js",
       path: path.resolve(process.cwd(), 'dist'),
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   },
               ],
           },
           {
            test: /\.(jpe?g|png|svg|gif)$/,
            use: {
               loader: "file-loader",
            },
         }         

       ]
   },

   plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),

       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html",
           chunks : ["index"]
       }),
       new HtmlWebpackPlugin({
        template: './src/pages/info.html',
        filename: 'pages/info.html',
        chunks: ['info'],
        
    }),

    new CopyPlugin({
        patterns: [
          {from: path.resolve(__dirname, "src/images/"),
          to: path.resolve(__dirname, "dist/asset/"), 
        },
        ],
      }),
   ],
}