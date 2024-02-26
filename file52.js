//Reduce method

const numbers = [1,2,3,4,5,10];


// aim : sum of all the numbers in array

// const sum = numbers.reduce((accumulator,currentValue)=>{
//      return accumulator + currentValue;
// });

// console.log(sum);

//accumulator , currentValue, return
//1                 2            3
//3                   3           6
//6                    4          10
//10                  5            15
//15                 10           25

const userCart = [
    {productId:1, productName: "mobile", price:12000},
    {productId:2, productName: "laptop", price:30000},
    {productId:3, productName: "LED", price:22500},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
       return totalPrice + currentProduct.price   
},0)

console.log(totalAmount);

//total price      currentValue      return
// 0                   {}               12000
// 12000                30000           42000
//42000                 22500           64500
