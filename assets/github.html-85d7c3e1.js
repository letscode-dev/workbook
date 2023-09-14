import{_ as t,r as o,o as c,c as i,a as n,b as e,d as x,f as s,e as l}from"./app-10f0ee09.js";const r={},h=n("h1",{id:"хостинг-проектов-github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#хостинг-проектов-github","aria-hidden":"true"},"#"),e(" Хостинг проектов GitHub")],-1),d={href:"https://www.youtube.com/playlist?list=PL3LQJkGQtzc5rDeb7FjACNb6sOW300yA0",target:"_blank",rel:"noopener noreferrer"},p=n("h3",{id:"работа-с-github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#работа-с-github","aria-hidden":"true"},"#"),e(" Работа с GitHub")],-1),u={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"Создать новый проект на GitHub",-1),m={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"Склонировать репозиторий GitHub через GitHub Desktop",-1),k=n("li",null,"Добавить изменения в локальный репозиторий",-1),f=n("li",null,"Загрузить изменения в удаленный репозиторий",-1),v=n("li",null,[e("Создать новую ветку, добавить изменения и создать Pull Request для merge в ветку "),n("code",null,"main")],-1),G={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"README.md",-1),w={href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank",rel:"noopener noreferrer"},N=n("h3",{id:"команды-git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#команды-git","aria-hidden":"true"},"#"),e(" Команды Git")],-1),E=l(`<h4 id="инициализация" tabindex="-1"><a class="header-anchor" href="#инициализация" aria-hidden="true">#</a> Инициализация</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Инициализация репозитория</span>
<span class="token function">git</span> init
</code></pre></div><h4 id="получение-данных" tabindex="-1"><a class="header-anchor" href="#получение-данных" aria-hidden="true">#</a> Получение данных</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Клонирование репозитория</span>
<span class="token function">git</span> clone https://github.com/AccountName/repo-name.git

<span class="token comment"># Проверить изменения на удаленном репозитории</span>
<span class="token function">git</span> fetch

<span class="token comment"># Получить изменения с удаленного репозитория</span>
<span class="token function">git</span> pull
</code></pre></div><h4 id="отправка-данных" tabindex="-1"><a class="header-anchor" href="#отправка-данных" aria-hidden="true">#</a> Отправка данных</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Индексирование всех измененных файлов</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># Сохранение изменений в локальном репозитории</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;text&#39;</span>

<span class="token comment"># Отправка изменений на удаленный репозитория</span>
<span class="token function">git</span> push origin HEAD
</code></pre></div><h4 id="работа-с-ветками" tabindex="-1"><a class="header-anchor" href="#работа-с-ветками" aria-hidden="true">#</a> Работа с ветками</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Список веток с указанием текущей</span>
<span class="token function">git</span> branch

<span class="token comment"># Переход на ветку</span>
<span class="token function">git</span> checkout НазваниеВетки

<span class="token comment"># Создание ветки</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> НазваниеВетки

<span class="token comment"># Слияние текущей и указанной ветки</span>
<span class="token function">git</span> merge НазваниеВетки
</code></pre></div>`,8);function V(A,C){const a=o("ExternalLinkIcon");return c(),i("div",null,[h,n("ul",null,[n("li",null,[n("a",d,[e("[playlist] GitHub для новичков"),x(a)])])]),s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),p,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),n("ol",null,[n("li",null,[e("Зарегистрироваться на "),n("a",u,[e("https://github.com/"),x(a)])]),g,n("li",null,[e("Установить "),n("a",m,[e("GitHub Desktop"),x(a)])]),n("li",null,[e("Установить "),n("a",_,[e("Git"),x(a)]),e(" (необходим для выполненения консольных команд и интеграции с VSCode)")]),b,k,f,v,n("li",null,[e("Подключить "),n("a",G,[e("GitHub Pages"),x(a)]),e(" к проекту на GitHub")]),n("li",null,[e("Скорректировать "),H,e(" с помощью "),n("a",w,[e("Markdown"),x(a)])])]),s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),N,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),E])}const y=t(r,[["render",V],["__file","github.html.vue"]]);export{y as default};
