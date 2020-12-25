// repeat
// 该方法构造并返回一个新字符串，表示将原字符串重复 n 次，并不会改变原字符串。


// 参数是小数
// 参数如果是小数，会被取整。
console.log('中国'.repeat(2.9));//参数 2.9 会被向下自动转换成整数

// 如果 repeat 的参数是负数或者 Infinity，会报错。
// console.log('imooc'.repeat(Infinity));  // RangeError
// console.log("imooc".repeat(-1));        // 无效的数字

// 0～1 和 0～- 1
// 如果参数是 0 到 - 1 或 0 到 1 都会先进行取整运算，所以在这两个范围内都会被 repeat 视同为 0。
// console.log("imooc".repeat(-0.8));  // ''
// console.log("imooc".repeat(0.9)); // ''