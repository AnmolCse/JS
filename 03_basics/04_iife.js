// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }

// chai()

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();
// Here we have to use semicolon after IIFE because we doesn't tell IIFE that where to stop so that's why if we don't do that then other function call will create errors
// ()()
// first parenthesis will do function definition and the second parenthesis will do execution
// IIFE is a function which executed immediately and global scope creates pollution which causes some problem so to remove that varaible or function declaration we use IIFE
// Global pollution occurs because of declaring variables without var, let & const, using too many global variables, overwritting global objects, multiple scripts modifying the same objects
// The problems occurs are NameSpace Collisions, Security Risks, Harder Debugging & Management, Memory leaks & performanve issues

( (name) => {
    // unnamed IIFE
    console.log(`DB COnnected Two ${name}`);
})('Anmol');