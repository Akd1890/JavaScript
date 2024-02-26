//Closures

//function can return functions

// function outerFunction(){
//     function innerFunction() {
//         console.log("Hello World");
//    }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans);
// ans();

function printFullName(firstName, lastName){
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Akash", "Deep");
console.log(ans);
ans();