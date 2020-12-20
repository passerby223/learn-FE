// typeof 操作符返回一个字符串，表示未经计算的操作数的类型。(MDN)
// typeof 可以用来检测一个值的类型。
console.log(typeof 233); // 输出："number"

console.log(typeof '嘎？'); // 输出："string"

console.log(typeof true); // 输出："boolean"

console.log(typeof undefined); // 输出："undefined"

var fn1 = function () {
};

function fn2() {
};
console.log(typeof fn1); // 输出："function"
console.log(typeof fn2); // 输出："function"

console.log(typeof null); // 输出："object"

console.log(typeof []); // 输出："object";
console.log(typeof ['9', '9', '6']); // 输出："object";

console.log(typeof {}); // 输出："object"

var number = 996;

console.log(number.__proto__.toString);

