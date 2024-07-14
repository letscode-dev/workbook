# CSS селекторы (>, +, ~)

```css:no-line-numbers
ul li > span   /* Не все span, а только дочерние span */
ul li + li     /* Все последующие элементы li */
.class1 ~ div  /* Все div элементы после class1 */
.class1 ~ *    /* Все элементы после class1 */
```

```html:no-line-numbers
<div class="container">
	<div>item</div>
	<div>item</div>
	<div>
		item
		<div>inside item</div>
		<div>inside item</div>
	</div>
</div>

<div>outside</div>
<div>outside</div>
<p>outside</p>
```

```css:no-line-numbers
body {
	font-size: 35px;
}
.container {
	background: silver;
}
.container > div {
	border: 4px solid blue;
	margin: 10px;
	padding: 10px;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Custom Checkbox
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/LMLjYG?height=265&theme-id=default&default-tab=css,result"
/>
