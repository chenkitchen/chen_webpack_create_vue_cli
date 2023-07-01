<template >
    <!-- computed+watch+data实现倒计时 -->
    <div>
        <div>{{ countdownHour }}:{{ countdownMinute }}:{{ countdownSecond }}</div>
    </div>
</template>
<script>
export default {
    data() {
        //初始值设置了2个NaN,因为这两个变量都是数字类型的
        //NaN是数字类型的，但是它表示不是数字，因为我们还没设置他们的值
        return {
            // now是实时的时间，也就是流动的时间
            now: NaN,
            // time是设定的倒计时，如3分钟，换算成和timestamp一样的单位，就是3 * 60e3 = 180000
            // 需要自己定义倒计时时间
            time: 6000,
        };
    },
    created() {
        // 先定义一个函数update，即每次更新的函数
        // update做了一件事，就是会设置一个定时器，并在1秒钟后递归调用自身，并且将时间更新

        //第一种方法：用setTimeout
        // const update = () => {
        //     setTimeout(() => {
        //         if (0 === this.countdown) return
        //         // 因为递归调用自身，所以又设置了另外一个延迟1秒的操作
        //         update();
        //         // 当然，这样写有个问题，就是第1秒的时候是now还是NaN
        //         // 因为要1秒后才会更新this.now
        //         // 所以在第一秒可以手动设置this.now = Date.now()
        //         this.now = Date.now();
        //     }, 1e3);
        // };
        // update();

        //第二种方法：用requeatAnimationFrame
        const update = () => {
            // 也是循环调用自身,这次会在一开始就更新this.now
            this.now = Date.now();
            // requestAnimationFrame接受一个参数，这个参数是一个函数
            // 因为在update里调用requestAnimationFrame(update)，相当于设定下次屏幕刷新前执行一下update
            // 那么下次执行update的时候，又会设置下一帧要调用update
            //更新的事件由API把握
            //requestAnimationFrame在下次屏幕刷新前,所以不同的显示器，刷新率不一样，调用的次数也不同,但是，能保证，每次重绘的时候总是最新的时间
            requestAnimationFrame(update);
        };
        update();

        //这里面不管是用了setTimeout还是requestAnimationFrame,都使用了箭头函数，因为this.now中的this需要指向组件实例
    },
    computed: {
        // 结束时间
        finishTime() {
            //这里并没有用this.now,因为this.now记录的是实时时间
            //这里的是设定的时间+设定的倒计时毫秒数
            return Date.now() + this.time;
            //this.time的变化，触发这个结束的时间，只要this.time不更新，结束时间就不会重新计算，所以结束时间一直固定
        },
        //剩余的毫秒数
        countdown() {
            //倒计时不会小于0，也就是说countdown最小值是0
            return Math.max(0, this.finishTime - this.now);
        },
        // 时
        countdownHour() {
            //padStart是用于补位
            return String.prototype.padStart.call(
                (this.countdown / 3.6e6) | 0,
                2,
                "0"
            );
        },
        // 分
        countdownMinute() {
            return String.prototype.padStart.call(
                ((this.countdown % 3.6e6) / 6e4) | 0,
                2,
                "0"
            );
        },
        // 秒
        countdownSecond() {
            return String.prototype.padStart.call(
                ((this.countdown % 6e4) / 1e3) | 0,
                2,
                "0"
            );
        },
    },
    // 监听时间到了：
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