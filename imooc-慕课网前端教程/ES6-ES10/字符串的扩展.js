// 字符串的遍历器接口
// ES6 为字符串添加了可遍历接口，使得字符串可以被 for...of 进行循环遍历。
var str = "慕课网🤪"
for (const strElement of str) {
    console.log(strElement);
}