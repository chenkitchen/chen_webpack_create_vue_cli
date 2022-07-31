<template>
  <div id="app">
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
export default {
  name: "App",
  data() {
    return {
      key: "",
      suggestList: [],
    };
  },
  methods: {
    getSuggest() {
      if (this.key == "") return;
      const xhr = new XMLHttpRequest();
      const url = `http://127.0.0.1:3089/search?key=${this.key}`;
      xhr.open("get", url);
      xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
      xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.suggestList = JSON.parse(xhr.responseText);
          console.log(JSON.parse(this.suggestList));
        }
      };
      xhr.send();
    },
  },
};
</script>




