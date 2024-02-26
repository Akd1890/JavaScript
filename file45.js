//Rest Parameter

// function myFunction(a,b,c,...d) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`d is`, d);
// }
// myFunction(3,4,5,8,9,1,7,6);

function addAll(...numbers) {
    // console.log(numbers);
    // console.log(Array.isArray(numbers));
     let total = 0;
    for(let number of numbers) {
        total = total + number;
    }
    return total;
}
const ans = addAll(1,2,3,4);
console.log(ans);
