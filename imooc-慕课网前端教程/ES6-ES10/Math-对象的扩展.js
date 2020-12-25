// Math.trunc
/**
 * Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分，是一个取整操作。
 * Math 中还有三个方法： Math.floor()、Math.ceil()、Math.round() ，也是用于取整操作的，但是他们有一定逻辑的：
 Math.floor() 向下取整；
 Math.ceil() 向上取整；
 Math.round() 进行四舍五入操作。
 相比之下 Math.trunc() 的执行逻辑就很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数。
 */
console.log(Math.trunc(3.1415926));
console.log(Math.floor(3.1415926));
console.log(Math.ceil(3.1415926));
console.log(Math.round(3.1415926));
console.log("====");
console.log(Math.trunc("121.12"));
console.log(Math.trunc("121.82"));
console.log(Math.trunc("-121.82"));
console.log(Math.trunc(-121.8));
console.log(Math.trunc(121.8));
// 传入该方法的参数会被隐式转换成数字类型，也就是对于非数值，Math.trunc() 内部使用 Number() 方法将其先转为数值。

// Math.sign()
// Math.sign() 方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
/**
 * Math.sign() 会返回五种值。

 参数为正数，返回 + 1；
 参数为负数，返回 - 1；
 参数为 0，返回 0；
 参数为 - 0，返回 - 0;
 其他值，返回 NaN。
 */
console.log("========================================Number.sign====================================")
console.log(Math.sign(23));//1
console.log(Math.sign(2334));//1
console.log(Math.sign(-23));//-1
console.log(Math.sign(-2331));//-1
console.log(Math.sign(0));//0
console.log(Math.sign("哈哈哈"));//NaN
console.log(Math.sign(null));//0
console.log(Math.sign(undefined));//NaN
console.log(Math.sign(NaN));//NaN


// Math.cbrt()
/**
 * Math.cbrt() 函数返回任意数字的立方根。cbrt 是 “cube root” 的缩写，意思是立方根.
 */
console.log("========================================Number.cbrt====================================")
console.log(Math.cbrt('8')); // 2
console.log(Math.cbrt('imooc')); // NaN
console.log(Math.cbrt(NaN)); // NaN
console.log(Math.cbrt(-1)); // -1
console.log(Math.cbrt(-0)); // -0
console.log(Math.cbrt(-Infinity)); // -Infinity
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(Infinity)); // Infinity
console.log(Math.cbrt(null)); // 0
console.log(Math.cbrt(2)); // 1.2599210498948732

// Math.clz32()
/**
 * JavaScript 的整数使用 32 位二进制表示，Math.clz32() 方法返回一个数的 32 位无符号整数形式有多少个前导 0。
 * Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数，
 * 比如 1000000 转换成 32 位无符号整形数字的二进制形式后是 00000000000011110100001001000000,
 * 开头的 0 的个数是 12 个，则 Math.clz32(1000000) 返回 12.
 *
 *  */
console.log("========================================Number.clz32====================================")
console.log(Math.clz32(-0)); // 32
console.log(Math.clz32(0)); // 32
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22
console.log(Math.clz32(0b01000000000000000000000000000000)); // 1
console.log(Math.clz32(0b00100000000000000000000000000000)); // 2

// Math.hypot()
/**
 * Math.hypot 方法返回所有参数的平方和的平方根。
 * 如果参数不是数值，Math.hypot 方法会将其转换为数值。只要有一个参数无法转换为数值，就会返回 NaN。
 */
console.log("========================================Number.hypot====================================");
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755
console.log(Math.hypot()); // 0
console.log(Math.hypot(NaN)); // NaN
console.log(Math.hypot(3, 4, 'foo')); // NaN
console.log(Math.hypot(3, 4, '5')); // 7.0710678118654755
console.log(Math.hypot(-3)); // 3

// 幂运算符
/**
 * ES2016 新增了一个幂运算符 ** （也可以说是指数运算符）。幂运算符返回第一个操作数作底数，第二个操作数作指数的乘方。
 * 即，var1^var2，其中 var1 和 var2 是其两个操作数。幂运算符是右结合的。a ** b ** c 等同于 a ** (b ** c)。
 */
console.log("================幂运算符===================")
console.log(3 ** 2);//9
console.log(3 ** 3);//27
// 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。
let a = 1.5;
a **= 2;
// 等同于 a = a * a;
let b = 4;
b **= 3;
// 等同于 b = b * b * b;
// 指数运算符与 Math.pow() 基本相同，不过使用幂运算符更加方便简洁。
console.log(Math.pow(99, 99));
// 3.697296376497268e+197
console.log(99 ** 99);
// 3.697296376497268e+197

