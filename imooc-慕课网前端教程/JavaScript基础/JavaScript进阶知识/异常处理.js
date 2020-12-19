try {
    console.log("出错前。");
    console.log(aaa);
    console.log("出错后。");
} catch (e) {
    if (e instanceof TypeError) {
        console.log("TypeError");
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError");
    } else {
        console.log("未知异常!");
    }

} finally {
    console.log("无论出错还是不出错，这句代码都会执行!");
}
