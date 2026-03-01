# v-two

### Текст

```vue
<v-two>
  <template v-slot:first>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </template>

  <template v-slot:last>
    It has survived not only five centuries, but also the leap into electronic
  </template>
</v-two>
```

<v-two>
<template v-slot:first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template v-slot:last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

---

### Markdown

> Для передачи Markdown, нужно чтобы после `<template>` и перед `</template>` была пустая строка

````vue
<v-two>
  <template v-slot:first>

  ```js
  console.log("Hello");
  ```

  </template>

  <template v-slot:last>

  - Элемент 1
  - Элемент 2

  </template>
</v-two>
````

<v-two>
<template v-slot:first>

```js
console.log("Hello");
```

</template>
<template v-slot:last>

- Элемент 1
- Элемент 2

</template>
</v-two>

---

### Fix

```vue
<v-two fix>
  <template v-slot:first>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </template>

  <template v-slot:last>
    It has survived not only five centuries, but also the leap into electronic
  </template>
</v-two>
```

<v-two fix>
<template v-slot:first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template v-slot:last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>
