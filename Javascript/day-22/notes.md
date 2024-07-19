**Promises: Asynchronous Operations**
u receive a confirmation message but must wait for delivery. This illustrates JavaScript's asynchronous operations, which don't block the main thread during 
Imagine ordering a pizza online; execution.

PHere are the handwritten notes for `try-catch-finally` in JavaScript.

---

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

These examples demonstrate the usage of `try-catch-finally` blocks to handle errors and perform necessary cleanup actions. Let me know if you need any more details or additional topics!romises handle the result (success or failure) of these operations asynchronously. They act as a contract between the caller and the executor.

**Creating a Promise:**

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}
```

- `new Promise((resolve, reject) => { ... })`: Creates a new promise object.
- `resolve(value)`: Called for a successful operation.
- `reject(error)`: Called for a failed operation.

**Consuming a Promise:**

```javascript
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
```

- `.then(callback)`: Handles resolved value.
- `.catch(callback)`: Handles rejection.

**Real-Life Example:**
Updating a shopping cart on an e-commerce site involves multiple asynchronous operations:

1. **Adding the item to the cart:** An API call.
2. **Updating the cart display:** DOM manipulation.

```javascript
function addToCart(itemId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemId > 0) {
                resolve("Item added successfully");
            } else {
                reject(new Error("Invalid item ID"));
            }
        }, 1000);
    });
}

function updateCartDisplay(message) {
    console.log(message);
}

addToCart(2)
    .then(updateCartDisplay)
    .catch(error => console.error(error.message));
```

**Async/Await: Sugar for Promises**

Async/await provides a synchronous-like way to handle promises.

**Creating an Async Function:**

```javascript
async function fetchUserAndLogData(userId) {
    try {
        const userData = await fetchData(userId);
        console.log("User data:", userData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
```

- `async`: Marks a function as asynchronous.
- `await`: Pauses execution until the promise settles.

**Using Async/Await:**

```javascript
fetchUserAndLogData(1);
```

**Combining Promises and Async/Await:**

```javascript
async function checkout(cart) {
    try {
        await processPayment(cart);
        await fulfillOrder(cart);
        console.log("Order complete!");
    } catch (error) {
        console.error("Checkout failed:", error.message);
    }
}
```

## States of Promises and the `finally` Block

**Promise States:**

1. **Pending:** Initial state.
2. **Fulfilled:** Operation completed successfully.
3. **Rejected:** Operation encountered an error.

**`finally` Block:**

```javascript
promise.then(onFulfilled)
       .catch(onRejected)
       .finally(onFinally);
```

- Executes regardless of promise outcome.
- Useful for cleanup tasks.

**Example:**

```javascript
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error.message))
    .finally(() => console.log("Always executed"));
```