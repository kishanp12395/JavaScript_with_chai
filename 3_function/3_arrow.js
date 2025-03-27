
//note: global object in browser is window

const user = {
    username: "Kishan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}`);
        // this refers the current context
        // console.log(this);
    }

}
user.welcomeMessage()
// user.username = "sam";

// user.welcomeMessage()

// console.log(this)



// function chai(){
//     let username = 'chai hai na'
//     console.log(this.username);
// }
// chai()







// Arrow functions do not have their own this; they inherit it from their surrounding scope.

// const chai = function(){
//     let username = 'hitesh';
//     console.log(this.username);
// }
// chai()


// const chai = () =>{
//      let username = 'hitesh';
//        console.log(this);
// }
//  chai()


//In a regular function, this depends on how the function is called.

// In strict mode, this inside a function is undefined.

// In non-strict mode, this refers to the global object, but username is not a property of the global object.

// If you want to use this.username, make sure this refers to an object that has a username property.





//arrow function 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return, not using ()
// const addTwo = (num1, num2) => num1 + num2

//when use parentheses do not need to return it automatically return
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "kkp"})

console.log(addTwo(3,5));