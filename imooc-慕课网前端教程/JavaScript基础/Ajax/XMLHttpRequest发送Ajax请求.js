function getResponseData(xhrObj) {
    xhrObj.onreadystatechange = function () {
        // 当前 xhrObj 为 xhr
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 304) {
                console.log("响应状态码：\t" + this.status);
                console.log("响应内容文本：\n" + this.responseText);
            }
        }
    };
}

function request(requestMethod, urlPath, queryStringParameters, formData, jsonData) {
    const baseUrl = "http://81.70.33.238/";
    //xmlhttprequest 不是Node 内置的，需要单独安装;然后加上这句代码
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    // 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    if (requestMethod === "GET") {
        // 初始化一个请求。
        xhr.open(requestMethod, baseUrl + urlPath + "?" + encodeURI(queryStringParameters));
        // 发送请求。
        xhr.send();
        getResponseData(xhr);

    } else if (requestMethod === "POST") {
        // 初始化一个请求。
        xhr.open(requestMethod, baseUrl + urlPath);
        // 设置 HTTP 请求头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // 发送请求。
        xhr.send(formData);
        getResponseData(xhr);
    } else {
        console.log("暂不支持" + requestMethod + "请求方式!");
    }

}

// 发送GET请求
request("GET", "get", "name=大花花&age=28&gender=女");
// 发送POST请求
request("POST", "post", "", "name=小花花&age=21&gender=女");
