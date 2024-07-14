# Трансформация в CSS (transform)

::: details Темы
- Трансформация в CSS (transform)
- 2D преобразования
:::

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 1. Сдвиг
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	/* Сдвигает элемент на заданное значение по горизонтали и вертикали */
	transform: translate(50px, 50px);
	/* Сдвигает элемент по горизонтали на указанное значение */
	transform: translateX(50px);
	/* Сдвигает элемент по вертикали на указанное значение */
	transform: translateY(50px);
	/* Сдвигает элемент по оси Z на указанное значение */
	transform: translateZ(50px);
}
```

- Положительное значение сдвигает вправо, отрицательное влево
- Один параметр `translate()`: перемещает элемент вдоль оси `х`
- Два параметра `translate()`: первое значение для оси `х`, второе для оси `у`

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 2. Поворот
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	transform: rotate(15deg);   /* Поворот */
	transform: rotateX(15deg);  /* Поворот по оси X */
	transform: rotateY(15deg);  /* Поворот по оси Y */
	transform: rotateZ(15deg);  /* Поворот по оси Z */	
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 3. Масштабирование
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	transform: scale(1.2);   /* Масштабирует элемент по горизонтали и вертикали */
	transform: scaleX(1.2);  /* Масштабирует элемент по горизонтали */
	transform: scaleY(1.2);  /* Масштабирует элемент по вертикали */
	transform: scaleZ(1.2);  /* Масштабирует элемент по оси Z */	
}
```
- Один параметр `scale()`: изменение размеров элемента одинаково по высоте и ширине
- Два параметра `scale()`: первое значение изменяет размер элемента по горизонтали, второе по вертикали


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 4. Наклон (Искажение)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	transform: skew(15deg);  /* Наклоняет элемент на заданный угол по горизонтали и вертикали */
	transform: skewX(15deg); /* Наклоняет элемент на заданный угол по вертикали */
	transform: skewY(15deg); /* Наклоняет элемент на заданный угол по горизонтали */
}
```

- Один параметр `skew()`: элемент искажается по горизонтали
- Два параметра `skew()`: первое значение искажает элемент по горизонтали, второе по вертикали


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Применение нескольких трансформаций
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	transform: translate(50px, 50px) rotate(15deg); 
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Особенности
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Не прерывает поток (не влияют на другие элементы)
- Трансформации можно записывать несколько через пробел


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### CSS Emergent Block (Transform)
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/KBqwQX?height=265&theme-id=default&default-tab=css,result"
/>

<!------------------------------------------------------------->
#### Hamburger Animation Menu (Transform)
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/JZpEBL?height=265&theme-id=default&default-tab=css,result"
/>

<!------------------------------------------------------------->
#### CSS Scale Overflow
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/eKMmaL?height=265&theme-id=default&default-tab=css,result"
/>
