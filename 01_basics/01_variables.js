const id = 123
let password = "12345"
var mail = "av@av.com"

// id = 124
/* 
We don't prefer var due to issue in scope block and  functional block
*/

password = "21342"
mail = "pa@pa.com"

console.table([id,password,mail])