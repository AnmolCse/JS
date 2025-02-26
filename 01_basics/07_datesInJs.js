let myDate = new Date()
// console.log(myDate.toLocaleString())

// console.log(typeof(myDate));

// const createdDate = new Date(2023, 0, 23, 5, 3)
// console.log(createdDate.toLocaleString());

// const createdDate = new Date("2005-01-31")
// console.log(createdDate.toLocaleString());

const createdDate = new Date("01-31-2005")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `The day is ${newDate.getDay}`

newDate.toLocaleString("default", {
    weekday : "long"
})