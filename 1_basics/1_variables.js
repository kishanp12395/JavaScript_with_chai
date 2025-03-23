const accountId = 1001;
let email = 'kkp12395455@gmail.com';
var password = '12345';
city = 'Noida';
let state;


// accountId = 1002;  // not allowed

email = 'kishan@gmail.com';
password = 234;
city = 'Delhi';

console.table([accountId, email, password, city, state]);



// ✅ 1. var
// Function-scoped

// Can be re-declared and updated

// Hoisted (moved to the top of scope)

// function name () {
//     // var car = 'Hinda';
// }

// if(true){
//     var car = 'Hinda';
// }

// console.log(car);




// ✅ 2. let (Introduced in ES6)
// Block-scoped (exists only inside {})

// Can be updated, but not re-declared in the same scope

// Not hoisted (or hoisted but not initialized)

// let y = 15;
// y = 25; // ✅ Allowed
// console.log(y); // 25

// // let y = 30; ❌ Error: y has already been declared

// if (true) {
//     let b = 10;
//   }
//   // console.log(b); ❌ Error: b is not defined



// ✅ 3. const (Introduced in ES6)
// Block-scoped

// Cannot be updated or re-declared

// Must be initialized during declaration