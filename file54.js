//find method

const myArray = ["How", "are", "you", "Hello"];

// function isLength3(string) {
//     return string.length === 3;
// }

// const ans =  myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId: 1, userName: "Akash"},
    {userId: 2, userName: "umang"},
    {userId: 3, userName: "Jhon"},
    {userId: 4, userName: "Sunny"},
    {userId: 5, userName: "Aish"},
];

const myUsers = users.find((user)=>user.userId===3);
console.log(myUsers);