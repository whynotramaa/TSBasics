var a = 12;
var arr = [3, "kurmi"];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
function kurmi9() {
    return "chhakka";
}
function abcd(x, y) {
}
function userData(obj) {
    obj.email = "ramarama@gmail.com",
        obj.admin = false;
}
// interface and type is almost same but type doesnt support same name 
var neww = /** @class */ (function () {
    function neww() {
        this.price = 30;
        this.model = "toy";
        this.names = "yeppp";
    }
    return neww;
}());
var Phone = /** @class */ (function () {
    function Phone(name, isGood, camera) {
        if (camera === void 0) { camera = 2; }
        this.name = name;
        this.isGood = isGood;
        this.camera = camera;
    }
    return Phone;
}());
var Sam = new Phone('S23FE', true);
console.log(Sam);
var b1 = new neww();
console.log(b1);
