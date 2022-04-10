export const toggle={
    data(){
        return{
            message:'来自mixin的一条消息'
        }
    },
    // data:{
    //     msg:'来自mixins'
    // },
    methods: {
        close(){
            this.isShowing = false;
        }
    },
}