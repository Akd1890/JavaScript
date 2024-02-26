// Arrow function


// function singHappyBirthday = function(){
// console.log("Hello world!");

// }
const singHappyBirthday = () => {
    console.log("Hello world!");
    
    }
    singHappyBirthday();

 const sumTwoNumber = (number1, number2) => {
    // console.log(2+4);
    return number1+ number2;
}


// console.log(sum());
const ans = sumTwoNumber(5,4);
console.log(ans);

//isEven
// input : 1 number
// output : true, false

const isEven = (number) => {
    // if(number % 2 ==0){
    //     return true;
    // } else{
    //     return false;
    // }
    return number % 2 === 0;
}
console.log(isEven(4));

//function
// input: String
// output: firstCharacter

// function firstCharacter(string) {
//     return string[1];
// }
// console.log(firstCharacter("Akash"));

//function
// input : array, target (number)
// output : index of target if target present in array
// [1,2,8,13,32],8

function findTarget(array, target) {
    for(let i = 0; i<array.length;i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
// const myArray = [1,2,8,13,32];
// const ans = findTarget(myArray, 3);
// // console.log(ans);



