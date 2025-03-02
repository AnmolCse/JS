function sayName(){
    console.log("A")
    console.log("N")
    console.log("M")
    console.log("O");
    console.log("L");
}

// sayName()
// sayName is reference and () is execution

// function add(num1, num2){
//     console.log(num1 + num2); 
// }

function add(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = add(3, 5)
// When we defines variables during function defining they are known as parameters
// When we pass values during function call then they are known as arguments
// console.log(result);

function loginUser(username){       // if we do (username = "Sam") then if user not give any value then by default it will take same otherwise it take users value
    if(username === undefined){         // if(!username) generate same output
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
 
//console.log(loginUser("Anmol"))
// console.log(loginUser())

function calculateCartPrice(val1, val2, ...num3){  // ... is an operator which can be named as rest and spread according to its usage. Here it is rest operator
    return num3
}

// console.log(calculateCartPrice(20, 30, 40 ,50));
// It returns 40, 50 because val1 = 20, val2 = 30

const user = {
    username : "Anmol",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : "Sam",
    price : 199
})

const newArray = [ 1, 2, 3, 4, 5]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
