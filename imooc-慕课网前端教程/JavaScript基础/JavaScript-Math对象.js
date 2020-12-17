/*
Math.floor() 返回小于或等于一个给定数字的最大整数。
 */
var num1 = Math.floor(2.4);
var num2 = Math.floor(2.9);
console.log(num1);
console.log(num2);
// 因为是向下取整，不会进行四舍五入，所以不论是 2.4 还是 2.9 ，经过 Math.floor 处理后，都为 2 。
/*
Math.ceil
Math.ceil() 函数返回大于或等于一个给定数字的最小整数。
Math.ceil 就是对一个数进行向上取整。
与 Math.floor 相反，Math.ceil 向上取整，也不会进行四舍五入
 */
var num3 = Math.ceil(4.1);
var num4 = Math.ceil(4.9);
console.log(num3);
console.log(num4);
/*
Math 下的 random 方法调用后返回一个大于等于零且小于一的随机数，即区间 [0, 1) 。
 */
console.log(Math.random());
//生成1-100之间的随机数
console.log(Math.floor(Math.random() * 100 + 1));
/*
数学常量
 */
// 圆周率
console.log(Math.PI)
// 欧拉常数
console.log(Math.E)
/*

 */