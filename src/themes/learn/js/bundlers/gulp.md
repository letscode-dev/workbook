# Gulp


- [Gulp: Get Started](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Подробное руководство на русском языке](https://webdesign-master.ru/blog/tools/gulp-4-lesson.html)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Описание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
`Gulp` – это инструмент для автоматизации рутинных задач в веб-разработке и других сферах.

__Основные задачи:__
- Объединение кода из разных файлов в один
- Минификация и выравнивание кода
- Сжатие изображений
- Live Server
- Работа с CSS препроцессорами (`sass`, `less`)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Установка
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Установить Gulp можно с помощью NPM
- Сначала необходимо установить Gulp глобально на компьютер с помощью команды
```bash:no-line-numbers
npm i --g gulp
```

- Для дальнейшей работы в директории с проектом необходимо проинициализировать проект командой
```bash:no-line-numbers
npm init
```

- Затем в директории проекта необходимо установить Gulp в проект с помощью команды
```bash:no-line-numbers
npm i --save-dev gulp
```

- Теперь можно приступить к настройке работы Gulp.


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа с Gulp
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
__Чтобы начать работу необходимо создать:__
- Текстовый файл gulpfile.js. Непосредственно в нём будем писать код для работы gulp.
- Папку App. В этой папке будут находиться рабочие файлы проекта.
- Папку Build. Gulp обработает проект в папке App и сложит итоговые файлы в эту папку.

---

- Gulp это таск-менеджер
- В `gulpfile.js` необходимо создать функцию (Таск) и Gulp выполняет её.Но сам по себе Gulp ограничен в своих действиях. Чтобы научить его выполнять такие задачи как минификация или сжатие изображений, нужно установить с помощью npm дополнительные плагины. 

__Примеры плагинов__
```bash:no-line-numbers
npm i gulp-concat --save-dev    # объединение CSS
npm i gulp-uglify-es --save-dev # минификация JavaScript
npm i browser-sync --save-dev   # Live Server
```

- Помимо этих плагинов есть множество других под любые задачи.
- Подробнее о возможностях и работе с плагинами можно прочитать в документации.
- Плюсом является то, что настраивать работу Gulp, писать код в `gulpfile.js` нужно всего лишь раз. Затем gulpfile.js можно использовать в другом проекте.


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Пример `gulpfile.js`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Определяем переменную "preprocessor"
let preprocessor = 'sass'; 
 
// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// Подключаем Browsersync
const browserSync = require('browser-sync').create();
 
// Подключаем gulp-concat
const concat = require('gulp-concat');
 
// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
 
// Подключаем модули gulp-sass и gulp-less
const sass = require('gulp-sass');
const less = require('gulp-less');
 
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
 
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
 
// Подключаем gulp-imagemin для работы с изображениями
const imagemin = require('gulp-imagemin');
 
// Подключаем модуль gulp-newer
const newer = require('gulp-newer');
 
// Подключаем модуль del
const del = require('del');
```

```js:no-line-numbers
// Определяем логику работы Browsersync
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'app/' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}
```


```js:no-line-numbers
function scripts() {
	return src([ // Берём файлы из источников
		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
		'app/js/app.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
		])
			.pipe(concat('app.min.js')) // Конкатенируем в один файл
			.pipe(uglify()) // Сжимаем JavaScript
			.pipe(dest('app/js/')) // Выгружаем готовый файл в папку назначения
			.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}
```


```js:no-line-numbers
function styles() {
	return src('app/' + preprocessor + '/main.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
		.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}
```

```js:no-line-numbers
function images() {
	return src('app/images/src/**/*') // Берём все изображения из папки источника
		.pipe(newer('app/images/dest/')) // Проверяем, было ли изменено (сжато) изображение ранее
		.pipe(imagemin()) // Сжимаем и оптимизируем изображеня
		.pipe(dest('app/images/dest/')) // Выгружаем оптимизированные изображения в папку назначения
}
```

```js:no-line-numbers
function cleanimg() {
	return del('app/images/dest/**/*', { force: true }) // Удаляем всё содержимое папки "app/images/dest/"
}
```

```js:no-line-numbers
function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/js/**/*.min.js',
		'app/images/dest/**/*',
		'app/**/*.html',
		], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}
```

```js:no-line-numbers
function cleandist() {
	return del('dist/**/*', { force: true }) // Удаляем всё содержимое папки "dist/"
}
```

```js:no-line-numbers
function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	
	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', styles);
 
	// Мониторим файлы HTML на изменения
	watch('app/**/*.html').on('change', browserSync.reload);
 
	// Мониторим папку-источник изображений и выполняем images(), если есть изменения
	watch('app/images/src/**/*', images);
}
```

 
```js:no-line-numbers
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
 
// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;
 
// Экспортируем функцию styles() в таск styles
exports.styles = styles;
 
// Экспорт функции images() в таск images
exports.images = images;
 
// Экспортируем функцию cleanimg() как таск cleanimg
exports.cleanimg = cleanimg;
 
// Создаём новый таск "build", который последовательно выполняет нужные операции
exports.build = series(cleandist, styles, scripts, images, buildcopy);
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, scripts, browsersync, startwatch);
```
