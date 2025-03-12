// for

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// }
// After writing for keyword the first thing we do is index initialization, then we do condition check, after checking condition if the condition return true then we execute the code inside loop then after execution we do the updation of index or variable which we're using

// for (let i = 0; i < 10; i++) {
//     let element = i;
//     if(element == 5)
//     console.log("5 printed.");
//     console.log(element); 
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value : ${i+1}`);
//     for(let j = 0; j < 10; j++){
//         // console.log(`Inner loop value : ${j}`);
//         console.log(i+1 + '*' + (j+1) + '=' + (i+1)*(j+1));
//     }
// }

// let myArray = ["Flash", "BatMan", "SuperMan"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break and continue

// for (let index = 0; index < 20; index++) {
//     if(index == 5)
//     {
//         console.log("5 Detected.");
//         break
//     }
//     console.log(index+1);
// }

for (let index = 0; index < 20; index++) {
    if(index == 5)
    {
        console.log("5 Detected.");
        continue
    }
    console.log(index+1);
}