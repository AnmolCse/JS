const user = {
    username : "Anmol",
    price : 999,

    welcomeMessage : function() {
        console.log(`Hello ${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

// this keyword refers to current context

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);  // it gives empty object because we're in global scope
// In browser it will print window

// function one() {
//     let username = "Anmol"
//     console.log(this);  // it works in objects only 
// }

// one()

// const one = function () {
//     let username = "Anmol"
//     console.log(this.username);
// }

// const one = () => {          // Arrow function
//     let username = "Anmol"
//     console.log(this);
// }

// one()

// const addTwo = (num1, num2) => {     // Basic Arrow Function
//     return num1 + num2   // Explicit Return
// }

// const addTwo = (num1, num2) => num1 + num2  // Implicit Return (Automatically understand that it doesn't need return)

// const addTwo = (num1, num2) => return (num1 + num2) // In Implicit Return if we pass arguments With parenthesis then we need to write return before it

const addTwo = (num1, num2) => ({username : "Anmol"})
console.log(addTwo(3,4));
