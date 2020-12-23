/**
 * 数组的解构赋值
 */
// 基本用法
var [a, b] = [1, 2];
console.log(a);
console.log(b);
/*
上面的例子中先声明一个数组，分别在数组的 0 和 1 的索引位置上放置变量 a 和 b，对应着需要获取数组的索引位置，这样就可以从数组当中取到我们想要的值了。
 */
// 默认值
// 在解构一个未知的数组时，需要对未能取的值的变量赋一个默认值，为了防止从数组中取出一个值为 undefined 的对象，可以在表达式的左边的数组中为任意变量预设一个默认的值。
let [a1, b1 = 9] = [1, 2];
console.log(a1 + "---" + b1);
let [a2, b2 = 9] = [1];
console.log(a2 + "---" + b2);
let [a3, b3 = 90] = [1, undefined];
console.log(a3 + "---" + b3);
// 交换变量
// 在 ES6 之前如果我们想交换两个变量的值时，我们需要借助一个中间的值来过渡，下面是要交换 a、b 值的过程：
var a4 = 1;
var b4 = 4;
var m = a;
a4 = b4;
b4 = m // a=4, b=1
console.log(a4 + "---" + b4);
// 在交换 a、b 值时，需要借助中间的变量来中转，使用 ES6 解构赋值就很简单：

let a5 = 1, b5 = 2;
[b5, a5] = [1, 2];
console.log(a5 + "---" + b5);

// 跳过某项值使用逗号隔开
// 在解构数组时，可以忽略不需要解构的值，可以使用逗号对解构的数组进行忽略操作，这样就不需要声明更多的变量去存值了
var [a6, , , b6] = [10, 20, 30, 40];
console.log(a6 + "---" + b6);


// 剩余参数中的使用
// 通常情况下，需要把剩余的数组项作为一个单独的数组，这个时候我们可以借助展开语法把剩下的数组中的值，作为一个单独的数组，
var [x, y, ...res] = [10, 20, 30, 40, 50];
console.log(x + "---" + y + "---" + res);
console.log(res);

/**
 * 对象的解构赋值
 */
// 基本用法
// ES6 之前
var obj = {name: 'imooc', age: 7};
var name = obj.name;  // imooc
var age = obj.age;    // 7
console.log(name);
console.log(age);

// ES6中 解构对象
let obj1 = {name1: "小花花", age1: 21};
let {name1, age1} = obj1;
console.log(name1);
console.log(age1);
// 在 {} 直接声明 name1 和 age1 用逗号隔开即可得到目标对象上的值，完成声明赋值操作。

// 默认值
// 对象的默认值和数组的默认值一样，只能通过严格相等运算符（===）来进行判断，只有当一个对象的属性值严格等于 undefined，默认值才会生效。
var {a7 = 10, b7 = 5} = {a7: 3};                 // a = 3, b = 5
console.log(a7 + "---" + b7);
var {a8 = 10, b8 = 5} = {a8: 3, b8: undefined};   // a = 3, b = 5
console.log(a8 + "---" + b8);
var {a9 = 10, b9 = 5} = {a9: 3, b9: null};        // a = 3, b = null
console.log(a9 + "---" + b9);

// 重命名属性
// 在对象解构出来的变量不是我们想要的变量命名，这时我们需要对它进行重命名。
var {a10: x1 = 8, b10: y1 = 9} = {a10: 111, b10: 222}
console.log(x1);
console.log(y1);
// 这里把 a 和 b 的变量名重新命名为 x 和 y。


//剩余参数中的使用
// 在对象的解构中也可以使用剩余参数，对象中没有解构的剩余属性做聚合操作，生成一个新的对象。
var {a11, c11, ...res1} = {a11: 11, b11: 22, c11: 33, d11: 44};
console.log(a11);
console.log(c11);
console.log(res1);
// 对象中的 b、d 没有被解构，通过剩余参数语法把没有解构的对象属性聚合到一起形成新的对象。


// 解构字符串
// 当然字符串也是可以被解构的，字符串可以当作数组被解构。
var [str1, str2, str3] = "Wow";
console.log(str1);
console.log(str2);
console.log(str3);

// 解构复杂的数据结构
let data = {
    a: 1,
    arr: [
        {
            a: 2,
            b: 3,
            c: 4
        }
    ]
}
//更复杂数据结构解构
// 上面的例子中 data 的数据解构还算是比较复杂的，
// 对于解构这种既有对象又有数组的数据解构，我们要先声明一个和目标对象有着相同的数据嵌套，才能去拆解目标对象。
// 这里解构的是 data 中的 a 和 b 的值，而且把 a 和 b 重命名为 newA 和 newB。
let {
    a: newA,
    arr: [
        {
            a: newA1,
            b: newB,
            c: newC
        }
    ]
} = data;


console.log(newA);
console.log(newA1);
console.log(newB);
console.log(newC);

/**
 * 小结
 本节讲解了 ES6 解构赋值的使用方法，总结下来一共有以下几点：
 解构赋值一般针对对象和数组，如果解构对象是 undefined 或是 null 都会报错；
 默认值的生效条件是，只有当解构的对象的值是严格模式下的 undefined 的情况下，默认值才会生效；
 可以不借助中间变量来交换两个值；
 在解构复杂的数据解构时，注意声明的对象要和目标的对象有着相同的解构形式，才能去解构目标对象。
 */
