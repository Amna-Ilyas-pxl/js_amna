// datatype conversion confusion
//  initial value of score was 33 then proceeded to change for investigation study
let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

//  now write value of score => 33abc instead of 33
    // console.log(valueInNumber);  //run it

    // now write value of score as null
    // then undefined => nan
    //  for true => 1
    // for false => 0
    // string => NaN // bcoz not a number

    //////////////////////////////////////////////


let isLoggedIn = 1

let boleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(boleanIsLoggedIn);

// change value of isLoggedIn to:
// 1 => true
// 0 => false
// "" => false
// "amna" => true 


/////////////////////////////////////////////

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);   //will print 33 as string
// console.log(typeof stringNumber); // to check


///////////////////////////// operations ////////////////

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "amna"

let str3 = str1 + str2

// console.log(str3);  //easy

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);     //complex
// console.log(1 + 2 + "2");  //ToPremitive guideline on ecmascript website, 7.1.1

// console.log(3 * 4 % 5 + 6); //don't write such confusimg code in real time, it's useless

// console.log(true);
// console.log(+true);   //tricky
// console.log(+"");       //just don't use such conversions!
           
let num1,  num2, num3

num1= num2= num3= 2+2  //avoid these things, just make simple things and make them readable

let gameCounter = 100
gameCounter++
console.log(gameCounter);




