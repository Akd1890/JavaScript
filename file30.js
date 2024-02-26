//object is key-value pair


//how to create object

// const person = {
//     name: "Akash",
//     Age: 20,
//     city: "Ranchi",
//     hobbies: ["Cricket", "Travel", "Music"]
// };
// console.log(person);

//how to access data from objects
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.Age);
// console.log(person.hobbies[0]);

//how to add key value pair to objects
// person.gender = "male";
// person["person"] = "male";
// console.log(person);

//Difference between dot and  bracket notation
const key = "email";
const person = {
    name: "Akash",
    Age: 20,
    city: "Ranchi",
    "person hobbies": ["Cricket", "Travel", "Music"]
};

// console.log(person["person hobbies"]);
person[key] = "akashdeep1215@gmail.com";
console.log(person);

