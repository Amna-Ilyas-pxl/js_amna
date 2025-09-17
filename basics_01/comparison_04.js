// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);   // these were easy



// console.log("2" > 1);
// console.log("02" > 1); // js automatically converts string into number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // value conversion

/* the reason is that an equality check == and comparison > < >= <= works differently. 
comparison converts null to a number, treating it as 0. that's why (3) null >= 0 is true and (1) null > 0 is false
 */
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >0);

// strict check => === , also checks datatype
console.log("2" === 2);


// *Note: don't use these coversions in real time, they are just for exam preparation. Remember clean code matters a lot!





