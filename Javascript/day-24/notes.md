**LocalStorage:**

1. **Definition**: LocalStorage allows you to store data in the browser with no expiration time. The data persists even after the browser is closed and reopened.
2. **Methods**:
    - `setItem(key, value)`: Adds a key-value pair to LocalStorage.
    - `getItem(key)`: Retrieves the value associated with the key.
    - `removeItem(key)`: Removes the key and its associated value.
    - `clear()`: Clears all key-value pairs.
    - `key(index)`: Returns the key at the specified index.

**Example**:
```javascript
// Set item
localStorage.setItem('name', 'John Doe');

// Get item
let name = localStorage.getItem('name');
console.log(name); // Output: John Doe

// Remove item
localStorage.removeItem('name');

// Clear all items
localStorage.clear();
```

**SessionStorage:**

1. **Definition**: SessionStorage is similar to LocalStorage, but the data is cleared when the page session ends, which is when the page or browser is closed.
2. **Methods**:
    - `setItem(key, value)`: Adds a key-value pair to SessionStorage.
    - `getItem(key)`: Retrieves the value associated with the key.
    - `removeItem(key)`: Removes the key and its associated value.
    - `clear()`: Clears all key-value pairs.
    - `key(index)`: Returns the key at the specified index.

**Example**:
```javascript
// Set item
sessionStorage.setItem('sessionName', 'Jane Doe');

// Get item
let sessionName = sessionStorage.getItem('sessionName');
console.log(sessionName); // Output: Jane Doe

// Remove item
sessionStorage.removeItem('sessionName');

// Clear all items
sessionStorage.clear();
```


**LocalStorage:**

1. **Definition**: LocalStorage allows you to store data in the browser with no expiration time. The data persists even after the browser is closed and reopened.
2. **Methods**:
    - `setItem(key, value)`: Adds a key-value pair to LocalStorage.
    - `getItem(key)`: Retrieves the value associated with the key.
    - `removeItem(key)`: Removes the key and its associated value.
    - `clear()`: Clears all key-value pairs.
    - `key(index)`: Returns the key at the specified index.

**Example**:
```javascript
// Set item
localStorage.setItem('name', 'John Doe');

// Get item
let name = localStorage.getItem('name');
console.log(name); // Output: John Doe

// Remove item
localStorage.removeItem('name');

// Clear all items
localStorage.clear();
```

**SessionStorage:**

1. **Definition**: SessionStorage is similar to LocalStorage, but the data is cleared when the page session ends, which is when the page or browser is closed.
2. **Methods**:
    - `setItem(key, value)`: Adds a key-value pair to SessionStorage.
    - `getItem(key)`: Retrieves the value associated with the key.
    - `removeItem(key)`: Removes the key and its associated value.
    - `clear()`: Clears all key-value pairs.
    - `key(index)`: Returns the key at the specified index.

**Example**:
```javascript
// Set item
sessionStorage.setItem('sessionName', 'Jane Doe');

// Get item
let sessionName = sessionStorage.getItem('sessionName');
console.log(sessionName); // Output: Jane Doe

// Remove item
sessionStorage.removeItem('sessionName');

// Clear all items
sessionStorage.clear();
```

**Differences Between LocalStorage and SessionStorage**:

1. **Persistence**:
   - **LocalStorage**: Data persists even after the browser is closed and reopened.
   - **SessionStorage**: Data is cleared when the page session ends (when the page or browser is closed).

2. **Scope**:
   - **LocalStorage**: Shared across all tabs and windows with the same origin.
   - **SessionStorage**: Limited to the tab or window where it was set.

3. **Storage Limit**:
   - Both typically have a storage limit of around 5-10MB, but this can vary depending on the browser.
