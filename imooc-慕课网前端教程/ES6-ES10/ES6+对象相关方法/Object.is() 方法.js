// Object.is() 会接收两个需要判断的参数，最后返回一个布尔值，如果相同则返回 true 否则返回 false。
Object.is('imooc', 'imooc');  // true
Object.is('imooc', 'mooc');   // false

Object.is(window, window);    // true
Object.is([], []);           // false

var foo = {a: 1};
var bar = {a: 1};
var obj = foo;
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false
Object.is(foo, obj);         // true

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0 / 0);         // true



