// const 的使用类似于 let，不同的是 const 在声明时必须初始化一个值，而且这个值不能被改变。
const PI = 3.1415; // 定义一个圆周率常量 PI;上面的代码声明了一个常量 PI，如果声明时没有初始化值时，则会抛出异常。
console.log(PI);
// PI = 34;  //TypeError: Assignment to constant variable.
console.log(PI);
let name = "小花花";
console.log(name);
name = "大花花";
console.log(name);