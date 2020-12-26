// 在 ES5 中没有对数组内元素的复制和替换，如果要实现数组内的替换需要针对性的操作。
// 而在 ES6 中提供了 copyWithin 方法轻易地实现数组内元素的复制，不会改变原数组的长度。

// copyWithin 复制原数组指定的项，从 start 到 end 之间的元素；然后替换原数组指定的位置，从 target 开始替换。原数组的长度不会被改变。
// 语法：arr.copyWithin(target[, start[, end]])

// 一个参数
// 当第一个参数是 0 或者没有参数时会复制整个数组，并从起始位置开始替换复制的数据。
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.copyWithin(0);
let arr2 = arr.copyWithin();
console.log(arr1);
console.log(arr2);

// 上面的代码中，第一个参数是 0，会从第一个位置的元素开始复制整个数组，然后替换整个数组，所以数组没有变，0 可以省略不填。
// 没有参数时默认第一个参数是 0。当第一个参数大于 0时，看如下示例：
console.log(arr.copyWithin(2));
console.log(arr.copyWithin(6));
