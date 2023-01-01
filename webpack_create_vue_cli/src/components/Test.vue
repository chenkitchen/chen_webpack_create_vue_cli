<template>
    <div id="box">
        <h2>测试vue组件文件</h2>
        <div>{{ tips }}</div>
        <div @click="changLang">{{ lang }}</div>
        <div class="navStyle">
            <ul>
                <li>{{ $t('m.music') }}</li>
                <li>{{ $t('m.findMusic') }}</li>
                <li>{{ $t('m.myMusic') }}</li>
                <li>{{ $t('m.friend') }}</li>
                <li>{{ $t('m.musician') }}</li>
                <li>{{ $t('m.download') }}</li>
            </ul>
        </div>
        <div id="stude_vuex_box">
            <h2>学习使用watch监控vuex</h2>
            <div>{{ $store.state.age }}</div>
            <div>{{ age }}</div>
            <button @click="changeAge" id="stude_vuex_button">改变age</button>
        </div>
    </div>
</template>
 
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            tips: "我在学vue..hahhaah",
            lang: "zh-CN",
        }
    },
    methods: {
        changLang() {
            this.lang = this.lang === "zh-CN" ? "en-US" : "zh-CN";
            this.$i18n.locale = this.lang;
        },
        changeAge() {
            let age = this.age
            this.$store.commit('updateAge', ++age)
        }
    },
    computed: {
        ...mapState(['age']),
    },
    watch: {
        age(val) {
            console.log('age发生改变了', val);
        },
        '$store.state.age': function (val) {
            console.log('age的监控方式2', val);
        }
    },
    mounted() {
        let box = document.getElementById('box'), ele = document.getElementById('stude_vuex_button');
        console.log(box.contains(ele));//true
        console.log(box, ele);
    }
}
</script>
 
<style scoped>
#box {
    width: 300px;
    height: 400px;
    background: pink;
    color: green;
    border: 1px solid gold;
}

.navStyle {
    color: red;
}
</style>

