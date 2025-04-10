function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);



//********************** */

function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}

const user = {
    name: "Hitesh"
};

sayHello.call(user); // Hello, my name is Hitesh


//**************** */

const user1 = {
    name: "Chai",
    greet: function(age) {
        console.log(`Hi, I'm ${this.name} and I'm ${age} years old.`);
    }
};

const user2 = {
    name: "Code"
};

user1.greet.call(user2, 25); // Hi, I'm Code and I'm 25 years old.

//**************** */


function fullName(city) {
    console.log(`${this.firstName} ${this.lastName} from ${city}`);
}

const person = {
    firstName: "Hitesh",
    lastName: "Choudhary"
};

fullName.call(person, "Lucknow");
// Output: Hitesh Choudhary from Lucknow
