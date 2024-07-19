// // new Promise();

// // let myPromise = new Promise()


// // let myPromise = new Promise(()=>{
// //     console.log("Hello this is my Promise")
// // })

// // console.log(myPromise) // Promise { <pending> }


// // // 1. Resolve
// // let myPromise = new Promise((resolve , reject)=>{
// //     // console.log("Hello this is my Promise")
// //     resolve("Hello from promise")

// // })


// // // pending
// // // resolve --------> then()

// // // reject ---------> catch()

// // myPromise.then((value)=>{
// //         console.log(value)
// // })



// // 2. Reject

// let myPromise2 = new Promise((resolve , reject)=>{
//     reject("error occured");
// })


// myPromise2.then(()=>{
//     console.log("Resolved")
// }).
// catch((error)=>{
//     console.log(error)
// })


// let myPromise = new Promise((resolve , reject)=>{
//     let age = 10;
//    if(age >=18)
//    {
//     resolve("You are eligible to vote")
//    }
//    else{
//     reject("You are not eligible to vote")
//    }
// })


// myPromise
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


fetch("https://api.github.com/users/Aestheticsuraj234")
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("I am finally")
    })


// let res = await fetch("https://api.github.com/users/Aestheticsuraj234",{
//         method:"PUT",
//         body:JSON.stringify([{name:"Suraj"}]),
// });
// let data = await res.bodyUsed()

async function FetchGithubData() {
    try {
        let res = await fetch("https://apis.github.com/users/Aestheticsuraj234");
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("i am always run")
    }
}


FetchGithubData()