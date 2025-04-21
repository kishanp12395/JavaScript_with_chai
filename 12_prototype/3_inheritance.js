// inheritance is passing down properties & methods from one parent class to child class 

//extends is used to create a child class from a parent class
class Parent {
  
    hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Child extends Parent {

}

let greet = new Child();
console.log(greet.hello());



// The prototype chain is a mechanism by which JavaScript objects inherit features from one another.




class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// The child class inherits from the parent class

class Student extends Person {
    constructor(name, subject) {
        super(name); // Call the parent constructor
        this.subject = subject;
    }
    hello() {
        super.hello(); // Call the parent method
        console.log(`I am studying ${this.subject}`);
    }
}
let student = new Student('John', 'Computer Science');
student.hello(); // Output: Hello, my name is John
// I am studying Computer Science