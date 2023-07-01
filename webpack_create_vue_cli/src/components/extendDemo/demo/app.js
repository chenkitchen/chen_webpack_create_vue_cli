
export default {
    template: `<div>这是一个extend组件:{{nowTime}}</div>`,
    data() {
        return {
            nowTime: new Date().toLocaleDateString()
        }
    },
    destroyed: function () {
        console.log('销毁之后');
    },
    mounted: function () {
        console.log('被创建');
    },
    updated: function () {
        console.log(" 被更新后");
    }
}