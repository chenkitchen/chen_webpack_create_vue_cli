<template >
    <div id="drag_box">
        <div v-for="item in arr" :key="item.doc">{{ item.doc }}</div>
    </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
    data() {
        return {
            arr: [
                { name: 'zhangsan', age: 32, doc: 'item0' },
                { name: 'zhangsan1', age: 32, doc: 'item1' },
                { name: 'zhangsan2', age: 32, doc: 'item2' },
                { name: 'zhangsan3', age: 32, doc: 'item3' },
                { name: 'zhangsan4', age: 32, doc: 'item4' },
            ]
        }
    },
    mounted() {
        new Sortable(drag_box, {
            animation: 150,
            // 拖拽时预览图样式
            ghostClass: 'blue-background-class'
        });

    }
}
</script>
<style lang="">
    
</style>