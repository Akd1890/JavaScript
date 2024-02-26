//lexical scope
const myVar = "value1";

function myApp() {
    function myFunc(){
        // const myVar = "value23";
        const myFunc = () => {
            console.log("inside myFunc", myVar);
        }
        myFunc();
    }
    // const myFunc2 = function(){}
    // const myFunc3 = () => {}
  console.log(myVar);

  myFunc();
}
myApp();