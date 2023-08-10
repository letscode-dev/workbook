# position

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Виды позиционирования
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	/* Статичное (стандартное позиционирование) */
	position: static;
	/* Относительное (положение устанавливается относительно его исходного места) */
	position: relative;
	/* Абсолютное (отсчёт координат ведётся от края окна браузера, если у родителя не установлено position: relative) */
	position: absolute;
	/* Фиксированное (привязывается к указанной свойствами left, top, right, bottom и точке на экране) */
	position: fixed;
	/* Липкое (сочетание относительного и фиксированного позиционирования) */
	position: sticky;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Свойства: `left`, `right`, `top`, `bottom`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Применяются для всех видов позиционирования кроме `static`

```css:no-line-numbers
div {
	position: relative;
	top: 100px;
	left: 70px;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Порядок расположения элементов: `z-index`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/z-index.png" style="width: 400px" />

```css:no-line-numbers
div {
	z-index: 1;
}
```

