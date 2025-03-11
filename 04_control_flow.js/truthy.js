// const userEmail = "a@anmol.ai"      // Got User Email
// const userEmail = ""    // Don't have user Email
const userEmail = []     // Got User Email

// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have user Email");
// }

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Checking Array is Empty or Not
// if(userEmail.length === 0)
// {
//     console.log("Array is Empty");
// }

// Checking Array is Empty or Not
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }
// Here first we take the Object Keys and store them in array and check its length

// Nullish Coalescing Operator (??) 
// In this everything revolve around null and undefined
// In this we generally take functions as input 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);
// It will take the first valid value

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More Than 80") : console.log("Less Than 80");
