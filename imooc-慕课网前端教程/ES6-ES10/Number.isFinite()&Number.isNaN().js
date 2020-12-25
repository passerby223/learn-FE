// 在 ES5 中，全局下的 isFinite () 和 isNaN () 两种方法存在类型转换，对最终的判断结果存在歧义。
// ES6 在 Number 对象上，新提供了 Number.isFinite () 和 Number.isNaN () 两个方法，更加健壮地进行数值的判断，接下来让我看看这两种方法。
// NaN 值的产生
// 使用 Number() 方法进行类型转换，下面列举被强制类型转换为 NaN 的例子：
console.log(Number(undefined));				// NaN
console.log(Number('undefined'));				// NaN
console.log(Number('string'));				// NaN
console.log(Number({}));						// NaN
console.log(Number('10,3'));					// NaN
console.log(Number('123ABC'));				// NaN
console.log(Number(new Date().toString()));	// NaN

// 默认情况全局下存在方法 isNaN () 用了判断是否为 NaN 值，它要求接收的是数值类型的参数，
// 但是当参数不是 Number 类型， isNaN 函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是 NaN 进行判断。
// Number.isNaN () 详情
// ES6 提供了 Number.isNaN(x) ，通过这个方法来检测变量 x 是否是一个 NaN 将会是一种可靠的做法，它不会对所判断的值进行强制类型转换。
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
console.log(Number.isNaN("NaN"));      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN('undefined'));// false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

console.log(Number.isNaN(true));   	 // false
console.log(Number.isNaN(null));   	 // false
console.log(Number.isNaN(37));   	 // false
console.log(Number.isNaN("37"));   	 // false
console.log(Number.isNaN("37.37"));	 // false
console.log(Number.isNaN(""));   	 // false
console.log(Number.isNaN(" "));   	 // false
//true
console.log(Number.isNaN(NaN));//true

// 通过上面的实例，基本覆盖了现有程序的所有情况，不会出现使用全局下的 isNaN() 多带来的问题。
// 所有推荐使用 Number.isNaN(x) 方式来判断是否是 NaN。
// 在不支持 Number.isNaN 函数情况下，可以通过表达式 (x != x) 来检测变量 x 是不是 NaN 会更加可靠。

