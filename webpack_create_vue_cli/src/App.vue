<template>
    <div>
        <TestVue></TestVue>
        <!--留坑，非常重要-->
        <!-- <router-link to="/home" @click="sendQuery">go home</router-link>	 -->
        <div class="placeholder"></div>
        <span id="span_dom" @click="sendQuery">{{ differentClick[0] | myfilters(this) }}</span>
        <!-- <router-link to="/hello">sey hello</router-link> -->
        <span id="span_dom_0" @click="sendParams">{{ differentClick[1] | myfilters(this) }}</span>
        <span id="span_dom_1" @click="$router.push({ path: '/temp', params: { key: 'dfdsf' }, query: { key: '12334' } })">{{
            differentClick[2] | myfilters(this)
        }}</span>
        <span id="span_dom_2"
            @click="$router.push({ path: '/testAjax', params: { key: 'dfdsf' }, query: { key: '12334' } })">{{
                differentClick[3] | myfilters(this)
            }}</span>
        <span id="span_dom_3"
            @click="$router.push({ path: '/testSearch', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击5</span>
        <span id="span_dom_4"
            @click="$router.push({ path: '/testSearch1', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击6</span>
        <span id="span_dom_5"
            @click="$router.push({ path: '/testSearch2', params: { key: 'dfdsf' }, query: { key: '12334' } })">点击7</span>
        <router-view></router-view>
        <div class="test_class">这是一个测试dom</div>

        <div v-is="'style'">
            .test_class{color:red;}
        </div>
        <div v-is="'script'">
            console.log('p')
        </div>
        <component is="style">
            .test_class{color:red;}
        </component>
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
            differentClick: ['点击', '点击2', '点击3', '点击4', '点击5', '点击6', '点击7'],
            changeClick: ['点击改变了', '点击改变了2', '点击改变了3', '点击改变了4', '点击改变了5', '点击改变了6', '点击改变了7']
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
    filters: {
        myfilters(val, that) {
            if (that.differentClick.includes(val)) {
                return that.changeClick[that.differentClick.indexOf(val)]
            }
            return val
        }
    }
}
</script>
 
<style scoped>
.placeholder {
    width: 100%;
    height: 30px;
    background: gray;
}

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

