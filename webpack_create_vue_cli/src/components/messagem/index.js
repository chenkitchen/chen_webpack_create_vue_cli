import Vue from 'vue'
import messagess from './MyMessage.vue'

const MessagePlugin =  Vue.extend(messagess);

export default {
    install(Vue){
        //以对象的形式传入参数
        Vue.prototype.$message = function({
            type,
            message,
            duration
        } = {}){
            let nvm ;
            if(!nvm){
                nvm = new MessagePlugin()
                nvm.type = type;//把行参赋给组件
                nvm.message = message;
                nvm.duration = duration
                nvm.$mount(document.createElement('div')) //关键代码，创建一个div模版
                document.body.appendChild(nvm.$el) // 关键代码，追加到页面上去
            }
            return nvm.$el;
        }
    }
}