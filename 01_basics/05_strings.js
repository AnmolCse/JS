const name = "Anmol"
const repoCount = 50

// console.log(name + repoCount + "Value")
// This is not the optimized way 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // known as string interpolation
// We can add methods in this also like ${name.toUpperCase}

const gameName = new String('Anmol-AV-PA')
// This create an object of string type

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('l'))

const newString = gameName.substring(0,4)
// console.log(newString);
// In substring we cannot give negative value of indices

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);
// In slice we can -ve value of indices

const newStringOne = "   Anmol   "
// console.log(newStringOne);
// console.log(newStringOne.trim())

const url = "www.google.com/google%20founder"
// console.log(url.replace('%20','-'))
// console.log(url.includes('googla'));

console.log(gameName.split('-'));


