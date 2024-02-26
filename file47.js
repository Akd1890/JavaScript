//Callback Function

function myFunc2(name) {
    console.log("Inside my func");
    console.log(`you name is ${name}`);
}
function myFunc(Callback) {
    console.log("hello there I am a func and I can..");
    Callback("Akash");
}

myFunc(myFunc2);