# Псевдоклассы (first-child, last-child, nth-child)

```html:no-line-numbers
<div class="container">
	<div class="item">item-1</div>
	<div class="item">item-2</div>
	<div class="item">item-3</div>
	<div class="item">item-4</div>
</div>
```

```css:no-line-numbers
.item:first-child     /* Первый элемент (элементы должны быть в wrapper) */
.item:last-child      /* Последний элемент (элементы должны быть в wrapper) */
.item:nth-child(2)    /* Второй элемент */
.item:nth-child(2n)   /* Каждый второй элемент */
.item:nth-child(even) /* Каждый четный элемент */
.item:nth-child(odd)  /* Каждый нечетный элемент */
```
