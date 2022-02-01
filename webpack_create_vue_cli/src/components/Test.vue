<template>
<div id="box">
<h2>测试vue组件文件</h2>
<div>{{tips}}</div>
 
</div>
</template>
 
<script>
export default {
    data(){
        return {
            tips:"我在学vue..hahhaah"
        }
    }
}
</script>
 
<style scoped>
#box{
    width: 300px;
    height: 400px;
    background: pink;
    color: green;
    border: 1px solid gold;
}
</style>

