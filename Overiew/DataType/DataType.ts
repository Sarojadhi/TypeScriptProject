// Primitive type
// string to text
let name1:string = "saroj"

// number integer float
let number:number=13
let Floatnum:number = 130.3

// boolean in ts 
let isboy:boolean=true

// Null 
let nulls:null=null

// Undifine 
let Undifine:undefined =undefined;

// BigInt num 

let big:bigint=89439254903254n;

// Symbol 
let Sym:symbol=Symbol("id")


// OBJECT TYPE 
let obj:object={name:"saroj",age:23}

// Array Type 
let num:number[]=[1,2,3,4,5]

// Tuple (Fixed type & order)
let userinfo :[string,number]=["saroj",22]

// enum 
enum Roles {
  Roles,
  User
}

let r: Roles = Roles.User;
console.log(r);

// Special Types
// any → accepts anything
var dat:any ="saroj"
dat = 10 ;

console.log(name1,number, Floatnum,isboy,nulls,Undifine,big,Sym,obj,num,userinfo,r)
console.log(dat)
