const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports ={
    output: {
        path: path.resolve(__dirname, "build")
      },

      module:{
          rules:[
              {
                test:/\.scss$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"],
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
      plugins:[new MiniCssExtractPlugin()],
      devtool:"source-map",
      devServer:{
          contentBase:"./build",
          hot:true,
          port:9000
      }
}