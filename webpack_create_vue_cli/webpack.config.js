const path = require("path") //引入node 的path模块
module.exports = (env)=>{
    console.log('env',env);
    return {
        //打包模式
    mode: 'development', //none ：不压缩，development：开发模式打包，product:正式版压缩方式
    //入口文件
    entry: './src/components/test.js',
    //打包输出的路径
    output: {
        // path: path.resolve(__dirname, "distTest"),
        filename: 'indexTest.js'
    },
    devServer:{
        //同package配置
        hot:true,
        open:false,//启动时自动打开浏览器
        port:3005,//启动的运行端口号
        // contentBase:"./dist"//webpack4后失效由static代替
        static:'../webpack_create_vue_cli',
    }, 
    }
}

