import Vue from "vue"; //引入vue的esm
import VueI18n from 'vue-i18n';
import App from "./App.vue" //引入vue入口组件
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Home from './components/Home.vue';
import Hello from './components/Hello.vue';
import HomeSon from './components/HomeSon.vue';
import toastRegistry from "./components/Toast/toast_index.js";
import message from './components/messagem/index'
import Temp from './views/temp.vue'
import TestAjax from './views/testAjax.vue'
import TestSearch from './views/testSearch.vue'
import TestSearchAxios from './views/testSearchAxios.vue'
import TestGenerator from './views/testGenerator.vue'
import videojs from "video.js";
import "video.js/dist/video-js.css";

import { hasBtnPremission } from "./btnPremission";

import './common/imgView.js'

// Vue.prototype.$message= message;

import directives from "./directives";
Object.entries(directives).forEach(([id, define]) => {//枚举出键和值
  Vue.directive(id, define);
})

import store from './store'//引入自己公共store

Vue.use(ElementUI);
Vue.use(message);
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(VueRouter);//挂载属性
Vue.use(toastRegistry);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$has = hasBtnPremission //挂载全局，自定义方法
Vue.prototype.$video = videojs;

// const toast = new toastRegistry();
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
    {
      path: '/home', name: 'app', component: Home,
      children: [{
        path: '/son',
        component: HomeSon
      }],
      redirect: true
    },
    {
      path: '/hello', name: 'hello', component: Hello,
      children: [{
        path: '/son',
        // name:'detail',
        component: HomeSon
      }]
    },
    {
      path: '/temp', name: 'temp', component: Temp,
    },
    {
      path: '/testAjax', name: 'testAjax', component: TestAjax,
    },
    {
      path: '/testSearch', name: 'testSearch', component: TestSearch,
    },
    {
      path: '/testSearch1', name: 'testSearch1', component: TestSearchAxios,
    },
    {
      path: '/testSearch2', name: 'testSearch2', component: TestGenerator,
    },
  ]
});

//实例化一个 Vue
// new Vue({
//     //元素id
//     el:"#app",
//     //引入模块
//     i18n,
//     router,
//     toast,
//     //组件
//     components:{App},
//     //模版
//     template:'<div><App /></div>'
// })
new Vue({
  name: 'main',
  store,//会给当前的每个vue实例添加$Store
  render: h => h(App), i18n, router,
}).$mount('#app')

