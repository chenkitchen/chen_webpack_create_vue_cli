
export default {
    template: `<div><div>这是一个extend组件:{{nowTime}}</div><div>{{sendTime}}</div></div>`,
    props: ['sendTime'],
    data() {
        return {
            nowTime: new Date().toLocaleTimeString()
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