// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const num = 123
const numb = 1234

const correct = true
const outTemp = null
let email;

const id = Symbol('100')
const other = Symbol('100')

// console.log(id === other);

const bigNum = 3230939309293392n
//n shows it is bigInt

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["IronMan","Hulk","Spidey"]
let myObj = {
    name : "Anmol",
    age : 20
}

const myFun = function(){
    console.log("Hello World")
}

console.log(typeof outTemp)