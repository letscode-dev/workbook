export const PATH_LEARN_HTML = '/themes/learn/html';

const p = PATH_LEARN_HTML+'/';

export const THEME_LEARN_HTML = [
	{
		title: 'Введение',
		children: [
			[p+'intro/intro',     'Введение и основные понятия'],
			[p+'intro/structure', 'Структура HTML файла'],
			[p+'intro/path',      'Задание пути к файлам'],
		]
	},
	{
		title: 'Основы',
		children: [
			[p+'basic/colors',          'Цвета CSS (стандартные, hex, rgb)'],
			[p+'basic/inline',          'Строчные элементы (span)'],
			[p+'basic/block',           'Блочные элементы (div)'],
			[p+'basic/opacity',         'Прозрачность элементов'],
			[p+'basic/px',              'Единицы измерения'],
			[p+'basic/adaptive-design', 'Адаптивная верстка'],
			[p+'basic/vars',            'Переменные в CSS'],
		]
	},
	{
		title: 'Основные элементы',
		children: [
			[p+'elements/text',  'Текст и шрифты'],
			[p+'elements/img',   'Изображения'],
			[p+'elements/list',  'Списки'],
			[p+'elements/link',  'Ссылки'],
			[p+'elements/form',  'Формы'],
			[p+'elements/table', 'Таблицы'],
			[p+'elements/video', 'Видео и аудио'],
		]
	},
	{
		title: 'Разметка',
		children: [
			[p+'layout/float',             'Float'],
			[p+'layout/inline-block',      'Inline Block'],
			[p+'layout/flexbox',           'Flexbox'],
			[p+'layout/css-grid',          'CSS Grid'],
			[p+'layout/css-multi-columns', 'CSS Multi Columns'],
		]
	},
	{
		title: 'Преобразования',
		children: [
			[p+'transform/transition',  'transition'],
			[p+'transform/transform',   'transform'],
			[p+'transform/filters',     'filter, backdrop-filter'],
			[p+'transform/animation',   'animation'],
			[p+'transform/clip-path',   'clip-path'],
			[p+'transform/css-shapes',  'CSS Shapes'],
			[p+'transform/svg',         'SVG'],
		]
	},
	{
		title: 'CSS-свойства',
		children: [
			[p+'properties/box-sizing', 'box-sizing'],
			[p+'properties/display',    'display'],
			[p+'properties/position',   'position'],
			[p+'properties/calc',       'calc()'],
			[p+'properties/import',     '@import'],
		]
	},
	{
		title: 'Селекторы',
		children: [
			[p+'selectors/selector-basic', 'class, id, tag'],
			[p+'selectors/selector-attr',  'attr'],
			[p+'selectors/selector-tilda', '>, +, ~'],
		]
	},
	{
		title: 'Псевдоклассы и псевдоэлементы',
		children: [
			[p+'pseudo/hover',       'hover, focus, active, ...'],
			[p+'pseudo/first-child', 'first-child, nth-child, ...'],
			[p+'pseudo/before',      'before, after'],
		]
	},
	{
		title: 'HTML-теги',
		children: [
			[p+'tags/semantic-tags', 'Семантические теги'],
			[p+'tags/fieldset',      'fieldset'],
		]
	},
	{
		title: 'Инструменты',
		children: [
			[p+'tools/online-editors',    'Онлайн редакторы кода'],
			[p+'tools/preproc',           'Препроцессоры CSS: Sass'],
			[p+'tools/bootstrap',         'Bootstrap'],
			[p+'tools/chrome-dev-tools',  'Chrome DevTools'],
			[p+'tools/github',            'Хостинг проектов GitHub'],
			[p+'tools/structure-project', 'Организация структуры проекта'],
			[p+'tools/bem',               'БЭМ и другие методологии верстки'],
			[p+'tools/pixel-perfect',     'Pixel Perfect'],
			[p+'tools/emmet',             'Плагин Emmet'],
			[p+'tools/yandex-map',        'Яндекс Карты и Google Maps'],
			[p+'tools/yandex-metrika',    'Яндекс Метрика'],
			[p+'tools/photoshop',         'Adobe Photoshop для верстальщика'],
			[p+'tools/vk',                'Виджеты ВКонтакте'],
			[p+'tools/vendor-prefix',     'Вендорные префиксы. Автопрефиксер'],
		]
	},
];

/*
Дополнительные темы:
- Препроцессоры HTML (Pug)
- Трансформация в CSS (transform). 3D преобразования
- Adobe Illustrator для верстальщика (рисование SVG)
- Figma
- iframe (seamless) стилизация плеера YouTube
- Parallax эффект на CSS
*/
