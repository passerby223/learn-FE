/**
 * 在字符串中我们学习了 includes () 方法，在数组中同样存在 includes () 方法，用来查找数组。
 * includes () 的存在是为了取代 indexOf () 方法而设计的， indexOf() 在数组查找时存在一定缺陷，
 * 对于数组中元素是 undefined、NaN 时查找的结果是有问题的。
 * 为了保持语法的一致性和简洁性 indexOf () 方法也是有必要的，本节我们就来学习数组中的 includes() 方法。
 */
// 方法详解
// includes () 方法用于查找一个数组中是否包含一个指定的元素，并返回一个布尔值，如果包含返回 true 否则返回 false。
var arr = ['imooc', 'ES6', 'wiki'];
console.log(arr.includes('ES6'));     // true
// 和字符串中的 includes() 方法一样，当没有参数时，includes() 方法会把第一个参数置成 undefined，注意，
// 不同的是这里的 undefined 不是字符串 “undefined”。如下实例：
console.log([undefined].includes());		// true
console.log(['undefined'].includes());	// false



