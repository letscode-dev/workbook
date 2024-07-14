# Организация структуры проекта

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Структура проекта
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### Файлы
- `index.html` - главный файл
- `favicon.png` - иконка для сайта
- `robots.txt` - файл для поисковых роботов
- `sitemap.xml` - карта сайта

#### Директории
- `css` - стили
- `fonts` - шрифты
- `img` - изображения
- `js` - JavaScript код
- `libs` - JavaScript библиотеки
- `sass` - sass файлы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Стилистика написания кода
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Выравнивание
- Именование файлов и классов (английский язык, не транслит, слитно)
- Именование классов: `item-element`, `item_element`, `itemElement`
- Секции на сайте: `content`, `container`, `wrapper`, `item`, `title`, `description`
- Сервисы для форматирования кода: [https://www.10bestdesign.com/dirtymarkup/](https://www.10bestdesign.com/dirtymarkup/)

<!------------------------------------------------------------->
#### Пример правильного форматирования кода
<!------------------------------------------------------------->

<v-two>
<template v-slot:first>

##### HTML
```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Заголовок</h1>
        <div class="content">
            <div class="item">Элемент 1</div>
            <div class="item">Элемент 2</div>
            <div class="item">Элемент 3</div>
        </div>
    </div>
</body>
</html>
```

</template>
<template v-slot:last>

##### CSS
```css:no-line-numbers
body {
    background-color: orange;
    color: #fff;
}
div {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

</template>
</v-two>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Sublime Text (комбинации клавиш)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Tab` - сдвинуть строки вправо
- `Shift+Tab` - сдвинуть строки влево
- `Ctrl+Shift+D` - продублировать строку
- `Ctrl+F` - поиск
- `F3` - продолжить поиск на странице
- `Ctrl+Shift+F` - поиск с заменой
- `Ctrl + /` - комментарий


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Комментарии
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Комментарий на HTML

```html:no-line-numbers
<!-- здесь текст комментария -->
```

- Комментарий на CSS
```css:no-line-numbers
/* Здесь текст комментария */
```
