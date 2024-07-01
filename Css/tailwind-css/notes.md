### Tailwind CSS Cheatsheet

#### 1. **Layout**

- **Container**

  ```html
  <div class="container mx-auto">
    <!-- Your content here -->
  </div>
  ```

- **Flexbox**

  ```html
  <div class="flex">
    <div class="flex-1">Item 1</div>
    <div class="flex-1">Item 2</div>
  </div>
  ```

- **Grid**

  ```html
  <div class="grid grid-cols-3 gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
  ```

#### 2. **Spacing**

- **Margin**

  ```html
  <div class="m-4">Margin 4</div>
  <div class="mt-4">Margin Top 4</div>
  ```

- **Padding**

  ```html
  <div class="p-4">Padding 4</div>
  <div class="pt-4">Padding Top 4</div>
  ```

#### 3. **Typography**

- **Font Size**

  ```html
  <div class="text-lg">Large Text</div>
  <div class="text-sm">Small Text</div>
  ```

- **Font Weight**

  ```html
  <div class="font-bold">Bold Text</div>
  <div class="font-light">Light Text</div>
  ```

#### 4. **Backgrounds**

- **Background Color**

  ```html
  <div class="bg-blue-500 text-white">Blue Background</div>
  <div class="bg-red-500 text-white">Red Background</div>
  ```

- **Background Image**

  ```html
  <div class="bg-cover bg-center h-64" style="background-image: url('path/to/image.jpg');">
    <!-- Your content here -->
  </div>
  ```

#### 5. **Borders**

- **Border Width**

  ```html
  <div class="border-2">Border Width 2</div>
  <div class="border-t-4">Border Top Width 4</div>
  ```

- **Border Color**

  ```html
  <div class="border-red-500">Red Border</div>
  <div class="border-blue-500">Blue Border</div>
  ```

#### 6. **Shadows**

  ```html
  <div class="shadow">Default Shadow</div>
  <div class="shadow-lg">Large Shadow</div>
  ```

#### 7. **Opacity**

  ```html
  <div class="opacity-50">50% Opacity</div>
  <div class="opacity-75">75% Opacity</div>
  ```

#### 8. **Positioning**

- **Absolute**

  ```html
  <div class="relative">
    <div class="absolute top-0 left-0">Absolute Position</div>
  </div>
  ```

- **Fixed**

  ```html
  <div class="fixed bottom-0 right-0">Fixed Position</div>
  ```

#### 9. **Sizing**

- **Width**

  ```html
  <div class="w-1/2">50% Width</div>
  <div class="w-full">100% Width</div>
  ```

- **Height**

  ```html
  <div class="h-32">Height 32</div>
  <div class="h-screen">Full Screen Height</div>
  ```

#### 10. **Text Alignment**

  ```html
  <div class="text-left">Left Aligned</div>
  <div class="text-center">Center Aligned</div>
  <div class="text-right">Right Aligned</div>
  ```

### Example Usage

Here’s an example putting some of these together:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
  <div class="container mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4">Tailwind CSS Example</h1>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-blue-500 text-white rounded">Item 1</div>
      <div class="p-4 bg-red-500 text-white rounded">Item 2</div>
      <div class="p-4 bg-green-500 text-white rounded">Item 3</div>
    </div>
    <div class="mt-8">
      <button class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">Click Me</button>
    </div>
  </div>
</body>
</html>
```

This example includes a container with a title and a grid layout. It also demonstrates spacing, background colors, and button styling with hover effects. You can further customize and expand this template as needed.