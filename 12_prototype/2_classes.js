// class is a programm-code template for creating objects
// class is a blueprint for creating objects
// class is a template for creating objects


// obj will have some variables and functions

class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    start(){
        console.log(`Car started`);
    }

    stop(){
        console.log(`Car stopped`);
    }
};
// creating object
const car1 = new Car("BMW", "X5", 2020);
const car2 = new Car("Audi", "A6", 2021);
const car3 = new Car("Mercedes", "C-Class", 2022);
console.log(car1.start());
console.log(car1.stop());
console.log(car1);

console.log(car2);
console.log(car2.start());
console.log(car2.stop());
console.log(car3);