// 属性值简写
// 在 ES5 中我们知道，在定义对象时属性的值是必须要写的，在 ES6 中规定，如果属性名和定义的变量名是一样的，就可以在对象中直接写这个变量名作为对象中的一项。如下：
let name = "笑话";
//ES5
let obj = {
    name: name
}
//ES6
let obj1 = {
    name
}
console.log(obj.name);
console.log(obj1.name);

// 下面我们来看一个在函数中返回一个对象的实例：
//ES5
function getObj(x, y) {
    return {x: x, y: y};
}

let res1 = getObj(1, 2);
console.log(res1);//{ x: 1, y: 2 }L

//ES6
function getObj1(x, y) {
    return {x, y};
}

let res2 = getObj1(3, 4);
console.log(res2);//{ x: 3, y: 4 }

// 对象中方法的简写
// 除了属性可以简写，对象中的方法也是可以简写的，而且更加简洁明了。
const name1 = "张三";
//ES5
let person1 = {
    name1,
    getName: function () {
        console.log(this.name1);
    }
}
person1.getName();

//ES6
let person2 = {
    name1,
    getName() {
        console.log(this.name1);
    }
}
person2.getName();
// 上面的代码中，ES5 中定义一个对象上的方法时需要使用 function 关键字来定义，而 ES6 则直接省略了 冒号和 function 关键字。
// 可以看出使用 ES6 这种简洁的方式更具表达力。


var person111 = {};

function getName() {
    return person111.name
}

function setName() {
    person111.name = '李四'
}

function clear() {
    person111 = {};
}

// ES5 写法
module.exports = {
    getName: getName,
    setName: setName,
    clear: clear
};
// ES6写法
module.exports = {getName, setName, clear};

// 简洁的属性表达
// 在 JavaScript 中定义对象的属性，一般有两种方法。如下：
// 方法一
obj.name = 'imooc';

// 方法二
obj['a' + 'ge'] = 7;
// 上面的代码中，方法一直接使用标识符进行赋值操作，这是我们比较常用的赋值操作，但是如果属性是一个表达式时，则可以使用方法二，把表达式写在中括号中。

// ES6 对对象的属性进行了扩展，可以覆盖更多的场景，属性可以使用变量的形式来定义
var key = 'name';
var obj222 = {
    [key]: 'imooc',
    ['a' + 'ge']: 7
}

console.log(obj222);


// 另外，属性也可以是一个带空格的字符串，在取值时在中括号中可以直接使用字符串，也可以使用变量。如下：
var str = 'first name';
var obj333 = {
    ['I love imooc']: 'ES6 Wiki',
    [str]: 'Jack'
}
console.log(obj333['I love imooc'])	// ES6 Wiki
console.log(obj333[str])	// Jack
console.log(obj333['first name'])	// Jack

// 表达式还可以用于定义对象上的方法名。
var person1111 = {
    name: 'Jack',
    ['get' + 'Name']() {
        console.log(this.name)
    }
};
person1111.getName()	// Jack

/**
 * 方法的 name 属性
 * ES6 增加了函数的 name 属性，函数直接调用 name 会返回函数名。字面量对象上的方法也是函数，因此也有 name 属性。
 */
var person88 = {
    name: "Jack",
    getName() {
        console.log(this.name);
    },
};

console.log(person88.getName.name); // "getName"






