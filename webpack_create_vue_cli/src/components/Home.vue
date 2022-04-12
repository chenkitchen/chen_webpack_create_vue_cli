<template>
    <div>
        这是home <span>{{show}}</span>
        <ul>
            <li>点击删除下面的水果</li>
            <li v-for="(item,index) in arr" :key=index @click="hidMy(item,arr)">{{item}}</li>
        </ul>
        <div @click="toastSend">一个使用extend的组件</div>
        <div @click="toastSend1">click my1</div>
        <el-button type="primary" @click="send">默认按钮</el-button>
        <el-button type="primary" @click="sendMsg">查看class</el-button>
        <!-- <div id="MyMessage"></div> -->
    </div>
</template>

<script>
    import {tooltip} from "./tooltip/tooltip"
    import MyMsg from './msg/classMsg'
    export default {
        data() {
            return {
                show:'',
                arr:["apple","peach","banana","oriange","grape"]
            }
        },
        mounted(){
            this.show = this.$route.query.shopid
        },
        methods: {
            hidMy(ele,arr){
                arr.map((item,index)=>{
                    if(ele === item){
                        arr.splice(index,1);
                        alert(item);
                    }
                })
            },
            toastSend(){
                this.$message({ message:'哈哈哈哈哈哈qqqqqqq',duration:500000});
                // this.$toast("hahahhaahahha");
            },
            toastSend1(){
                this.$toast("hahahhaahahha");
            },
            send(){
                console.log('执行啦啦啦啦阿拉');
                tooltip({
                        isShowing: true
                    })
            },
            sendMsg(){
                let temp = new MyMsg();
                temp.show(true)
            }
        },
    }
</script>

<style  scoped>

</style>