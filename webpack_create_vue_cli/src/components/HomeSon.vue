<template>
    <div>
        这是home的子组件<span>{{show}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:'',
            }
        },
        mounted(){
            this.show = this.$route.query.shopid
        }
    }
</script>

<style lang="scss" scoped>

</style>