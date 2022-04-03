<template>
    <div v-if="isShowing" id="box">
        一个弹窗组件
        <button @click="toggleShow">关闭</button>
    </div>
</template>

<script>
    
    export default {
        name:'tooltip'
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