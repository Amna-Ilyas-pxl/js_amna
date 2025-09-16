// datatype conversion confusion
//  initial value of score was 33 then proceeded to change for investigation study
let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//  now write value of score => 33abc instead of 33
    console.log(valueInNumber);  //run it

    // now write value of score as null
    // then undefined => nan
    //  for true => 1
    // for false => 0
    // string => NaN // bcoz not a number

    //////////////////////////////////////////////


let isLoggedIn = 1

let boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn);

// change value of isLoggedIn to:
// 1 => true
// 0 => false
// "" => false
// "amna" => true 


/////////////////////////////////////////////

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);   //will print 33 as string
console.log(typeof stringNumber); // to check


