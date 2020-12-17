/*
JSON 对象包含两个方法:
用于解析 JavaScript Object Notation (JSON) 的 parse() 方法，以及将对象/值转换为 JSON字符串的 stringify() 方法。
除了这两个方法, JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
JavaScript 内置的 JSON对象 用于处理 JSON 。
JSON（JavaScript Object Notation）是一种带有格式的文本，JavaScript 中的 JSON对象 用于处理这种文本。
JSON 对象只提供了两个方法，一个用于序列化 JSON ，一个用于反序列化 JSON 。
这里的序列化可以理解成将JavaScirpt对象转换成JSON，反序列化则是将JSON转换成JavaScript对象。
 */
// JSON.parse
// JSON.parse 用于解析 JSON 格式的字符串，将 JSON 转化成 JavaScript 对象。
// JSON.parse(JSON字符串, 处理函数);
var str1 = '{"name": "小花花", "age": 21, "gender": "女"}';//传递给 JSON.parse 方法的字符串要符合 JSON 标准，否则会报错。
obj1 = JSON.parse(str1);
console.log(obj1);
console.log("名字：" + obj1.name + ", 年龄：" + obj1.age + ", 性别：" + obj1.gender);
console.log(typeof obj1);

console.log("-----------------------------分割线-----------------------------------")
// 第二个参数非常有趣，传入的是一个函数，这个函数会在每个 JSON 属性被解析的时候调用，
// 同时会传递属性名和属性值给函数作为参数，传入参数的返回值会作为当前遍历到的属性的新值。
var str2 = '{ "name": "baba", "age": 12, "info": { "locate": "浙江" } }';

var user = JSON.parse(str2, function (key, value) {
    console.log(key, value);

    if (key === '') {
        return value;
    }

    return '强行修改值';
});
console.log(user);

// 业务逻辑中很少会用第二个参数来处理解析内容。

console.log("----------------------------------JSON.stringify---------------------------------")
/*
JSON.stringify
JSON.stringify 用于将JavaScript对象转换成 JSON 格式的字符串。
JSON.stringify(JavaScript对象, 处理函数, 缩进空格字符数量);
第一个参数是需要转换成 JSON 字符串的对象。

第二个参数可以是个函数，也可以是个数组。
如果是函数，则每一个属性在处理的时候就被调用这个函数，同时属性名和属性值作为参数传递给这个函数，并且函数的返回值作为这个处理属性的值。
如果是数组，则只有属性名在数组中的属性才会被处理，不传递则默认处理整个对象。
如果第二个参数传递 null ，也就是不做特殊处理，在使用到第三个参数的时候，第二个参数会传递 null 。

第三个参数可以传递数字，也可以传递字符串，传递了这个参数会对结果做格式化，具有一定的格式，参数的值决定格式化的样式。
如果是数字，则使用对应长度的空格来缩进，长度 1 到 10 ，比 1 小则表示不缩进。
如果是字符串，则会使用传入的字符串进行缩进，传入的字符串长度超过 10 ，则会截取前 10 个作为缩进字符。
 */
var user1 = {
    name: '小明',
    age: 14,
    skill: ['HTML', 'Java'],
};

var json1 = JSON.stringify(user1);

console.log(json1);
// 输出：{"name":"小明","age":14,"skill":["HTML","Java"]}


console.log("-----------------------------分割线-----------------------------------")
// 第二个参数用起来和 parse 方法的第二个参数类似。
var user2 = {
    name: '小明',
    age: 14,
    skill: ['HTML', 'Java'],
};
var json2 = JSON.stringify(user2, function (key, value) {
    console.log(key + " - " + value);
    return value;
});

console.log(json2);

// 根据上述例子可以看到，先输出的属性为空字符串，属性值为被处理对象，所以如果不想操作原对象，需要做特殊处理。
console.log("-----------------------------分割线-----------------------------------")
var user3 = {
    name: '小明',
    age: 14,
    skill: ['HTML', 'Java'],
};

var json3 = JSON.stringify(user3, function (key, value) {
    if (key === '') {
        return value;
    }

    return '我是处理过的值';
});

console.log(json3);

// 第三个参数会在做一些工具类调试的时候常用到。
console.log("-----------------------------第三个参数会在做一些工具类调试的时候常用到。-----------------------------------")
var obj111 = [
    {
        path: '/',
        component: 'function() {}',
        children: [
            {
                path: 'note',
                component: 'function() {}',
            },
            {
                path: 'friends',
                component: 'function() {}',
            }
        ]
    },
    {
        path: '*',
        component: 'function() {}',
    }
];

var json4 = JSON.stringify(obj111, null);
var json5 = JSON.stringify(obj111, null, 2);
var json6 = JSON.stringify(obj111, null, '*-*');

console.log(json4); // 没有格式
console.log(json5); // 使用两个空格控制的缩进
console.log(json6); // 使用 *-* 控制的缩进


// 深拷贝 可以配合 JSON 的两个方法，对对象进行深拷贝。
console.log("-----------------------------深拷贝-----------------------------------")
var obj222 = {prop: 'value'};

var newObj = JSON.parse(JSON.stringify(obj222));

newObj.prop = 'new value';

console.log(obj222);//{ prop: 'value' }
console.log(newObj);//{ prop: 'new value' }
// 根据结果可以看到新的对象修改，没有影响到原对象，两者之间不存在引用关系。

// 序列化规则
// 使用 JSON.stringify 有些内置规则。
//如果对象中存在包装对象，则在转换过程中会变成原始值。
console.log("---------------------------------------如果对象中存在包装对象，则在转换过程中会变成原始值。---------------");
var obj333 = {
    string: new String('A promise is a promise.'),
    number: new Number(996),
}
var result = JSON.stringify(obj333);
console.log(result);
console.log("---------------------------------------如果转换的对象或者对象下的属性存在 toJSON 方法，那么这个方法的返回值会作为转换结果。---------------");
var user111 = {
    nickname: 'joker',

    toJSON: function () {
        return 'hahahahahahaha';
    },
}
var result111 = JSON.stringify(user111);

console.log(result111); // 输出："hahahahahahaha"

console.log("---------------------------------------除了数组以外的对象，转换结果顺序为随机。---------------");
var obj444 = {
    b: 2,
    c: 3,
    a: 1,
};
console.log(JSON.stringify(obj444));
console.log("-------undefined、ES6 中的 symbol 值、函数在转换过程中都会被忽略，当然函数如果具有 toJSON 方法依然会优先选择 toJSON 方法的结果。----");
var fn = function () {
};
fn.toJSON = function () {
    return '我是函数'
};
var result222 = JSON.stringify({
    a: fn,
    b: Symbol(1),
    c: undefined,
    d: function () {
    },
});

console.log(result222);

console.log("------------------------------存在循环引用，则会报错---------------------------");

var obj1 = {
    prop1: 1,
};
var obj2 = {
    prop1: 1,
};

obj1.prop2 = obj2;
obj2.prop2 = obj1;

// 两个对象相互引用之后，进行系列化就会抛出错误。
// JSON.stringify(obj1); // TypeError: Converting circular structure to JSON

