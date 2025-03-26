
// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "kp"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kishan",
            lastname:"prajapati"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {1:"c", 4: "d"}

// const obj3 = {obj1, obj2};// not recomended, gives nested array

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}; // recomended mostly used
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].id


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("hello"));
