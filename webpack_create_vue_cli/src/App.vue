<template>
    <div>
        <TestVue></TestVue>
        <!--留坑，非常重要-->
        <!-- <router-link to="/home" @click="sendQuery">go home</router-link>	 -->
        <span @click="sendQuery">点击</span>
        <!-- <router-link to="/hello">sey hello</router-link> -->
        <span @click="sendParams">点击2</span>
        <span @click="$router.push({path:'/temp',params:{key:'dfdsf'},query: {key: '12334'}})">点击3</span>
        <span @click="$router.push({path:'/testAjax',params:{key:'dfdsf'},query: {key: '12334'}})">点击4</span>
        <span @click="$router.push({path:'/testSearch',params:{key:'dfdsf'},query: {key: '12334'}})">点击5</span>
        <span @click="$router.push({path:'/testSearch1',params:{key:'dfdsf'},query: {key: '12334'}})">点击6</span>
		<router-view></router-view>		
    </div>
</template>
 
<script>
//引入Test.vue 组件
import TestVue from '@com/Test.vue'
export default {
    components:{TestVue},
    data(){
        return{
            item:{"id":234343},
        }
    },
    methods: {
        sendQuery(){
            this.$router.push({
            path: '/home', query:{shopid: this.item.id}
        });
         },
        sendParams(){
            this.$router.push({
                name: 'hello', params:{shopid: this.item.id}//只能是push name
            });
        }
    },  
}
</script>
 
<style>
</style>

