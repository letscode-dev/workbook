# Формы

- Наследование свойств `inherit` (размер шрифта, стиль шрифта)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Элементы формы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Текстовое поле: `<input type="text">`
<!------------------------------------------------------------->
```html:no-line-numbers
<input type="text" name="text">
```

<!------------------------------------------------------------->
#### Многострочной текстовое поле: `<textarea>`
<!------------------------------------------------------------->
```html:no-line-numbers
<textarea>Текст</textarea>
```
```css:no-line-numbers
textarea {
	resize: none;
}
```

<!------------------------------------------------------------->
#### Выпадающий список: `<select>`
<!------------------------------------------------------------->
```html:no-line-numbers
<select>
	<option selected="">Пункт 1</option>
	<option>Пункт 2</option>
	<option>Пункт 3</option>
</select>
```

<!------------------------------------------------------------->
#### Связанные переключатели: `<input type="radio">`
<!------------------------------------------------------------->
```html:no-line-numbers
<input type="radio" name="radio">
<input type="radio" name="radio">
<input type="radio" name="radio">
```

<!------------------------------------------------------------->
#### Галочка: `<input type="checkbox">`
<!------------------------------------------------------------->
```html:no-line-numbers
<input type="checkbox" name="checkbox">
```

<!------------------------------------------------------------->
#### Метка: `<label>`
<!------------------------------------------------------------->
```html:no-line-numbers
<input type="checkbox" id="checkbox">
<label for="checkbox">Нажми и выберется checkbox</label>
```
```html:no-line-numbers
<label class="checkbox">
	<input type="checkbox">
</label>
```

<!------------------------------------------------------------->
#### Прикрепление файла: `<input type="file">`
<!------------------------------------------------------------->
```html:no-line-numbers
<input type="file">
```

<!------------------------------------------------------------->
#### Кнопка: `<button>`
<!------------------------------------------------------------->
```html:no-line-numbers
<button>Кнопка</button>
```

<!------------------------------------------------------------->
### Атрибуты
<!------------------------------------------------------------->
- `placeholder` - подсказка для input
- `checked` - нажатый radio или checkbox
- `selected` - выбранный option в select
- `autofocus` - фокус по умолчанию
- `disabled` - неактивное
- `readonly` - только чтение


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Form Action: GET, POST
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<form action="script.php" method="get">
    <input type="text" name="name" required="">
    <textarea name="message"></textarea>
    <input type="submit">
</form>
```

- Итоговый URL запроса: `http://test1.ru/script.php?name=myname&message=my+message`