//important Array Methods

//forEach
// map
// filter
// reducer

// const number = [1,2,3,4];

// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
// }

// for(let i=0; i<number.length; i++) {
//     mutliplyBy2(number[i],i);
// }


// number.forEach(function(number,index) {
//     console.log(`index is ${index} number is ${number}`);

// });

// number.forEach(function(number){
//     console.log(number*2);
// })

const users = [
    {firstName: "Akash", age:20},
    {firstName: "umang", age:22},
    {firstName: "Satyam", age:24},
    {firstName: "Ujjwal", age:25},
]

// users.forEach(function(user) {
//     console.log(user.firstName);
// })

users.forEach((user) => {
    console.log(user.firstName);
})

// for(let user of users) {
//     console.log(user.firstName);
// }