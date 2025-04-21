class Person{
    constructor(){
        this.species = 'homosapien';
    }
    hello(){
        console.log(`Hello, my name is ${this.name}`);
    }
    eat(){
        console.log('Eating');
    }
    sleep(){    
        console.log('Sleeping');
    }
    work(){
        console.log('do nothing');
    }
}


class Engineer extends Person {
    work(){
        console.log('writing code');
    }
}
class Doctor extends Person {
    work(){
        console.log('treating patients');
    }
}


// if child & parent class have same method, child class method will override the parent class method\
// [method overriding]

// if child class does not have the method, it will use the parent class method


let kishan = new Engineer();
console.log(kishan.work());
console.log(kishan.species);

let person1 = new Person();
console.log(person1.work());

let doctor = new Doctor();
console.log(doctor.work());