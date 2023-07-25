<template>
  <div id="app">
    <header>TestGenerator 测试generator迭代器使用</header>
    <button @click="res.next()">点击调用generator</button>
    <div>{{ loaclNum }}</div>
    <button @click="counter">test</button>
    <button @click="clear">clear</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaclNum: 0,
      arr: ['url', 'url1', 'url2'],
      res: null,
      resG: null,
    };
  },
  mounted() {
    this.res = this.go()
    this.resG = this.f()
    // this.$route.meta = { //$route里的属性都是只读的
    //   metaInfo: {
    //     title: '这是一个组件内部改变的title',
    //     keywords: '这是一个组件内部改变的keywords',
    //     description: '这是一个组件内部改变的des'
    //   }
    // }
    this.$store.commit('SET_META_INFO', { //使用 vuex 管理 meta标签的信息，就是为了可以动态改变
      title: '这是一个组件内部改变的title',
      keywords: '这是一个组件内部改变的keywords',
      description: '这是一个组件内部改变的des'
    })
    // console.log(this.$router.meta, this.$router, this.$route);

  },
  methods: {
    clear() {
      this.resG.next(true)
    },
    counter() {
      this.resG.next()
    },
    * f() {
      for (let i = 0; true; i++) {
        console.log(i);
        this.loaclNum = i
        const reset = yield i;
        if (reset) {
          i = -1;
        }
      }
    },
    * go() {
      for (let i = 0; i < this.arr.length; i++) {
        yield this.req(this.arr[i])
      }
    },
    req(str) {
      var p = new Promise(function (resolve, reject) {
        let times = Math.random() * 1000
        setTimeout(() => {
          resolve(str);
          console.log(str, times);
        }, times)
      });
      p.then(() => {
        this.res.next();
      })
    }
  },
};
</script>




