# CSS Inline-block

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Применение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block.png" style="width: 500px" />

```html:no-line-numbers
<div class="item">item-1</div>
<div class="item">item-2</div>
```

```css:no-line-numbers
.item {
	display: inline-block;
	width: 200px;
	height: 200px;
	background-color: orange;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Выравнивание элементов по вертикали (vertical-align)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block-y.png" style="width: 500px" />

```css:no-line-numbers
div {
	vertical-align: middle;  /* По центру */
	vertical-align: top;     /* По верхнему краю */
	vertical-align: bottom;  /* По нижнему краю */	
}
```

```html:no-line-numbers
<div class="item">item-1</div>
<div class="item">item-2</div>
```

```css:no-line-numbers
.item {
	display: inline-block;
	width: 200px;
	background-color: orange;
}
.item:first-child {
	height: 200px;
	vertical-align: middle;
}
.item:last-child {
	height: 100px;
	vertical-align: middle;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Выравнивание элементов по горизонтали
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block-x.png" style="width: 500px" />

```html:no-line-numbers
<div class="container">
	<div class="item">item-1</div>
	<div class="item">item-2</div>
</div>
```

```css:no-line-numbers
.container {
	text-align: center;
}
.item {
	display: inline-block;
	width: 200px;
	height: 200px;
	background-color: orange;
}
```
