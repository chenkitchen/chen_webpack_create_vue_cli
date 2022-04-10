const path = require("path") //引入node 的path模块
//引入 html-webpack-plugin 插件，处理js，html，css 打包
const HWP = require("html-webpack-plugin");
const VLP = require('vue-loader/lib/plugin');//要在plugins中使用

module.exports = (evn) => {
    console.log('evn', evn);
    evn = evn || {};
    return {
        //打包模式
        //mode: 'development', //none ：不压缩，development：开发模式打包，product:正式版压缩方式
        //入口文件
        entry: './src/main.js',
        //打包输出的路径
        // output: {
        //     // path: path.resolve(__dirname, "distTest"),
        //     filename: 'indexTest.js'
        // },
        //loader 配置
        module: {
            rules: [
                { test: /\.vue$/, use: ["vue-loader"] },
                //这儿要 注意 两个loader 的 顺序，【componse 组合函数，从右边往左边，要是pipe 函数就是 从左边往右边】
                { test: /\.css$/, use: ["style-loader", "css-loader"] },
                //less
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
            ]
        },
        performance: {
            hints: 'warning', // 枚举 false关闭
            maxEntrypointSize: 100000000, // 最大入口文件大小
            maxAssetSize: 100000000, // 最大资源文件大小
            assetFilter: function (assetFilename) { //只给出js文件的性能提示
                return assetFilename.endsWith('.js');
            }
        },
        resolve: {
            alias: {
                // 添加目录便于引用
                '@com': path.resolve(__dirname, './src/components'),
                '@c': path.resolve(__dirname, './src/common'),
            },
        },
        plugins: [
            new HWP({
                //模版文件
                template: 'index.html',
                //输出的文件名
                filename: "index.html"
            }),
            new VLP()
        ],
        // devServer:{
        //     //同package配置
        //     hot:true,
        //     open:false,//启动时自动打开浏览器
        //     port:3005,//启动的运行端口号
        //     // contentBase:"./dist"//webpack4后失效由static代替
        //     static:'../webpack_create_vue_cli',
        // }, 
        ...(evn.developmont ? require("./config/webpack.development") : require("./config/webpack.production"))
    }

}

