
**Introduction to Flexbox**

Flexbox, short for Flexible Box Layout, is a CSS module designed to help with the layout of elements in a container, making it easier to design responsive web pages. The primary idea behind Flexbox is to give the container the ability to alter its items' width, height, and order to best fill the available space.

### Key Concepts:
1. **Flex Container**: The parent element where Flexbox is applied.
2. **Flex Items**: The child elements within the flex container.

To start using Flexbox, you need to set the `display` property of the container to `flex`.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex;
  }
</style>
```

---

### Flexbox Properties

#### 1. `flex-direction`
This property defines the direction in which the flex items are placed in the flex container. It has four possible values:
- `row` (default): Items are placed in a row, from left to right.
- `row-reverse`: Items are placed in a row, but in reverse order, from right to left.
- `column`: Items are placed in a column, from top to bottom.
- `column-reverse`: Items are placed in a column, but in reverse order, from bottom to top.

**Example:**

```html
<div class="container row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="container column">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .row {
    flex-direction: row;
  }
  .column {
    flex-direction: column;
  }
  .item {
    padding: 10px;
    background: lightblue;
    border: 1px solid #000;
  }
</style>
```

---

#### 2. `justify-content`
This property aligns the flex items along the main axis (horizontal if `flex-direction` is `row`, vertical if `flex-direction` is `column`). It has several values:
- `flex-start` (default): Items are aligned at the start of the container.
- `flex-end`: Items are aligned at the end of the container.
- `center`: Items are centered in the container.
- `space-between`: Items are evenly distributed, with the first item at the start and the last item at the end.
- `space-around`: Items are evenly distributed with equal space around them.
- `space-evenly`: Items are evenly distributed with equal space between them.

**Example:**

```html
<div class="container justify-center">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="container justify-space-between">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-space-between {
    justify-content: space-between;
  }
  .item {
    padding: 10px;
    background: lightcoral;
    border: 1px solid #000;
  }
</style>
```

---

#### 3. `align-items`
This property aligns the flex items along the cross axis (perpendicular to the main axis). It has several values:
- `stretch` (default): Items are stretched to fill the container.
- `flex-start`: Items are aligned at the start of the cross axis.
- `flex-end`: Items are aligned at the end of the cross axis.
- `center`: Items are centered along the cross axis.
- `baseline`: Items are aligned such that their baselines align.

**Example:**

```html
<div class="container align-center">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="container align-flex-end">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex;
    height: 100px;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .align-center {
    align-items: center;
  }
  .align-flex-end {
    align-items: flex-end;
  }
  .item {
    padding: 10px;
    background: lightgreen;
    border: 1px solid #000;
  }
</style>
```

---

#### 4. `align-content`
This property aligns a flex container’s lines within the container when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis. This property applies only if there is more than one line of flex items.

It has several values:
- `stretch` (default): Lines are stretched to take up the remaining space.
- `flex-start`: Lines are packed to the start of the container.
- `flex-end`: Lines are packed to the end of the container.
- `center`: Lines are packed to the center of the container.
- `space-between`: Lines are evenly distributed with the first line at the start and the last line at the end.
- `space-around`: Lines are evenly distributed with equal space around each line.
- `space-evenly`: Lines are evenly distributed with equal space between them.

**Example:**

```html
<div class="container align-content-space-between">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .align-content-space-between {
    align-content: space-between;
  }
  .item {
    width: 30%;
    padding: 10px;
    background: lightyellow;
    border: 1px solid #000;
    margin: 5px;
  }
</style>
```

---

### Flex Item Properties

#### 1. `order`
This property specifies the order of the flex items. By default, items are ordered according to their source order, but the `order` property can change that. Items with a lower `order` value will appear first.

**Example:**

```html
<div class="container">
  <div class="item" style="order: 2;">1</div>
  <div class="item" style="order: 1;">2</div>
  <div class="item" style="order: 3;">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .item {
    padding: 10px;
    background: lightpink;
    border: 1px solid #000;
  }
</style>
```

---

#### 2. `flex-grow`
This property specifies how much a flex item will grow relative to the rest of the flex items when positive free space is distributed in the container. The default value is `0`.

**Example:**

```html
<div class="container">
  <div class="item" style="flex-grow: 1;">1</div>
  <div class="item" style="flex-grow: 2;">2</div>
  <div class="item" style="flex-grow: 1;">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .item {
    padding: 10px;
    background: lightcyan;
    border: 1px solid #000;
  }
</style>
```

---

#### 3. `flex-shrink`
This property specifies how much a flex item will shrink relative to the rest of the flex items when negative free space is distributed in the container. The default value is `1`.

**Example:**

```html
<div class="container">
  <div class="item" style="flex-shrink: 1;">1</div>
  <div class="item" style="flex-shrink: 2;">2</div>
  <div class="item" style="flex-shrink: 1;">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    width: 200px;
    margin

-bottom: 20px;
  }
  .item {
    padding: 10px;
    background: lightgray;
    border: 1px solid #000;
  }
</style>
```

---

#### 4. `flex-basis`
This property defines the initial main size of a flex item. It can be a length (e.g., `20%`, `5rem`, etc.) or `auto` (default).

**Example:**

```html
<div class="container">
  <div class="item" style="flex-basis: 20%;">1</div>
  <div class="item" style="flex-basis: 50%;">2</div>
  <div class="item" style="flex-basis: 30%;">3</div>
</div>

<style>
  .container {
    display: flex;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .item {
    padding: 10px;
    background: lightseagreen;
    border: 1px solid #000;
  }
</style>
```

---

#### 5. `align-self`
This property allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items. It accepts the same values as `align-items`:
- `auto` (default): Inherits the value of `align-items` from the parent.
- `flex-start`: Aligns the item to the start of the cross axis.
- `flex-end`: Aligns the item to the end of the cross axis.
- `center`: Centers the item along the cross axis.
- `baseline`: Aligns the item such that its baseline aligns with the baseline of the parent.
- `stretch`: Stretches the item to fill the container.

**Example:**

```html
<div class="container">
  <div class="item" style="align-self: flex-start;">1</div>
  <div class="item" style="align-self: center;">2</div>
  <div class="item" style="align-self: flex-end;">3</div>
</div>

<style>
  .container {
    display: flex;
    height: 100px;
    border: 1px solid #000;
    margin-bottom: 20px;
  }
  .item {
    padding: 10px;
    background: lightgoldenrodyellow;
    border: 1px solid #000;
  }
</style>
```

---

These examples provide a comprehensive overview of Flexbox and its properties, making it easier to understand and apply them in responsive web design.