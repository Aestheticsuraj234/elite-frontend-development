let mySymbol = Symbol("mySymbol");

let MyObject = {
    name:"Suraj",
    age:20,
    [mySymbol]:"Symbol",
    city:"Noida",
    country:"India",
    1: "One",
}


MyObject["profession"] = ["Developer" , "Teacher" , "Student"];


// Obejct.values();

const values = Object.values(MyObject);

console.log(values);



// Object.keys()

// const Keys = Object.keys(MyObject);

// console.log(Keys);

// Object.freeze(MyObject);

// MyObject.name = "Rahul";

// console.log(MyObject);


// Object Methods

// console.log(MyObject);

// console.log(typeof MyObject[mySymbol]);
// // let array = [1,2,3,4,5,6,7,8,9,10];
// // array[0] = 


// // Dot Notation
// console.log("DOT_NOTATION",MyObject.name);

// // Bracket Notation

// console.log("BRACKET_NOTATION",MyObject["name"])





// boolean , number , string , object , array , null ,


let MyJSON = `{
  "email": "xsur234@google.com",
  "name": "Suraj",
  "mobileNumber": 8826545277,
  "Undefined": null,
  "isPaymentDone": true
}
`

let MyObjectJson = JSON.parse(MyJSON);

console.log(MyObjectJson);

let myObj = {
    name: "Suraj",
    age: 20,
    city: "Noida",
    country: "India",
    profession: ["Developer", "Teacher", "Student"],
    mySymbol: "Symbol",
    1: "One",

}

const myJSonFromObj = JSON.stringify(myObj);

console.log(myJSonFromObj);


// JSON.parse and JSON.stringify