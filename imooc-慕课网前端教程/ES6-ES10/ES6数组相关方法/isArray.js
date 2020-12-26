// 判断 JS 对象，如果值是 Array，则为 true; 否则为 false。   Array.isArray(obj)
// ES5 中判断数组的方法

// 基本类型
console.log(typeof 123);  //number
console.log(typeof "123"); //string
console.log(typeof true); //boolean
// 引用类型
console.log(typeof [1, 2, 3]); //object

// 上面的代码中，对于基本类型的判断没有问题，但是判断数组时，返回了 object 显然不能使用 typeof 来作为判断数组的方法。


// 通过 instanceof 判断
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链。
// instanceof 可以用来判断数组是否存在，判断方式如下：
var arr = ['a', 'b', 'c'];
console.log(arr instanceof Array); 		   // true
console.log(arr.constructor === Array); // true


//Array.isArray () 的使用
// 下面的函数调用都返回 true
console.log("=".repeat(20) + "Array.isArray () 的使用" + "=".repeat(20));
console.log(Array.isArray([]));
console.log(Array.isArray([10]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('a', 'b', 'c')));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
console.log(Array.isArray(Array.prototype));

// 下面的函数调用都返回 false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
console.log(Array.isArray({__proto__: Array.prototype}));










