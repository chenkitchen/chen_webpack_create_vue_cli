
<script>
export default {
    props: {
        toId: {
            type: String,
            required: true
        },
        beforeId: {
            type: String,
            required: true
        },
        changeStart: {
            type: Boolean,
            required: true
        }
    },
    inject: ['parent'],
    render() {
        // debugger
        return this.$scopedSlots.default()
    },
    mounted() {
        // debugger
        if (this.changeStart) document.getElementById(this.toId).insertBefore(this.$el, document.getElementById(this.beforeId))
    },
}
</script>
<style lang="">
    
</style>