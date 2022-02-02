<template>
<div id="box">
<h2>测试vue组件文件</h2>
<div>{{tips}}</div>
 <div @click="changLang">{{lang}}</div>
 <div class="navStyle">
     <ul>
         <li>{{$t('m.music')}}</li>
         <li>{{$t('m.findMusic')}}</li>
         <li>{{$t('m.myMusic')}}</li>
         <li>{{$t('m.friend')}}</li>
         <li>{{$t('m.musician')}}</li>
         <li>{{$t('m.download')}}</li>
     </ul>
 </div>
</div>
</template>
 
<script>
export default {
    data(){
        return {
            tips:"我在学vue..hahhaah",
            lang:"zh-CN",
        }
    },
    methods: {
        changLang(){
            this.lang = this.lang === "zh-CN" ? "en-US" : "zh-CN" ;
            this.$i18n.locale = this.lang;
        }
    },
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
.navStyle{
    color: red;
}
</style>

