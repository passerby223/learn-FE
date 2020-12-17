/*
Date 用于创建一个 JavaScript Date 实例，该实例呈现时间中的某个时刻。
 */
// Date 需要实例化后使用。
var date = new Date();// 当实例化时没有传递参数给 Date 的时候，则表示创建的对象为实例化时刻的时间。

// 获取时间戳
var timestamp = date.getTime();
console.log("当前时间戳：" + timestamp + ", 时间戳长度为：" + timestamp.toString().length);
// 利用隐式转换的规则来获取时间戳。
var timestamp1 = +date;
console.log("当前时间戳：" + timestamp1);
// 通过 valueOf 来获取时间戳。
var timestamp2 = date.valueOf();
console.log("当前时间戳：" + timestamp2);
// 推荐使用 getTime 方法来获取时间戳，以便他人阅读代码以及避免不必要的问题。

/*
格式化时间
格式化时间可以理解成把时间处理成想要的格式，如年-月-日 时:分;秒。
 */
function getCurrentTime(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
// getMonth() 方法返回的月份是 0 至 11 ，更像是月份的索引，实际上对应的月份还要加上 1 。
    return "对象创建的时间为：" + [year, '/', month, '/', day, ' ', hour, ':', min, ':', sec].join('')
}


/*
构造函数的参数
 */
// 不传递参数:当不传递参数的时候，时间会被设置为实例化那一时刻的时间。

// Unix 时间戳:这个方式与第一种不传递参数的方式是最常用的两种。
// 应用场景大部分为从服务端获取数据后，对时间戳进行格式化显示。
var obj = {_id: '', createTime: 1482632382582, content: ''};
var currentTime = getCurrentTime(obj.createTime);
console.log(currentTime)

// 时间戳字符串
// 这里并不是指字符串形式的 Unix 时间戳 ，而是符合 IETF-compliant RFC 2822 timestamps 或 version of ISO8601 标准的时间字符串。
// 实际上只要能被 Date.parse 正确解析成时间戳的字符串，都可以作为参数传递过去。
var timestamp3 = Date.parse("2020/12/17 11:58:31"); // 将字符串解析成时间戳
console.log(timestamp3);

// 日期的每一个时间属性
// 这里的时间属性是指：年、月、日、时、分、秒、毫秒。
// 参数也按照这个顺序传递。
// 2048年10月24日 9点9分6秒
var date1 = new Date(2048, 10 - 1, 24, 9, 9, 6, 0);

var YYYY = date1.getFullYear();
var MM = date1.getMonth() + 1;
var DD = date1.getDate();
var hh = date1.getHours();
var mm = date1.getMinutes();
var ss = date1.getSeconds();

console.log([YYYY, '/', MM, '/', DD, ' ', hh, ':', mm, ':', ss].join(''));
// 输出：2048/10/24 9:9:6
// 第二个参数之所以要减去 1 ，是因为月份是从 0 开始计算的，所以十月应该表示成 9 。
console.log("自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数：" + Date.now() + ", 毫秒数的长度为：" + Date.now().toString().length)

/*
总结：
Date 对象用于处理日期与时间。
通常会采用不传参或者传递一个 Unix 时间戳来生成 Date 实例，另几种参数形式使用场景较少。
需要注意的是，getMonth 方法返回的月份，是从 0 开始计数的，对应真实月份需要加上 1。
 */