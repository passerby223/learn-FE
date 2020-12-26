let obj = {name: 'imooc', age: 7, lesson: 'ES6 Wiki'};
for (let i = 0; i < Object.entries(obj).length; i++) {
    let [key, value] = Object.entries(obj)[i];
    console.log("key:" + key + ", value:" + value);
}
//for...of...循环
let obj1 = {name: 'imooc', age: 7, lesson: 'ES6 Wiki'};

for (let [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
}
// name: imooc
// age: 7,
// lesson: ES6 Wiki



