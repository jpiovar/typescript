var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Man = /** @class */ (function () {
    function Man(fullName) {
        this.name = fullName;
    }
    Man.prototype.town = function (townName) {
        console.log(this.name + " is from " + townName);
    };
    return Man;
}());
var Superman = /** @class */ (function (_super) {
    __extends(Superman, _super);
    function Superman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 11;
        return _this;
    }
    Superman.prototype.howFast = function () {
        console.log(this.name + " has speed " + this.speed);
    };
    return Superman;
}(Man));
var smallMan = new Man('janko hrasko');
smallMan.name;
smallMan.town('hraskovo');
var superman = new Superman('ferdo mravec');
superman.name;
superman.speed;
superman.howFast();
