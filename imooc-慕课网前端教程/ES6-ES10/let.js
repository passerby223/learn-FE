/*
let 允许你声明一个作用域被限制在块级中的变量、语句或者表达式。
与 var 关键字不同的是，var 声明的变量只能在全局或者整个函数块中。
var 和 let 的不同之处在于 let 是在编译时才初始化，也就是在同一个块级下不能重复地声明一个变量，否则会报错。
let 不会在全局声明时创建 window 对象的属性，但是 var 会。
 */
{
    var name = "a";
    var name = "b";
}
console.log(name);//b
{
    let age = 21;
    // let age = 18;//SyntaxError: Identifier 'age' has already been declared
}
/*
var 是没有块的概念的，声明的变量会是 window 对象上的属性，在最外层的 window 上可以取到。
而 let 存在块的概念，不会添加到 window 对象上，这些是 let 和 var 之间的区别。从这里我们可以了解到为什么使用 let。
 */

/*
在使用 var 声明的情况下，可以看出，外层的 num 会被 {} 中的 num 覆盖，所以没有块级作用域的概念
 */
var num = 10;
{
    var num = 20;
    console.log(num)  // 20
}
console.log(num)    // 20

{
    let gender = "男";
    console.log(gender);
}
{
    let gender = "女";
    console.log(gender);
}




