## Embedding Audio and HTML Forms

### Embedding Audio

The `<audio>` tag is used to embed audio files into an HTML document. This tag supports various audio formats such as MP3, WAV, and OGG. 

#### Basic Usage of `<audio>` Tag

```html
<audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

- **`controls`**: Adds audio controls like play, pause, and volume.
- **`<source>`**: Specifies the audio file and its format.
  - **`src`**: The path to the audio file.
  - **`type`**: The MIME type of the audio file (e.g., `audio/mpeg` for MP3).

#### Example with Multiple Sources

```html
<audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
    <source src="audiofile.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

### HTML Forms and Input Types

HTML forms are used to collect user input. They are defined using the `<form>` tag. A form can contain various input elements like text fields, radio buttons, checkboxes, and more.

#### Basic Structure of a Form

```html
<form action="#" method="post">
    <!-- Form elements go here -->
</form>
```

- **`action`**: Specifies the URL where the form data should be sent.
- **`method`**: Specifies the HTTP method to use when sending form data (`get` or `post`).

#### Common Input Types

1. **Text Input**

    ```html
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    ```

    - **`type="text"`**: Defines a single-line text input field.
    - **`id`**: A unique identifier for the input element.
    - **`name`**: The name of the input element, used to reference the data when the form is submitted.

2. **Password Input**

    ```html
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    ```

    - **`type="password"`**: Defines a password input field where the entered characters are masked.

3. **Email Input**

    ```html
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    ```

    - **`type="email"`**: Defines an input field for email addresses with built-in validation.

4. **Radio Buttons**

    ```html
    <label>
        <input type="radio" name="gender" value="male"> Male
    </label>
    <label>
        <input type="radio" name="gender" value="female"> Female
    </label>
    ```

    - **`type="radio"`**: Defines a radio button.
    - **`name`**: Groups radio buttons together so only one can be selected at a time.
    - **`value`**: The value submitted if this radio button is selected.

5. **Checkboxes**

    ```html
    <label>
        <input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter
    </label>
    ```

    - **`type="checkbox"`**: Defines a checkbox.
    - **`value`**: The value submitted if this checkbox is checked.

6. **Submit Button**

    ```html
    <input type="submit" value="Submit">
    ```

    - **`type="submit"`**: Defines a button for submitting the form.
    - **`value`**: The text displayed on the submit button.

### Form Validation

Form validation ensures that user input meets certain criteria before it is submitted. HTML5 provides built-in validation features that can be used without JavaScript.

#### Required Field

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>
```

- **`required`**: Specifies that the input field must be filled out before submitting the form.

#### Email Validation

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

- **`type="email"`**: Ensures that the input is a valid email address.
- **`required`**: Makes the field mandatory.

#### Pattern Validation

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" pattern="[A-Za-z]{3,}" title="Only letters are allowed and at least 3 characters" required>
```

- **`pattern`**: Specifies a regular expression that the input must match.
- **`title`**: Provides a message that is displayed when the input does not match the pattern.
- **`required`**: Makes the field mandatory.

### Example HTML Document with Audio and Form

```html
<!DOCTYPE html>
<html>
<head>
    <title>Audio and Form Example</title>
</head>
<body>
    <h1>Embedding Audio</h1>
    <audio controls>
        <source src="audiofile.mp3" type="audio/mpeg">
        <source src="audiofile.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>

    <h1>HTML Form Example</h1>
    <form action="submit_form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>

        <label>Gender:</label>
        <label>
            <input type="radio" name="gender" value="male" required> Male
        </label>
        <label>
            <input type="radio" name="gender" value="female" required> Female
        </label>
        <br>

        <label>
            <input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter
        </label>
        <br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" pattern="[A-Za-z]{3,}" title="Only letters are allowed and at least 3 characters" required>
        <br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

This example includes:
- An embedded audio file with controls.
- A form with various input types including text, password, email, radio buttons, checkboxes, and a submit button.
- Built-in form validation using attributes like `required`, `type`, and `pattern`.