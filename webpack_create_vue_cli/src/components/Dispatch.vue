<template >
    <div v-if="showBox" class="dispatch_box">
        <div class="main_box">
            <span class="closebtn" @click="clickClose"></span>
            <div class="frame_box follow_title">
                <div>{{ title }}</div>
            </div>
            <div class="frame_box dispatch_item" @scroll="handleScroll" ref="pageRef">
                <div class="dispatch_user" v-for="(item, idx) in allUser" :data-key='item.mobileNum'
                    @click="e => itemSelected(e, item)" :key="idx">
                    <div :class="isSelected == item.mobileNum ? 'dispatch_user_active' : ''">{{ item.userName }}</div>
                    <div :class="isSelected == item.mobileNum ? 'dispatch_user_active' : ''">{{ item.mobileNum }}</div>
                </div>
            </div>
            <div class="follow_button frame_box">
                <div>确定</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['title', 'url'],
    data() {
        return {
            showBox: false,
            allUser: [],
            current: 1,
            totalPages: '',
            isSelected: '',
            itemSelect: null,
            currentUser: null,
            scrollHeight: ''
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            // debugger
            this.showBox = true
            // axios.get(this.url).then(res => {
            //     console.log(res);
            // })
            this.getUser()
            this.localItem()
        },
        clickClose() {
            this.showBox = false
        },
        getUser(e) {
            let that = this
            axios({
                url: `https://ismartek-cloud-uat-api.issmart.com.cn/api/marketing/marketingPromoteUser/page?current=1&size=10&marketingType=2&companyName=%E6%98%93%E6%80%9D%E6%99%BA11`,
                method: 'GET',
                headers: {
                    token: '',
                    Refer: 'CONFIG.Refer',
                    tenant: 'PUBLIC.tenant',
                },
            }).then(res => {
                if (res.data.code == '0') {
                    let arr1 = that.allUser; //从data获取当前datalist数组
                    let arr2 = res.data.data.records; //从此次请求返回的数据中获取新数组
                    if (e === 'true') {
                        arr2 = arr1.concat(arr2); //合并数组
                    } else {
                        that.current = 1
                    }
                    that.totalPages = res.data.data.pages
                    that.allUser = this.cleanSelf(arr2)
                    // setTimeout(() => {
                    //     this.setHeight()
                    // }, 200)
                } else if (res.data.code == '2001') {
                    // againLogin()
                }
            })
        },
        itemSelected(e, item) {
            // debugger
            if (this.itemSelect && this.itemSelect.id === item.id) {
                this.itemSelect = null;
                this.isSelected = '';
            } else {
                this.isSelected = e.currentTarget.dataset.key;
                this.itemSelect = item;
            }

        },
        handleScroll() {
            // debugger
            let that = this
            const $list = this.$refs.pageRef;
            //如果数据有在加载中则这次请求退出
            const scrollBottom = $list.scrollTop + $list.clientHeight + 100;

            if (scrollBottom >= $list.scrollHeight) {
                if (that.current < that.totalPages) {
                    that.current += 1;
                    that.getUser('true'); //重新调用请求获取下一页数据
                }
            }
        },
        localItem() {
            this.currentUser = window.localStorage.getItem('marketingUser') && JSON.parse(window.localStorage.getItem('marketingUser'))
        },
        cleanSelf(arr) {
            return arr.filter((item) => {
                return item.id !== this.currentUser.id
            })
        },
        // setHeight() {
        //     let that = this
        //     let wHeight = window.innerHeight //当前窗口高度
        //     let topHeight = 0 //两个模块高度
        //     var query = document.querySelector('.dispatch_item')
        //     topHeight += query.offsetTop
        //     that.scrollHeight = wHeight - topHeight + 'px'
        // },
    }
}
</script>
<style lang="less" scoped>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.frame_box {
    width: 100%;
    height: 100%;

    div {
        width: 100%;
    }
}

.dispatch_box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.main_box {
    position: relative;
    margin: 30% auto;
    color: black;
    background-color: #fff;
    padding: 10px 30px 10px 30px;
    width: 65%;
    // height: 70%;
    min-height: 40%;
    max-height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    div {
        width: 100%;
        max-height: 200px;
    }
}

.closebtn {
    width: 25px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
}

.closebtn::before,
.closebtn::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 20px;
    top: 12px;
    right: 2px;
    background-color: red;
    cursor: pointer;
}

.closebtn::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.closebtn::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}


.follow_button {
    flex-basis: 100%;
    .center;

    div {
        .center;
        width: 60%;
        min-height: 30px;
        max-height: 40px;
        text-align: center;
        background-color: #4899d0;
        color: #fff;
        border-radius: 5px;
    }
}

.follow_title {
    flex-basis: 20%;
    .center;

    div {
        .center;
    }
}

.dispatch_user {
    display: flex;
    justify-content: center;

    div {
        .center;
        justify-content: flex-start;

        &:first-child {
            flex-basis: 50%;
            justify-content: center;
        }
    }
}

.dispatch_item {
    // flex-basis: 60%;
    .center;
    flex-direction: column;
    overflow-y: auto;
    padding-top: 20px;

    div {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        background-color: #f2f2f2;

        .dispatch_user_active {
            background-color: #94d1f4;
        }
    }


}
</style>