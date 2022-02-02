<template>
    <div>
        这是home <span>{{show}}</span>
        <ul>
            <li>点击删除下面的水果</li>
            <li v-for="(item,index) in arr" :key=index @click="hidMy(item,arr)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:'',
                arr:["apple","peach","banana","oriange","grape"]
            }
        },
        mounted(){
            this.show = this.$route.query.shopid
        },
        methods: {
            hidMy(ele,arr){
                arr.map((item,index)=>{
                    if(ele === item){
                        arr.splice(index,1);
                        alert(item);
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>