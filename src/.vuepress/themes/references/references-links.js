export const PATH_REFERENCES_LINKS = '/themes/references/links';

const p = PATH_REFERENCES_LINKS+'/';

export const THEME_REFERENCES_LINKS = [
    {
        title: 'Frameworks',
        children: [
            [p+'frameworks/react',      'React.js'],
            [p+'frameworks/vue',        'Vue.js'],
            [p+'frameworks/node',       'Node.js'],
            [p+'frameworks/frameworks', 'Frameworks'],
        ]
    },
    {
        title: 'Категории',
        children: [
            [p+'category/technical-interview', 'Technical Interview'],
            [p+'category/online-editors',      'Онлайн редакторы кода'],
            [p+'category/api',                 'Свободное API'],
            [p+'category/builders',            'Сборщики'],
            [p+'category/deploy',              'Деплой'],
            [p+'category/neural-network',      'Нейросети'],
            [p+'category/wiki',                'Разработка документации и Wiki'],
        ]
    },
    {
        title: 'Категории (общее)',
        children: [
            [p+'category/3d',            '3D Graphics'],
            [p+'category/repo',          'Репозитории проектов'],
            [p+'category/webcomponents', 'WebComponents'],
            [p+'category/cms',           'CMS'],
        ]
    },
    {
        title: 'Библиотеки',
        children: [
            [p+'libs/common',  'Общее'],
            [p+'libs/ui-libs', 'Ui-библиотеки'],
        ]
    },
    {
        title: 'Вёрстка',
        children: [
            [p+'html/main',         'Общее'],
            [p+'html/infographics', 'Инфографика'],
            [p+'html/layouts',      'Макеты'],
        ]
    },
    {
        title: 'Инструменты',
        children: [
            [p+'instruments/validators', 'Валидаторы'],
            [p+'instruments/generators', 'Генераторы'],
            [p+'instruments/formatters', 'Форматтеры'],
        ]
    },
    {
        title: 'Общее',
        children: [
            [p+'common/common',   'Общее'],
            [p+'common/games',    'Игры'],
            [p+'common/training', 'Тренировки и план развития'],
            [p+'common/schools',  'Школы программирования'],
        ]
    },
    {
        title: 'Прочее',
        children: [
            [p+'other/services',  'Общие сервисы'],
            [p+'other/freelance', 'Фриланс-биржи'],
        ]
    },
];
