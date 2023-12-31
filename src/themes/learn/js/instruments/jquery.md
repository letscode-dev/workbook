# jQuery и jQuery UI

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа с элементами на странице
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Выборка элементов страницы на jquery
<!------------------------------------------------------------->
```js:no-line-numbers
const a = $('p');     // По названию тега 
const a = $('.box');  // По названию класса
const a = $('#box');  // По id
const a = $('div a'); // Вложенные теги
```

<!------------------------------------------------------------->
#### Действия (методы) над выбранными элементами
<!------------------------------------------------------------->
```js:no-line-numbers
const text = $('#box').text();      // Получить текст
const html = $('#box').html();      // Получить html
$('#box').text('Измененный текст'); // Изменить текст
$('#box').html('Измененный html');  // Изменить html
```

<!------------------------------------------------------------->
#### `before()`, `after()`, `prepend()`, `append()`
<!------------------------------------------------------------->
```js:no-line-numbers
$('#box').before('content');  // Добавляет контент до выбранного элемента
$('#box').after('content');   // Добавляет контент после выбранного элемента
$('#box').prepend('content'); // Добавляет контент внутрь выбранного элемента до остального кода
$('#box').append('content');  // Добавляет контент внутрь выбранного элемента после остального кода
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### `css()`
<!------------------------------------------------------------->
```js:no-line-numbers
const a = $('#box').css('color'); // Получить css свойство
$('#box').css('color', 'orange'); // Изменить css свойство

// Изменение нескольких css свойств
$('#box').css({
	'color':'orange', 
	'font-size':'25px'
}); 
```

<!------------------------------------------------------------->
#### `addClass()`, `removeClass()`
<!------------------------------------------------------------->
```js:no-line-numbers
$('#box').addClass('open');    // Добавление класса
$('#box').removeClass('open'); // Удаление класса
```

<!------------------------------------------------------------->
#### `toggleClass()`
<!------------------------------------------------------------->
- Переключатель классов. Добавляет элементу указанный класс, если его нет - иначе удаляет

```js:no-line-numbers
$('#box').toggleClass('open');
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### События и обработчики событий
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Добавление обработчиков событий
<!------------------------------------------------------------->
```js:no-line-numbers
// Обработчик события щелчка мыши
$('.item').on('click', function(){
	console.log('Щелчок мыши'); 
});
```

<!------------------------------------------------------------->
#### Удаление обработчиков событий
<!------------------------------------------------------------->
- Метод `.off()` удаляет обработчики событий, назначенные методом `.on`

```js:no-line-numbers
$('.item').off('click');
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Атрибуты
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### `attr()`, `removeAttr()`
<!------------------------------------------------------------->
```js:no-line-numbers
const id = $('#box').attr("id"); // Получить значение атрибута
$('#box').attr('size', 4);       // Изменить значение атрибута
$('#box').removeAttr('title');   // Удалить атрибут
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Плавное изменение свойств на jQuery
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### `hide()`, `show()`
<!------------------------------------------------------------->
- Скрывает/показывает элементы на странице (за счет плавного изменения его размера и прозрачности)

```js:no-line-numbers
$('#box').hide(1000); // Скрыть элемент 
$('#box').show(1000); // Показать элемент
// 1 - скорость исчезновения (миллисекунды 1с = 1000мс)
// 2 - функция, которая будет выполнена после завершения работы
$('#box').hide(1000).show(1000); // Цепные функции
```

<!------------------------------------------------------------->
#### `slideUp()`, `slideDown()`
<!------------------------------------------------------------->
- Разворачивает/сворачивает элементы на странице (за счет плавного изменения высоты элементов)

```js:no-line-numbers
$('#box').slideUp(1000);   // Исчезновение (элемент уезжает наверх)
$('#box').slideDown(1000); // Появление (элемент выезжает вниз)
```

<!------------------------------------------------------------->
#### `slideToggle()`
<!------------------------------------------------------------->
- Поочередно разворачивает/сворачивает элементы на странице, как это делают .slideUp() и .slideDown()

```js:no-line-numbers
$('#box').slideToggle();
```

<!------------------------------------------------------------->
#### `fadeIn()`, `fadeOut()`
<!------------------------------------------------------------->
- Скрывает/показывает элементы на странице за счет плавного изменения прозрачности

```js:no-line-numbers
$('#box').fadeIn(1000);  // Плавное появление элемента
$('#box').fadeOut(1000); // Плавное исчезновение элемента
// 1 - время исчезновения
// 2 - функция, которая будет выполнена после исчезновения
```

<!------------------------------------------------------------->
#### `fadeTo()`
<!------------------------------------------------------------->
- Плавно изменяет прозрачность элементов

```js:no-line-numbers
$('#box').fadeTo(1000,0.4);
// 1 - время исчезновения
// 2 - прозрачность от 0 до 1
// 3 - функция, которая будет выполнена после исчезновения
```

<!------------------------------------------------------------->
#### `fadeToggle()`
<!------------------------------------------------------------->
- Поочередно скрывает/показывает элементы на странице, как это делают `.fadeIn()` и .`fadeOut()`

```js:no-line-numbers
$('#box').fadeToggle();
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### jQuery UI
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

[jQuery UI](https://jqueryui.com/)
