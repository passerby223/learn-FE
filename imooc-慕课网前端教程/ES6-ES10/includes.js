/**
 * 字符串查找一直都是程序中的常用操作，在 ES5 中查找一个字符串是否包含另一个字符串，一般有两种思维。
 * 一是使用正则的方式来匹配，二是使用 ES5 的方式，如 indexOf、lastIdexOf、search。
 * 使用正则比较简单，但是需要对正则语法有一定的了解。
 * 一般使用 indexOf() 来进行字符串的查找 ，它会返回查询后第一次出现的指定值的索引，如果未找到该值，则返回 -1。
 ES6 新增方法 includes() 方法，来替代 indexOf() 弥补它的不足。
 而 ES6 提供了新的方法 includes() 可以更好地进行判断，而不需要根据返回的索引进行判断。
 */
// 方法详情
// includes() 方法主要用于查询字符串，判断一个字符串是否包含另外一个字符串，其返回值是如果包含该字符串则返回 true 否则返回 false。
console.log("你好中国!".includes("好"));//true
console.log("你好中国!".includes("哈哈哈"));//false
const str = 'hello world';

console.log(str.includes('hello'));     // true
console.log(str.includes('hello', 3));  // false
console.log("================")
// 在没有传入确切的查询字符串时，searchString 会被强制设置成 “undefined”，然后在当前字符串中查找这个值。
console.log('undefined'.includes(''));			// 返回 true
console.log('undefined'.includes()); 	  	// 返回 true
console.log('undefine'.includes());		  	// 返回 false
console.log('imooc ES6 wiki'.includes());	// 返回 false
