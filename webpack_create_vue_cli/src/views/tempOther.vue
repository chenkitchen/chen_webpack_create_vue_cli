<template>
    <div>
        <input type="text" v-model="person.name">
        <ul>
            <li v-for="(val,keys,idx) in person" :key="idx">{{keys}}:{{val}}</li>
        </ul>
        <button @click="recoveryData">复原</button>
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
            }
        },
        methods:{
            recoveryData(){
                this.person = Object.assign({},defaultData)
            },
        }
    }
</script>
