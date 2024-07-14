# Препроцессоры CSS (SASS)

- `1996` - CSS
- `2006` - Sass
- `2009` - Less
- `2010` - Stylus
- `2013` - PostCSS


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Популярные препроцессоры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<div style="display: flex;">
	<a href="https://sass-scss.ru/"   target="_blank" style="margin: 10px;"><img src="../@img/preproc/sass.svg" style="height: 75px" /></a>
	<a href="http://lesscss.org/"     target="_blank" style="margin: 10px;"><img src="../@img/preproc/less.png" style="height: 75px" /></a>
	<a href="http://stylus-lang.com/" target="_blank" style="margin: 10px;"><img src="../@img/preproc/stylus.svg" style="height: 75px" /></a>
	<a href="https://postcss.org/"    target="_blank" style="margin: 10px;"><img src="../@img/preproc/postcss.png" style="height: 75px" /></a>
</div>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### SCSS
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Переменные
<!------------------------------------------------------------->
<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```scss:no-line-numbers
$width: 1000px;
$bg-color: green;
#main {
	width: $width;
	background-color: $bg-color;
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
#main {
	width: 1000px;
	background-color: green;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Вложенности
<!------------------------------------------------------------->

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```scss:no-line-numbers
#main {
	width: 100px;
	p, div {
		color: black;
	}
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
#main {
  width: 100px;
}
#main p, #main div {
	color: black;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Расширение селектора
<!------------------------------------------------------------->

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```scss:no-line-numbers
a {
	color: blue;
	&:hover {
		color: green;
	}
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
a {
	color: blue;
}
a:hover {
	color: green;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Операции
<!------------------------------------------------------------->

- `+` `-` `/` `%`
- `>` `<` `<=` `>=` `==` `!=`

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```scss:no-line-numbers
$one: 50px;
$two: 2;
#main {
	padding:{
		top: $one + 200;
		bottom: $one / $two;
		left: $two + px;
		right: 243px - 231px;
	}
	background-color: trans + parent;
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
#main {
	padding-top: 250px;
	padding-bottom: 25px;
	padding-left: 2px;
	padding-right: 12px;
	background-color: transparent;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Миксины, примеси: `@mixin`
<!------------------------------------------------------------->
- Позволяют сделать блок стилей, который может быть использован повторно в любом месте документа

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```scss:no-line-numbers
@mixin my-border($color, $width) {
	border-color: $color;
	border-width: $width;
}
p {
	@include my-border(red, 2px);
}
```
</template>
<template v-slot:last>

```css:no-line-numbers
p {
	border-color: red;
	border-width: 2px;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->

