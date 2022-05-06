let Vue;//vue的构造函数

class Store{//new 传一个对象
    constructor(options){
        this._s = new Vue({//改成一个vue来保存
            data:{
                state:options.state
            }
        })
        let innerGetters = options.getters || {};
        this.getters ={};//私有getters
        Object.keys(innerGetters).forEach((attrName)=>{//遍历这个对象
            Object.defineProperty(this.getters,attrName,{
                get:()=>{//用箭头，保留执行时的this指向，可以获取到this.state
                    return innerGetters[attrName](this.state)//私有变量被get就执行，也就会重新获取state
                }
            })
        })
    }
    get state(){
        return this._s.state;//获取vue的data中的属性
    }
   
}

//vue的组件渲染是，深度优先
const install = (_vuex,attr) =>{//可以通过use来传入参数
    console.log('install',attr);
    Vue = _vuex;
    //希望每个组件都能拿到state
    //就需要给每个组件注册一个this.$Store属性

    Vue.mixin({
        beforeCreate() {//在组件创建之前
            console.log(this.$options.name,'>>>>>>>>>>');
            //如何识别谁是父级，子级
            //如果是儿子，就把Store加给儿子
            if(this.$options && this.$options.Store){
                this.$Store = this.$options.Store;
            }else{
                this.$Store = this.$parent && this.$parent.$Store;//不一定是有父亲，可能是new
            }

        },
    })
}

export default{
    install,
    Store//将这个类导出
}
