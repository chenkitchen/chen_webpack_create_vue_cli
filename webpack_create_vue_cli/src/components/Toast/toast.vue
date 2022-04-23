<template>
    <div class="wrap" v-if="show">
        <div>{{text}}</div>
        <div>{{temp1}}</div>
        <button @click="useCallback(temp1)">回调</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show:true,
            temp1 : "你好vbyzc",
            duration: 2000,
        }
    },
    mounted(){
        setTimeout(() => { this.show = false }, this.duration)
    },
    methods:{
        useCallback(text){
            this.callback(text);
        },
    }
}
</script>

<style scoped>
    .wrap{
        color:#fff;
        background-color: rgba(0,0,0,0.8);
        padding: 10px;
        position: fixed;
        top:50%;left: 50%;
        border-radius: 10px;;
    }
</style>