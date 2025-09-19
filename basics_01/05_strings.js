const name = "amna"
const repoCount = 15

console.log(name + repoCount + "string"); //never use this syntax in modern dates
//  use string interpolation instead: 
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 //this syntax is more compatible and readable

//  another way to declare string is:
const gameName = new String(`AmnaIlyas-09`)   //ne keyword is used for objects in js. run this line on chrome console and then write gameName to see interesting thing (the first digits will show key and after equality are values)

console.log(gameName[0]);
console.log(gameName.__proto__);  //don't use this
// use instead:         //you can see all the prototypes in console of chrome using above method written in comments
console.log(gameName.length);
console.log(gameName.toUpperCase());  //original value is not changed, explanation in datatypes summary file already
console.log(gameName.charAt(3)); //to get character at particular index
console.log(gameName.indexOf(`I`));


const newString = gameName.substring(0, 4) //last value is not included / this will ignore minus sign and continue from 0 index
console.log(newString);

const anotherString = gameName.slice(-10, 3) //interesting fact:L we can also ngive negative values to slice(in which index will start from reverse)
console.log(anotherString);

const newStringOne = "       Amna   "   //sometimes users add extra spaces which we don't need in database so to reduce them we wuse trim

console.log(newStringOne);
console.log(newStringOne.trim());  //see mdn web docs to know more about trim


const url = "https://amna.com/amna%20ilyas"
console.log(url.replace('%20', '-'));
console.log(url.includes('viper'));  //checks whether the thing in string is included or not

const gameNameOne = "amna-ht-com"
console.log(gameNameOne.split('-'));   //a separator:split on bases of dashes or spaces in a string, it will convert string top array


// check mdn website and console on chrome to know more about strings






 