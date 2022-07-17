<template>
  <div class="box">
    <!-- <el-input v-model="homeInput" placeholder="请输入内容" ref="homeInputRef"></el-input> -->
    这是home <span>{{ show }}</span>
    <ul>
      <li>点击删除下面的水果</li>
      <li v-for="(item, index) in arr" :key="index" @click="hidMy(item, arr)">
        {{ item }}
      </li>
    </ul>
    <div @click="toastSend">一个使用extend的组件</div>
    <div @click="toastSend1">click my1</div>
    <el-button type="primary" @click="send">默认按钮</el-button>
    <el-button type="primary" @click="sendMsg">查看class</el-button>
    <el-input v-model="homeInputOptions" placeholder="另一个请输入内容"  v-focusMy></el-input>
    <PropsData/>
    <!-- <div id="MyMessage"></div> -->
  </div>
</template>

<script>
import { tooltip } from "./tooltip/tooltip";
import MyMsg from "./msg/classMsg";
import PromiseA from "@c/myPromise.js";
import PropsData from "@com/propsTest/propsData.vue";
import './home.css'
export default {
  data() {
    return {
      show: "",
      arr: ["apple", "peach", "banana", "oriange", "grape",'kkkk'],
      homeInput:'',
      homeInputOptions:'',
    };
  },
  components:{
      PropsData
  },
  mounted() {
    this.show = this.$route.query.shopid;
    let p1 = new PromiseA((resolve, reject) => {
      resolve(100);
    });
    p1.then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
    // this.$refs.homeInputRef.focus();
  },
  methods: {
    hidMy(ele, arr) {
      arr.map((item, index) => {
        if (ele === item) {
          arr.splice(index, 1);
          alert(item);
        }
      });
    },
    toastSend() {
      this.$message({ message: "哈哈哈哈哈哈qqqqqqq", duration: 500000 });
      // this.$toast("hahahhaahahha");
    },
    toastSend1() {
      this.$toast("hahahhaahahha",function(text){
        console.log("获取js中的值",text);
      });
    },
    send() {
      console.log("执行啦啦啦啦阿拉");
      tooltip({
        isShowing: true,
      });
    },
    sendMsg() {
      let temp = new MyMsg();
      temp.show(true);
    },
  },
};
</script>

<style  scoped>
.box{
  background: gray;
  color: white;
  font-size: 100;
}
</style>