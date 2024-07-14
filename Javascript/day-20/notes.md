### Higher-Order Functions

**Definition:** Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

<!-- Foreach --assignment -->

1. **Map**

   - **Description:** Creates a new array populated with the results of calling a provided function on every element in the calling array.
   - **Syntax:** `array.map(callback(currentValue, index, array))`

   ```javascript
   const numbers = [1, 2, 3, 4];
   const squared = numbers.map(num => num * num);
   console.log(squared); // Output: [1, 4, 9, 16]
   ```

2. **Filter**

   - **Description:** Creates a new array with all elements that pass the test implemented by the provided function.
   - **Syntax:** `array.filter(callback(element, index, array))`

   ```javascript
   const numbers = [1, 2, 3, 4];
   const evenNumbers = numbers.filter(num => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]
   ```

3. **Reduce**

   - **Description:** Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - **Syntax:** `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`

   ```javascript
   const numbers = [1, 2, 3, 4];
   const sum = numbers.reduce((total, num) => total + num, 0);
   console.log(sum); // Output: 10
   ```

---

### Closures

**Definition:** A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

**Example:**

```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// Output:
// Outer Variable: outside
// Inner Variable: inside
```

**Explanation:**
- `outerFunction` returns `innerFunction`.
- `innerFunction` has access to `outerVariable` due to closure.

---

### Ternary Operator

**Definition:** The ternary operator is the only JavaScript operator that takes three operands. It’s often used as a shortcut for the `if` statement.

**Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

**Example:**

```javascript
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes
```

**Explanation:**
- `condition`: `age >= 18`
- `expressionIfTrue`: `'Yes'`
- `expressionIfFalse`: `'No'`

---

### Template Literals

**Definition:** Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

**Syntax:** `` `string text ${expression} string text` ``

**Example:**

```javascript
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is John and I am 30 years old.
```

**Explanation:**
- Use backticks (`` ` ``) instead of single or double quotes.
- Embed expressions using `${expression}`.

---
