// let myPromsise = new Promise(()=>{
//     console.log('I am Promise')
// })

// state of promise

// 1. pending
// 2. resolve
// 3. reject

// consuming the pormise

// then(()=>{

// })

// catch(()=>{

// })

// finall(()=>{
//     // always run
// })


// let myPromsise = new Promise((reslove , reject)=>{

//    setTimeout(()=>{
//     console.log('I am Promise')
//     reslove()
//    } , 3000)
// })
// // then(()=>{}) ---> resolve

// myPromsise
// .then(()=>{
//     console.log("My Promise Resolved")
// })




// let myPromsise = new Promise((reslove , reject)=>{

//     setTimeout(()=>{
//      console.log('I am Promise')
//     reslove("ddsljsdlkdslkvdslnsdl")

//     } , 3000)
//  })
//  // then(()=>{}) ---> resolve

//  myPromsise
//  .then((value)=>{
//      console.log(value)
//  })


// let myPromsise = new Promise((reslove, reject) => {

//     console.log('I am Promise')
//     reslove("Hello world2")
//     reject("Hello world")


// })

// // catch(()=>{}) ------> reject

// myPromsise
// .then((value) => {
//     console.log(value)
// })
// .catch((value)=>{
//     console.log(value)
// })
// .finally(()=>{
//     console.log("I am finally")
// })



let myPromsise = new Promise((resolve, reject) => {
    let age = 2;

    if (age >= 18) {
        resolve("You are eligible to vote🟢")
    }
    else {
        reject("You are not eligible to vote🔴")

    }
})

myPromsise
.then((value)=>{
    console.log(value)
})
.catch((value)=>{
    console.log(value)
})
.finally(()=>{
    console.log("I am finally")
})


fetch("https://api.github.com/users/Aestheticsuraj234")
.then((data)=>{
  return data.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})