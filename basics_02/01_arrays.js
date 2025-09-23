//array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "batman"]
const myArray2 = new Array(1, 2, 3, 4)

console.log(myArray[0]);

// array methods
myArray.push(6)
myArray.push(7)
myArray.pop()  //last value in array will be popped
myArray.unshift(4)  //enters digit at start of array //if array is large then it is not optimized so it's useless but ifit;s to do list and we need to add something at first then it is fine
myArray.shift()  //removes first value of array

console.log(myArray.includes(9));  //checks whether this array has the specific number or not
console.log(myArray.indexOf(17));   //checks index , if it's not available then gives answer -1
console.log(myArray.indexOf(3));  //and if available, gives index of it

const newArray = myArray.join()  //converts array to string, also binds it

console.log(myArray);
console.log(newArray);
console.log(typeof newArray); //chech whether it actually turned into string

// slice, spice (imp for interview)


console.log("A ", myArray)
const myn1 = myArray.slice(1, 3) //last one doesn't include remember?
 
console.log(myn1)
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3) // includes last range as well
console.log("C ", myArray);
console.log(myn2)

//mostly in interviews people give wrong answer bvy sayin that the difference btw two is that one includes range and other doesn't(DO NOT SAY THAT!! that's absolutely wrong, bcoz when we add "c" line it gives another array which doesn't include the range values after splicing) 


// check console of chrome for many prototypes