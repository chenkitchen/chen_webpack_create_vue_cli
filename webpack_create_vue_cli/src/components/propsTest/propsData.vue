<template>
  <div ref="container" class="container" v-if="showMy">
    <div class="list"></div>
    <div class="btns">
      <button @click="create">动态添加项</button>
      <div v-if="showNow">
        <ul>
          <li v-for="(item, index) in datas" :key="item.id">
            <span>{{ `${index} : ${item.name}` }}</span>
            <div
              v-if="
                typeof item.children != 'undefined' && item.children.length != 0
              "
            >
              <ul v-for="(key, idx) in item.children" :key="key.id">
                <li>{{ `${idx} : ${key.name}` }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="testProps"></div>
    <button @click="close">关闭</button>
  </div>
</template>
<script>
import Vue from "vue";
import user from "./user.vue"; // user.vue 的内容如下，请查看
export default {
  props: ["sendData"],
  data() {
    return {
      showMy: true,
      datas: {},
      showNow: false,
    };
  },
  mounted() {
    this.container = this.$refs.container;
    this.list = this.container.getElementsByClassName("list")[0];
    // this.translateData();
  },
  watch: {
    sendData: {
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal);
        if (JSON.stringify(newVal) != "{}") {
          this.showNow = true;
          this.datas = this.sendData;
          this.translateData();
        }
      },
    //   immediate: true,
    },
  },
  methods: {
    translateData() {
      let otherData = JSON.parse(JSON.stringify(this.datas));
      let treeMap = otherData.reduce((newEle, ele) => {
        ele.label = ele.name;
        newEle[ele["id"]] = ele;
        return newEle;
      }, []);
      let treeData = treeMap.reduce((arr, current) => {
        let pid = current.pid;
        let parent = treeMap[pid];
        if (parent) {
          parent.children
            ? parent.children.push(current)
            : (parent.children = [current]);
        } else if (pid === 0) {
          arr.push(current);
        }
        return arr;
      }, []);
      this.datas = treeData;
      console.log(this.datas);
    },
    close() {
      this.showMy = false;
    },
    create() {
      let div = document.createElement("div");
      div.className = "item";
      let render = document.createElement("div");
      let myComponent = Vue.extend(user);
      console.log(myComponent);
      const instance = new myComponent({
        data() {
          // 无法传递
          _test_: "test data";
        },
        propsData: {
          // 可以传递，而官网解释说，该属性主要用于测试
          // 无语了 ...
          __id__: "testid",
        },
        provide: {
          // 无法传递
          find: this.find,
        },
      }).$mount();
      div.appendChild(render);
      this.list.appendChild(div);
      // document.body.appendChild(myComponent.$el);
      // return myComponent
      // return myComponent.$el;
      // console.log(instance.$el);
      document.querySelector(".item").appendChild(instance.$el);
    },
    find() {
      console.log("nihao");
    },
  },
};
</script>
<style lang='less'>
.container {
  background-color: gray;
  width: 300px;
  height: 200px;
  border: 2px solid red;
  .btns {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid green;
  }
}
</style>