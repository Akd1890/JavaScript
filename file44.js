//Default parameter

// function addTwo(a,b) {
//     if(typeof b === "undefined"){
//         b =0;
//     }
//     return a+b;
// }

function addTwo(a,b=0) {
    return a+b;
}

const ans = addTwo(2);
console.log(ans);