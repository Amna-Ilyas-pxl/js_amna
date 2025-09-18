// there are two types of datatype


/***************  1. primitive datatypes *******/
// 7 types: string, number, bolean, null, undefined, symbol(used for uniqueness), BigInt(for scientific values)

const score = 100
const scoreValue = 10.3
const isLoggedin = false
const outsideTemp = null
let userEmail;  //undefined

/*JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution. */

// symbol:
  const id = Symbol('123')
  const anotherId = Symbol('123')   
  console.log(id === anotherId)  //since symbol is unique, it will give error
 
//bigInt:
 const bigNumber = 345863789326746375875n  //js will automatically save it as bigInt, if it's too large number than the memory then add n at the end.


/*************  2. Reference (non-primitive) datatypes *******/
// Arrays, objects(most imoortant in js), functions

// why do we call them non-premitive?
// this is just hint aur demo of reference datatypes(the detail would be in the specific files)


//array:
const heroes = ["ben10","genRex","superman"]  ; 

// object:
{
   name: "Amna",
   age = 18
}

// or with variable:
let myObj = {
   name: "Amna",
   age : 18
}

// functions:
// function(){}   //definition of function
// with variable: 
const myFunction = function(){
  console.log("hello world");
  
}

//types check:
console.log(typeof bigNumber); //i think it was undefined before, now it's changed to original bigInt
console.log(typeof outsideTemp); //this was assignd as null above but gives object output
console.log(typeof myFunction); //it returns function but in interview it's called as object function

//types of above all:
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


