// trim() 的方法返回值是去掉两端空白字符(空白字符是所有的空白字符space,tab,no-break,space等以及所有行终止符字符如 LF，CR 等)的字符串，
// 并不影响原字符串本身，不接收任何参数。
// 删除前后的空白字符。
const str1 = "   中国 ";
console.log(`原字符串str1为：${str1}，长度为${str1.length}`);
console.log("=".repeat(60))
console.log(str1.trim());
console.log(str1.trim().length);//2
console.log("=".repeat(60))
// 通过 trim()方法衍生出的两个方法 trimStart() 和 trimEnd()。
/**
 * 可以使用 trimStart() 和 trimEnd() 的别名，也能达到同样的效果，
 * trimLeft() 是 trimStart() 的别名，trimRight() 是 trimEnd() 的别名。
 */
// trimStart() 是删除字符串左边的空白字符，trimEnd() 是删除字符串右边的空白字符。
console.log(str1.trimStart());
console.log(str1.trimStart().length);
console.log("=".repeat(60))
console.log(str1.trimEnd());
console.log(str1.trimEnd().length);
console.log("=".repeat(60))
console.log(str1.trimLeft());
console.log(str1.trimLeft().length);
console.log("=".repeat(60))
console.log(str1.trimRight());
console.log(str1.trimRight().length);