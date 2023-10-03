<template>
    <div class="menu">
        <ul class="menuItem" v-for="(item, i) in menuData" :key="i" @click.self="clickFn(item, i)"
            :style="{ height: menuItemState[i] ? '100px' : '50px' }">
            {{
                item.title
            }}
            <!-- <div v-if="item?.children && menuItemState[i]"> -->
            <!-- 编译不了这层？？ -->
            <li v-for="(twoItem, twoI) in item.children" :key="`${i}-${twoI}`">
                {{ twoItem.title }}---{{ `${i}-${twoI}` }}
            </li>
            <!-- </div> -->
        </ul>
    </div>
</template>
   
<script>
export default {
    data() {
        return {
            menuItemState: [],
            menuData: [
                {
                    title: "用户模块",
                    children: [{ title: "用户一" }, { title: "用户二" }],
                },
                {
                    title: "角色模块",
                    children: [{ title: "用户一" }, { title: "用户二" }],
                },
                {
                    title: "产品模块",
                },
            ],
        };
    },
    methods: {
        clickFn(item, i) {
            if (this.menuItemState[i] === true) {
                this.menuItemState[i] = false;
                console.log(this.menuItemState[i], 1111);
                this.$forceUpdate();
            } else {
                this.menuItemState[i] = true;
                this.$forceUpdate();
                let arr = [];
                this.menuItemState.forEach((itemSub, index) => {
                    arr.push[false];
                    if (i == index) {
                        arr[i] = true;
                    }
                });
                this.menuItemState = arr;
                this.$forceUpdate();
            }
        },
    },
};
</script>
   
<style  scoped>
ul {
    height: 50px;
    width: 200px;
    background-color: #2370d6;
    cursor: pointer;


}

li {
    margin-left: 10px;
    margin-bottom: 5px;
    width: 100px;

    cursor: pointer;



}

li:hover {
    box-shadow: 3px 5px rgba(0, 0, 0, 0.1);
}
</style>
  