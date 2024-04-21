<template >
  <div 
    class="local_wav"
    v-if="showDialog"
  >
    <button 
      @click="()=>{
        $emit('parentClose')
      }"
    >关闭</button>
    <m-audio 
      :src="localUrl"
      :block="true"
    ></m-audio>
  </div>
</template>
<script>
export default {
  props:{
    localUrl:{
      type:String,
      required:true
    },
    showDialog:{
      type:Boolean,
      required:true
    }
  }
}
</script>
<style lang="less">
  .local_wav{
    width: 200px;
    height: 200px;
    z-index: 99999;
    background-color: black;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>