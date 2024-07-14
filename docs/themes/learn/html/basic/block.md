# Блочные элементы: `div`


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Особенности блочных элементов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Элементы на обтекают друг друга
- Ширина равна 100% от ширины родителя
- Высота равна высоте контента
- Можно применять свойства `width` и `height`


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Внешний отступ: `margin`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	margin: 10px;                /* сверху=справа=снизу=слева=10px */
	margin: 10px 15px 20px 25px; /* сверху=10px, справа=15px, снизу=20px, слева=25px */
	margin: 10px 20px;           /* сверху=снизу=10px, справа=слева=20px */
	margin-top: 10px;            /* отступ сверху */
	margin-bottom: 10px;         /* отступ снизу */
	margin-left: 10px;           /* отступ слева */
	margin-right: 10px;          /* отступ справа */
	margin: auto;                /* центрирование блока по горизонтали */
	margin: 0 auto;              /* центрирование блока по горизонтали и задание отступа сверху и снизу=0 */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Внутренний отступ: `padding`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	padding: 10px;                /* сверху=справа=снизу=слева=10px */
	padding: 10px 15px 20px 25px; /* сверху=10px, справа=15px, снизу=20px, слева=25px */
	padding: 10px 20px;           /* сверху=снизу=10px, справа=слева=20px */
	padding-top: 10px;            /* отступ сверху */
	padding-bottom: 10px;         /* отступ снизу */
	padding-left: 10px;           /* отступ слева */
	padding-right: 10px;          /* отступ справа */
}
```

<!------------------------------------------------------------->
#### Обнуление `margin` и `padding` у `body`
<!------------------------------------------------------------->
- По умолчанию у `body` есть отступы

```css:no-line-numbers
body { 
	margin: 0; 
	padding: 0; 
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Ширина: `width`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	width: 500px;      /* Щирина */
	max-width: 700px;  /* Максимальная ширина */
	min-width: 200px;  /* Минимальная ширина  */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Высота: `height`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	height: 500px;      /* Высота */
	max-height: 700px;  /* Максимальная высота */
	min-height: 200px;  /* Минимальная высота */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Рамка: `border`, `border-radius`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	border: 2px solid orange;           /* Рамка 2px сплошная оранжевая */
	border: 2px solid transparent;      /* Рамка 2px сплошная прозрачная */
	border-top: 2px solid orange;       /* Рамка сверху */
	border-bottom: 2px solid orange;    /* Рамка снизу */
	border-left: 2px solid orange;      /* Рамка слева */
	border-right: 2px solid orange;     /* Рамка справа */
	border-radius: 10px;                /* Радиус для всех четырёх углов */
	border-radius: 10px 15px;           /* Радиус верхнего левого и нижнего правого уголков = 10px, верхнего правого и нижнего левого углов = 15px; */
	border-radius: 10px 15px 20px 25px; /* По очереди устанавливает радиус для верхнего левого, верхнего правого, нижнего правого и нижнего левого углов */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Обводка: `outline`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	outline: 2px solid orange; /* Обводка 2px сплошная оранжевая */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Тень у блоков: `box-shadow`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `1px` - смещение по горизонтали
- `2px` - смещени по вертикали
- `3px` - размытие
- `4px` - толщина

```css:no-line-numbers
div {
	box-shadow: 1px 2px 3px 4px blue;       /* Внешняя тень */
	box-shadow: inset 1px 2px 3px 4px blue; /* Внутренняя тень */
}
```

<!------------------------------------------------------------->
#### Задание нескольких теней
<!------------------------------------------------------------->
```css:no-line-numbers
div {
	box-shadow:
	    0 0 0 5px red,
	    0 0 0 10px green,
	    0 0 0 15px blue;
}
```

<!------------------------------------------------------------->
#### Примеры теней у блоков
<!------------------------------------------------------------->
<v-iframe
    height="350"
    src="https://codepen.io/Sergeenkov/embed/pYypGp?height=265&theme-id=default&default-tab=html,result"
/>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS Overflow
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Свойство `overflow` управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров

```css:no-line-numbers
div {
	overflow: auto;   /* Добавление полос прокрутки, если контент не помешается в блок */
	overflow: hidden; /* Обрезка контента, если контент не помешается в блок */
}
```
