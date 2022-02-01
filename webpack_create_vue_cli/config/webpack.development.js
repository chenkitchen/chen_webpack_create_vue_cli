//引入 html-webpack-plugin 插件，处理js，html，css 打包
var HWP=require("html-webpack-plugin");
var VLP=require('vue-loader/lib/plugin');//要在plugins中使用
 
console.log("这里是开发环境的配置");
 
 
module.exports = {
    //打包模式
    mode: "development", //none ：不压缩，development：开发模式打包，production:正式版压缩方式
    //入口文件
    entry: "./src/main.js",
    //打包输出的路径
    output: {
        filename: "indexTest.js",
    },
     //loader 配置
     module:{
        rules:[
            {test:/\.vue$/,use:["vue-loader"]}
        ]
    },
    plugins:[
        new HWP({
            //模版文件
            template:'index.html',
            //输出的文件名
            filename:"index.html"
        }),
        new VLP()
    ]
};

