# Текст и шрифты


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Заголовки: `<h1> - <h6>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<h1>Заголовок 1 уровня</h1>
<h2>Заголовок 2 уровня</h2>
<h3>Заголовок 3 уровня</h3>
<h4>Заголовок 4 уровня</h4>
<h5>Заголовок 5 уровня</h5>
<h6>Заголовок 6 уровня</h6>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Перенос строки: `<br>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
Здесь нужно сделать <br> перенос строки
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Абзац: `<p>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<p>Первая строка</p>
<p>Вторая строка</p>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `font-...`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
p {
	font-size: 20px;    /* Размер шрифта */
	font-style: italic; /* Начертание шрифта */
	font-weight: bold;  /* Насыщенность шрифта */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `text-...`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
p {
	/* Горизонтальное выравнивание текста в пределах элемента */
	text-align: center | left | right;
	/* Оформление текста */
	text-decoration: none | underline;
	/* Оформление текста (цвет линии) */
	text-decoration-color: orange;
	/* Оформление текста (стиль линии) */
	text-decoration-style: solid | double | dotted | dashed | wavy;
	/* Красная строка */
	text-indent: 20px;
	/* Преобразованием текста элемента в заглавные или прописные символы */
	text-transform: uppercase | lowercase;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `text-shadow`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `3px` - смещение по горизонтали
- `4px` - смещени по вертикали
- `5px` - размытие

```css:no-line-numbers
p {
	text-shadow: 3px 4px 5px #000;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа с текстом
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
p {
	word-spacing: 10px   /* Расстояние между словами */
	letter-spacing: 4px; /* Расстояние между буквами */
	line-height: 1.5;    /* Расстояние между строками */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа со шрифтами
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
p {
	font-family: Verdana; /* Семейство шрифта */
}
```

<!------------------------------------------------------------->
#### Подключение шрифта
<!------------------------------------------------------------->
```css:no-line-numbers
@font-face {
	font-family: OpenSans;           /* Имя шрифта */
	src: url(../font/OpenSans.ttf);  /* Путь к файлу со шрифтом */
}
```

<!------------------------------------------------------------->
#### Применение шрифта
<!------------------------------------------------------------->
```css:no-line-numbers
p {
	font-family: OpenSans;
}
```

- Google Fonts
- Шрифты Serif и Sans-Serif
- Font-Face Ninja


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Направление текста
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
p {
	writing-mode: horizontal-tb; /* Стандартное */
	writing-mode: vertical-rl;   /* сверху-вниз, справа-налево */
	writing-mode: vertical-lr;   /* сверху-вниз, слева-напрво */
}
```
