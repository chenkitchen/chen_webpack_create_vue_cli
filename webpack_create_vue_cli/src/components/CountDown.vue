<template>
    <!-- 2控制的是显示2位，就是过滤器里面的length -->
    <div>{{ countdown | display(2) }}</div>
</template>
<script>
export default {
    props: {//接收父组件的数据
        endTime: { type: Number, default: '' },
        endText: { type: String, default: '' },
    },
    data() {
        return {
            now: NaN,
            time: this.endTime,
        };
    },
    filters: {
        //定义display过滤器，第一个value是输入值，length是过滤器的选项
        display(value, length) {
            const hour = (value / 3.6e6) | 0, //8.64e7 一天  3.6e6 一小时,3.6乘以10的6次方
                minute = ((value % 3.6e6) / 6e4) | 0,
                second = ((value % 6e4) / 1e3) | 0;
            //用length控制补0后的长度
            const format = (number) =>
                String.prototype.padStart.call(number, length, "0"); //padStart() 用于头部补全，padEnd() 用于尾部补全。

            return `${format(hour)}:${format(minute)}:${format(second)}`;
        },
    },

    created() {
        const update = () => {
            this.now = Date.now();
            requestAnimationFrame(update);
        };
        update();
    },
    computed: {
        // 结束时间
        finishTime() {
            return Date.now() + this.time;
        },
        //剩余的毫秒数
        countdown() {
            return Math.max(0, this.finishTime - this.now);
        },
    },

    watch: {
        countdown(countdown) {
            if (0 === countdown) {
                console.log(this.endText);
            }
        },
    },
};
</script>
 