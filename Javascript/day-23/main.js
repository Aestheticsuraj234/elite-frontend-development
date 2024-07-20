// // ### Destructuring

// // **Destructuring** is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.


// let myArr = [1,2,3,4];
// // let secondValue = myArr[1];
// // let thirdValue = myArr[2];
// // let fourthValue = myArr[3];
// // console.log(secondValue,thirdValue,fourthValue)


// // let [first , second , third , fourth] = myArr;


// // console.log(first,second,third,fourth);


// // let fruits = ["Apple","Banana","Mango","Orange"];

// // let [ ,Banana , , Orange] = fruits;

// // console.log(Banana , Orange);


// // let MyObj = {
// //     name : "John",
// //     age : 25,
// // }
// // // console.log(MyObj["name"],MyObj.age);


// // let {name , age} = MyObj;

// // console.log(name,age); // John undefined


// // ### Rest Operator

// // **Rest Operator** (`...`) allows you to represent an indefinite number of arguments as an array.


// // let SumNumbers = (...numbers)=>{
// //     return numbers.reduce((acc , curr)=>{
// //         return acc + curr;
// //     })
// // }

// // let total = SumNumbers(1 , 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13 , 14 , 15);
// // console.log(total);

// // ### Spread Operator

// // **Spread Operator** (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.


// const arr1 = [1, 2, 3 , ["Suraj"]];
// const arr2 = [4, 5, 6];


// // const NewArray = [arr1[0]  , arr1[1] , arr1[2] , arr2[0] , arr2[1] , arr2[2]];

// const NewArraySpread = [...arr1 , ...arr2];

// NewArraySpread[3][0] = "Rahul";

// // console.log(NewArray);
// console.log(NewArraySpread);

// console.log(arr1[3][0]);

// // Shallow-copy and deep copy


// function array (b, ...a){
//     console.log(a);
// }
// array(3, 8, 9, 10, 11);


// Closure :- child function has access to the parent function's scope.



function Parent(){
 let quality = "good";


   return function child() {
    let childQuality = "Excellent";
        console.log({quality , childQuality});
   }
}


let child = Parent();

child();