// Number 对象
// JavaScript 的 Number 对象是经过封装的，能让你处理数字值的对象， Number 对象由 Number() 构造器创建。
// 类型转换
// 在非构造器上下文中，也就是没有 new 操作符时，Number 可以类型转换的函数使用。 接收一个参数，并将这个参数转换为数字，如果参数无法被转换为数字，则返回 NaN。
console.log(Number('10'));//10
console.log(Number('imooc'));//NaN
console.log(Number(''));//0
console.log(Number());//0
console.log(Number(undefined));//NaN

// 上面的代码中，在没有字符串或者是空字符串的时候，会得到数字 0，还有参数是 null 时得到的结果也是 0。但是，当参数为 undefined 时则会得到 NaN。

// 移植全局方法
// 在 ES5 中，如 parseFloat、parseInt 等都是全局方法，在 ES6 中把处理数值的一些方法都移植到了 Number 对象上了。
console.log(parseInt('100'));
console.log(Number.parseInt('200'));

// 二进制和八进制表示法
// ES6 提供了二进制和八进制数值表示的新写法，分别用前缀 0b（或 0B）和 0o（或 0O）表示。
// 对应的十六进制我们知道用 0x 作为前缀来表示的。下面我们来看看二进制和八进制是怎么表示的。

// es6 2进制 0B 开头
console.log('B', 0B111110111); 	// 503
console.log('B', 0b111110111); 	// 相同，0B 和 0b 都可以

// es6 8进制 0o 开头
console.log(0o767); 	// 503
console.log(0O767); 	// 相同，0o 和 0O 都可以
console.log(0b111110111 === 503);
console.log(0o767 === 503);

// 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀 0 表示，ES6 进一步明确，要使用前缀 0o 表示。
// 非严格模式
(function () {
    console.log(0o11 === 011);	// true
})()

// // 严格模式
// (function () {
//     'use strict';
//     console.log(0o11 === 011);
// })()
// Uncaught SyntaxError: Octal literals are not allowed in strict mode.


// 将 0b 和 0o 前缀的字符串数值转为十进制，可以把 Number 对象直接作为方法使用。
console.log(Number('0b111'));//7
console.log(Number('0o10'));//8

// Number 的属性介绍
// Number.EPSILON
// ES6 在 Number 对象上面，新增一个极小的常量 Number.EPSILON。它表示 1 与大于 1 的最小浮点数之间的差。它是一个差值，属于正数。
console.log(Number.EPSILON);