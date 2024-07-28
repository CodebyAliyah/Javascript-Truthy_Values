
// const userEmail = "ali@yahya.ocm"

// if (userEmail) {
//   console.log("user allow in the club");
// }
// else {
//   console.log("user don't have allow in the club");
// }


const userEmail = []

if (userEmail) {
  console.log("user allow in the club");
}
else {
  console.log("user don't have allow in the club");
}


// ******** falsy values : *******

// false , 0 , -0 , null , undefined BigInt , "" , 0n , NaN ,

// ****** Truthy values : *******

// "0" *string k andar agr koii be values hu ge to wo true hu ge* , "false" , " " , [] , {} , function () {} , 


// if (userEmail.length==0) {
//   console.log("Array is Empty")
// }

const emptyObject = {}

if (Object.keys(emptyObject).length == 0) {
  console.log("Object is empty")
}

// Nullish coalescng operator (??) : Null , undefined

let value1 ;
// value1 = 4 ?? 5 
// value1 = null ?? 20 
// value1 = undefined ?? 17

value1 = null ?? 34 ?? 50 ;


console.log(value1)


// ****** Terniary Operator ***** 

 // condition ?? true : false 

 const icePrice = 1200 ;
  icePrice >= 1300 ? console.log("less then 1300") : console.log(icePrice) 

















