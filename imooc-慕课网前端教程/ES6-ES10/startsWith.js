// startsWith()该方法用来判断当前字符串是否以给定的字符串作为开头。
/**
 * startsWith() 用于判断一个字符串，是否以一个指定字符串为起始的，如果是字符串的开头找到了给定的字符则返回 true，否则返回 false。
 */
const str1 = 'I love imooc.';

console.log(str1.startsWith('I'));     // true
console.log(str1.startsWith('I', 3));  // false
// 一个参数
var str = "I love imooc.";

console.log(str.startsWith("I love"));    // true
console.log(str.startsWith("imooc"));     // false
console.log(str.startsWith("eimooc"));    // false
// 两个参数
var str2 = "I love imooc.";

console.log(str2.startsWith("love", 3));   // false
console.log(str2.startsWith("ove", 3));    // true

