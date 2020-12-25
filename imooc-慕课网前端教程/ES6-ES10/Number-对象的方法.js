console.log(Number.parseInt === parseInt);// true
console.log(Number.parseFloat === parseFloat);// true

// Number.isInteger()
// 判断一个值为整数
// 一种方法是：任何整数都会被 1 整除，即余数是 0。利用这个规则来判断是否是整数。就有如下函数：
function isInteger(num) {
    if (num % 1 === 0) {
        console.log(`${num}是整数`);
    } else {
        console.log(`${num}不是整数`);
    }
}

isInteger(10);//10是整数
isInteger(10.12);//10.12不是整数

// 另一种方法是：使用 Math.round、Math.ceil、Math.floor 判断，因为整数取整后还是等于自己。利用这个特性来判断是否是整数，使用 Math.floor 示例，如下：
function isInteger1(value) {
    return Math.floor(value) === value;
}

console.log(isInteger1(5)); 		// true
console.log(isInteger1(5.5)); 	// false
console.log(isInteger1('')); 	// false
console.log(isInteger1('8')); 	// false
console.log(isInteger1(true)); // false
console.log(isInteger1([])); 	// false
// 上面的两种方法算是比较常用的判断方式，其他的一些方式都存在一些问题，这里就不一一列举了。
// 但是，这两种方法都不够简洁，ES6 把判断整数提升到了语言层面，下面我们来看下 Number.isInteger() 的使用。

// Number.isInteger () 的用法
// Number.isInteger() 是 ES6 新增的函数，用来判断给定的参数是否为整数。
console.log("========================================Number.isInteger====================================")
console.log(Number.isInteger(100));// true
console.log(Number.isInteger(10.02));// false
console.log("======================================================================")
console.log(Number.isInteger(0));         // true
console.log(Number.isInteger(1));         // true
console.log(Number.isInteger(-100000));   // true

console.log(Number.isInteger(0.8));       // false
console.log(Number.isInteger(Math.PI));   // false

console.log(Number.isInteger(Infinity));  // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger("100"));     // false
console.log(Number.isInteger(true));      // false
console.log(Number.isInteger(false));     // false
console.log(Number.isInteger([1]));       // false
