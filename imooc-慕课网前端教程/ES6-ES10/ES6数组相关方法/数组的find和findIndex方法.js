let arr = [1, 6, 3, 5, 7, 8];
var num1 = arr.find((item) => item % 2 === 0);
console.log(num1);//6
var num2 = arr.findIndex((item) => item % 2 === 0);
console.log(num2);//1
/**
 * 在 ES5 中有 filter 方法可以用于查找符合条件的元素，filter 会遍历整个数组把符合条件的数组都返回出来，与 find 不同的是，
 * 它的返回结果是一个符合查询条件的数组。find 和 findIndex 则只关注数组中有没有符合查询条件的元素，而且只关注查询到的第一个元素。
 */
let num3 = arr.filter((item) => item % 2 === 0);
console.log(num3);//[ 6, 8 ]
// 上面的代码是找到所有满足 2 的倍数的数组，返回的结果同样是一个数组。


