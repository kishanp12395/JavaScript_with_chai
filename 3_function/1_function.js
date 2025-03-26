


function sayname(){
    console.log("K");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}
// sayname()
//sayname;// this is function reference
//sayname(); // this ia  function calling 


// function addTwoNumber(number1, number2){
//     console.log( number1 + number2 )
// }

function addTwoNumber(number1, number2){
    return number1 + number2 
}
// addTwoNumber(3, 4)
const result = addTwoNumber(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter user name");
        return
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage("Kishan"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())






function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username: "kishan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)


const myNewArray = [200,300,499,500];

function secondValue(getArray){
    return getArray
}
// console.log(secondValue(myNewArray));