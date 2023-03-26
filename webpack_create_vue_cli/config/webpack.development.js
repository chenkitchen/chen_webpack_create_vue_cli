console.log("这里是开发环境的配置");
const path = require("path"); //引入node 的path模块

module.exports = {
    devtool: 'eval-source-map',//可以进行debugger操作，显示开发源码，source-map显示打包后的代码
    //打包模式
    mode: "development", //none ：不压缩，development：开发模式打包，production:正式版压缩方式
    //入口文件
    // entry: "./src/main.js",
    //打包输出的路径
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../build")
    },
    //loader 配置
    //  module:{
    //     rules:[
    //         {test:/\.vue$/,use:["vue-loader"]},
    //         //这儿要 注意 两个loader 的 顺序，【componse 组合函数，从右边往左边，要是pipe 函数就是 从左边往右边】
    //         {test:/\.css$/,use:["style-loader","css-loader"]}
    //     ]
    // },

};

