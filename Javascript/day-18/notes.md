Document Object Model (DOM) in JavaScript

1. What is DOM?

DOM stands for Document Object Model.
It represents the structured content of an HTML document as a tree-like structure where each node represents a part of the document.

### DOM Selectors:

DOM selectors are methods provided by the Document Object Model (DOM) API that allow developers to select and manipulate HTML elements in a web page. There are various methods available to select elements, including:

1. **getElementById**: Selects an element by its unique ID attribute.
2. **getElementsByClassName**: Selects elements by their class name.
3. **getElementsByTagName**: Selects elements by their tag name.
4. **querySelector**: Selects the first element that matches a specified CSS selector.
5. **querySelectorAll**: Selects all elements that match a specified CSS selector.

### NodeList:

A NodeList is an array-like object that represents a collection of nodes, typically returned by DOM traversal or query methods like `querySelectorAll`. It is important to note that NodeList objects are "live", meaning that they are automatically updated when the underlying document structure changes.

### HTMLCollection:

An HTMLCollection is similar to a NodeList in that it represents a collection of nodes, but it specifically contains only HTML elements. HTMLCollections are also live and are typically returned by methods like `getElementsByClassName` and `getElementsByTagName`.

Here are some code examples to illustrate the usage of DOM selectors, NodeList, and HTMLCollection:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Selectors</title>
  </head>
  <body>
    <div id="container">
      <p class="para">Paragraph 1</p>
      <p class="para">Paragraph 2</p>
      <p class="para">Paragraph 3</p>
    </div>
    <script>
      // Using DOM selectors
      const container = document.getElementById("container");
      const paragraphsByClass = document.getElementsByClassName("para");
      const paragraphsByTag = document.getElementsByTagName("p");
      const firstParagraph = document.querySelector(".para");
      const allParagraphs = document.querySelectorAll(".para");

      console.log(container); // <div id="container">...</div>
      console.log(paragraphsByClass); // HTMLCollection of all elements with class "para"
      console.log(paragraphsByTag); // HTMLCollection of all <p> elements
      console.log(firstParagraph); // <p class="para">Paragraph 1</p>
      console.log(allParagraphs); // NodeList containing all <p> elements with class "para"

      // Modifying NodeList and HTMLCollection
      container.innerHTML += '<p class="para">Paragraph 4</p>'; // Updates NodeList
      console.log(allParagraphs); // NodeList now contains Paragraph 4
    </script>
  </body>
</html>
```

In this example:

- We select elements using various DOM selectors.
- We demonstrate the difference between NodeList and HTMLCollection.
- We show that NodeList and HTMLCollection are live, meaning they automatically update when the document structure changes.

Understanding these concepts is crucial for effectively manipulating HTML elements in JavaScript.

### DOM Selectors:

1. **getElementById:**

   - Selects an element by its unique ID attribute.

   ```javascript
   const elementById = document.getElementById("elementId");
   ```

2. **getElementsByClassName:**

   - Selects elements by their class name.

   ```javascript
   const elementsByClass = document.getElementsByClassName("className");
   ```

3. **getElementsByTagName:**

   - Selects elements by their tag name.

   ```javascript
   const elementsByTag = document.getElementsByTagName("tagName");
   ```

4. **querySelector:**

   - Selects the first element that matches a specified CSS selector.

   ```javascript
   const firstElement = document.querySelector(".selector");
   ```

5. **querySelectorAll:**
   - Selects all elements that match a specified CSS selector.
   ```javascript
   const allElements = document.querySelectorAll(".selector");
   ```

### NodeList vs HTMLCollection:

- **NodeList:**
  - Represents a collection of nodes, typically returned by methods like `querySelectorAll`.
  - Contains all types of nodes (e.g., elements, text nodes, etc.).
  - NodeList is a generic collection of nodes and can include non-element nodes.
  - NodeList is iterable, but not an array.
  - NodeList is dynamic, meaning it updates when the DOM changes.
- **HTMLCollection:**
  - Represents a collection of HTML elements, typically returned by methods like `getElementsByClassName` or `getElementsByTagName`.
  - Contains only HTML elements.
  - HTMLCollection is specifically for HTML elements and doesn't include non-element nodes.
  - HTMLCollection is array-like but not a true array (e.g., lacks array methods like `forEach`).
  - HTMLCollection is live, meaning it updates when the DOM changes.

Here's a summary with code examples:

```javascript
// Using DOM selectors
const elementById = document.getElementById("elementId");
const elementsByClass = document.getElementsByClassName("className");
const elementsByTag = document.getElementsByTagName("tagName");
const firstElement = document.querySelector(".selector");
const allElements = document.querySelectorAll(".selector");

// NodeList
console.log(allElements); // NodeList

