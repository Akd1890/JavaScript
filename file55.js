//every method

// const numbers = [2,4,6,8,10];

// function isEven(number){
//     return number % 2 ===0;
// }

// const ans = numbers.every((number)=>number%2===0);

//callback function ---> true/false (boolean)

//every method ---> true / false (boolean)

// console.log(ans);

const userCart = [
    {productId:1, productName: "mobile", price:12000},
    {productId:2, productName: "laptop", price:30000},
    {productId:3, productName: "LED", price:22500},
]

const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);