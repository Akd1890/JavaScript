//map Method

// const numbers = [3,4,6,1,8];

// const square = function(number) {
//     return number * number;
    
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map(function(number,index){
//     // return number * number;
//     return `index: ${index}, ${number * number}`;
// });
// console.log(squareNumber);

const users = [
    {firstName: "Akash", age:20},
    {firstName: "umang", age:22},
    {firstName: "Satyam", age:24},
    {firstName: "Ujjwal", age:25},
]

const userName = users.map((user)=>{
    return user.firstName;
});

console.log(userName);

