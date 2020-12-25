// Array.of() 是创建数组的方法，它接收若干个参数，返回一个新的 Array 实例，类似 Array() 方法。
// 基本实例
// Array.of() 会按顺序接受 N 个参数，接收的所有参数都会成为新数组的项。
console.log(Array.of('哈哈哈'));//[ '哈哈哈' ]
console.log(Array.of(7));          // [7]
console.log(Array.of(1, 2, 3));    // [1, 2, 3]
console.log(Array.of(undefined));   // [undefined]
console.log(Array.of(3).length);    // 1


/**
 * 对比 Array()
 * Array.of 的主要作用是弥补 Array() 的不足的，下面我们来看看他们有什么不同。
 */
// Array() 会根据接收的参数不同从而返回不同的数组，例如：
console.log("=".repeat(30) + "对比 Array()" + "=".repeat(30));
console.log(Array());               // []
console.log(Array(3));              // [ <3 empty items> ]
console.log(Array(2, 12));          // [2, 12]

console.log(Array.of());            // []
console.log(Array.of(3));           // [3]
console.log(Array.of(2, 12, 'a'));  // [2, 12, "a"]

/**
 * Array 方法在没有参数、一个参数、两个参数时，返回结果都不一样。
 * 没有参数的时候返回一个空数组；
 * 有一个参数的时候，返回一个长度为此参数的空数组，并且此数组不能被迭代；
 * 有两个参数的时候，才会把参数当成数组的每一项返回；
 *
 * 由于参数的不同 Array 方法会进行重载，而且他们的行为也不一致，Array.of() 方法总会创建一个包含所有传入参数的数组，而不管参数的数量与类型。
 */

// 扩展
// 如果原生不支持的话，可以手动实现一个 Array.of() 方法。
if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}

