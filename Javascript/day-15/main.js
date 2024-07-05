
// *1. Push()

// let arr = ["Suraj","Kumar","Jha"];
// arr.push("Hello","World")
// console.log(arr)

// *2. Pop() - returns the popped value

// let numbers = [1,2,3,4,5,6,7,8,9];
// let returnsValue = numbers.pop()
// console.log(returnsValue)
// console.log(numbers)


// *3. toString() - returns a string representation of the array

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let r = numbers.toString();
// console.log(r)


// *4. Join() - returns a string representation of the array with a separator
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.join(":"))


// *5. Shift()- removes the first element from an array and returns that removed element 

// let heros = ["Thor","Ironman","Captain America","Hulk"];

// let removedHero = heros.shift();

// console.log(removedHero)

// console.log(heros)


// *6. Unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.


// let foodItems = ["Burger","Pizza","Sandwich" ];
// let r = foodItems.unshift("Pasta") //4
// console.log(r)
// console.log(foodItems)


//  *7 Slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

// let Fruits = ["Apple","Banana","Mango","Orange","Pineapple","Grapes"];
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let r = nums.slice(1)
// console.log("SLICED_VALUES",r)


// *8. Splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// a. Removing elements
let toys = ["Car","Bike","Plane","Train","Truck"];
toys.splice(1,3)
console.log(toys)

// b. Adding elements
let fruits = ["Apple","Banana","Mango","Orange","Pineapple","Grapes"];
fruits.splice(2,0,"Guava")
console.log(fruits)

// c. Replacing elements
let colors = ["Red","Green","Blue","Yellow","Pink","Purple"];
colors.splice(2,2,"White","Black")
console.log(colors)



// *ForEach- The forEach() method executes a provided function once for each array element.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
// array.forEach(function(element , index , array){
//   console.log(element , index , array)
// })


// array.forEach(function(element){
//     console.log(element)
// })



// *Map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // array.map(function(element , index , array){
// //     console.log(element , index , array)
// // })

// let r = array.map(function(element ){
//     return element + 1

// })

// console.log(r)
// console.log(array)


// *Filter - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = array.filter(function(element){
//     return element >=5
// })

// console.log(newArr)

// *Reduce - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



// let nums = [1,2,3,4,5,6,7,8,9,10];

// nums.reduce(function(previousValue,currentValue , index , array){
//     console.log(previousValue , currentValue , index , array)
// },10)


let Products = [
    {
        id:1,
        name:"Laptop",
        price:50000
    },
    {
        id:2,
        name:"Mobile",
        price:20000
    },
    {
        id:3,
        name:"Tablet",
        price:15000
    },
    {
        id:4,
        name:"Earphone",
        price:1000
    }

]

let totalPrice = Products.reduce(function(prevValue , currValue){
    console.log(`the previous value is ${prevValue} and the current value is ${currValue.price}`)
    return  prevValue + currValue.price
},0)

console.log("Total Price is: ",totalPrice)


let arr = [1,2,3,4,5,6,7,8,9,10]; //total = 55
let totalSum = arr.reduce(function(prevValue,currValue){
    
    console.log(`the previous value is ${prevValue} and the current value is ${currValue}`)
    return  prevValue + currValue
})

console.log("Total Sum is: ",totalSum)