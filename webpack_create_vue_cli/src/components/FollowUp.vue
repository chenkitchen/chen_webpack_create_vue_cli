<template >
    <div class="follow_up_box" v-if="showMessage">
        <div ref="msg" class="message-box" id="show_message_id">
            <!-- <p class="message">
                <span class="stalker-text-small details-text">{{ title }}</span>
            </p> -->
            <span v-if="showClose" @click="clickClose" class="closebtn"></span>
            <div class="follow_title frame_box">
                <div>{{ title }}</div>
            </div>
            <div class="follow_time frame_box">
                <div>时间</div>
                <div>{{ currentTime }}</div>
            </div>
            <div class="follow_type frame_box before" v-if="isComplete">
                <div>结果类型:</div>
                <select v-model="followType">
                    <option value="volvo">已成交</option>
                    <option value="saab">无意愿</option>
                    <option value="opel">其他</option>
                </select>
            </div>
            <div class="follow_images frame_box" id="follow_up_img">
                <div>{{ isComplete ? '上传凭证' : '上传图片' }}</div>
                <div class="show_frame_box" id="follow_img">
                    <div class="upload_box">
                        <svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="23px"
                            xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1 0 0 1 -1204 -460 )">
                                <path
                                    d="M 18.1875 20.886875  C 18.370192307692307 20.704791666666665  18.461538461538463 20.489166666666666  18.461538461538463 20.24  C 18.461538461538463 19.990833333333335  18.370192307692307 19.775208333333335  18.1875 19.593124999999997  C 18.004807692307693 19.411041666666666  17.78846153846154 19.32  17.538461538461537 19.32  C 17.28846153846154 19.32  17.072115384615387 19.411041666666666  16.889423076923077 19.593124999999997  C 16.706730769230774 19.775208333333335  16.615384615384613 19.990833333333335  16.615384615384613 20.24  C 16.615384615384613 20.489166666666666  16.706730769230774 20.704791666666665  16.889423076923077 20.886875  C 17.072115384615387 21.068958333333335  17.28846153846154 21.16  17.538461538461537 21.16  C 17.78846153846154 21.16  18.004807692307693 21.068958333333335  18.1875 20.886875  Z M 21.879807692307693 20.886875  C 22.0625 20.704791666666665  22.153846153846153 20.489166666666666  22.153846153846153 20.24  C 22.153846153846153 19.990833333333335  22.0625 19.775208333333335  21.879807692307693 19.593124999999997  C 21.697115384615387 19.411041666666666  21.480769230769234 19.32  21.23076923076923 19.32  C 20.98076923076923 19.32  20.76442307692308 19.411041666666666  20.58173076923077 19.593124999999997  C 20.399038461538463 19.775208333333335  20.307692307692307 19.990833333333335  20.307692307692307 20.24  C 20.307692307692307 20.489166666666666  20.399038461538463 20.704791666666665  20.58173076923077 20.886875  C 20.76442307692308 21.068958333333335  20.98076923076923 21.16  21.23076923076923 21.16  C 21.480769230769234 21.16  21.697115384615387 21.068958333333335  21.879807692307693 20.886875  Z M 23.596153846153847 16.0425  C 23.865384615384617 16.310833333333328  24 16.636666666666667  24 17.02  L 24 21.619999999999997  C 24 22.003333333333334  23.865384615384617 22.329166666666666  23.596153846153847 22.5975  C 23.32692307692308 22.865833333333335  23.000000000000004 23  22.615384615384613 23  L 1.3846153846153846 23  C 1 23  0.6730769230769231 22.865833333333335  0.40384615384615385 22.5975  C 0.13461538461538458 22.329166666666666  0 22.003333333333334  0 21.619999999999997  L 0 17.02  C 0 16.636666666666667  0.13461538461538458 16.310833333333328  0.40384615384615385 16.0425  C 0.6730769230769231 15.774166666666668  1 15.639999999999999  1.3846153846153846 15.639999999999999  L 7.543269230769232 15.639999999999999  C 7.7451923076923075 16.176666666666666  8.084134615384615 16.6175  8.560096153846153 16.962500000000002  C 9.036057692307693 17.307499999999997  9.567307692307693 17.48  10.153846153846153 17.48  L 13.846153846153845 17.48  C 14.432692307692308 17.48  14.963942307692307 17.307499999999997  15.439903846153845 16.962500000000002  C 15.915865384615385 16.6175  16.254807692307693 16.176666666666666  16.45673076923077 15.639999999999999  L 22.615384615384613 15.639999999999999  C 23.000000000000004 15.639999999999999  23.32692307692308 15.774166666666668  23.596153846153847 16.0425  Z M 19.110576923076923 6.713125  C 19.408653846153847 7.0006249999999985  19.47596153846154 7.33125  19.3125 7.704999999999999  C 19.149038461538463 8.088333333333331  18.865384615384613 8.28  18.461538461538463 8.28  L 14.76923076923077 8.28  L 14.76923076923077 14.72  C 14.76923076923077 14.969166666666665  14.677884615384617 15.184791666666666  14.495192307692307 15.366875000000002  C 14.312500000000002 15.548958333333333  14.096153846153847 15.639999999999999  13.846153846153845 15.639999999999999  L 10.153846153846153 15.639999999999999  C 9.903846153846155 15.639999999999999  9.6875 15.548958333333333  9.504807692307693 15.366875000000002  C 9.322115384615385 15.184791666666666  9.230769230769232 14.969166666666665  9.230769230769232 14.72  L 9.230769230769232 8.28  L 5.538461538461538 8.28  C 5.134615384615384 8.28  4.850961538461539 8.088333333333331  4.6875 7.704999999999999  C 4.524038461538462 7.33125  4.591346153846154 7.0006249999999985  4.889423076923077 6.713125  L 11.350961538461538 0.2731249999999993  C 11.524038461538462 0.09104166666666558  11.740384615384615 0  12 0  C 12.259615384615385 0  12.475961538461537 0.09104166666666558  12.649038461538463 0.2731249999999993  L 19.110576923076923 6.713125  Z "
                                    fill-rule="nonzero" fill="#000000" stroke="none"
                                    transform="matrix(1 0 0 1 1204 460 )" />
                            </g>
                        </svg>
                        <input type="file" accept="image/*" id="upload" name="upload" ref="upload">
                    </div>
                </div>

            </div>
            <Teleport :changeStart="isComplete" toId="show_message_id" beforeId="follow_up_img">
                <div class="follow_log frame_box before">
                    <div>{{ isComplete ? '跟进结果:' : '记录' }}</div>
                    <textarea maxlength="1000" v-model="followLog"></textarea>
                </div>
            </Teleport>
            <div class="follow_button frame_box">
                <div>{{ isComplete ? '提交' : '确认' }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Teleport from './Teleport.vue'
import SelectBox from './SelectBox.vue';
export default {
    props: ['title', 'type'],
    components: { Teleport, SelectBox },
    provide() {
        return {
            parent: this,
        };
    },
    data() {
        return {
            showMessage: false, // 是否显示信息
            // title: '',
            showClose: true, // 是否显示关闭按钮
            timer: null,
            currentTime: new Date().toLocaleString(),
            imgurl: [],
            followLog: '',
            followType: '',
        }
    },
    mounted() {
        this.init()
        this.domListen()
    },
    methods: {
        init() {
            this.showMessage = true
        },
        clickClose() {
            this.showMessage = false
        },
        domListen() {
            // debugger
            this.$nextTick(() => {
                document.getElementById('upload').addEventListener('change', this.handleFile, false)
            })
        },
        handleFile() {
            // debugger
            window.URL = window.URL || window.webkitURL;
            let sUserAgent = navigator.userAgent.toLowerCase();
            let selected_file = upload.files[0];
            let parent = document.getElementById('follow_img');
            let maxSize = 2 * 1024 * 1024;
            if (selected_file.size > maxSize) return alert('图片过大')


            if (sUserAgent.match(/android/i) == "android") {
                let img = new Image();
                img.src = window.URL.createObjectURL(selected_file);
                // img.cssText = 'width:50px;height:50px;border:2px solid #ccc;'
                img.style.width = '50px';
                img.style.height = '50px';
                img.style.border = '2px solid #ccc';
                img.style.margin = '0 5px 5px 0';
                img.className = 'uploadImg'
                // preview.innerHTML = '';
                parent.insertBefore(img, parent.children[0]);
                let reader = new FileReader();
                reader.onload = function (e) { this.imgurl.push(e.target.result); };
                reader.readAsDataURL(selected_file);

            } else {
                let imageType = /image.*/;

                if (!selected_file.type.match(imageType)) {
                    return false;
                }
                let img = document.createElement('img');
                img.file = selected_file;
                // img.cssText = 'width:50px;height:50px;border:2px solid #ccc;'
                img.style.width = '50px';
                img.style.height = '50px';
                img.style.border = '2px solid #ccc';
                img.style.margin = '0 5px 5px 0';
                img.className = 'uploadImg'

                // img.setProperty('width', '50px')
                // preview.innerHTML = '';
                // debugger
                // document.getElementById('follow_img').appendChild(img);
                parent.insertBefore(img, parent.children[0]);


                img.onload = () => {
                    this.imgurl.push(img.src);
                }

                let reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                    // this.imgurl.push(img.src);
                };
                reader.readAsDataURL(selected_file);
            }
            if (parent.children.length > 6) {
                parent.removeChild(parent.querySelector('div'))
            }
        }
    },
    computed: {
        isComplete() {
            return ['complete'].includes(this.type)
        }
    }
}
</script>
<style lang="less">
.show_frame_box {
    .uploadImg ::after {
        content: 'x';

    }

}
</style>
<style lang="less" scoped>
ul,
li {
    padding: 0;
    margin: 0;
    list-style: none
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flexS {
    .center;
    align-items: flex-start;
    justify-content: flex-start;
}

.flex-left {
    .center;
    justify-content: flex-start;
}

.before {
    &::before {
        content: '*';
        color: red;
        position: absolute;
        left: 15px;
    }
}

.follow_up_box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.message-box {
    position: relative;
    margin: 30% auto;
    color: black;
    background-color: #fff;
    padding: 10px 30px 10px 30px;
    width: 65%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
}

.close_button {
    position: absolute;
    top: 10px;
    right: 15px;
}

.frame_box {
    width: 100%;
    height: 100%;

    div {
        width: 100%;
    }
}

.follow_title {
    flex-basis: 20%;
    .center;

    div {
        .center;
    }
}

.follow_time {
    flex-basis: 40%;
    .center;
    flex-direction: column;

    div {
        &:last-child {
            border-bottom: 1px solid black;
        }
    }
}

.follow_type {
    flex-basis: 40%;
    .flexS;

    div {
        &:first-child {
            flex-basis: 30%;

        }
    }

    select {
        width: 100px;
        height: 30px;
    }
}

.follow_images {
    // .center;

    >div {
        &:first-child {
            margin-bottom: 20px;
        }
    }

    .show_frame_box {
        .flex-left;
        flex-wrap: wrap;

        .image_item {
            width: 50px;
            height: 50px;
            border: 2px solid #cccccc;
        }

        .uploadImg ::after {
            content: 'x';

        }

        img ::after {
            content: 'x'
        }
    }

    .upload_box {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        margin: 0 5px 5px 0;
        position: relative;

        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            opacity: 0;
            font-size: 0;
            background: red;
        }

        svg {
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

.follow_log {
    margin-bottom: 10px;

    div {
        &:first-child {
            height: 10%;
            margin-bottom: 20px;
        }
    }

    textarea {
        resize: none;
        width: 100%;
        height: 80%;
    }
}

.follow_button {
    flex-basis: 50%;
    .center;

    div {
        .center;
        width: 60%;
        height: 40%;
        text-align: center;
        background-color: #4899d0;
        color: #fff;
        border-radius: 5px;
    }
}

.closebtn {
    width: 25px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
}

.closebtn::before,
.closebtn::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 20px;
    top: 12px;
    right: 2px;
    background: #999;
    cursor: pointer;
}

.closebtn::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.closebtn::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>