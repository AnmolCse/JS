// array

const arr = [0,1,2,3]
// console.log(arr[2]);

// In javascript array can contain different type of data items in a single array

const newArr = new Array(6,7,8,9)
// console.log(newArr[1]);

// Array Methods

// arr.push(6)
// push add elements in the last
// arr.pop()
// pop remove last array element

// arr.unshift(9)
// add elements at first index
// arr.shift()
//remove element from first index

// console.log(arr.includes(7)); // returns true or false
// console.log(arr.indexOf(2)); // if there is no element which we ask for then that will give -1

// const anoArr = arr.join()
 // join binds the array and convert it into string

// console.log(arr);
// console.log(anoArr);

// slice, splice

console.log("A", arr);

const myn1 = arr.slice(1, 3)
console.log(myn1);

console.log("B", arr);

const myn2 = arr.splice(1, 2)
console.log(myn2);
console.log(arr);

