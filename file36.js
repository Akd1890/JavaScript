// Nested Destructuring

const users = [
    {userId:1, firstName: 'Akash', gender: 'male'},
    {userId:2, firstName: 'umang', gender: 'male'},
    {userId:3, firstName: 'satyam', gender: 'male'},  
]

// const[user1, user2, user3] = users;
const[{firstName}, ,{gender}] = users;
console.log(firstName);
console.log(gender);