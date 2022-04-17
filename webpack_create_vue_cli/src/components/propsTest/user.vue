<template>
    <div>
        {{say}}dddd
    </div>
</template>
<script>
export default {
    data () {
        return {
            say: 'nihao'
        };
    } , 
    props: ['__id__'] , 
    inject: ['find'] , // 这个 vue 会弹出警告
    mounted () {
         this.$nextTick(() => {
             console.log(this.$parent); // undefined
             console.log(this._test_); // undefined
             console.log(this.__id__); // testid
             console.log(this.find); // undefined 
         });
    }
};
</script>