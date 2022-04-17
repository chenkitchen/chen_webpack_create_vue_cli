<template>
    <div ref='container' class='container'>
        <div class='list'></div>
        <div class='btns'>
            <button @click='create'>动态添加项</button>
        </div>
        <div id="testProps"></div>
    </div>
</template>
<script>
import Vue from 'vue';
import user from './user.vue'; // user.vue 的内容如下，请查看
export default {
    mounted () {
        this.container = this.$refs.container;
        this.list = this.container.getElementsByClassName('list')[0];
    } , 
    methods: {
        create () {
            let div = document.createElement('div');
            div.className = 'item';
            let render = document.createElement('div');
            let myComponent = Vue.extend(user);
            console.log(myComponent);
            const instance = new myComponent({
                data () {
                    // 无法传递
                    _test_: 'test data'
                } , 
                propsData: {
                    // 可以传递，而官网解释说，该属性主要用于测试
                    // 无语了 ... 
                    __id__: 'testid'
                } , 
                provide: {
                    // 无法传递
                    find: this.find
                }
            }).$mount();
            div.appendChild(render);
            this.list.appendChild(div);
            // document.body.appendChild(myComponent.$el);
            // return myComponent
            // return myComponent.$el;
            // console.log(instance.$el);
            document.querySelector(".item").appendChild(instance.$el);
        } , 
        find () {
                console.log('nihao');
            }
    }
};
</script>
<style lang='less'>
    .container{
        background-color: gray;
        width: 300px;
        height: 200px;
        border: 2px solid red;
        .btns{
            display: inline-block;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border: 2px solid green;
        }
    }
</style>