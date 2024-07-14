import{_ as s,o as n,c as a,b as p}from"./app-C9uO4c8d.js";const t={},e=p(`<h1 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp"><span>Gulp</span></a></h1><ul><li><a href="https://gulpjs.com/docs/en/getting-started/quick-start" target="_blank" rel="noopener noreferrer">Gulp: Get Started</a></li><li><a href="https://webdesign-master.ru/blog/tools/gulp-4-lesson.html" target="_blank" rel="noopener noreferrer">Подробное руководство на русском языке</a></li></ul><h3 id="описание" tabindex="-1"><a class="header-anchor" href="#описание"><span>Описание</span></a></h3><p><code>Gulp</code> – это инструмент для автоматизации рутинных задач в веб-разработке и других сферах.</p><p><strong>Основные задачи:</strong></p><ul><li>Объединение кода из разных файлов в один</li><li>Минификация и выравнивание кода</li><li>Сжатие изображений</li><li>Live Server</li><li>Работа с CSS препроцессорами (<code>sass</code>, <code>less</code>)</li></ul><h3 id="установка" tabindex="-1"><a class="header-anchor" href="#установка"><span>Установка</span></a></h3><ul><li>Установить Gulp можно с помощью NPM</li><li>Сначала необходимо установить Gulp глобально на компьютер с помощью команды</li></ul><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">--g</span> gulp</span>
<span class="line"></span></code></pre></div><ul><li>Для дальнейшей работы в директории с проектом необходимо проинициализировать проект командой</li></ul><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre></div><ul><li>Затем в директории проекта необходимо установить Gulp в проект с помощью команды</li></ul><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i --save-dev gulp</span>
<span class="line"></span></code></pre></div><ul><li>Теперь можно приступить к настройке работы Gulp.</li></ul><h3 id="работа-с-gulp" tabindex="-1"><a class="header-anchor" href="#работа-с-gulp"><span>Работа с Gulp</span></a></h3><p><strong>Чтобы начать работу необходимо создать:</strong></p><ul><li>Текстовый файл gulpfile.js. Непосредственно в нём будем писать код для работы gulp.</li><li>Папку App. В этой папке будут находиться рабочие файлы проекта.</li><li>Папку Build. Gulp обработает проект в папке App и сложит итоговые файлы в эту папку.</li></ul><hr><ul><li>Gulp это таск-менеджер</li><li>В <code>gulpfile.js</code> необходимо создать функцию (Таск) и Gulp выполняет её.Но сам по себе Gulp ограничен в своих действиях. Чтобы научить его выполнять такие задачи как минификация или сжатие изображений, нужно установить с помощью npm дополнительные плагины.</li></ul><p><strong>Примеры плагинов</strong></p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i gulp-concat --save-dev    <span class="token comment"># объединение CSS</span></span>
<span class="line"><span class="token function">npm</span> i gulp-uglify-es --save-dev <span class="token comment"># минификация JavaScript</span></span>
<span class="line"><span class="token function">npm</span> i browser-sync --save-dev   <span class="token comment"># Live Server</span></span>
<span class="line"></span></code></pre></div><ul><li>Помимо этих плагинов есть множество других под любые задачи.</li><li>Подробнее о возможностях и работе с плагинами можно прочитать в документации.</li><li>Плюсом является то, что настраивать работу Gulp, писать код в <code>gulpfile.js</code> нужно всего лишь раз. Затем gulpfile.js можно использовать в другом проекте.</li></ul><h3 id="пример-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#пример-gulpfile-js"><span>Пример <code>gulpfile.js</code></span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Определяем переменную &quot;preprocessor&quot;</span></span>
<span class="line"><span class="token keyword">let</span> preprocessor <span class="token operator">=</span> <span class="token string">&#39;sass&#39;</span><span class="token punctuation">;</span> </span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Определяем константы Gulp</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> src<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> parallel<span class="token punctuation">,</span> series<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем Browsersync</span></span>
<span class="line"><span class="token keyword">const</span> browserSync <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;browser-sync&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем gulp-concat</span></span>
<span class="line"><span class="token keyword">const</span> concat <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-concat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем gulp-uglify-es</span></span>
<span class="line"><span class="token keyword">const</span> uglify <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-uglify-es&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем модули gulp-sass и gulp-less</span></span>
<span class="line"><span class="token keyword">const</span> sass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-sass&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> less <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем Autoprefixer</span></span>
<span class="line"><span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем модуль gulp-clean-css</span></span>
<span class="line"><span class="token keyword">const</span> cleancss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-clean-css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем gulp-imagemin для работы с изображениями</span></span>
<span class="line"><span class="token keyword">const</span> imagemin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-imagemin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем модуль gulp-newer</span></span>
<span class="line"><span class="token keyword">const</span> newer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-newer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Подключаем модуль del</span></span>
<span class="line"><span class="token keyword">const</span> del <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;del&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Определяем логику работы Browsersync</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">browsersync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	browserSync<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// Инициализация Browsersync</span></span>
<span class="line">		<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;app/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Указываем папку сервера</span></span>
<span class="line">		<span class="token literal-property property">notify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Отключаем уведомления</span></span>
<span class="line">		<span class="token literal-property property">online</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Режим работы: true или false</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">scripts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">// Берём файлы из источников</span></span>
<span class="line">		<span class="token string">&#39;node_modules/jquery/dist/jquery.min.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Пример подключения библиотеки</span></span>
<span class="line">		<span class="token string">&#39;app/js/app.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;app.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Конкатенируем в один файл</span></span>
<span class="line">			<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">uglify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Сжимаем JavaScript</span></span>
<span class="line">			<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;app/js/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Выгружаем готовый файл в папку назначения</span></span>
<span class="line">			<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Триггерим Browsersync для обновления страницы</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">styles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;app/&#39;</span> <span class="token operator">+</span> preprocessor <span class="token operator">+</span> <span class="token string">&#39;/main.&#39;</span> <span class="token operator">+</span> preprocessor <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Выбираем источник: &quot;app/sass/main.sass&quot; или &quot;app/less/main.less&quot;</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>preprocessor<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Преобразуем значение переменной &quot;preprocessor&quot; в функцию</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;app.min.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Конкатенируем в файл app.min.js</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;last 10 versions&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Создадим префиксы с помощью Autoprefixer</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">cleancss</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">specialComments</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token comment">/* , format: &#39;beautify&#39; */</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Минифицируем стили</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;app/css/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Выгрузим результат в папку &quot;app/css/&quot;</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Сделаем инъекцию в браузер</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">images</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;app/images/src/**/*&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Берём все изображения из папки источника</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">newer</span><span class="token punctuation">(</span><span class="token string">&#39;app/images/dest/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Проверяем, было ли изменено (сжато) изображение ранее</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">imagemin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Сжимаем и оптимизируем изображеня</span></span>
<span class="line">		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;app/images/dest/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Выгружаем оптимизированные изображения в папку назначения</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">cleanimg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token string">&#39;app/images/dest/**/*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Удаляем всё содержимое папки &quot;app/images/dest/&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">buildcopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">// Выбираем нужные файлы</span></span>
<span class="line">		<span class="token string">&#39;app/css/**/*.min.css&#39;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&#39;app/js/**/*.min.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&#39;app/images/dest/**/*&#39;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&#39;app/**/*.html&#39;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Параметр &quot;base&quot; сохраняет структуру проекта при копировании</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Выгружаем в папку с финальной сборкой</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">cleandist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token string">&#39;dist/**/*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Удаляем всё содержимое папки &quot;dist/&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">startwatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js</span></span>
<span class="line">	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;app/**/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!app/**/*.min.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> scripts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	</span>
<span class="line">	<span class="token comment">// Мониторим файлы препроцессора на изменения</span></span>
<span class="line">	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">&#39;app/**/&#39;</span> <span class="token operator">+</span> preprocessor <span class="token operator">+</span> <span class="token string">&#39;/**/*&#39;</span><span class="token punctuation">,</span> styles<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">	<span class="token comment">// Мониторим файлы HTML на изменения</span></span>
<span class="line">	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">&#39;app/**/*.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> browserSync<span class="token punctuation">.</span>reload<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">	<span class="token comment">// Мониторим папку-источник изображений и выполняем images(), если есть изменения</span></span>
<span class="line">	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">&#39;app/images/src/**/*&#39;</span><span class="token punctuation">,</span> images<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.</span></span>
<span class="line">exports<span class="token punctuation">.</span>browsersync <span class="token operator">=</span> browsersync<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Экспортируем функцию scripts() в таск scripts</span></span>
<span class="line">exports<span class="token punctuation">.</span>scripts <span class="token operator">=</span> scripts<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Экспортируем функцию styles() в таск styles</span></span>
<span class="line">exports<span class="token punctuation">.</span>styles <span class="token operator">=</span> styles<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Экспорт функции images() в таск images</span></span>
<span class="line">exports<span class="token punctuation">.</span>images <span class="token operator">=</span> images<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Экспортируем функцию cleanimg() как таск cleanimg</span></span>
<span class="line">exports<span class="token punctuation">.</span>cleanimg <span class="token operator">=</span> cleanimg<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Создаём новый таск &quot;build&quot;, который последовательно выполняет нужные операции</span></span>
<span class="line">exports<span class="token punctuation">.</span>build <span class="token operator">=</span> <span class="token function">series</span><span class="token punctuation">(</span>cleandist<span class="token punctuation">,</span> styles<span class="token punctuation">,</span> scripts<span class="token punctuation">,</span> images<span class="token punctuation">,</span> buildcopy<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Экспортируем дефолтный таск с нужным набором функций</span></span>
<span class="line">exports<span class="token punctuation">.</span>default <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>styles<span class="token punctuation">,</span> scripts<span class="token punctuation">,</span> browsersync<span class="token punctuation">,</span> startwatch<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div>`,33),c=[e];function o(l,i){return n(),a("div",null,c)}const k=s(t,[["render",o],["__file","gulp.html.vue"]]),r=JSON.parse('{"path":"/themes/learn/js/bundlers/gulp.html","title":"Gulp","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Описание","slug":"описание","link":"#описание","children":[]},{"level":3,"title":"Установка","slug":"установка","link":"#установка","children":[]},{"level":3,"title":"Работа с Gulp","slug":"работа-с-gulp","link":"#работа-с-gulp","children":[]},{"level":3,"title":"Пример gulpfile.js","slug":"пример-gulpfile-js","link":"#пример-gulpfile-js","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/js/bundlers/gulp.md"}');export{k as comp,r as data};
