const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)  //array will be added into array making it an element instead, so two arrays are not merged but the second one is added into first as 4th element of array

console.log(marvel_heroes);

console.log(marvel_heroes[3][1]); // so to get flash we will first write the element number of first array i.e [3], then the element number of 3rd element of first array i.e [1],  which is why push method is not a good option

//use contcatenation instead

const allHeroes = marvel_heroes.concat(dc_heroes) //we need new variables for new array
console.log(allHeroes); 

// but people mostly prefer this instead of concat:

const all_Heroes = [...marvel_heroes, ...dc_heroes]  //it "spreads"
// console.log(all_Heroes);

const crazy_Array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]] //if this situation ever comes then:

const real_crazy_Array = crazy_Array.flat(Infinity)
console.log(real_crazy_Array);

console.log(Array.isArray("Amna"));
console.log(Array.from("Amna")); //converts into array
console.log(Array.from({name: "Amna"}));  //object //interesting bcoz it will give an empty array

let score1 = 100
let score2 = 200
let score3 = 300

final_score = console.log(Array.of(score1, score2, score3)); //returns new array from set of elements or  variables

//study "from", "of" and "isArray" in detail...