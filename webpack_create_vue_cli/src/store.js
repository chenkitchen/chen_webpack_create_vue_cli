import Vue from 'vue'
import Vuex from '../../vuex'//引用自定义vuex

Vue.use(Vuex,'123开始vuex')

export default new Vuex.Store({
    state:{
        age:10
    },
    getters:{//计算，data的computed
         myAge(state){
             return state.age + 10;
         }
    }
})
