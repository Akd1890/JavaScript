// block scope vs function scope

//let and const are block scope
//var is function scope

// {
//     let firstName = "akash";
// }
// console.log(firstName);

// if(true){
//     var firstName = "akash";
//     console.log(firstName);
// }
// console.log(firstName);

function myApp() {
    if(true) {
        var firstName = "Akash";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();
