// RegExp 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。
// RegExp 的实例用于生成一个正则表达式，利用正则表达式从字符串中匹配想要的内容。
// 正则表达式不是 JavaScript 的一个子内容，也并非 JavaScript 独有，需要学习正则表达式可以查阅相对应的文献。

// 创建实例
// 创建一个 RegExp 实例，只需要将其当作构造函数使用
var regexp = new RegExp(/^a*$/); // 创建了一个规则为从开头到结尾必须是任意个a正则表达式。
console.log(regexp.test('aaaa')); // true
// 上面的例子中实际上是把一个正则表达式字面量作为参数传递给了 RegExp 构造函数。
console.log(regexp.test('a')); // true
console.log(regexp.test('a1')); // false
// test 方法可以用来校验某个字符串能否使用这个正则表达式匹配到目标。
// 如果不想传递字面量，也可以传递一个正则表达式字符串，这个时候不需要使用 / 包裹，而字面量是需要 / 包裹的。
var regexp1 = new RegExp('^a*$'); // 创建了一个规则为从开头到结尾必须是任意个a正则表达式。
console.log(regexp1.test('aaaaaa')); // true
console.log(regexp1.test('caaaad')); // false

// 传递字符串的时候还能传递第二个参数，作为正则表达式的符号，部分文献也称其为描述符。
var regexp2 = new RegExp('^a*$', 'i');
var regexp3 = new RegExp('^a*$');

var str = 'AAAAA';

console.log(regexp2.test(str)); // 输出：true
console.log(regexp3.test(str)); // 输出：false

// 符号 i 表示忽略大小写，所以 regexp3 无法在 str 中匹配到值。

/*
符号
g 全局匹配，找到所有匹配，而不是在第一个匹配后停止
 */
var regexp4 = /a/g;
var regexp5 = /a/;

var str1 = 'abcdeabcde';

console.log(str1.match(regexp4)); // 匹配到两个 a
console.log(str1.match(regexp5)); // 只匹配到一个，并返回相应信息

// i 忽略大小写
var regexp6 = /apple/i;
var regexp7 = /apple/;

var str2 = 'AN APPLE A DAY KEEPS THE DOCTOR AWAY.';

console.log(str2.match(regexp6)); // 可以找到一个
console.log(str2.match(regexp7)); // 找不到 输出：null

// m 多行匹配   多行匹配模式下，开头和末尾就不是整个字符串的开头和末尾了，而是一行的开头和末尾。

/*
常用的正则表达式汇总
 */
// URL
var regexp8 = /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/
var str3 = "*http://www.baidu.com//sad/dad";
console.log(str3.match(regexp8));