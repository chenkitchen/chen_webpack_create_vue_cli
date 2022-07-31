<template>
  <div>
    <!-- <div>{{loaclData}}</div> -->
    <button>点击</button>
    <ul v-if="loaclData">
      <li v-for="(val, keys, idx) in loaclData" :key="idx">
        {{ keys }}:{{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaclData: "",
    };
  },
  mounted() {
    document.querySelector("button").addEventListener("click", () => {
      const xhr = new XMLHttpRequest();
      const url = "http://127.0.0.1:3088/users";
      xhr.open("get", url);
      xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.loaclData = JSON.parse(xhr.responseText);
          // console.log(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
      // 使用 abort 方法取消重复请求
      setTimeout(() => {
        xhr.abort();
      }, 1000);
    });
  },
};
</script>
