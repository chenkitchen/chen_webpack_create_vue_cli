<template>
    <div>
      <ul>
         <li>{{$t('m.music')}}</li>
         <li>{{$t('m.findMusic')}}</li>
         <li>{{$t('m.myMusic')}}</li>
         <li>{{$t('m.friend')}}</li>
         <li>{{$t('m.musician')}}</li>
         <li>{{$t('m.download')}}</li>
         <span>{{show}}</span>
         <div class="posDir topBar"></div>
         <div class="linearBar posDir"></div>
         <div class="progress">
            <div class="progress-bar progress-bar-striped" style="width:60%">60%</div>
        </div>
     </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:'',
            }
        },
        mounted(){
            this.show = this.$route.params.shopid
        }
    }
</script>

<style  scoped>
.topBar{
    width:100px;
    height:100px;
    border:1px solid #ccc;
    background-image:linear-gradient(40deg, #99CC33 25%, #FF6666 25%,#336699 25%,#FF0033 25%);
}
.posDir{
    margin:100px auto;
}
.linearBar{
    width:100px;
    height:100px;
    border:1px solid #ccc;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
/*********************************偏向角度,起始点颜色,终止点颜色***************/
    background-color:#33CC99;
}
.progress{
    margin:100px auto;
    width:80%;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);
    border-radius:4px;
	height:20px;overflow:hidden;
    background-color: #f5f5f5;
}
.progress-bar{
    float:left;
    width:0;
    height:100%;
    line-height:20px;
    color:#fff;
    text-align:center;
    background-color: #5cb85c;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);
}
.progress-bar-striped{
    width:100px;
    height:100px;
    border:1px solid #ccc;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-size:40px 40px;
}
</style>