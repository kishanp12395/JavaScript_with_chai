//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = 'Kishan';

    function two(){
        const website = 'code chai';
        console.log(username);
    }

    // console.log(website);

    two()

}
one();


if(true) {
    const username = 'hitesh';
    if(username === 'hitesh'){
        const website = 'chai code';
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ************************** interesting *******
// mini hoisting


//function declearation
addOne(2);
function addOne(num){
    return num + 1;
}

// addTwo(5);
// function expression
const addTwo = function(num){
    return num + 5
}