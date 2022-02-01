console.log("这里是生产境的配置");
const path = require("path"); //引入node 的path模块
module.exports = {
    //打包模式
    mode: "production", //none ：不压缩，development：开发模式打包，production:正式版压缩方式
    //入口文件
    entry: "./src/components/test.js",
    //打包输出的路径
    output: {
        path: path.resolve(__dirname, "distTest"),
        filename: "indexTest.js",
    },
};

