// dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createdDate = new Date(2023, 0, 23)
console.log(createdDate.toDateString());


// Dates

let mywDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})








//*********************************** */
//JavaScript has a built-in Date object for handling dates and times.

//✅ Months start from 0 (January) to 11 (December).
const now = new Date();                  // Current date and time
const specificDate = new Date('2024-12-25'); // Date from string
const fromNumbers = new Date(2024, 11, 25, 10, 30, 0); // (YYYY, MM-0, DD, HH, MM, SS)
