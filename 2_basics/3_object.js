// singleton not created using literals {}

let mySym = Symbol("key1");

const JsUser = {
    name: "Kishan",
    "full name": "Kishan Prajapati",
    age: 24,
    [mySym]: "mykey1",
    location: "ayodhya",
    email: "kishan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym], JsUser[mySym])

JsUser.email = "kishan@microsoft.com";

// freeze object it prevent to change anything in object

// Object.freeze(JsUser);
// JsUser.email = "kishan@apple.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User2, ${this.name}`); // `` using backticks is called string interpolation
}

console.log(JsUser.greeting()); //[Function (anonymous)] // here function not execute it only return reference of function
console.log(JsUser.greetingTwo());


