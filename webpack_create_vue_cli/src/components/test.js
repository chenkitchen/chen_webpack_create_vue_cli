import VueTest from 'vue/dist/vue.esm'; //引入vue的esm
const vm = new VueTest({
    el: "#app",
    data: {},
    components: {
        //自己写的一个test 组件
        test: {
            data() {
                return {
                    tips: "我在学前端vue和webpack创建项目"
                }
            },
            template: '<div>{{tips}}</div>' //组件模版内容
        }
    },
    template: '<div> <test></test> </div>' //挂载 test 组件
})

