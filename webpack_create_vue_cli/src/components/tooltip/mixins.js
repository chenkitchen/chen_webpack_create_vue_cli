export const toggle={
    data(){
        message:'来自mixin的一条消息'
    },
    methods: {
        close(){
            this.isShowing = false;
        }
    },
}