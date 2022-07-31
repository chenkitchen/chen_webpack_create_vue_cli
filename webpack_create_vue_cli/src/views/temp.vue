<template>
    <div>
        <input type="text" v-model="person.name">
        <input type="text" v-model="catchVal">
        <ul>
            <li v-for="(val,keys,idx) in person" :key="idx">{{keys}}:{{val}}</li>
        </ul>
        <!-- <div>{{timerInner}}</div> -->
        <div>{{catchVal}}</div>
        <button @click="recoveryData">复原</button>
        <button @click="changeData">改变query入参</button>
    </div>
</template>

<script>
    const defaultData={
        name:"zhangsan",
        age:31,
    }
    export default {
        
        data(){
            return {
                person:Object.assign({},defaultData),
                // timerInner:this.currentTimer(),
                catchVal:this.$route.query.key,
            }
        },
        mounted(){
            console.log(this.$route.params.key,this.$route.query.key);
        },
        methods:{
            recoveryData(){
                this.person = Object.assign({},defaultData)
            },
            currentTimer(){
                return new Date().toString
            },
            changeData(){
                Object.assign(this.$data,this.$options.data.call(this))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>