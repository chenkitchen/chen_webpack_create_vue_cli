export default {
    'focusMy': {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el) {
            // 聚焦元素
            console.log(el);
            el.children[0].focus()
        }
    }
}