var info = {
    account: '123',
    password: '456',
    login: function (cb) {
        var _this = this;
        setTimeout(function () {
            cb({
                account: _this.account,
                password: _this.password,
            });
        }, 1000);
    }
};

info.login(function (info) {
    console.log(info);
});
