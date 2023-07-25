const path = require("path") //引入node 的path模块
//引入 html-webpack-plugin 插件，处理js，html，css 打包
const HWP = require("html-webpack-plugin");
const VLP = require('vue-loader/lib/plugin');//要在plugins中使用
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = (evn) => {
    console.log('evn', evn);
    evn = evn || {};
    return {
        //打包模式
        //mode: 'development', //none ：不压缩，development：开发模式打包，product:正式版压缩方式
        //入口文件
        // devtool: 'eval-source-map',
        entry: {
            indexText: './src/main.js',
            messagem: './src/components/messagem/index.js',
            classMsg: './src/components/msg/classMsg.js'
        },
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
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
                { test: /.(png | jpg | gif | svg)$/, use: ['url-loader'] }

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
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
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
            new HWP({
                //模版文件
                template: 'transtion.html',
                //输出的文件名
                filename: "index1.html"
            }),
            new VLP(),
            // new BundleAnalyzerPlugin()  // 使用默认配置
            // 在vue-cli生成的文件的基础上，只有下面这个才是我们要配置的
            // new PrerenderSPAPlugin({ //TODO: 没有丝毫效果
            // 生成文件的路径，也可以与webpakc打包的一致。
            // 下面这句话非常重要！！！
            // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
            // staticDir: path.resolve(__dirname, "../dist"),

            // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
            // routes: ['/'],

            // 这个很重要，如果没有配置这段，也不会进行预编译
            // renderer: new Renderer({
            //     inject: {
            //         foo: 'bar'
            //     },
            //     // headless: false,
            //     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            //     renderAfterDocumentEvent: 'render-event'
            // })
            // })
        ],
        // devServer:{
        //     //同package配置
        //     hot:true,
        //     open:false,//启动时自动打开浏览器
        //     port:3005,//启动的运行端口号
        //     // contentBase:"./dist"//webpack4后失效由static代替
        //     static:'../webpack_create_vue_cli',
        // }, 
        ...(evn.development ? require("./config/webpack.development") : require("./config/webpack.production"))
    }

}

