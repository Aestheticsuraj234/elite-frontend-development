## Basics of HTML

HTML (HyperText Markup Language) is the standard language used to create web pages. It consists of a series of elements and tags that define the structure and content of a webpage.

### HTML Structure and Elements

An HTML document has a specific structure consisting of a hierarchy of elements. Here's the basic structure of an HTML document:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

- `<!DOCTYPE html>`: This declaration defines the document type and version of HTML.
- `<html>`: This is the root element of an HTML page.
- `<head>`: Contains meta-information about the document, such as its title and links to stylesheets.
- `<title>`: Sets the title of the document, which appears in the browser tab.
- `<body>`: Contains the content of the document, such as text, images, links, and other elements.

### HTML Tags

HTML tags are used to create elements on a webpage. Here are some common HTML tags:

#### Headings

Headings are used to define titles and subtitles. There are six levels of headings, from `<h1>` to `<h6>`, with `<h1>` being the highest level.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

#### Paragraphs

Paragraphs are defined using the `<p>` tag.

```html
<p>This is a paragraph.</p>
```

#### Lists

There are two types of lists in HTML: ordered lists and unordered lists.

- **Ordered List**: Uses the `<ol>` tag, with each item in the list wrapped in an `<li>` tag.

  ```html
  <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
  </ol>
  ```

- **Unordered List**: Uses the `<ul>` tag, with each item in the list wrapped in an `<li>` tag.

  ```html
  <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
  </ul>
  ```

#### Links

Links are created using the `<a>` (anchor) tag. The `href` attribute specifies the URL of the page the link goes to.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Anchor Tags (`<a>`)

The `<a>` tag is used to create hyperlinks, which allow users to click through to other pages or sections within the same page.

```html
<a href="https://www.example.com">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Example of an internal link target -->
<h2 id="section1">Section 1</h2>
<p>This is Section 1 of the document.</p>
```

- `href`: Specifies the URL or the ID of the element to link to.
- `target`: Specifies where to open the linked document. For example, `_blank` opens the link in a new tab.

### Images (`<img>`)

The `<img>` tag is used to embed images in an HTML document. It is a self-closing tag.

```html
<img src="image.jpg" alt="Description of the image" width="300" height="200">
```

- `src`: Specifies the path to the image file.
- `alt`: Provides alternative text for the image, which is useful for accessibility.
- `width` and `height`: Specify the dimensions of the image.

### Videos (`<video>`)

The `<video>` tag is used to embed video content in an HTML document. 

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

- `controls`: Adds video controls like play, pause, and volume.
- `<source>`: Specifies the video file and its format.

### Example HTML Document

Here is a complete example of an HTML document that includes all the elements discussed above:

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Basics</title>
</head>
<body>
    <h1>Welcome to HTML Basics</h1>
    <p>This document provides an overview of the basic HTML tags.</p>

    <h2>Headings</h2>
    <h3>Subheading Example</h3>

    <h2>Paragraph</h2>
    <p>This is an example of a paragraph.</p>

    <h2>Lists</h2>
    <h3>Ordered List</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
    <h3>Unordered List</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>

    <h2>Links</h2>
    <p>Here is an <a href="https://www.example.com">external link</a> and an <a href="#section2">internal link</a>.</p>

    <h2>Images</h2>
    <img src="image.jpg" alt="Description of the image" width="300" height="200">

    <h2>Videos</h2>
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <h2 id="section2">Section 2</h2>
    <p>This is Section 2 of the document.</p>
</body>
</html>
```

This document demonstrates how to use basic HTML elements to structure a webpage.



### Elements and Attributes in HTML

#### HTML Elements

An HTML element is the basic building block of an HTML document. Elements are used to structure and display content. Each element consists of:

1. **Opening Tag**: The name of the element wrapped in angle brackets.
2. **Content**: The text or other HTML elements contained within the element.
3. **Closing Tag**: The same name as the opening tag but with a forward slash before it, also wrapped in angle brackets.

For example, a paragraph element looks like this:

```html
<p>This is a paragraph.</p>
```

- `<p>`: The opening tag.
- `This is a paragraph.`: The content.
- `</p>`: The closing tag.

Some HTML elements are self-closing and do not have closing tags. These are also known as void elements. Examples include `<img>`, `<br>`, and `<hr>`.

#### Example of Elements

```html
<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<img src="image.jpg" alt="Description of the image">
```

In this example:
- `<h1>` is an element used for a main heading.
- `<p>` is an element used for a paragraph.
- `<img>` is an element used to display an image.

#### HTML Attributes

Attributes provide additional information about HTML elements. They are always included in the opening tag and consist of a name and a value, separated by an equal sign. The value is enclosed in quotation marks.

Attributes typically define properties or behavior of the element they are attached to.

#### Common Attributes

- `href` for links (`<a>` tag).
- `src` for images (`<img>` tag).
- `alt` for alternative text for images (`<img>` tag).
- `id` and `class` for identifiers and CSS styling.

#### Example of Attributes

```html
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
<img src="image.jpg" alt="Description of the image" width="300" height="200">
```

In this example:
- The `<a>` tag has two attributes:
  - `href="https://www.example.com"`: Specifies the URL to link to.
  - `target="_blank"`: Specifies that the link should open in a new tab.
- The `<img>` tag has four attributes:
  - `src="image.jpg"`: Specifies the path to the image file.
  - `alt="Description of the image"`: Provides alternative text for the image.
  - `width="300"`: Specifies the width of the image.
  - `height="200"`: Specifies the height of the image.

#### Example HTML Document with Elements and Attributes

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Elements and Attributes</title>
</head>
<body>
    <h1>Welcome to HTML Elements and Attributes</h1>
    <p>This document explains HTML elements and attributes.</p>

    <h2>Links</h2>
    <a href="https://www.example.com" target="_blank">Visit Example.com</a>

    <h2>Images</h2>
    <img src="image.jpg" alt="Description of the image" width="300" height="200">

    <h2>Lists</h2>
    <ul>
        <li class="item">First item</li>
        <li class="item">Second item</li>
        <li class="item">Third item</li>
    </ul>

    <h2>Video</h2>
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
```

In this example:
- The document contains various elements such as headings, paragraphs, links, images, lists, and a video.
- Each element has attributes that provide additional information about the element, such as `href` for links, `src` and `alt` for images, `class` for list items, and `width` and `controls` for videos.