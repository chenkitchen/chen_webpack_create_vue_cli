import Vue from 'vue'
// import Vuex from './vuex'//引用自定义vuex
import Vuex from 'vuex'

import metaStore from './metaStore'

Vue.use(Vuex, '123开始vuex')

export default new Vuex.Store({
    state: {
        age: 10,
        permission: ['1234567', '34567', '2345'] //store 中添加 有权限的id
    },
    getters: {//计算，data的computed
        myAge(state) {
            state.age + 10;
        }
    },
    mutations: {
        updateAge(state, val) {
            return state.age = val
        }
    },
    modules: {
        metaStore
    }
})
