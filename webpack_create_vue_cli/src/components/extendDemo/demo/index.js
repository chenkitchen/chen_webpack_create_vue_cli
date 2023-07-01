import plugins from './app.js'
import Vue from 'vue' //脚手架中，需要单独引入，如果是html中的，要在script.src 引入vue之后引入

const DEMO_1 = Vue.extend(plugins)

export default DEMO_1