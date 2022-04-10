function MyVue(options = {}) {
    const vm = this;
    console.log(options);
    new Compile(options.el, vm)
}
function Compile(el, vm) {
    vm.$el = document.querySelector(el);
    // let child = null;
    let fragment = document.createDocumentFragment();
    console.log(fragment, vm.$el.firstChild);
    // return
    while (child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }
}

// let x= 5
// function fn(){
//     return function(y){
//         console.log(y+(++x));
//     }
// }
// let f = fn(6);
// f(7);
// fn(8)(9);
// f(10);
// console.log(x);
// let a=0,b=0;
// function A(a){
//     A=function(b){
//         alert(a+b++);
//     };
//     alert(a++)
// }
// A(1)
// A(2)
// var x=3,obj={x:5};
// obj.fn = (function(){
//     this.x *= ++x;
//     return function (y){
//         this.x *= (++x)+y;
//         console.log(x);
//     }
// })();
// var fn = obj.fn;
// obj.fn(6);
// fn(4);
// console.log(obj.x,x);
// function fn(){
//     var x =12;
//     console.log(x);
// }
// fn();
// console.log();
// function fn(){
//     x =100;
// }
// y =200;
// fn();
// console.log(window.x,window.y);

// for(var i =0 ; i<5;i++){
//     ~function(i){
//         setTimeout(()=>{
//             console.log(i);
//         },50)
//     }(i)

// }


// !function(){
//     console.log('kk');
// }()

// //区域A
// let weatherFun= (function () {
//     let _default = 'beijing';
//     let queryWeather = function () {
//         console.log('查询天气方法');
//     };
//     let setCity = function () {
//         console.log('设置城市方法');
//     }
//     return{//es6写法，等同于： queryWeather:queryWeather
//         queryWeather
//     }
// })();


// //区域B
// let userFun = (function(){
//     let _default = 'shengzhen'
//     let getUser = function () {
//         console.log('获取人员');
//     }
//     let getBeforeRoute = function () {
//         console.log('得到之前的路径');
//     }
//     weatherFun.queryWeather()
// })()

// function emit(ele,type,cb){
//     //判断属于那种，后重新定义这个emit方法
//     if(ele.addEventListener){
//         emit= function(ele,type,cb){
//             ele.addEventListener(type,cb,false);
//         }
//     }else if(ele.attachEvent){
//         emit= function(ele,type,cb){
//             ele.attachEvent('on'+type,cb);
//         }
//     }else{
//         emit= function(ele,type,cb){
//             ele['on'+type] =cb;
//         }
//     }
//     emit(ele,type,cb)//定义完执行，满足第一次调用的需求，之后的直接是这个
// }

// let ele = document.getElementById('app')
// // console.log(ele);
// emit(ele,'click',fn1);
// emit(ele,'click',fn1);
// emit(ele,'click',fn1);


// function fn1(){
//     console.log('dom2执行啦');
// }
