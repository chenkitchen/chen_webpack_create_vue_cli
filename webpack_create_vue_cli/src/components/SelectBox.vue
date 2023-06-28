<template >
    <div class="select">
        <!-- <div @click="onClickBox" class="display_box">
            <div>{{ displayValue }}</div>
            <div class="arrow" :class="{ 'isSelect': selectShow }"></div>
        </div>
        <div v-show='selectShow' class="select_box">
            <div v-for='(item, index) in deptName' :key="index" @click="onClickNmae(item)">
                {{ item.name }}
            </div>
        </div> -->
        <select v-model="displayValue">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '颜色',
            selectShow: false,
            deptName: [
                { name: '红色', index: 1 },
                { name: '黄色', index: 2 },
                { name: '黑色', index: 3 },
            ],
            displayValue: ''
        }
    },
    methods: {
        onClickBox() {
            this.selectShow = !this.selectShow
        },
        onClickNmae(item) {
            //进行点击后需要的事件
            this.displayValue = item.name
            this.onClickBox()
        }
    }
}
</script>
<style lang="less">
@width: 70px;
@height: 30px;

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.select {
    width: @width;
    height: 100%;
}

.display_box {
    width: @width;
    height: @height;
    border: 1px solid black;
    display: block;
    .center;
    position: absolute;
}

.arrow {
    width: 20%;
    height: 20%;
    display: inline-block;
}

.arrow::before,
.arrow::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 10px;
    // top: 12px;
    right: 2px;
    background: #999;
    cursor: pointer;
}

.arrow::before {
    top: 50%;
    right: 20%;
}

.arrow::after {
    top: 50%;
    right: 10%;
}

.arrow::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.arrow::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.arrow.isSelect::before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.arrow.isSelect::after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.select_box {
    width: @width;
    position: relative;
    top: @height;
}
</style>