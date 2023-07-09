<template >
    <input id="file" type="file" name="file" multiple>
</template>
<script>
import axios from 'axios';

export default {
    methods: {
        fileUpload() {
            let forms = new FormData();
            let dom = document.getElementById('file')
            Array.from(dom.files).forEach(item => {
                forms.append(item.name, item)
            })
            let options = {
                method: 'POST',
                data: forms,
                url: 'http://localhost:8088/upload'
            }
            axios(options)
        }
    },
    mounted() {
        let dom = document.getElementById('file')
        dom.addEventListener('change', this.fileUpload)
    }
}
</script>
<style lang="">
    
</style>