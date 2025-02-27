// const tinderUser = new Object() //singleton object
const tinderUser = {}       // Object Literal

tinderUser.id = "1234"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName : {
             firstName : "Anmol",
             lastName : "Verma"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1, obj2) // Here target is obj1 and source is obj2 and source will assign in target
// But if we are making a new object then why not we set an empty target

// const obj3 = Object.assign({}, obj1, obj2) // Here target is an empty object and it is a good practice

// const obj3 = {...obj1, ...obj2} // most commonly used
// console.log(obj3);
// Three ways to merge objects

const users = [
    {
        id : 1,
        email : "dudu@gg.com"
    },
    {
        id : 2,
        email : "dodo@gg.com"
    },
    {
        id : 3,
        email : "didi@gg.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "JS in Hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course   // Destructuring
console.log(instructor);
