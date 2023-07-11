<template>
  <div id="app">
    <header>TestSearch 测试ajax的abort取消请求</header>
    <div>
      <input type="text" v-model="key" @keyup="getSuggest"
        onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false" />
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
      cancelToken: null,
      //   xhr:null,
    };
  },
  methods: {
    getSuggest() {
      if (this.key == "") return;
      if (this.cancelToken != null) {
        this.cancelToken.abort()
      }
      const xhr = new XMLHttpRequest();
      this.cancelToken = xhr;
      const url = `http://127.0.0.1:3089/search?key=${this.key}`;
      xhr.open("get", url);
      xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
      xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.suggestList = JSON.parse(xhr.responseText);
          console.log(JSON.parse(this.suggestList));
          this.cancelToken = null;
        }
      };
      xhr.send();
    },
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('beforeRouteEnter', to, from);
    next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // if (to.fullPath === from.fullPath) return
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from, 'leave');
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next({
      replace: true,
      redirect: '/home'
    })
    // next()
  }
};
</script>




