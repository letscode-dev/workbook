# Списки

::: details Темы
- Маркированные (ul)
- Нумерованные (ol)
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Маркированный список
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<ul>
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
</ul>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Нумерованный список
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<ol>
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
</ol>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Настройка маркеров
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
ul {
	list-style:          list-style-type | list-style-image | list-style-position; 
	list-style-type:     none | circle ...          /* Изменяет вид маркера */
	list-style-image:    none | url('путь к файлу') /* Устанавливает изображение */
	list-style-position: inside | outside           /* Размешение относительно текста */
}
```
