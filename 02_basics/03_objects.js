// singleton - generate by constructor only
// Object.create

// object literals
const JsUser = {
    name : "Anmol",       // system treats key as string itself 
    age : 20, 
    location : "Mhow",
    email : "ag@ag.com"
    isLoggedIn : false
    lastLogginDays : ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

