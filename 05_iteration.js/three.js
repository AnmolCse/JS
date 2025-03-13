// for of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {        // here arr is object, object is the name of variable which we use in for of loop
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const val of greetings){
//     console.log(val); 
// }

// Maps : Objects which hold key-value pair and remember original insertion order of keys which contains unizue values.

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// maps works with for of because map is an iterable and has a [Symbol.iterator] method which allow iteration