// HTMLCollection
console.log(elementsByClass); // HTMLCollection
```

Understanding these differences is important for choosing the appropriate method based on your requirements and efficiently manipulating DOM elements in JavaScript.

`textContent`, `innerHTML`, and `innerText` are properties used to manipulate the content of HTML elements. Here's a breakdown of each:

1. **textContent**:

   - **Description**: Represents the text content of a node and all its descendants. It returns the text content as a string, including all nested elements.
   - **Usage**:
     ```javascript
     const element = document.getElementById("example");
     console.log(element.textContent); // Retrieves the text content
     element.textContent = "New text"; // Sets the text content
     ```

2. **innerHTML**:

   - **Description**: Represents the HTML content of the element. It allows you to retrieve or set the HTML markup inside the element, including any nested elements.
   - **Usage**:
     ```javascript
     const element = document.getElementById("example");
     console.log(element.innerHTML); // Retrieves the HTML content
     element.innerHTML = "<strong>New HTML</strong>"; // Sets the HTML content
     ```

3. **innerText**:
   - **Description**: Represents the rendered text content of the element. It returns the visible text content, excluding any hidden or non-visible elements (like `<script>` or `<style>` elements).
   - **Usage**:
     ```javascript
     const element = document.getElementById("example");
     console.log(element.innerText); // Retrieves the rendered text content
     element.innerText = "New text"; // Sets the rendered text content
     ```

**Note:** It's important to be cautious when using `innerHTML`, as setting it with user-generated content can lead to security vulnerabilities like cross-site scripting (XSS) attacks. Use `textContent` when manipulating text content to avoid these issues unless you specifically need to handle HTML markup.

Here's an example that demonstrates the use of these properties:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>textContent vs innerHTML vs innerText</title>
  </head>
  <body>
    <div id="example">
      <p>Hello, <strong>world</strong>!</p>
    </div>

    <script>
      const element = document.getElementById("example");

      console.log(element.textContent); // Outputs: "Hello, world!"
      console.log(element.innerHTML); // Outputs: "<p>Hello, <strong>world</strong>!</p>"
      console.log(element.innerText); // Outputs: "Hello, world!"

      // Modifying content
      element.textContent = "New text"; // Sets textContent
      element.innerHTML = "<strong>New HTML</strong>"; // Sets innerHTML
      element.innerText = "New text"; // Sets innerText
    </script>
  </body>
</html>


### Browser Object Model (BOM) in JavaScript

1. **What is BOM?**

   BOM stands for Browser Object Model. It represents the browser window and provides methods and properties to interact with the browser.

### Key Components of BOM:

1. **Window Object:**

   The `window` object is the top-level object in the BOM hierarchy. It represents the browser window and provides access to various browser features and functionalities.

   ```javascript
   // Accessing window properties
   console.log(window.innerWidth); // Width of the window's content area
   console.log(window.innerHeight); // Height of the window's content area

   // Accessing window methods
   window.alert("Hello, world!"); // Displays an alert dialog
   ```

2. **Navigator Object:**

   The `navigator` object provides information about the browser and the user's device.

   ```javascript
   // Accessing navigator properties
   console.log(navigator.userAgent); // User agent string of the browser
   console.log(navigator.language); // Language of the browser

   // Checking if cookies are enabled
   if (navigator.cookieEnabled) {
     console.log("Cookies are enabled");
   } else {
     console.log("Cookies are disabled");
   }
   ```

3. **Location Object:**

   The `location` object represents the current URL of the document and provides methods to manipulate the URL.

   ```javascript
   // Accessing location properties
   console.log(location.href); // Current URL
   console.log(location.hostname); // Hostname of the URL
   console.log(location.pathname); // Pathname of the URL

   // Navigating to a new URL
   location.href = "https://www.example.com";
   ```

4. **History Object:**

   The `history` object provides access to the browser's session history and allows navigation through the history stack.

   ```javascript
   // Navigating through history
   history.back(); // Go back to the previous page
   history.forward(); // Go forward to the next page
   history.go(-1); // Go back one page (same as history.back())
   ```

5. **Screen Object:**

   The `screen` object provides information about the user's screen.

   ```javascript
   // Accessing screen properties
   console.log(screen.width); // Width of the screen
   console.log(screen.height); // Height of the screen
   console.log(screen.availWidth); // Available width of the screen
   console.log(screen.availHeight); // Available height of the screen
   ```

### Example: BOM Manipulation

Here's a simple example that demonstrates the usage of BOM components to create a countdown timer that redirects the user to another page when the countdown reaches zero.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BOM Example</title>
  </head>
  <body>
    <h1>Countdown Timer</h1>
    <p id="timer">5</p>
    <script>
      let countdown = 5;
      const timerElement = document.getElementById("timer");

      const intervalId = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;

        if (countdown === 0) {
          clearInterval(intervalId);
          // Redirecting to a new URL using the location object
          location.href = "https://www.example.com";
        }
      }, 1000);
    </script>
  </body>
</html>
```

### Explanation:

1. **Window Object:**
   - Accesses the window's width and height.
   - Displays an alert dialog.

2. **Navigator Object:**
   - Retrieves the browser's user agent and language.
   - Checks if cookies are enabled.

3. **Location Object:**
   - Retrieves the current URL, hostname, and pathname.
   - Navigates to a new URL.

4. **History Object:**
   - Navigates through the browser's history.

5. **Screen Object:**
   - Retrieves the screen's width, height, and available dimensions.

### Summary:

Understanding the BOM allows you to interact with the browser, retrieve information about the user's environment, and manipulate the browser window and its components. These capabilities are essential for creating dynamic and interactive web applications.