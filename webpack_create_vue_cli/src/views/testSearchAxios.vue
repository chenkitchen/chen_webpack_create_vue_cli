<template>
  <div id="app">
    <header>testSearchAxios 测试取消请求</header>
    <div>
      <input
        type="text"
        v-model="key"
        @keyup="getSuggest"
        onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false"
      />
    </div>
    <div class="result">
      <div v-for="(item, index) in suggestList" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      key: "",
      suggestList: [],
      cancelToken: null,
      //   xhr:null,
    };
  },
  methods: {
    getSuggest() {
      if (this.key == "") return;
      if (this.cancelToken) {
        this.cancel(); // 如果上一次请求未完成，this.source不为null，则执行取消上一次请求的操作
      }
      let CancelToken = axios.CancelToken;
      this.cancelToken = CancelToken.source();
      const res = axios.get(`http://127.0.0.1:3089/search`, {
        params: {
          key: this.key,
        },
        cancelToken: this.cancelToken.token, // 传入cancelToken，使该请求可取消
      });

      res
        .then((response) => {
          console.log(response.data);
          this.suggestList = response.data;
          this.cancelToken = null; // 请求响应完成，this.source为null，不影响下次相同的请求
        })
        .catch((err) => {
          console.log("11");
        });
    },
    cancel() {
      // 取消请求
      this.cancelToken.cancel("取消重复请求！");
    },
  },
};
</script>




