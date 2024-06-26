
### Positioning (static, relative, absolute, fixed)

#### Static Positioning
- **Definition:** The default positioning for all elements. Elements are positioned according to the normal flow of the document.
- **Usage:** No special properties needed.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Static Positioning</title>
    <style>
        .static-box {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="static-box">Static</div>
</body>
</html>
```

#### Relative Positioning
- **Definition:** Elements are positioned relative to their normal position. Can use top, right, bottom, and left properties to adjust.
- **Usage:** `position: relative;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Relative Positioning</title>
    <style>
        .relative-box {
            position: relative;
            top: 20px;
            left: 20px;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="relative-box">Relative</div>
</body>
</html>
```

#### Absolute Positioning
- **Definition:** Elements are positioned relative to their closest positioned ancestor. If none, they are positioned relative to the initial containing block.
- **Usage:** `position: absolute;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Absolute Positioning</title>
    <style>
        .container {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: lightgray;
        }
        .absolute-box {
            position: absolute;
            top: 50px;
            left: 50px;
            width: 100px;
            height: 100px;
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="absolute-box">Absolute</div>
    </div>
</body>
</html>
```

#### Fixed Positioning
- **Definition:** Elements are positioned relative to the viewport and do not move when the page is scrolled.
- **Usage:** `position: fixed;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fixed Positioning</title>
    <style>
        .fixed-box {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 100px;
            height: 100px;
            background-color: orange;
        }
    </style>
</head>
<body>
    <div class="fixed-box">Fixed</div>
</body>
</html>
```

---

### Float and Clear

#### Float
- **Definition:** Allows elements to float to the left or right of their container.
- **Usage:** `float: left;` or `float: right;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Float Example</title>
    <style>
        .float-left {
            float: left;
            width: 100px;
            height: 100px;
            background-color: purple;
        }
        .float-right {
            float: right;
            width: 100px;
            height: 100px;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div class="float-left">Left Float</div>
    <div class="float-right">Right Float</div>
    <div style="clear: both;">Clear Float</div>
</body>
</html>
```

#### Clear
- **Definition:** Prevents elements from wrapping around floated elements.
- **Usage:** `clear: left;`, `clear: right;`, or `clear: both;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Clear Example</title>
    <style>
        .float-left {
            float: left;
            width: 100px;
            height: 100px;
            background-color: purple;
        }
        .clear-both {
            clear: both;
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <div class="float-left">Left Float</div>
    <div class="clear-both">Cleared</div>
</body>
</html>
```

---

### Display Property (block, inline, inline-block)

#### Block
- **Definition:** Elements take up the full width available and start on a new line.
- **Usage:** `display: block;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Block Display</title>
    <style>
        .block-box {
            display: block;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="block-box">Block</div>
    <div class="block-box">Block</div>
</body>
</html>
```

#### Inline
- **Definition:** Elements do not start on a new line and only take up as much width as necessary.
- **Usage:** `display: inline;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline Display</title>
    <style>
        .inline-box {
            display: inline;
            width: 100px;
            height: 100px;
            background-color: cyan;
        }
    </style>
</head>
<body>
    <div class="inline-box">Inline</div>
    <div class="inline-box">Inline</div>
</body>
</html>
```

#### Inline-Block
- **Definition:** Elements are formatted as inline elements but can have width and height.
- **Usage:** `display: inline-block;`

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline-Block Display</title>
    <style>
        .inline-block-box {
            display: inline-block;
            width: 100px;
            height: 100px;
            background-color: lime;
        }
    </style>
</head>
<body>
    <div class="inline-block-box">Inline-Block</div>
    <div class="inline-block-box">Inline-Block</div>
</body>
</html>
```

---

### Layout Techniques (static, liquid, elastic)

#### Static Layout
- **Definition:** Fixed-width layout where elements have a set width in pixels.
- **Usage:** Set width in pixels.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Static Layout</title>
    <style>
        .static-layout {
            width: 800px;
            margin: 0 auto;
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <div class="static-layout">Static Layout</div>
</body>
</html>
```

#### Liquid Layout
- **Definition:** Fluid layout where elements have percentages for width, allowing them to resize with the viewport.
- **Usage:** Set width in percentages.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Liquid Layout</title>
    <style>
        .liquid-layout {
            width: 80%;
            margin: 0 auto;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="liquid-layout">Liquid Layout</div>
</body>
</html>
```

#### Elastic Layout
- **Definition:** Layout where elements have their size defined relative to a base font size, typically using `em` units.
- **Usage:** Set width in `em` units.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Elastic Layout</title>
    <style>
        .elastic-layout {
            width: 50em;
            margin: 0 auto;
            background-color: lightseagreen;
        }
    </style>
</head>
<body>
    <div class="elastic-layout">Elastic Layout</div>
</body>
</html>
```

---

These notes cover the essential concepts of CSS positioning, float and clear, display property, and layout techniques, along with coding examples for each.