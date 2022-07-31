<template>
  <div id="app">
    <div>
      <input type="text" v-model="key" @keyup="getSuggest" />
    </div>
    <div class="result">
      <div v-for="(item, index) in suggestList" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "./api/axios";
// import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      key: "",
      suggestList: [],
    };
  },
  methods: {
    //    getSuggest() {
    //      const res = axios.get(`http://127.0.0.1:3000/search`, {
    //        params: {
    //          key: this.key,
    //        },
    //      });

    //      res
    //        .then((response) => {
    //          console.log(response.data);
    //          this.suggestList = response.data;
    //        })
    //        .catch((err) => {
    //          console.log("11");
    //        });
    //    },
    getSuggest() {
      const xhr = new XMLHttpRequest();
      const url = "http://127.0.0.1:3089/search";
      xhr.open("get", url);
      xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.suggestList = JSON.parse(xhr.responseText);
          console.log(JSON.parse(this.suggestList));
        }
      };
      xhr.send();
      // 使用 abort 方法取消重复请求
      setTimeout(() => {
        xhr.abort();
      }, 1000);
    },
  },
};
</script>

<style>
</style>



