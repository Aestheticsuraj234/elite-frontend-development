### JavaScript Loops and Functions: Detailed Notes

#### For Loop

A `for` loop is used to repeat a block of code a known number of times. It consists of three parts:
1. Initialization: Executed once before the loop starts.
2. Condition: Checked before each iteration. If false, the loop stops.
3. Increment/Decrement: Executed at the end of each iteration.

##### Syntax
```javascript
for (initialization; condition; increment/decrement) {
  // Code to be executed
}
```

##### Example
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

#### While Loop

A `while` loop is used to repeat a block of code as long as a specified condition is true. The condition is evaluated before each iteration.

##### Syntax
```javascript
while (condition) {
  // Code to be executed
}
```

##### Example
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4
```

#### Functions

Functions are reusable blocks of code designed to perform a particular task. They can be declared in several ways in JavaScript.

##### Function Declarations

A function declaration defines a named function.

##### Syntax
```javascript
function functionName(parameters) {
  // Code to be executed
}
```

##### Example
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice'));
// Output: Hello, Alice!
```

##### Function Expressions

A function expression defines a function inside an expression. These functions can be anonymous or named.

##### Syntax
```javascript
const functionName = function(parameters) {
  // Code to be executed
};
```

##### Example
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet('Bob'));
// Output: Hello, Bob!
```

##### Arrow Functions

Arrow functions provide a shorthand syntax for writing function expressions.

##### Syntax
```javascript
const functionName = (parameters) => {
  // Code to be executed
};
```

##### Example
```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Charlie'));
// Output: Hello, Charlie!
```

#### Function Parameters and Arguments

Parameters are placeholders in a function definition, while arguments are the actual values passed to the function when it is called.

##### Example with Parameters
```javascript
function add(a, b) {
  return a + b;
}
```

##### Example with Arguments
```javascript
console.log(add(2, 3));
// Output: 5
```

##### Default Parameters

Default parameters allow you to initialize parameters with default values if no arguments are provided.

##### Syntax
```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Code to be executed
}
```

##### Example
```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet());
// Output: Hello, Guest!
```

##### Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array.

##### Syntax
```javascript
function functionName(...restParam) {
  // Code to be executed
}
```

##### Example
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));
// Output: 10
```

##### Example of Combining All Concepts

Here's an example combining `for` loop, `while` loop, and different types of functions:

```javascript
// Function Declaration
function square(num) {
  return num * num;
}

// Function Expression
const cube = function(num) {
  return num * num * num;
};

// Arrow Function
const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

// Using while loop to demonstrate the sum of squares
function sumOfSquares(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += square(i);
    i++;
  }
  return sum;
}

// Function with default parameters and rest parameters
function multiply(factor, ...numbers) {
  return numbers.map(num => num * factor);
}

// Testing the functions
console.log(square(3)); // 9
console.log(cube(2)); // 8
console.log(power(2, 3)); // 8
console.log(sumOfSquares(3)); // 14 (1^2 + 2^2 + 3^2)
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

These notes and examples cover various aspects of loops and functions in JavaScript, providing a comprehensive understanding of their syntax and usage.