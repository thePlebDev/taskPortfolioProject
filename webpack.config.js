const path = require("path")


module.exports ={
    output: {
        path: path.resolve(__dirname, "build")
      },

      module:{
          rules:[
              {
                  test:/\.js$/,
                  exclude:/node_modules/,
                  use:{
                      loader:"babel-loader"
                  }
              }
          ]
      },
      devtool:"source-map"
}