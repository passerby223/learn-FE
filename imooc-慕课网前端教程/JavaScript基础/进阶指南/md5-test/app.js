// 安装好的包直接通过 require 引入，然后跟着包的文档使用即可。
var md5 = require("md5");
var pwd = "123456";
var encode = md5(pwd);
console.log(encode);