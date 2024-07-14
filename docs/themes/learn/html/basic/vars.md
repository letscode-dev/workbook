# Переменные в CSS

- CSS Custom Properties

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 1. Определение переменных
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
:root {
    --color: green;
}
body {
    background-color: var(--color);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 2. Резервное значение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
:root {
    --color: green;
}
body {
    background: var(--color, blue);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 3. Переменные в `calc()`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
:root {
    --a: 1em;
    --b: 2;
}
body {
    font-size: calc(var(--a) * var(--b));
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 4. Переопределение переменной в `@media`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
:root {
    --color: blue;
}
body {
    background-color: var(--color);
}

@media (max-width: 700px) {
    :root { --color: yellowgreen; }
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 5. Переменные в SVG
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<svg height="100" width="100">
    <circle cx="50" cy="50" r="50" fill="var(--color)" />
</svg>
```

```css:no-line-numbers
:root {
    --color: yellowgreen;
}
```
