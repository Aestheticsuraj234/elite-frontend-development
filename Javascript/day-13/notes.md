### JavaScript Handwritten Notes

---

#### What is JavaScript?

JavaScript is a high-level, interpreted programming language primarily used to create dynamic and interactive content on web pages. It is one of the core technologies of the World Wide Web, alongside HTML and CSS.

- **High-level:** It abstracts away most of the complex details of the computer.
- **Interpreted:** Code is executed line by line by the browser’s JavaScript engine.
- **Dynamic:** It can update the content of web pages in real-time without reloading the page.

#### History and Use Cases of JavaScript

**History:**
- **1995:** Created by Brendan Eich while working at Netscape Communications.
- **1996:** Microsoft created a similar language called JScript to integrate with its Internet Explorer browser.
- **1997:** ECMAScript was established as the standardized version of JavaScript.

**Use Cases:**
1. **Web Development:** Enhances HTML and CSS to create dynamic, interactive web pages.
2. **Server-Side Programming:** With Node.js, JavaScript can be used to build scalable network applications.
3. **Game Development:** Used in browser-based games.
4. **Mobile Applications:** Frameworks like React Native allow for building mobile apps.
5. **Desktop Applications:** Tools like Electron enable the creation of cross-platform desktop applications.

---

#### Variables (let, const, var)

**var:**  
- Function-scoped
- Can be redeclared and updated
- Hoisted to the top of their scope and initialized with `undefined`

```javascript
var x = 10;
console.log(x); // 10
```

**let:**  
- Block-scoped
- Can be updated but not redeclared in the same scope
- Not initialized until the declaration is encountered

```javascript
let y = 20;
y = 30;
console.log(y); // 30
```

**const:**  
- Block-scoped
- Cannot be updated or redeclared
- Must be initialized at the time of declaration

```javascript
const z = 40;
console.log(z); // 40
```

---

#### Data Types

**Primitive Data Types:**
1. **String:** Represents textual data
   ```javascript
   let str = "Hello, World!";
   ```
2. **Number:** Represents both integer and floating-point numbers
   ```javascript
   let num = 42;
   ```
3. **Boolean:** Represents true or false values
   ```javascript
   let isTrue = true;
   ```
4. **Null:** Represents the intentional absence of any object value
   ```javascript
   let empty = null;
   ```
5. **Undefined:** Represents a variable that has not been assigned a value
   ```javascript
   let unassigned;
   console.log(unassigned); // undefined
   ```
6. **Symbol:** Represents a unique and immutable primitive value
   ```javascript
   let sym = Symbol('description');
   ```

**Non-Primitive Data Types:**
1. **Object:** A collection of properties and methods
   ```javascript
   let obj = {
       name: "Alice",
       age: 25
   };
   ```
2. **Array:** A special type of object used for storing ordered collections
   ```javascript
   let arr = [1, 2, 3];
   ```
3. **Function:** A block of code designed to perform a particular task
   ```javascript
   function greet() {
       console.log("Hello!");
   }
   ```

---

These handwritten notes cover the basics of JavaScript, including its definition, history, variables, and data types. They provide a clear and concise overview that will be helpful for anyone learning JavaScript.


## If You Need In-Depth Explanation of JavaScript, You Can Check Out This [JavaScript Mastery Resource By Filling this Form](https://forms.gle/qLX7J5iEEQWrYnME6)

---