## Arrays and Array Methods

### 1. Arrays

An array is a data structure that can hold multiple values. Each value in an array is called an element, and each element has a numeric position known as its index.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

### 2. Array Methods

#### `push()`

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### `pop()`

Removes the last element from an array and returns that element.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "Cherry"
console.log(fruits);    // ["Apple", "Banana"]
```

#### `shift()`

Removes the first element from an array and returns that element.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let firstFruit = fruits.shift();
console.log(firstFruit); // "Apple"
console.log(fruits);     // ["Banana", "Cherry"]
```

#### `unshift()`

Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let fruits = ["Banana", "Cherry"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### `slice()`

Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

```javascript
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Banana", "Cherry"]
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
```

#### `splice()`

Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
// Remove 1 element at index 1, and insert "Date" and "Elderberry"
fruits.splice(1, 1, "Date", "Elderberry");
console.log(fruits); // ["Apple", "Date", "Elderberry", "Cherry"]
```

## Strings and String Methods

### 1. Strings

A string is a sequence of characters used to represent text. Strings are immutable.

```javascript
let greeting = "Hello, World!";
```

### 2. String Methods

#### `length`

Returns the length of the string.

```javascript
let greeting = "Hello, World!";
console.log(greeting.length); // 13
```

#### `indexOf()`

Returns the index within the string of the first occurrence of the specified value, or -1 if not found.

```javascript
let greeting = "Hello, World!";
console.log(greeting.indexOf("World")); // 7
console.log(greeting.indexOf("world")); // -1 (case-sensitive)
```

#### `slice()`

Extracts a section of a string and returns it as a new string, without modifying the original string.

```javascript
let greeting = "Hello, World!";
let world = greeting.slice(7, 12);
console.log(world); // "World"
```

#### `replace()`

Returns a new string with some or all matches of a pattern replaced by a replacement. The original string is not modified.

```javascript
let greeting = "Hello, World!";
let newGreeting = greeting.replace("World", "Universe");
console.log(newGreeting); // "Hello, Universe!"
```

#### `split()`

Splits a string into an array of substrings, and returns the new array.

```javascript
let greeting = "Hello, World!";
let words = greeting.split(", ");
console.log(words); // ["Hello", "World!"]
```

#### `join()`

Joins all elements of an array into a string and returns this string.

```javascript
let words = ["Hello", "World!"];
let greeting = words.join(", ");
console.log(greeting); // "Hello, World!"
```

These methods provide powerful ways to manipulate and interact with arrays and strings, allowing for a wide range of operations from simple transformations to complex data processing.