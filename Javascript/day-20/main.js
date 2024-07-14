// forEach --- assignment

// 1. Map() Method in Javascript
// let Numbers = [1,2,3,4,5];

// let newArray = Numbers.map((element , index , array)=>{
//    return element *element;
// })

// console.log(newArray);

// console.log(Numbers)




// 2. **Filter**

// let Numbers = [1,2,3,4,5,6,7,8,9,10];

// let EvenNumber =  Numbers.filter((ele , index , array)=>{
//     return ele % 2 === 0;
// })


// console.log(EvenNumber);



// 3. **Reduce**

let prices = [1 , 2 ,3];

let sum = prices.reduce((acc , ele , index , array)=>{
    
    return acc + ele;
},0)

console.log(sum);


// Ternary Operator;

let age = 1;

let check = age >=18 ? "You can Vote" : "You can't Vote";



console.log(check)


// String Interpolation

let Firstname = "Suraj";
let Lastname = "Kumar";

// console.log("My Name is " + Firstname + " " + Lastname);

console.log(`My Name is ${Firstname} ${Lastname}`);