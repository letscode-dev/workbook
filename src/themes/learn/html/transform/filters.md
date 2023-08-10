# CSS фильтры


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### filter
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css:no-line-numbers
div {
	filter: blur(5px);         /* Размытие (напрямую к body применить нельзя) */
	filter: brightness(150%);  /* Яркость, 100% по умолчанию */
	filter: contrast(150%);    /* Контрастность, 100% по умолчанию */
	filter: grayscale(70%);    /* Черно-белое, 0% по умолчанию */
	filter: hue-rotate(90deg); /* Поворот оттенка, определяет угол, 0deg по умолчанию */
	filter: invert(100%);      /* Инвертирование */
	filter: opacity(50%);      /* Прозрачность */
	filter: saturate(150%);    /* Изменение насыщенности */
	filter: sepia(100%);       /* Сепия */

	/* Добавляет тень к изображениям, учитывая прозрачные участки */
	filter: drop-shadow(10px 10px 3px orange); 
}
```

::: tip
- Можно применять несколько фильтров. Первый фильтр применяется к исходному изображению, а остальные к предыдущему
```css:no-line-numbers
filter: contrast(150%) sepia(100%);
```
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### backdrop-filter
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Аналогичен `filter`, но работает только с фоном, не трогая сам элемент
- Значения такие же как у `filter`

<v-two>
<template v-slot:first>

```css:no-line-numbers
div {
	backdrop-filter: blur(10px);
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
div {
	filter: blur(10px);
}
```
</template>
</v-two>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Пример сравнения filter и backdrop-filter
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/WNQXYyw?height=265&theme-id=dark&default-tab=css,result"
/>
