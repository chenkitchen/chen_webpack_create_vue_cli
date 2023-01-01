<template>
    <div>
        <TestVue></TestVue>
        <!--留坑，非常重要-->
        <!-- <router-link to="/home" @click="sendQuery">go home</router-link>	 -->
        <span id="span_dom" @click="sendQuery">点击</span>
        <!-- <router-link to="/hello">sey hello</router-link> -->
        <span id="span_dom_0" @click="sendParams">点击2</span>
        <span id="span_dom_1"
            @click="$router.push({ path: '/temp', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击3</span>
        <span id="span_dom_2"
            @click="$router.push({ path: '/testAjax', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击4</span>
        <span id="span_dom_3"
            @click="$router.push({ path: '/testSearch', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击5</span>
        <span id="span_dom_4"
            @click="$router.push({ path: '/testSearch1', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击6</span>
        <span id="span_dom_5"
            @click="$router.push({ path: '/testSearch2', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击7</span>
        <router-view></router-view>
    </div>
</template>
 
<script>
//引入Test.vue 组件
import TestVue from '@com/Test.vue'
export default {
    components: { TestVue },
    data() {
        return {
            item: { "id": 234343 },
        }
    },
    methods: {
        sendQuery() {
            this.$router.push({
                path: '/home', query: { shopid: this.item.id }
            });
        },
        sendParams() {
            this.$router.push({
                name: 'hello', params: { shopid: this.item.id }//只能是push name
            });
        }
    },
}
</script>
 
<style scoped>
span:not(#span_dom) {
    display: block;
    width: 200px;
    background: red;
    color: white;
}

/* span:not(#span_dom):not(#span_dom_1) {
    font-weight: 800;
} */
span:not(#span_dom, #span_dom_1) {
    font-weight: 800;
}
</style>

