# Изображения

::: details Темы
- Изображения
- Фоновые изображения
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Виды компьютерной графики
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Растровая
- Векторная
- Трехмерная

<img src="../@img/vector.png" style="width: 250px" />


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Форматы изображений
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `.jpg` - растровая графика без прозрачности (н-р: Adobe Photoshop)
- `.png` - растровая графика с прозрачностью (н-р: Adobe Photoshop)
- `.svg` - векторная графика (н-р: Adobe Illustrator)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<img>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<img src="img/picture.jpg" alt="Альтернативный текст" title="Подсказка" />
```

- При одновременном задании `width` и `height` на css возникает искажение пропорций. Поэтому следует задавать только `width` или только `height`
- Без искажения пропорций применяется свойство `object-fit` со значениями contain или cover


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
#### `object-fit`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `cover` - элемент увеличивается или уменьшается, чтобы целиком заполнить заданную область с сохранением пропорций
- `contain` - элемент масштабируется, чтобы целиком уместиться в заданные размеры с соблюдением пропорций

```css:no-line-numbers
img {
	object-fit: cover;
	object-fit: contain;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS свойство: `background-...`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	background-image: url(img.png);                       /* Путь к изображению */
	background-image: linear-gradient(90deg, #fff, #fff); /* Линейный градиент */
	background-repeat: no-repeat;                         /* Повторение изображения */
	background-position: center center;                   /* Позиционирование изображения (задние в px и %) */
	background-size: contain;                             /* Изображение полностью помещается в блок */
	background-size: cover;                               /* Изображение заполняет весь блок */
	background-size: 50%;                                 /* Задание в % */
	background-color: #3b3b3b;                            /* Цвет фона */
	background-attachment: fixed;                         /* Будет ли прокручиваться фоновое изображение */
	background: url(img.png) no-repeat center 50%;        /* Сокращенная запись */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS свойство: `linear-gradient`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	background-image: linear-gradient(#e66465, #9198e5);
	background-image: linear-gradient(90deg, #fff, #fff);
}
```

- `0deg` - сверху вниз
- `90deg` - справа налево
- `180deg` - снизу вверх
- `270deg`- слева направо


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Применение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- **Применение img**: логотипы, картинки товаров, уникальные изображения, которые должны индексироваться поисковиками
- **Применение background-image**: фоновые изображения


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Оптимизация изображений
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
[https://tinypng.com/](https://tinypng.com/)
