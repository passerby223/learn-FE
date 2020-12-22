//剩余参数在函数中的使用
function fn(name, ...args) {
    console.log(name);
    console.log(args);
}

fn('小花花');
fn("大花花", 21, '女');

// 解构剩余参数
// ES6 允许按照一定模式，从数组和对象中提取值，并对变量进行赋值，这被称为解构
//数组解构
// let arr1 = [1, 2, 3];
// let [a, b, c] = arr1;
// console.log(a + ', ' + b + ', ' + c);
//对象解构
// ES6年代我们都不怎么用var，用const就感觉很厉害的样子
// let obj = {a:1, b:2, c:3}
// let {a, b, c} = obj;
// console.log(a);				// 1
// console.log(b);				// 2
// console.log(c);			  // 3

// let {a, b, ...others } = {a: 1,  b: 2,  c: 3,  d: 4,  e: 5}
// console.log(a);					// 1
// console.log(b);					// 2
// console.log(others);		// {c: 3,  d: 4,  e: 5}


// let array = [1, 2, 3, 4, 5];
// let [a, b, ...others] = array;
// console.log(a);					 // 1
// console.log(b);					 // 2
// console.log(others);		 // [3,4,5]

function fun(...[a, b, c]) {
    console.log(a + b + c);
}

fun('1')          // NaN (b 和 c 都是 undefined)
fun(1, 2, 3)      // 6
fun(1, 2, 3, 4)   // 6 多余的参数不会被获取到





