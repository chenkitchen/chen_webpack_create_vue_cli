<template>
    <div v-if="isShowing" id="box">
        一个弹窗组件
        <button @click="toggleShow">关闭</button>
        <span>{{message}}</span>
        <span>{{msg}}</span>
        <el-input v-model="sendMsg" placeholder="给另一个组件的内容"  v-focusMy></el-input>
        <button @click="sendOptionsCom">发送</button>
        <button @click="close">另一个关闭</button>
    </div>
</template>

<script>
    import {toggle} from './mixins.js'
    export default {
        name:'tooltip',
        mixins:[toggle],
        data(){
            return {
                message:'',
                sendMsg:'',
            }
        }
    }
        
    
</script>

<style  scoped>
#box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 100px;
    background-color: pink;
    font-size: 20px;
}
</style>