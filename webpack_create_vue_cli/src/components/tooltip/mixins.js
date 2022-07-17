export const toggle={
    data(){
        return{
            message:'来自mixin的一条消息',//与主js中data同名的属性，被主的覆盖
            msg:'来自mixin的msg'
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