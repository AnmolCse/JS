const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]); // [3] is the main index no. [2] is the index no of element in the 2nd array which acts as a single element 

// const allHero = marvel_heroes.concat(dc_heroes)
// console.log(allHero);
// const makes a new array which contains two concatanate arrays and if we perfrom it like push then it acts as push also

// const allNewHero = [...marvel_heroes, ...dc_heroes]
// ... is spread operator which gives individual element of array
// console.log(allNewHero);

// const another_array = [1, 2, 3 , [4, 5, 6], 7 ,[6, 7, [4, 5]]]

// const real_another_array = another_array.flat(1)
// flat make subarray into normal array and its range from 1 to infinity
// console.log(real_another_array);

// console.log(Array.isArray("Anmol"));
// console.log(Array.from("Anmol"));
// console.log(Array.from({name : "Anmol"})); // it generate empty array bcz here we also have to define the type of which we want to make array like whether we want to make array of key or of values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




