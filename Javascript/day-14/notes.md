### Operators in JavaScript


1. **Arithmetic Operators:**
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
   - Increment (++)
   - Decrement (--)

2. **Assignment Operators:**
   - Assignment (=)
   - Addition Assignment (+=)
   - Subtraction Assignment (-=)
   - Multiplication Assignment (*=)
   - Division Assignment (/=)

3. **Comparison Operators:**
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)

4. **Logical Operators:**
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)



5. **Unary Operators:**
   - typeof
   - delete
   - new
   - void


1. **Arithmetic Operators:**

```javascript
// Addition
let resultAdd = 5 + 3; // resultAdd will be 8

// Subtraction
let resultSub = 10 - 4; // resultSub will be 6

// Multiplication
let resultMul = 6 * 2; // resultMul will be 12

// Division
let resultDiv = 20 / 5; // resultDiv will be 4

// Modulus (Remainder)
let resultMod = 10 % 3; // resultMod will be 1

// Increment
let count = 5;
count++; // Increment count by 1, now count is 6

// Decrement
let value = 8;
value--; // Decrement value by 1, now value is 7
```

2. **Assignment Operators:**

```javascript
let x = 10;
x += 5; // Equivalent to: x = x + 5, so x will be 15

let y = 20;
y -= 3; // Equivalent to: y = y - 3, so y will be 17

let z = 4;
z *= 2; // Equivalent to: z = z * 2, so z will be 8

let w = 15;
w /= 3; // Equivalent to: w = w / 3, so w will be 5
```

3. **Comparison Operators:**

```javascript
let a = 5;
let b = 10;

// Equal to
console.log(a == 5); // true

// Not equal to
console.log(b != 10); // false

// Strict equal to (compares both value and type)
console.log(a === '5'); // false

// Strict not equal to
console.log(b !== '10'); // true

// Greater than
console.log(a > 3); // true

// Less than
console.log(b < 15); // true

// Greater than or equal to
console.log(a >= 5); // true

// Less than or equal to
console.log(b <= 10); // true
```

4. **Logical Operators:**

```javascript
let p = true;
let q = false;

// Logical AND
console.log(p && q); // false

// Logical OR
console.log(p || q); // true

// Logical NOT
console.log(!p); // false
```



5. **Unary Operators:**

```javascript
let value = 10;

// typeof operator
console.log(typeof value); // "number"

// delete operator
let obj = { x: 5, y: 10 };
delete obj.x; // Deletes property 'x' from obj

// new operator
function Person(name) {
  this.name = name;
}
let person = new Person('John');

// void operator
let result = void 0; // result is undefined
```


**JavaScript Data Types & Operators**

*Data Types:*

1. **Primitive Data Types:**
   - Number: integers, floats, etc.
   - String: text data.
   - Boolean: true or false.
   - Null: represents intentional absence of any object value.
   - Undefined: represents a variable that has not been assigned a value.

2. **Non-primitive Data Types:**
   - Object: a collection of key-value pairs.
   - Array: a collection of elements.

*Operators:*

1. **Arithmetic Operators:**
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
   - Increment (++)
   - Decrement (--)

2. **Assignment Operators:**
   - Assignment (=)
   - Addition Assignment (+=)
   - Subtraction Assignment (-=)
   - Multiplication Assignment (*=)
   - Division Assignment (/=)

3. **Comparison Operators:**
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)

4. **Logical Operators:**
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)


5. **Unary Operators:**
   - typeof
   - delete
   - new
   - void


Sure! Here are code examples for each type of operator along with explanations:

1. **Arithmetic Operators:**

```javascript
// Addition
let resultAdd = 5 + 3; // resultAdd will be 8

// Subtraction
let resultSub = 10 - 4; // resultSub will be 6

// Multiplication
let resultMul = 6 * 2; // resultMul will be 12

// Division
let resultDiv = 20 / 5; // resultDiv will be 4

// Modulus (Remainder)
let resultMod = 10 % 3; // resultMod will be 1

// Increment
let count = 5;
count++; // Increment count by 1, now count is 6

// Decrement
let value = 8;
value--; // Decrement value by 1, now value is 7
```

2. **Assignment Operators:**

```javascript
let x = 10;
x += 5; // Equivalent to: x = x + 5, so x will be 15

let y = 20;
y -= 3; // Equivalent to: y = y - 3, so y will be 17

let z = 4;
z *= 2; // Equivalent to: z = z * 2, so z will be 8

let w = 15;
w /= 3; // Equivalent to: w = w / 3, so w will be 5
```

3. **Comparison Operators:**

```javascript
let a = 5;
let b = 10;

// Equal to
console.log(a == 5); // true

// Not equal to
console.log(b != 10); // false

// Strict equal to (compares both value and type)
console.log(a === '5'); // false

// Strict not equal to
console.log(b !== '10'); // true

// Greater than
console.log(a > 3); // true

// Less than
console.log(b < 15); // true

// Greater than or equal to
console.log(a >= 5); // true

// Less than or equal to
console.log(b <= 10); // true
```

4. **Logical Operators:**

```javascript
let p = true;
let q = false;

// Logical AND
console.log(p && q); // false

// Logical OR
console.log(p || q); // true

// Logical NOT
console.log(!p); // false
```



5. **Unary Operators:**

```javascript
let value = 10;

// typeof operator
console.log(typeof value); // "number"

// delete operator
let obj = { x: 5, y: 10 };
delete obj.x; // Deletes property 'x' from obj

// new operator
function Person(name) {
  this.name = name;
}
let person = new Person('John');

// void operator
let result = void 0; // result is undefined
```


### Conditional Statements

Conditional statements perform different actions based on different conditions.

- **If statement**
  ```javascript
  if (a > b) {
    console.log("a is greater than b");
  }
  ```

- **If...else statement**
  ```javascript
  if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("a is not greater than b");
  }
  ```

- **Else if statement**
  ```javascript
  if (a > b) {
    console.log("a is greater than b");
  } else if (a < b) {
    console.log("a is less than b");
  } else {
    console.log("a is equal to b");
  }
  ```

### Logical Operators

Logical operators are used to determine the logic between variables or values.

- **AND (`&&`)**
  ```javascript
  let isTrue = (a > b && b > 0); // true
  ```

- **OR (`||`)**
  ```javascript
  let isTrue = (a < b || b > 0); // true
  ```

- **NOT (`!`)**
  ```javascript
  let isFalse = !(a > b); // false
  ```

### Ternary Operator

The ternary operator is a shorthand for the `if` statement.

- **Syntax**
  ```javascript
  condition ? expr1 : expr2
  ```

- **Example**
  ```javascript
  let result = (a > b) ? "a is greater" : "a is not greater";
  console.log(result); // "a is greater"
  ```

---

Here's a handwritten version of the notes:

![Handwritten Notes](attachment_url)