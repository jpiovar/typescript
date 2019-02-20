var Man = /** @class */ (function () {
    function Man(fullName) {
        this.name = fullName;
    }
    Man.prototype.town = function (townName) {
        console.log(this.name + " is from " + townName);
    };
    return Man;
}());
var smallMan = new Man('janko hrasko');
smallMan.name;
smallMan.town('hraskovo');
