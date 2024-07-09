## Handwritten Notes: Programming with Objects and JSON

### Objects and Properties

* **Objects** are fundamental building blocks in programming. They represent real-world entities or concepts with properties (attributes) and methods (actions).
* **Properties** hold data associated with the object. Imagine them as labels on a box containing information.
* Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.

#### Example: Car Object

```javascript
const car = {
  make: "Honda",
  model: "Civic",
  year: 2023,
  color: "red"
};
```

* In this example, `make`, `model`, `year`, and `color` are properties of the `car` object. 
* You can access property values using dot notation (`.`) or bracket notation (`[]`).

#### Accessing Properties

```javascript
console.log(car.make); // Outputs: "Honda"
console.log(car["model"]); // Outputs: "Civic"
```

* Dot notation is more common and preferred for its readability, while bracket notation is useful for dynamically accessing properties or using reserved words as keys.

Certainly! Here are detailed handwritten notes for `Object.keys()` and `Object.values()` in JavaScript, including examples:

---

### Object.keys() and Object.values()

**Object.keys()**

* **Description**: The `Object.keys()` method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
* **Syntax**: `Object.keys(obj)`
* **Parameters**: 
  * `obj` - The object whose enumerable own properties are to be returned.
* **Returns**: An array of strings representing the property names of the given object.

#### Example:

```javascript
const car = {
  make: "Honda",
  model: "Civic",
  year: 2023,
  color: "red"
};

const keys = Object.keys(car);
console.log(keys); // Outputs: ["make", "model", "year", "color"]
```

* In this example, `Object.keys(car)` returns an array of the keys (property names) of the `car` object.

---

**Object.values()**

* **Description**: The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as provided by a `for...in` loop.
* **Syntax**: `Object.values(obj)`
* **Parameters**:
  * `obj` - The object whose enumerable own property values are to be returned.
* **Returns**: An array containing the property values of the given object.

#### Example:

```javascript
const car = {
  make: "Honda",
  model: "Civic",
  year: 2023,
  color: "red"
};

const values = Object.values(car);
console.log(values); // Outputs: ["Honda", "Civic", 2023, "red"]
```

* In this example, `Object.values(car)` returns an array of the values of the `car` object.

---

**Combined Example:**

You can use `Object.keys()` and `Object.values()` together to get both keys and values of an object:

```javascript
const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};

const keys = Object.keys(person);
const values = Object.values(person);

console.log("Keys:", keys); // Outputs: ["name", "age", "occupation"]
console.log("Values:", values); // Outputs: ["Alice", 30, "Engineer"]
```

* This example demonstrates how to retrieve both keys and values of the `person` object using `Object.keys()` and `Object.values()`.

**Use Cases:**

* **Iterating Over Properties**: You can use `Object.keys()` and `Object.values()` to iterate over an object's properties and their values.
* **Converting Objects to Arrays**: These methods are helpful when you need to convert an object's properties or values into an array for further manipulation.
* **Filtering and Mapping**: Use these methods to filter or map over an object's keys or values for data processing tasks.

```javascript
const scores = {
  Alice: 85,
  Bob: 92,
  Charlie: 78
};

const names = Object.keys(scores); // ["Alice", "Bob", "Charlie"]
const marks = Object.values(scores); // [85, 92, 78]

const passingScores = marks.filter(score => score > 80);
console.log(passingScores); // Outputs: [85, 92]
```

* In this example, `Object.values()` is used to get an array of scores, and the `filter()` method is used to find scores greater than 80.

**Remember**: `Object.keys()` and `Object.values()` are essential tools for working with objects in JavaScript, especially when you need to manipulate or analyze an object's properties and their corresponding values.




### JSON (JavaScript Object Notation)

* **JSON (JavaScript Object Notation)** is a lightweight format for storing and exchanging data. It's human-readable and widely used for data interchange between servers and web applications.
* JSON syntax resembles JavaScript object literals, but with some limitations:
  * Properties must be enclosed in double quotes.
  * Only certain data types are allowed: strings, numbers, booleans, null, arrays (ordered lists), and objects.

#### Example: Car Data in JSON

```javascript
const carData = {
  "make": "Toyota",
  "model": "Camry",
  "year": 2022,
  "color": "silver",
  "features": ["Sunroof", "Heated Seats"]
};
```

* This example shows a valid JSON object representing car data.
* JSON is commonly used for configuration files, data storage, and APIs.

### Parsing and Stringifying JSON

* JavaScript provides built-in methods for working with JSON:
  * `JSON.parse(jsonString)`: Converts a JSON string into a JavaScript object.
  * `JSON.stringify(jsonObject)`: Converts a JavaScript object into a JSON string.

#### Parsing JSON Example

```javascript
const jsonString = '{"make": "Hyundai", "model": "Sonata", "year": 2021}';

// Parse the JSON string
const carObject = JSON.parse(jsonString);

// Access properties of the parsed object
console.log(carObject.make); // Outputs: "Hyundai"
```

#### Stringifying JSON Example

```javascript
// Create a JavaScript object
const anotherCar = {
  make: "Volkswagen",
  model: "Jetta",
  year: 2019
};

// Stringify the object
const carJsonString = JSON.stringify(anotherCar);
console.log(carJsonString); // Outputs: {"make":"Volkswagen","model":"Jetta","year":2019}
```

### Additional Notes

* **Nested Objects**: Objects can hold other objects as properties, creating nested structures.

```javascript
const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland"
  }
};
console.log(person.address.city); // Outputs: "Wonderland"
```

* **Prototype Chain**: In JavaScript, objects can inherit properties and methods from a prototype object, enabling reuse and inheritance.

* **JSON and APIs**: JSON is a popular choice for APIs (Application Programming Interfaces) that exchange data between different systems.

* **Best Practices**:
  * Always validate JSON data before parsing to avoid security risks.
  * Use consistent naming conventions for properties in JSON.

**Remember:** These are just the basics! Object-oriented programming is a vast topic with many advanced concepts.
