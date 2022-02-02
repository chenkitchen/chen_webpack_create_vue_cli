import Vue from "vue/dist/vue.esm"; //引入vue的esm
import VueI18n from 'vue-i18n';
import App from "./App.vue" //引入vue入口组件
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Hello from './components/Hello.vue';
import HomeSon from './components/HomeSon.vue';

Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(VueRouter);//挂载属性

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./common/lang/zh'),   // 中文语言包
      'en-US': require('./common/lang/en')    // 英文语言包
    }
})
const router = new VueRouter({
	//routes
	routes: [
	//一个个link对象
    {path: '/home',name: 'app',component: Home,
        children: [{
            path: '/son',
            component: HomeSon
    }]
    },
    {path: '/hello',name: 'hello',component: Hello,
        children: [{
            path: '/son',
            // name:'detail',
            component: HomeSon
    }]
    }
  ]
});

//实例化一个 Vue
new Vue({
    //元素id
    el:"#app",
    //引入模块
    i18n,
    router,
    //组件
    components:{App},
    //模版
    template:'<div><App /></div>'
})

