var arr = ['jquery', 'react'];

arr[1] = 'vue';
arr[2] = 'angular';

console.log(arr[2]); // 输出："angular"
console.log(arr.length); // 输出：3
console.log(arr)

console.log("---------------------------------------------------------------------------")
var arr1 = [1];

var length = arr1.push(2, 3);

console.log(arr1); // 输出：[1, 2, 3]
console.log(length); // 输出：3
console.log("--------------------------------splice方法-------------------------------------------")
// 在第二项之后插入3, 4, 5
var arr2 = [1, 2, 6];
arr2.splice(2, 0, 3, 4, 5);

console.log(arr2)
console.log("--------------------------------清空数组-------------------------------------------")
var arr3 = [1, 2, 3, 4];
console.log(arr3);
// arr3.splice(0, arr3.length);
arr3.length = 2;
console.log(arr3);
// arr3 = []
console.log("--------------------------------使用Array创建数组-------------------------------------------")
var arr4 = new Array(10);
console.log(arr4);
console.log(arr4.length);
var arr5 = new Array(1, 2, 4);
console.log(arr5);
console.log("--------------------------------数组中的 undefined 与 empty-------------------------------------------")
var arr6 = new Array(10);
arr6[0] = 1;
var arr7 = [1, 2, 3, 4];
delete arr7[2];
console.log(arr6);
console.log(arr7);
console.log("--------------------------------数组中的 undefined 与 empty 然后进行遍历-------------------------------------------")
var arr8 = [1, undefined, 3, 4, 5];
delete arr8[3];
arr8.forEach(function (item, index) {
    console.log(index, item);
});
var i = 0
for (i in arr8) {
    console.log(arr8[i])
}
console.log("--------------------------------使用数组判断括号是否匹配-------------------------------------------")
// 空数组
var stack = [];

// 一个式子
var equation = '(1 + (2 - 3) * 4) / (1 - 3)';

var i, len;
for (i = 0, len = equation.length; i < len; i++) {
    if (equation[i] === '(') { // 如果碰到左括号
        // 往数组里放个1
        stack.push(1);
    } else if (equation[i] === ')') { // 如果碰到右括号
        if (!stack.length) { // 判断数组长度，如果是0，则肯定是出错的，数组长度0的时候说明没有左括号，没有左括号是不可能出现右括号的
            // 随便放一个1
            stack.push(1);
            break;
        }
        // 如果数组不是空的 就从数组末尾拿一个走。
        stack.pop();
    }
}

// 判断数组长度
if (!stack.length) { // 如果数组已经空了，说明括号都一一对应，式子里的括号没问题。
    console.log('括号合法');
} else {
    console.log('括号不合法');
}


