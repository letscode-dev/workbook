export const PATH_REFERENCES_BOOKS = '/themes/references/books';

const p = PATH_REFERENCES_BOOKS+'/';

export const THEME_REFERENCES_BOOKS = [
	{
		title: 'Технологии',
		children: [
			[p+'tech/javascript', 'JavaScript'],
			[p+'tech/html',       'HTML и CSS'],
			[p+'tech/react',      'React.js'],
			[p+'tech/redux',      'Redux'],
			[p+'tech/typescript', 'TypeScript'],
			[p+'tech/git',        'Git'],
		]
	},
    {
		title: 'Общее',
		children: [
			[p+'common/books',    'Книги'],
			[p+'common/articles', 'Статьи'],
		]
	},
];
