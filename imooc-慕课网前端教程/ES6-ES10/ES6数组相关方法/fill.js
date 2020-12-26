// fill 接收一个指定的值，替换数组中的指定位置的值，可以用于初始化默认值的数组。
// 初始化一个默认值的数组
let arr = Array(5).fill(1);//[ 1, 1, 1, 1, 1 ]
console.log(arr);
// Array(5) 会创建一个长度为 5 的空数组，然后使用 fill 对每一项填充一个默认值是 1。
// 有两个参数时，会从第二个参数的指定位置进行填充。如果是负值时，则从数组的最后一项往前数第几个位置开始算起。如下示例：
// 两个参数时
console.log([1, 2, 3].fill(0, 0));      // [0, 0, 0]
console.log([1, 2, 3].fill(0, 1));      // [1, 0, 0]
console.log([1, 2, 3].fill(0, -1));     // [1, 2, 0]
console.log([1, 2, 3].fill(0, -3));     // [0, 0, 0]

// 三个参数时
// 有三个参数时，第三个参数是替换结束的位置，不包括结束的位置。
console.log("=".repeat(20) + "三个参数时" + "=".repeat(20));
console.log(['a', 'b', 'c'].fill(4, 1, 2));    // ["a", 4, "c"]
console.log(['a', 'b', 'c'].fill(4, -3, -2));  // [4, "b", "c"]
console.log(['a', 'b', 'c'].fill(4, -3, 1));   // [4, "b", "c"]
console.log(['a', 'b', 'c'].fill(4, -2, 1));   // ["a", "b", "c"]

// 填充对象问题
// 值得注意的是，当使用 fill 对数组中的想填充的是对象时，对象是引用类型，更改其中一项其他项的值也会跟着改变
console.log("=".repeat(20) + "填充对象问题" + "=".repeat(20));
let arr2 = Array(5).fill({});
console.log(arr2);
arr2[2]['name'] = "小花花";
console.log(arr2);


