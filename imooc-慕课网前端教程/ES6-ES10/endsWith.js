// endsWith() 用于判断当前字符串，是否以一个指定字符串为结尾的，如果在字符串的结尾找到了给定的字符则返回 true，否则返回 false。
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best', 17));   // true

const str2 = 'Is this a question';
console.log(str2.endsWith('?'));          // false


// 查询一个字符串是否在另一个字符串的末尾。
// 当字符串调用 endsWith() 方法时不传参数时，默认是 undefined 返回的结果是 false。
var str = "I love imooc.";
console.log(str.endsWith());   // false
console.log(str.endsWith(undefined));	// false


// 一个参数
console.log("=======一个参数==========");
var str3 = "I love imooc.";
console.log(str3.endsWith("I love"));    // false
console.log(str3.endsWith("imooc"));     // false
console.log(str3.endsWith("imooc."));    // true
console.log(str3.endsWith(""));    			// true 在查找空字符串时，返回的结果是 true，那是因为空字符在任何字符串中都是存在的。

// 两个参数
console.log("=======两个参数==========");
// 当有第二个参数的时候，第二个参数是字符串的长度
var str4 = "I love imooc.";
console.log(str4.endsWith("love", 6));   // true
console.log(str4.endsWith("e", 5));      // false

