<template >
    <!-- 2控制的是显示2位，就是过滤器里面的length -->
    <div>{{ countdown | display(2) | transform(':', '-') }}</div>
</template>
<script>
export default {
    data() {
        return {
            now: NaN,
            time: 12000,
        };
    },
    filters: {
        //定义display过滤器，第一个value是输入值，length是过滤器的选项
        display(value, length) {
            const hour = (value / 3.6e6) | 0, //去除小数点
                minute = ((value % 3.6e6) / 6e4) | 0,
                second = ((value % 6e4) / 1e3) | 0;
            //用length控制补0后的长度
            const format = (number) =>
                String.prototype.padStart.call(number, length, "0"); // 一位变两位

            return `${format(hour)}:${format(minute)}:${format(second)}`;
        },
        transform(value, pattern, char) { //pattern是要替换的部分，char是要替换成什么
            return value.replace(new RegExp(pattern, "g"), char);
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
                alert("时间到了");
            }
        },
    },
}
</script>
<style lang="">
    
</style>