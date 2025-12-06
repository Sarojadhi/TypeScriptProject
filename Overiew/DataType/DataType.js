// Primitive types
let name1 = "saroj";
let number = 13;
let Floatnum = 130.3;
let isboy = true;
let nulls = null;
let Undifine = undefined;
// BigInt & Symbol
let big = 89439254903254n;
let sym = Symbol("id");
// Object & Array
let obj = { name: "saroj", age: 23 };
let num = [1, 2, 3, 4, 5];
// Tuple
let userinfo = ["saroj", 22];
// Enum
var Roles;
(function (Roles) {
    Roles[Roles["Roles"] = 0] = "Roles";
    Roles[Roles["User"] = 1] = "User";
})(Roles || (Roles = {}));
let r = Roles.User;
// Any
var dat = "saroj";
dat = 10;
// Function type
let add = (a, b) => a + b;
// Union & Intersection
let a;
a = 40;
a = "saroj";
let info = { names: "sudip", age: 22 };
// Literal
let direction = "left";
let directions = "right";
// Export for ES Module
export const greeting = "Hello TypeScript";
// Console logs
console.log("TS module loaded", greeting, big, sym);
console.log(name1, number, Floatnum, isboy, nulls, Undifine, big, sym, obj, num, userinfo, r, add, a);
console.log(dat, info, direction, directions);
//# sourceMappingURL=DataType.js.map