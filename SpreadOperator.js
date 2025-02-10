// spread operator "..."

// take an array and expand it, or we can combine two arrays into one single array.

const fruits = ["apple", "banana"];
const moreFruits = ["pineapple", "coconut"];

const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

const newAllFruits = [...allFruits, "cherry"];
console.log(newAllFruits);

//we don't modify the allFruits but creat a new array

//state in react is immutable, this is what we do when we work with state in react

//Quiz
/* difference between "var" and "let" in js:
var has func scope, whereas let only has block scope.

what is the correct syntax for arrow Function
const myFunction = (param) => {return something}

what does the Rest Operator "..." do in js:
it collects remaining parameteres into an array

Spread operator:
It spreads array elements or object properties

*/