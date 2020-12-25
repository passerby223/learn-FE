// padEnd() 在原字符串末尾填充指定的填充字符串直到目标长度并返回一个新的字符串，不会对原字符串进行修改。
// 场景实例（补全时间戳的毫秒）
let timestamp = 1581828518;
timestampNew = String(timestamp).padEnd(13, '0');
console.log(timestampNew);
console.log(typeof timestampNew);