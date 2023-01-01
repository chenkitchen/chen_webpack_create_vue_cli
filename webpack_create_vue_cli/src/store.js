import Vue from 'vue'
// import Vuex from './vuex'//引用自定义vuex
import Vuex from 'vuex'

Vue.use(Vuex,'123开始vuex')

export default new Vuex.Store({
    state:{
        age:10
    },
    getters:{//计算，data的computed
         myAge(state){
            state.age + 10;
         }
    },
    mutations:{
        updateAge(state,val){
            return state.age = val
        }
    }
})
