const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports ={
    output: {
        path: path.resolve(__dirname, "build")
      },

      module:{
          rules:[
              {
                  test:/\.(png|jpeg|gif|svg)$/i,
                  type:"assets/resources"
              },
              {
                test:/\.scss$/i,
                use:[
                    {loader:MiniCssExtractPlugin.loader,options:{publicPath:""}},
                    "css-loader","postcss-loader","sass-loader"],
              },
              {
                  test:/\.js$/,
                  exclude:/node_modules/,
                  use:{
                      loader:"babel-loader"
                  }
              }
          ]
      },
      plugins:[new CleanWebpackPlugin(),new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
          template:"./src/index.html"
      })],
      devtool:"source-map",
      devServer:{
          contentBase:"./build",
          hot:true,
          port:9000
      }
}