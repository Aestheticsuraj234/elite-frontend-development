### CSS Syntax and Selectors

#### CSS Syntax

- **Selector**: Specifies the HTML element(s) to style.
- **Property**: Defines the aspect of the element to style.
- **Value**: Specifies the value of the property.

Example:
```css
selector {
    property: value;
}
```

#### CSS Selectors

1. **Type Selector**: Selects elements of a specific type.

Example:
```css
p {
    color: blue;
}

```

2. **Class Selector**: Selects elements with a specific class attribute.

Example:
```css
.highlight {
    background-color: yellow;
}
```

3. **ID Selector**: Selects a single element with a specific ID attribute.

Example:
```css
#header {
    font-size: 24px;
}
```

### Box Model

#### Box Model Properties

- **Content**: Actual content of the element.
- **Padding**: Space between the content and the border.
- **Border**: Boundary of the element.
- **Margin**: Space outside the border.

Example:
```css
.box {
    padding: 20px;
    border: 1px solid #cccccc;
    margin: 10px;
}
```

### Basic Styling

#### Font

- **Font Family**: Sets the font family.
- **Font Size**: Sets the size of the font.
- **Font Weight**: Sets the thickness of the font.
- **Font Style**: Sets the style of the font (italic, normal, etc.).

Example:
```css
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: italic;
}
```

#### Color

- **Color**: Sets the color of text.

Example:
```css
h1 {
    color: #333333;
}
```

#### Background

- **Background Color**: Sets the background color.
- **Background Image**: Sets the background image.
- **Background Repeat**: Defines if and how a background image will repeat.
- **Background Size**: Sets the size of the background image.

Example:
```css
.container {
    background-color: #f2f2f2;
    background-image: url('background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
```

These detailed explanations should provide a clearer understanding of CSS syntax, selectors, the box model, and basic styling, enabling you to apply styles to HTML elements more effectively.