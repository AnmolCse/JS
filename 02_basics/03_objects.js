// singleton - generate by constructor only
// Object.create
//const tinderUser = new Object()

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Anmol",       // system treats key as string itself 
    age : 20,
    [mySym] : "MyKey1",   // Symbol is defined like this
    location : "Mhow",
    email : "ag@ag.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// two ways to access objects

// console.log(JsUser[mySym]); // It  is the only way to access symbol in objects

JsUser.email = "ag@chatgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "ag@word.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   // this is used to take reference of the same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());