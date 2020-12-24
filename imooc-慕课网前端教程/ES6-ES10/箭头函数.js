var title = "全局标题";
var imooc = {
    title: "慕课网 ES6 Wiki",
    getTitle: () => {
        console.log(this.title);
    }
};
imooc.getTitle();		// 慕课网 ES6 Wiki
var bar = imooc.getTitle;
bar();

// ES5 定义函数基本语法
var sumES5 = function (a, b) {
    return a + b;
}
// ES6 定义函数基本语法
var sumES6 = (a, b) => {
    return a + b;
}
console.log(sumES5(1, 2));
console.log(sumES6(1, 3));

// 当函数体内有返回值时，ES6 的箭头函数可以省略大括号：
var sumES61 = (a, b) => a + b;
console.log(sumES61(5, 5));

// 当传递的参数只有一个时，圆括号也可以省略：
var sumES62 = num => num + 10;
console.log(sumES62(4));

// 下面看个使用 map 求和的例子：
// ES5
var arr = [1, 2, 3];
var arrNew1 = arr.map(function (x) {
    return x * 2;
});
console.log(arrNew1);

var arrNew2 = arr.map(num => num * 3);
console.log(arrNew2);

// 对比 ES5 可以看出箭头函数的简洁表达，更加准确明了。

/*
返回值是对象
 */
// 如果函数体返回对象字面量表达式，可以省略大括号，使用圆括号的形式包裹对象。
var imooc1 = () => ({a: 2, b: 3});
console.log(imooc1());

// 默认参数
// 在定义函数时，往往需要给参数添加默认值，ES6 中可以直接在圆括号中进行赋值。
var strJoin = (str1, str2 = '小明!') => `${str1}, ${str2}`;
console.log(strJoin("你好呀", "校长!"));
// 在使用 function 关键字定义函数时，如果要给传递的参数设置默认参数，只能在函数体内进行赋值操作，ES6 简化了默认参数的赋值过程。

// 剩余参数
// 函数在接收不定参数时，可以使用剩余运算符把调用函数时传入的参数聚拢起来成为一个参数数组
// （类似 function 中的 arguments 对象，但 arguments 不是数组，不能直接使用）。
var fun = (num1, num2, ...nums) => {
    console.log(num1);
    console.log(num2);
    console.log(nums);
}
fun(10, 20, 30, 40, 50);

// 没有 this
// 箭头函数不会创建自己的 this，它只会从自己的作用域链的上一层继承 this，setTimeout 会改变 this 的指向，看下面的示例：
// function Person1() {
//     this.age = 0;
//     setTimeout(function () {
//         console.log(this);
//     }, 1000)
// }
//
// var pObj1 = new Person1();
//
// function Person2() {
//     this.age = 0;
//     setTimeout(() => {
//         console.log(this);
//     }, 1000)
// }
//
// var pObj2 = new Person2();

/**
 * 第一个例子中的 setTimeout 的回调函数使用 function 来定义的，从打印的结果可以看出 this 的指向是 window 对象也就是全局作用域。
 * 而第二个示例中 setTimeout 的回调函数使用箭头函数来定义，打印的结果可以看到，this 的指向是 Person.
 */
function Person() {
    var imooc = {};
    imooc.num = 10;
    imooc.getValue = () => {
        console.log(this)
    }
    return imooc;
}

var p = new Person();
p.getValue()
// person {}

// 总结： 箭头函数的 this 永远指向的是父级作用域。

// 不绑定 arguments
// 箭头函数不绑定 Arguments 对象。所以在使用箭头函数定义的函数体内是取不到 arguments 的。

var fun11 = function () {
    console.log(arguments)
};
fun11(1, 2, 3);  // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

var fun22 = () => {
    console.log(arguments)
};
fun22(1, 2, 3);  // Uncaught ReferenceError: arguments is not defined
