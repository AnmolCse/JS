// var c = 100
let a = 100

if(true)
{
    let a = 10
    const b = 20
    var c = 30      //  or  c = 30 both creates same problem
    // console.log("Inner : ", a);
    
}
// anything written outside { } is global scope and inside is local scope or block scope and the value written inside a scope must be used only in local scope not in global scope

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const website = "youtube"

    function two() {
        const name = "Anmol"
        console.log(website);
    }

    // console.log(name);

    two()
    
}

// one()

if (true) {
    const website = " Youtube"
    if (website == " Youtube") {
        const name = "Anmol"
        // console.log(name + website);
    }
    // console.log(name);    // error
}

// console.log(website);    // error


// ++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++

function addOne(num) {          // functions
    return num + 1
}

addOne(5)       // we can pass function value before its declaration also

const addTwo = function (num) {         // functions and also sometimes called as expressions
    return num + 2
}

addTwo(4)       // we can't pass expression value before its declaration otherwise it will give error

