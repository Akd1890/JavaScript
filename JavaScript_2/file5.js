//Closures
// function myFunction(power) {
//     return function(number) {
//         return number ** power;
//     }
// }
const myFunction = (power) => (number) =>  number ** power;


const cube = myFunction(3);
const ans = cube(2);
console.log(ans);

const square = myFunction(3);
const ans2 = cube(3);
console.log(ans2);