// if
const isUserLoggedIn = true
let temprature = 27

// if(temprature < 50)   // condition needs to be true for the execution of code in the block
// {
//     console.log("Less than 50");
// }
// console.log("Greater than 50");
// Here both the lines execute so here another keyword
// <, >, <=, >=, ==, !=, ===, !==

// if(temprature < 50)
// {
//     console.log("Less than 50");
// }
// else
// {
//     console.log("Greater than 50");
// }

// const score = 200

// if(score > 100)
// {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);
// block scope problem

// const balance = 1000

// if(balance > 500) console.log("test");  //implicit scope where we write only one line code
// but there is one another way to write multiple lines

// const balance = 1000

// if(balance > 500) console.log("test"),
// console.log("test2");
// We can do this but it makes the code very less readable

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
    
}