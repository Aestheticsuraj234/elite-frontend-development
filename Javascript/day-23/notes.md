### Try-Catch-Finally

**Try-Catch-Finally** is a statement that handles exceptions (errors) in JavaScript. It allows you to run code and catch any errors that occur, providing a way to handle them gracefully.

#### Basic Syntax
```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that will always run, regardless of an error
}
```

#### Example 1: Handling Errors
```javascript
try {
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('This will run no matter what.');
}

function riskyFunction() {
    throw new Error('Something went wrong!');
}
```

#### Example 2: Cleaning Up Resources
```javascript
let file;
try {
    file = openFile('myFile.txt');
    // Perform operations on the file
} catch (error) {
    console.error('Error opening file:', error.message);
} finally {
    if (file) {
        file.close();
        console.log('File closed.');
    }
}
```

#### Example 3: Nested Try-Catch
```javascript
try {
    try {
        let data = JSON.parse('{"name": "John}');
    } catch (error) {
        console.error('JSON parsing error:', error.message);
        throw error; // Re-throw the error
    }
} catch (error) {
    console.error('Outer catch:', error.message);
} finally {
    console.log('Nested try-catch completed.');
}
```

---

These examples demonstrate the usage of `try-catch-finally` blocks to handle errors and perform necessary cleanup actions. Let me know if you need any more details or additional topics!

### Destructuring

**Destructuring** is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

#### Array Destructuring
```javascript
// Basic Array Destructuring
const [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

// Skipping Values
const [c, , d] = [30, 40, 50];
console.log(c); // 30
console.log(d); // 50

// Using Rest Operator in Destructuring
const [e, ...rest] = [60, 70, 80, 90];
console.log(e); // 60
console.log(rest); // [70, 80, 90]
```

#### Object Destructuring
```javascript
// Basic Object Destructuring
const person = { name: 'John', age: 25 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 25

// Assigning New Variable Names
const { name: userName, age: userAge } = person;
console.log(userName); // John
console.log(userAge); // 25

// Default Values
const { gender = 'Male' } = person;
console.log(gender); // Male

// Nested Object Destructuring
const student = { id: 1, details: { grade: 'A', score: 95 } };
const { details: { grade, score } } = student;
console.log(grade); // A
console.log(score); // 95
```

### Spread Operator

**Spread Operator** (`...`) allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

#### Spread in Arrays
```javascript
// Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copying Arrays
const copy = [...arr1];
console.log(copy); // [1, 2, 3]
```

#### Spread in Objects
```javascript
// Combining Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Copying Objects
const copyObj = { ...obj1 };
console.log(copyObj); // { a: 1, b: 2 }
```

### Rest Operator

**Rest Operator** (`...`) allows you to represent an indefinite number of arguments as an array.

#### Rest in Functions
```javascript
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10, 15)); // 30
```

#### Rest in Destructuring
```javascript
// Rest in Array Destructuring
const [first, ...others] = [10, 20, 30, 40];
console.log(first); // 10
console.log(others); // [20, 30, 40]

// Rest in Object Destructuring
const { a, ...restProps } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(restProps); // { b: 2, c: 3 }
```

---

Let me know if you need further details or additional topics covered!


