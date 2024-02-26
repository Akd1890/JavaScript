// lexical environmment, Scope Chain

const lastName = "Deep";

const printName = function() {
    const firstName = "Akash";
    function myFunction() {

        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

// global function - uninitialized
//function Scope- uninitialized