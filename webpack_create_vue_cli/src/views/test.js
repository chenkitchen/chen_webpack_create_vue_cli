// function* f(){
//     for(let i = 0;true;i++){
//       const reset = yield i;
//       if(reset){ 
//         i = -1;
//       }
//     }
//   }
//   const g = f();
//   console.log(g.next()); // 
//   console.log(g.next()); // 
//   console.log(g.next()); // 
//   console.log(g.next(true)); // 
//   console.log(g.next()); // 
//   console.log(g.next()); // 

//结果：
//   { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }

function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i])
        }
    } else {
        yield tree;
    }
}

let tree1 = [1, 2, [3, 4, [5]], 6];
//   for(let x of iterTree(tree1)){
//     console.log(x);
//   }
// console.log([...iterTree(tree1)]);

// function* clock() {
//     while(true){
//       yield console.log('Tick!');
      
//       yield console.log('Tock!');
//     }
//   }
// const g = clock()
// g.next()
// g.next()

const clock = function* () {
    while(true){
      console.log('Tick!');
      yield;
      console.log('Tock!');
      yield;
    }
  }
// let run = clock()
// run.next()
// run.next()
function promTest(num){
    return new Promise((res,rej)=>{
        let timers = Math.random()*1000
        setTimeout(()=>{
            console.log(`执行啦---用时${timers}ms,${num}`);
            res()
        },timers)
    })
}

// Promise.resolve(promTest(0))
// .then(promTest(1))
// .then(promTest(2))
// .then(promTest(3))


function* longRunninfTask(value1){
    try{
      const value2 = yield promTest(value1++);
      const value3 = yield promTest(value1++);
      const value4 = yield promTest(value1++);
      const value5 = yield promTest(value1++);
      // ...
    }catch(e){
      // handle Error
      console.log(e);
    }
  }
  


function scheduler(task) {
var taskObj = task.next(task.value);
// 如果Generator函数未结束，就继续调用
if (!taskObj.done) {
    task.value = taskObj.value
    task.value.then(function(data){
        scheduler(task);
    }) 
}
}
function run(fun){
    let g = fun;
    function next(data){
        let res = g.next(data);
        if(res.done) return res.value;
        res.value.then(function(data){
            next(data);
        })
    }
    next();
}
const g2 = longRunninfTask(1) 



scheduler(g2);
// run(g2)