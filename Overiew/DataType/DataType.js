// Primitive type
// string to text
var name1 = "saroj";
// number integer float
var number = 13;
var Floatnum = 130.3;
// boolean in ts 
var isboy = true;
// Null 
var nulls = null;
// Undifine 
var Undifine = undefined;
// BigInt num 
var big = 89439254903254n;
// Symbol 
var Sym = Symbol("id");
// OBJECT TYPE 
var obj = { name: "saroj", age: 23 };
// Array Type 
var num = [1, 2, 3, 4, 5];
// Tuple (Fixed type & order)
var userinfo = ["saroj", 22];
// enum 
var Roles;
(function (Roles) {
    Roles[Roles["Roles"] = 0] = "Roles";
    Roles[Roles["User"] = 1] = "User";
})(Roles || (Roles = {}));
var r = Roles.User;
console.log(r);
// Special Types
// any → accepts anything
var dat = "saroj";
dat = 10;
console.log(name1, number, Floatnum, isboy, nulls, Undifine, big, Sym, obj, num, userinfo, r);
console.log(dat);
