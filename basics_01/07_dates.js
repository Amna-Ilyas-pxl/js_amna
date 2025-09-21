//dates

// let myDate = new Date() // object and it's instance
// // console.log(myDate); // run to check, it is not readable
 
// //better:

// console.log(myDate.toString()); //try every option shown in list to show many better options

// //check it's type for interview (although it's converted to string it is object) 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0 , 25) //in array count starts from zero for january
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0 , 25, 5, 3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2025-01-04") //count starts from 1 in yyyy mm dd
// console.log(myCreatedDate.toLocaleString());

let myTampStamp = Date.now()
// console.log(myTampStamp); //milisecond value from the date we entered till today

// console.log(myCreatedDate.getTime());


// console.log(Math.floor(Date.now()/1000));  //give in  miliseconds then divide by thousand and add math floor to avoid decimal(we can get small value this way)


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// can also write: `${newDate.getDay} and the time`


//mostlt used property:
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))