<template >
    <div class="anime_js_box">
        anime.js
        <div id="anime_item" @click="handler"></div>
    </div>
</template>
<script>
import anime from 'animejs'
// console.log(anime);
// debugger
let animeEle
export default {
    mounted() {
        // debugger
        animeEle = anime({
            translateX: 300,
            loop: false,
            duration: 2000,
            autoplay: false,
            targets: '#anime_item',
        })

    },
    methods: {
        handler() {
            animeEle.play()
        }
    }
}
</script>
<style lang="css">
#anime_item {
    width: 100px;
    height: 100px;
    background: green;
    cursor: pointer;
}
</style>