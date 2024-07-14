# Псевдоклассы (hover, not, focus, active, visited, link)

```css:no-line-numbers
a:hover       /* Наведение на элемент */
a:not(:hover) /* Увод с элемента */
a:active      /* Активный элемент */
a:focus       /* Элемент в фокусе */
a:visited     /* Посещеннае ссылки */
a:link        /* Не посещенные ссылки */
```

```css:no-line-numbers
a:hover {
	background-color: orange;
	transition: 0.4s;
}
a:not(:hover) {
	transition: 0.4s;
}
```
