import Vue from 'vue'
import demo from './demo.vue'

export var tooltip = (function(){
    
    var defaults = {
        isShowing:true,
    }
    return function(options){
        for(var attr in options){
            defaults[attr] = options[attr];
        }
        var Tooltip = Vue.extend(demo);
        var vm = new Tooltip({
            el:document.createElement('div'),
            data:{
                isShowing:defaults.isShowing,
            },
            methods:{
                toggleShow() {
                    this.isShowing = !this.isShowing;
                  }
            }
        });
        document.body.appendChild(vm.$el)
    }

})()//两个括号是让调用优先级恢复
