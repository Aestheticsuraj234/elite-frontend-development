function syncFunction() {
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");
}

console.log("Before calling synchronous function");
syncFunction();
console.log("After calling synchronous function");


setInterval
setTimeout
fetch
axios
Promise
async / await 
XMLHttpRequest


setTimeout(()=> {
    console.log("Task 1");
}, 2000);

setTimeout(()=>{
    console.log("this is my task-2");
},3000)


setTimeout(()=>{
    console.log("this is my task-3");
},1000)


 // // *sync and async?

// // console.log("I am a sync code") 
// // setTimeout(()=>{
// //     console.log("I am a async code")
// // } , 5000)
// // c




// // // *asynx js?
// // // *js is not async by default



// // Sync
// console.log("Hello-world_1")
// console.log("Hello-world_2")
// console.log("Hello-world_3")
// console.log("Hello-world_4")
// console.log("Hello-world_5")

// // async

// console.log("task_1")
setTimeout(()=>{
    console.log("task_2") }, 2000)



