<template>
  <div id="app">
    <header>TestGenerator 测试generator迭代器使用</header>
    <button @click="res.next()">点击调用generator</button>
    <div>{{ loaclNum }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaclNum: 0,
      arr:['url','url1','url2'],
      res:null,
    };
  },
  mounted(){
    this.res = this.go()
  },
  methods: {
    * go() {
        for(let i =0 ;i<this.arr.length;i++){
            yield this.req(this.arr[i])
        }
    },
    req(str){
        var p = new Promise(function(resolve, reject) {
            let times = Math.random()*1000
            setTimeout(()=>{
                 resolve(str);
                 console.log(str,times);
            },times)
    });
    p.then(()=>{
        this.res.next();
    })
    }
  },
};
</script>




