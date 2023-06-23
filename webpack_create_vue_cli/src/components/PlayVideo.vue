<template >
    <div class="video_box">
        <div class="video_content">
            <video ref="video" class="video-js  vjs-matrix" width="600" height="400">
                <!-- controls 是给用户提供视频控件 -->
                <source src="//vjs.zencdn.net/v/oceans.mp4" />
            </video>
        </div>
        <div class="video_control">
            <button @click="pauseHandler()">暂停</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            player: null, // 用来存储当前 video
        };
    },
    methods: {
        pauseHandler() {
            this.player.pause()
        }
    },
    mounted() { // 渲染视频
        this.player = this.$video(this.$refs.video, {
            controls: true, //显示视频控件
            muted: true, // 默认打开是静音
        }, function () {
            this.on("play", () => {
                // alert("视频已经开始播放，祝你有好的体验");
            });
            this.on("pause", () => {
                // alert("视频已经暂停");
            });
        });
    },

}
</script>
<style lang="less" scoped>
.video_box {
    width: 100%;
    height: 100%;

    .video_content {
        //为了将 video组件放在页面中间
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}
</style>