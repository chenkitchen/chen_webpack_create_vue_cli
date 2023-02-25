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

        <!-- <div v-is="'style'">
            .test_class{color:red;}
        </div>
        <div v-is="'script'">
            console.log('p')
        </div> -->
        <component is="style">
            .test_class{color:red;}
        </component>
        <el-button>默认按钮</el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <button @click="showByClick" title="点击显示内容" @mouseover="hitTitle" @mouseleave="addTitle">点击显示内容</button>
        </el-popover>

        <el-tooltip effect="dark" :content="showByClickValue" placement="bottom-start">
            <div v-show="showByClickKey">{{ showByClickValue }}</div>
        </el-tooltip>
    </div>
</template>
 
<script>
import Vue from 'vue';
import { Tooltip, Popover } from 'element-ui';
//引入Test.vue 组件
import TestVue from '@com/Test.vue'

Vue.use(Tooltip);
Vue.use(Popover);
export default {
    components: { TestVue },
    data() {
        return {
            item: { "id": 234343 },
            differentClick: ['点击', '点击2', '点击3', '点击4', '点击5', '点击6', '点击7'],
            changeClick: ['点击改变了', '点击改变了2', '点击改变了3', '点击改变了4', '点击改变了5', '点击改变了6', '点击改变了7'],
            showByClickKey: false,
            showByClickValue: '这是一段点击后才能看到的文本'
        }
    },
    methods: {
        hitTitle(e) {
            // console.log(e);
            e.relatedTarget.removeAttribute('title')
        },
        addTitle(e) {
            // console.log(e);
            e.relatedTarget.setAttribute('title', '点击显示内容')
        },
        showByClick() {
            this.showByClickKey = !this.showByClickKey
        },
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
.test_hit_title {
    pointer-events: none;
}

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

