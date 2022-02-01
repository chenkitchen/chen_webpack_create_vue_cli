console.log("这里是开发环境的配置");
 
module.exports = {
    //打包模式
    mode: "development", //none ：不压缩，development：开发模式打包，production:正式版压缩方式
    //入口文件
    entry: "./src/components/test.js",
    //打包输出的路径
    output: {
        filename: "indexTest.js",
    },
};

