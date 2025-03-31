array.forEach(function(element, index, array) {
    // Code to execute for each element
}, thisArg);



//basic usage
let number = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8



//using index
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit, index) {
    console.log(`Index ${index}: ${fruit}`);
});
/* Output:
Index 0: Apple
Index 1: Banana
Index 2: Cherry
*/


//using arraw function
let names = ["Alice", "Bob", "Charlie"];

names.forEach(name => console.log(name.toUpperCase()));
// Output: ALICE, BOB, CHARLIE



//using this arg
let obj = {
    multiplier: 2
};

let numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num * this.multiplier);
}, obj);
// Output: 2, 4, 6
