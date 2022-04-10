<template>
  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  > -->
    <div v-show="showMessage" ref="msg" class="message-box wrap" >
      <p class="message">
        <!-- <svg-icon class-name="icon" :icon-class="'m-'+type" /> -->
        <span>{{ message }}</span>
      </p>
      <span v-if="showClose" @click="clickClose">X</span>
    </div>
  <!-- </transition> -->
</template>
 
<script>
export default {}
 
</script>
<style scoped  lang="less"> 
  .wrap{
        color:#fff;
        background-color: rgba(0,0,0,0.8);
        padding: 10px;
        position: fixed;
        top:50%;left: 50%;
        border-radius: 10px;;
    }
</style>