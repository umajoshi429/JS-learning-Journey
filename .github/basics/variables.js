//To Assign value in memory we use keywords like var,Const,Let

const studentId = 5673
//Const means the value is constant
let studentAddress = "Friends Colony"

var studentIdPassword = "1234"

let studentState;

studentCity = "Sirsa"

//we want to Check the value of const could be changes or not 
// studentId = 2  not allowed to change value of const

studentAddress = "Hudda"  //changeable
studentIdPassword="213231" //chnageable
console.log(studentId);
console.log(studentAddress);
console.log(studentIdPassword);

//to print them together 

console.table([studentId, studentAddress,studentIdPassword,studentCity,studentState])
//values(5673,hudda,213231,Sirsa,undefined) value of studentState gonna be undefined because it is only declared 
but no value is given to it.