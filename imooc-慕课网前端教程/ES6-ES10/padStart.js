// padStart() 在原字符串开头填充指定的填充字符串直到目标长度并返回一个新的字符串，不会对原字符串进行修改。

// 拼接字符串。
console.log("imooc".padStart(10, 'ilove'));    // "iloveimooc"

// 如果原字符串的长度，等于或小于最大长度，则字符串补全不生效，返回原字符串。
console.log('imooc'.padStart(5, 'ab')); // 'imooc'
console.log('imooc'.padEnd(2, 'ab')); // 'imooc'

// 如果补全的字符串和原字符串的长度大于目标（targetLength）的长度，补全的字符串会被截取。


// 如果补全的字符串和原字符串的长度小于目标（targetLength）的长度，补全的字符串会被重复，多余的部分会被裁剪。


// 场景实例（补全日期）
// 通常情况下用的比较多的就是在时间或者日期前面的补 0，比如：2020-06-03，但是通常我们使用时间戳获取日月时，是没有前面的 0 的，如：
// var month = new Date().getMonth() + 1;  // 6
// console.log(month);
var month = String(new Date().getMonth() + 1).padStart(2, '0');	// 06
var date1 = String(new Date().getDate()).padStart(2, '0'); 			// 03
console.log(month);
console.log(date1);