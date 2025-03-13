const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currval){
//     console.log(`Value of acc : ${acc}, Value of currval : ${currval}`);
//     return acc + currval
// },0)

// const myTotal = myNums.reduce( (acc, currval) => (acc + currval), 0)
// In first pass accumulator takes the initializing value which we give then after that it takes the result of add operation of each pass and in general reduce method do addition
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'JS - Course',
        price : 2999
    },
    {
        itemName : 'Python - Course',
        price : 999
    },
    {
        itemName : 'Mobile Dev - Course',
        price : 5999
    },
    {
        itemName : 'Data Science - Course',
        price : 12999
    }
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);
