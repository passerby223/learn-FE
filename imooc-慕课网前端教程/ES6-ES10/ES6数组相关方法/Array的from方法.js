// Array.from() 方法会接收一个类数组对象然后返回一个真正的数组实例，返回的数组可以调用数组的所有方法。

// 类数组转化
// 所谓类数组对象，就是指可以通过索引属性访问元素，并且对象拥有 length 属性，类数组对象一般是以下这样的结构：
var arrLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3
};
// 在 ES5 中没有对应的方法将类数组转化为数组，但是可以借助 call 和 apply 来实现：
var arr1 = [].slice.call(arrLike);
console.log(arr1);
console.log(typeof arr1);
// 或
var arr2 = [].slice.apply(arrLike);
console.log(arr2);
console.log(typeof arr2);

// 有了 ES6 的 Array.from() 就更简单了，对类数组对象直接操作，即可得到数组。
var arr3 = Array.from(arrLike);
console.log(arr3);
console.log(typeof arr3);

// 第二个参数 —— 回调函数
// 在 Array.from 中第二个参数是一个类似 map 函数的回调函数，该回调函数会依次接收数组中的每一项作为传入的参数，然后对传入值进行处理，最得到一个新的数组。
// Array.from(obj, mapFn, thisArg) 也可以用 map 改写成这样 Array.from(obj).map(mapFn, thisArg)。
arrLike1 = {
    '0': '1',
    '1': '2',
    '2': '3',
    length: 3
}
var arr4 = Array.from(arrLike1, (x) => x * 2);
console.log(arr4);//[ 2, 4, 6 ]
var arr5 = Array.from(arrLike1).map((x) => x * 3);
console.log(arr5);//[ 3, 6, 9 ]

// 第三个参数 ——this
// Array.from 中第三个参数可以对回调函数中 this 的指向进行绑定，
// 该参数是非常有用的，我们可以将被处理的数据和处理对象分离，将各种不同的处理数据的方法封装到不同的的对象中去，处理方法采用相同的名字。
// 在调用 Array.from 对数据对象进行转换时，可以将不同的处理对象按实际情况进行注入，以得到不同的结果，适合解耦。
let obj = {
    handle: function (n) {
        return n + 3;
    }
}
var arr6 = Array.from(arrLike1, function (x) {
    return this.handle(Number.parseInt(x));
}, obj);
console.log(arr6);//[ 4, 5, 6 ]

// 从字符串里生成数组
// Array.from() 在传入字符串时，会把字符串的每一项都拆成单个的字符串作为数组中的一项。
console.log(Array.from("我爱你中国!"));//[ '我', '爱', '你', '中', '国', '!' ]

// 从 Set 中生成数组
// 创建了一个 Set 数据结构，把实例传入 Array.from() 可以得到一个真正的数组。
const set1 = new Set(['a', 'b', 'c', 'd']);
console.log(Array.from(set1));
console.log(typeof Array.from(set1));


// 从 Map 中生成数组
// Map 对象保存的是一个个键值对，Map 中的参数是一个数组或是一个可迭代的对象。 Array.from() 可以把 Map 实例转换为一个二维数组。
const map = new Map([[1, 2], [2, 4], [4, 8]]);

console.log(Array.from(map));  // [[1, 2], [2, 4], [4, 8]]

// 使用案例
// 创建一个包含从 0 到 99 (n) 的连续整数的数组
// 1.for循环实现
const arr7 = [];
for (let i = 0; i < 100; i++) {
    arr7.push(i);
}
console.log(arr7);

// 2.使用 Array 配合 map 来实现。
var arr8 = Array(100).join(' ').split(' ').map(function (item, index) {
    return index;
});
// console.log(Array(100));//[ <100 empty items> ]
console.log(arr8);

// 3.使用 es6 的 Array.from 实现。
var arr9 = Array.from({length: 100}).map(function (item, index) {
    return index;
});
console.log(arr9);

// 数组去重合并
/**
 *
 * @returns {unknown[]}
 *
 * 首先定义一个去重数组函数，通过 concat 把传入的数组进行合并到一个新的数组中去，
 * 通过 new Set () 可以对 arr 进行去重操作，
 * 再使用 Array.from() 返回一个拷贝后的数组。
 */
function combine() {
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2, 3, 3];
console.log(combine(m, n));                     // [1, 2, 3]


