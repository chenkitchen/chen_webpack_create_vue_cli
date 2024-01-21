<template >
    <div>
        <div v-for="(item, idx) in arr" :key="idx">
            {{ item }}
        </div>
        <button @click="handler">change</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [1, 6, 3, 4, 5]
        }
    },
    methods: {
        handler() {
            this.arr.sort() //vue2 中也会 在页面上触发 渲染
        }
    }
}
</script>
<style lang="">
    
</style>