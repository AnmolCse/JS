const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DV calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user.username);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Anmol", email : "anmol@example.com"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Finally! The promise has either been resolved or rejected."))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "JS", email : "anmol@example.com"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive()

// async function allUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error );
//     }
// }

// allUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))