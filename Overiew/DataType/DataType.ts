// Primitive types
let name1: string = "saroj";
let number: number = 13;
let Floatnum: number = 130.3;
let isboy: boolean = true;
let nulls: null = null;
let Undifine: undefined = undefined;

// BigInt & Symbol
let big: bigint = 89439254903254n;
let sym: symbol = Symbol("id");

// Object & Array
let obj: object = { name: "saroj", age: 23 };
let num: number[] = [1, 2, 3, 4, 5];

// Tuple
let userinfo: [string, number] = ["saroj", 22];

// Enum
enum Roles {
  Roles,
  User
}
let r: Roles = Roles.User;

// Any
var dat: any = "saroj";
dat = 10;

// Function type
let add: (a: number, b: number) => number = (a, b) => a + b;

// Union & Intersection
let a: number | string;
a = 40;
a = "saroj";

type A = { names: string };
type B = { age: number };
let info: A & B = { names: "sudip", age: 22 };

// Literal
let direction: "left" | "right" = "left";
let directions: "left" | "right" = "right";

// Export for ES Module
export const greeting: string = "Hello TypeScript";

// Console logs
console.log("TS module loaded", greeting, big, sym);
console.log(name1, number, Floatnum, isboy, nulls, Undifine, big, sym, obj, num, userinfo, r, add, a);
console.log(dat, info, direction, directions);
