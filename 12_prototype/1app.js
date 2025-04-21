const employee = {
    calcTax(){
        console.log("20% tax");
    }
}

const kishan = {       
    salary: 200000,
};
const aman = {       
    salary: 100000,
    calcTax(){
        console.log("10% tax");
    }
};
kishan.__proto__ = employee; // setting prototype
aman.__proto__ = employee; // setting prototype
kishan.calcTax(); // 20% tax
aman.calcTax(); // 10% tax