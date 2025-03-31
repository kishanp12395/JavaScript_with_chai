// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


// ---------------

let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // Output: "Guest"

// ------------ let age;
let userAge = age ?? 18;
console.log(userAge); // Output: 18

//---------

let value = 0;
console.log(value || 10); // Output: 10 (0 is falsy)
console.log(value ?? 10); // Output: 0 (0 is NOT null or undefined)




console.log(val1);




// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // Output: "B"
