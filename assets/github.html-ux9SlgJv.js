import{_ as a,o as s,c as n,a as e}from"./app-BS_Q0RPl.js";const t={},l=e(`<h1 id="хостинг-проектов-github" tabindex="-1"><a class="header-anchor" href="#хостинг-проектов-github"><span>Хостинг проектов GitHub</span></a></h1><ul><li><a href="https://www.youtube.com/playlist?list=PL3LQJkGQtzc5rDeb7FjACNb6sOW300yA0" target="_blank" rel="noopener noreferrer">[playlist] GitHub для новичков</a></li></ul><h3 id="работа-с-github" tabindex="-1"><a class="header-anchor" href="#работа-с-github"><span>Работа с GitHub</span></a></h3><ol><li>Зарегистрироваться на <a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></li><li>Создать новый проект на GitHub</li><li>Установить <a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer">GitHub Desktop</a></li><li>Установить <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git</a> (необходим для выполненения консольных команд и интеграции с VSCode)</li><li>Склонировать репозиторий GitHub через GitHub Desktop</li><li>Добавить изменения в локальный репозиторий</li><li>Загрузить изменения в удаленный репозиторий</li><li>Создать новую ветку, добавить изменения и создать Pull Request для merge в ветку <code>main</code></li><li>Подключить <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> к проекту на GitHub</li><li>Скорректировать <code>README.md</code> с помощью <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">Markdown</a></li></ol><h3 id="команды-git" tabindex="-1"><a class="header-anchor" href="#команды-git"><span>Команды Git</span></a></h3><h4 id="инициализация" tabindex="-1"><a class="header-anchor" href="#инициализация"><span>Инициализация</span></a></h4><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Инициализация репозитория</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre></div><h4 id="получение-данных" tabindex="-1"><a class="header-anchor" href="#получение-данных"><span>Получение данных</span></a></h4><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Клонирование репозитория</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/AccountName/repo-name.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Проверить изменения на удаленном репозитории</span></span>
<span class="line"><span class="token function">git</span> fetch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Получить изменения с удаленного репозитория</span></span>
<span class="line"><span class="token function">git</span> pull</span>
<span class="line"></span></code></pre></div><h4 id="отправка-данных" tabindex="-1"><a class="header-anchor" href="#отправка-данных"><span>Отправка данных</span></a></h4><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Индексирование всех измененных файлов</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Сохранение изменений в локальном репозитории</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;text&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Отправка изменений на удаленный репозитория</span></span>
<span class="line"><span class="token function">git</span> push origin HEAD</span>
<span class="line"></span></code></pre></div><h4 id="работа-с-ветками" tabindex="-1"><a class="header-anchor" href="#работа-с-ветками"><span>Работа с ветками</span></a></h4><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Список веток с указанием текущей</span></span>
<span class="line"><span class="token function">git</span> branch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Переход на ветку</span></span>
<span class="line"><span class="token function">git</span> checkout НазваниеВетки</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Создание ветки</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> НазваниеВетки</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Слияние текущей и указанной ветки</span></span>
<span class="line"><span class="token function">git</span> merge НазваниеВетки</span>
<span class="line"></span></code></pre></div>`,13),i=[l];function p(c,o){return s(),n("div",null,i)}const h=a(t,[["render",p],["__file","github.html.vue"]]),d=JSON.parse('{"path":"/themes/learn/html/tools/github.html","title":"Хостинг проектов GitHub","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Работа с GitHub","slug":"работа-с-github","link":"#работа-с-github","children":[]},{"level":3,"title":"Команды Git","slug":"команды-git","link":"#команды-git","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/html/tools/github.md"}');export{h as comp,d as data};
