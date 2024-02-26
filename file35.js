//object inside array
// very useful in real world application

const users = [
    {userId:1, firstName: 'Akash', gender: 'male'},
    {userId:2, firstName: 'umang', gender: 'male'},
    {userId:3, firstName: 'satyam', gender: 'male'},  
]
for(let user of users){
    console.log(user.userId);
}
