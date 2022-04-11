import MyMessage from './MyMessage.vue'
class MyMsg{
    constructor(){
    }
    show(){//这里可以结构一个对象，来让使用者传入参数:data={}
        let message = new MyMessage({
            el:'#MyMessage',
            data() {
                return {
                  showMessage: false, // 是否显示信息
                  type: '', // info success warning error 默认info
                  message: '',
                  offset: '30', // top偏移量 单位px
                  showClose: true, // 是否显示关闭按钮
                  duration: 3000, // 信息停留时间 ms
                  onClose: null, // 关闭后回调
                  timer: null
                }
              },
              mounted() {
                this.init()
              },
              methods: {
                init() {
                  this.showMessage = true
                  this.close()
                },
                // 关闭信息
                close() {
                  const that = this
                  this.timer = setTimeout(() => {
                    that.showMessage = false
                  }, that.duration)
                },
                // 手动关闭
                clickClose() {
                  this.showMessage = false
                  this.timer && clearTimeout(this.timer)
                },
             
                beforeEnter(el) {
                  console.log('beforeEnter')
                  el.style.opacity = 0
                  el.style.top = '0px'
                },
                enter(el) {
                  console.log('enter')
                  const that = this
                  setTimeout(function() {
                    el.style.opacity = 1
                    el.style.top = that.offset + 'px'
                  }, 0)
                },
                beforeLeave(el) {
                  console.log('beforeLeave')
                  el.style.opacity = 1
                  el.style.top = this.offset + 'px'
                },
                leave(el, done) {
                  console.log('leave')
                  el.style.opacity = 0
                  el.style.top = '0px'
                  setTimeout(() => {
                    done()
                  }, 200) // 动画时间持续200ms
                },
                // 关闭信息
                afterLeave(el) {
                  console.log('afterLeave')
                  document.body.removeChild(el) // 关键代码
                  this.onClose && this.onClose()
                }
              }
        })
       return message
    }
}
window.MyMsg = MyMsg
export default MyMsg
