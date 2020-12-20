// void 运算符 对给定的表达式进行求值，然后返回 undefined。(MDN)
void function () {
    console.log('马上执行！冲冲冲！');
}();
// 但有局限性，如果需要获取到函数的返回值，就不能使用 void。
var num1 = 1;
var num2 = 2;

var result = void function (number1, number2) {
    return [number1 + number2, number1 * number2];
}(num1, num2);

result.forEach(function (res) {
    console.log(res);
});
