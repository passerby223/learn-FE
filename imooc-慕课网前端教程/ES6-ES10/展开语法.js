let arr = [1, 2, 3];
let arr1 = [...arr];
arr.push(4);
console.log(arr);
console.log(arr1);
// 使用 ... 展开语法可以实现数组的拷贝，而且比较简洁地表达了把 arr1 中的每一项展开放入 arr2 中。

// ES5 中字面量的拷贝实例
let obj = {a: 1, b: 2};
let copy1 = {};
for (let key in obj) {
    copy1[key] = obj[key]
}
let copy2 = JSON.parse(JSON.stringify(obj))
// obj.c = 3;
obj['c'] = 3;
console.log(obj);
console.log(copy1);
console.log(copy2);
// ES6 中字面量的拷贝实例
let copy3 = {...obj};// 使用展开语法对 obj 进行展开，完美地实现了拷贝过程。
/*
这里有必要说明一下，以上的方法都是浅拷贝（只拷贝数组和对象的第一层结构）的过程.
对于数组和对象第一层以后的内容，如果是引用类型的存储方式，则不会进行拷贝操作，也就是不会进行深拷贝。
 */
obj['d'] = 4;
console.log(obj);
console.log(copy3);

// 展开语法在字符串中的使用
// 展开语法在处理字符串时，顾名思义可以把字符进行展开，从而得到一个每项都是单个字符串的数组，
// 注意展开语法在字符串使用时，需要包裹在 [] 中才能生效。
let name = [..."小花花"];//[ '小', '花', '花' ]
let name1 = [..."Tom is a good boy!"];
console.log(name);
console.log(name1);
// 在 ES5 中也有方法，可以使用 split 方法实现把字符串变成数组。
const im = "imooc".split("");
console.log(im);

// 展开语法在数组中的使用
const array1 = [1, 2];
const array2 = ['a', ...array1];
const array3 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);

// 在字面量对象中的使用
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 30};
console.log(obj2);
const obj3 = {b: 20, c: 40};
const obj4 = {...obj2, ...obj3};
console.log(obj4);

// 函数调用时传参问题  (在函数传参数直接把数组中的项进行展开就可以达到传递多个参数的目的。)
function sum(a, b, c) {
    return a + b + c;
}

let array4 = [1, 2, 3];
console.log(sum(...array4)); //使用展开语法把 array4 数组中的每一项进行展开，成为 sum 函数中的三个参数。
