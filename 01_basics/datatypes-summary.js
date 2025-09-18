// primitive

// 7 types:String, Number, Boolean, Undefined, Symbol, Null, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 1234566253n



//Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"  ];
let myobj = {
    name: "sabita",
    age: 23,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap (non-primitive)

let myYoutubename = "sabitapanditdotcom"

let anothername = myYoutubename
anothername = "krishna"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
} 

let usertwo = userOne 

usertwo.email = "sabita@google.com"

console.log(userOne.email);
console.log(usertwo.email);





