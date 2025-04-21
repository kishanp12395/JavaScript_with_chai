//super keyword
//super is used to access properties and methods of parent class
//super is used to call the constructor of parent class


// Child ==== drived class
// Parent ==== base class

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
