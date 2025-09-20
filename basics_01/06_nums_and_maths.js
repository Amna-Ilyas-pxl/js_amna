/////////// numbers //////////

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance); // run console.log(balance), it specifies the following value is number


// //  run these both on chrome console, the next will give functional properties like toString()
// // {note: if you don't remember any function you can always use console to know more}


// console.log(balance.toString().length); //it will give the lentgh of charcters as now its is string not number

// console.log(balance.toFixed(2)); //gives 2  values after decimal


// const otherNumber = 23.899 //later give value like 11234.677 to see exponential value, so use precision carefully

// console.log(otherNumber.toPrecision(3));  //important for interview

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //standard us value with commas
// console.log(hundreds.toLocaleString('en-IN')) //indian standard


// // for dsa side check console chrome and enter number to see multiple functions for number ,max/min values(note:max is not bigInt) and others


/////////////// Maths ////////////////

// important in javascript

// console.log(Math);
// console.log(Math.abs(-4));  // absolute value, positive value remains positive while negative value converts to positive value
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // if little bit above value then it will round off completely
// console.log(Math.floor(4.6)); //take lowest value, doesn't rounds off
// console.log(Math.min(4, 6, 3, 7)); //finds minimum value from array
// console.log(Math.max(4, 6, 3, 7)); //finds maximum value from array
 
//imp math library: random
console.log(Math.random());  //value of math.random will always be between 0 and 1 , and everytime you run it will give off random values

console.log(Math.random()*10); // this will still give 0 as well, so to avoid that add +1

console.log(Math.random()*10 + 1); //minimum value is 1 now, this is mostly used for problems like rolling a dice in which there is no zeroes but values between 1 to 6(this is just one example)

