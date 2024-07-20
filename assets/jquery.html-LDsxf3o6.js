import{_ as s,o as a,c as n,a as l}from"./app-VEkiASiR.js";const o={},p=l(`<h1 id="jquery-и-jquery-ui" tabindex="-1"><a class="header-anchor" href="#jquery-и-jquery-ui"><span>jQuery и jQuery UI</span></a></h1><h3 id="работа-с-элементами-на-странице" tabindex="-1"><a class="header-anchor" href="#работа-с-элементами-на-странице"><span>Работа с элементами на странице</span></a></h3><h4 id="выборка-элементов-страницы-на-jquery" tabindex="-1"><a class="header-anchor" href="#выборка-элементов-страницы-на-jquery"><span>Выборка элементов страницы на jquery</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;p&#39;</span><span style="color:#383A42;">);     </span><span style="color:#A0A1A7;font-style:italic;">// По названию тега </span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;.box&#39;</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// По названию класса</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// По id</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;div a&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Вложенные теги</span></span></span></code></pre></div><h4 id="деиствия-методы-над-выбранными-элементами" tabindex="-1"><a class="header-anchor" href="#деиствия-методы-над-выбранными-элементами"><span>Действия (методы) над выбранными элементами</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> text</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">text</span><span style="color:#383A42;">();      </span><span style="color:#A0A1A7;font-style:italic;">// Получить текст</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> html</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">html</span><span style="color:#383A42;">();      </span><span style="color:#A0A1A7;font-style:italic;">// Получить html</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">text</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Измененный текст&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Изменить текст</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">html</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Измененный html&#39;</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// Изменить html</span></span></span></code></pre></div><h4 id="before-after-prepend-append" tabindex="-1"><a class="header-anchor" href="#before-after-prepend-append"><span><code>before()</code>, <code>after()</code>, <code>prepend()</code>, <code>append()</code></span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">before</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;content&#39;</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// Добавляет контент до выбранного элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">after</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;content&#39;</span><span style="color:#383A42;">);   </span><span style="color:#A0A1A7;font-style:italic;">// Добавляет контент после выбранного элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">prepend</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;content&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Добавляет контент внутрь выбранного элемента до остального кода</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">append</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;content&#39;</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// Добавляет контент внутрь выбранного элемента после остального кода</span></span></span></code></pre></div><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h3><h4 id="css-1" tabindex="-1"><a class="header-anchor" href="#css-1"><span><code>css()</code></span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">css</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;color&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Получить css свойство</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">css</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;color&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;orange&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Изменить css свойство</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Изменение нескольких css свойств</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">css</span><span style="color:#383A42;">({</span></span></span>
<span class="line"><span class="line"><span style="color:#50A14F;">	&#39;color&#39;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;">&#39;orange&#39;</span><span style="color:#383A42;">, </span></span></span>
<span class="line"><span class="line"><span style="color:#50A14F;">	&#39;font-size&#39;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;">&#39;25px&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">});</span></span></span></code></pre></div><h4 id="addclass-removeclass" tabindex="-1"><a class="header-anchor" href="#addclass-removeclass"><span><code>addClass()</code>, <code>removeClass()</code></span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">addClass</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;open&#39;</span><span style="color:#383A42;">);    </span><span style="color:#A0A1A7;font-style:italic;">// Добавление класса</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">removeClass</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;open&#39;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Удаление класса</span></span></span></code></pre></div><h4 id="toggleclass" tabindex="-1"><a class="header-anchor" href="#toggleclass"><span><code>toggleClass()</code></span></a></h4><ul><li>Переключатель классов. Добавляет элементу указанный класс, если его нет - иначе удаляет</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">toggleClass</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;open&#39;</span><span style="color:#383A42;">);</span></span></span></code></pre></div><h3 id="события-и-обработчики-событии" tabindex="-1"><a class="header-anchor" href="#события-и-обработчики-событии"><span>События и обработчики событий</span></a></h3><h4 id="добавление-обработчиков-событии" tabindex="-1"><a class="header-anchor" href="#добавление-обработчиков-событии"><span>Добавление обработчиков событий</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Обработчик события щелчка мыши</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;.item&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">on</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;click&#39;</span><span style="color:#383A42;">, </span><span style="color:#A626A4;">function</span><span style="color:#383A42;">(){</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Щелчок мыши&#39;</span><span style="color:#383A42;">); </span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">});</span></span></span></code></pre></div><h4 id="удаление-обработчиков-событии" tabindex="-1"><a class="header-anchor" href="#удаление-обработчиков-событии"><span>Удаление обработчиков событий</span></a></h4><ul><li>Метод <code>.off()</code> удаляет обработчики событий, назначенные методом <code>.on</code></li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;.item&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">off</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;click&#39;</span><span style="color:#383A42;">);</span></span></span></code></pre></div><h3 id="атрибуты" tabindex="-1"><a class="header-anchor" href="#атрибуты"><span>Атрибуты</span></a></h3><h4 id="attr-removeattr" tabindex="-1"><a class="header-anchor" href="#attr-removeattr"><span><code>attr()</code>, <code>removeAttr()</code></span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> id</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> $</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">attr</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;id&quot;</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Получить значение атрибута</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">attr</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;size&#39;</span><span style="color:#383A42;">, </span><span style="color:#986801;">4</span><span style="color:#383A42;">);       </span><span style="color:#A0A1A7;font-style:italic;">// Изменить значение атрибута</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">removeAttr</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;title&#39;</span><span style="color:#383A42;">);   </span><span style="color:#A0A1A7;font-style:italic;">// Удалить атрибут</span></span></span></code></pre></div><h3 id="плавное-изменение-своиств-на-jquery" tabindex="-1"><a class="header-anchor" href="#плавное-изменение-своиств-на-jquery"><span>Плавное изменение свойств на jQuery</span></a></h3><h4 id="hide-show" tabindex="-1"><a class="header-anchor" href="#hide-show"><span><code>hide()</code>, <code>show()</code></span></a></h4><ul><li>Скрывает/показывает элементы на странице (за счет плавного изменения его размера и прозрачности)</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">hide</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Скрыть элемент </span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">show</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Показать элемент</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 1 - скорость исчезновения (миллисекунды 1с = 1000мс)</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 2 - функция, которая будет выполнена после завершения работы</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">hide</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">show</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Цепные функции</span></span></span></code></pre></div><h4 id="slideup-slidedown" tabindex="-1"><a class="header-anchor" href="#slideup-slidedown"><span><code>slideUp()</code>, <code>slideDown()</code></span></a></h4><ul><li>Разворачивает/сворачивает элементы на странице (за счет плавного изменения высоты элементов)</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">slideUp</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">);   </span><span style="color:#A0A1A7;font-style:italic;">// Исчезновение (элемент уезжает наверх)</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">slideDown</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Появление (элемент выезжает вниз)</span></span></span></code></pre></div><h4 id="slidetoggle" tabindex="-1"><a class="header-anchor" href="#slidetoggle"><span><code>slideToggle()</code></span></a></h4><ul><li>Поочередно разворачивает/сворачивает элементы на странице, как это делают .slideUp() и .slideDown()</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">slideToggle</span><span style="color:#383A42;">();</span></span></span></code></pre></div><h4 id="fadein-fadeout" tabindex="-1"><a class="header-anchor" href="#fadein-fadeout"><span><code>fadeIn()</code>, <code>fadeOut()</code></span></a></h4><ul><li>Скрывает/показывает элементы на странице за счет плавного изменения прозрачности</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">fadeIn</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">);  </span><span style="color:#A0A1A7;font-style:italic;">// Плавное появление элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">fadeOut</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// Плавное исчезновение элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 1 - время исчезновения</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 2 - функция, которая будет выполнена после исчезновения</span></span></span></code></pre></div><h4 id="fadeto" tabindex="-1"><a class="header-anchor" href="#fadeto"><span><code>fadeTo()</code></span></a></h4><ul><li>Плавно изменяет прозрачность элементов</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">fadeTo</span><span style="color:#383A42;">(</span><span style="color:#986801;">1000</span><span style="color:#383A42;">,</span><span style="color:#986801;">0.4</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 1 - время исчезновения</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 2 - прозрачность от 0 до 1</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 3 - функция, которая будет выполнена после исчезновения</span></span></span></code></pre></div><h4 id="fadetoggle" tabindex="-1"><a class="header-anchor" href="#fadetoggle"><span><code>fadeToggle()</code></span></a></h4><ul><li>Поочередно скрывает/показывает элементы на странице, как это делают <code>.fadeIn()</code> и .<code>fadeOut()</code></li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#box&#39;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">fadeToggle</span><span style="color:#383A42;">();</span></span></span></code></pre></div><h3 id="jquery-ui" tabindex="-1"><a class="header-anchor" href="#jquery-ui"><span>jQuery UI</span></a></h3><p><a href="https://jqueryui.com/" target="_blank" rel="noopener noreferrer">jQuery UI</a></p>`,46),e=[p];function c(t,r){return a(),n("div",null,e)}const y=s(o,[["render",c],["__file","jquery.html.vue"]]),A=JSON.parse('{"path":"/themes/learn/js/instruments/jquery.html","title":"jQuery и jQuery UI","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Работа с элементами на странице","slug":"работа-с-элементами-на-странице","link":"#работа-с-элементами-на-странице","children":[]},{"level":3,"title":"CSS","slug":"css","link":"#css","children":[]},{"level":3,"title":"События и обработчики событий","slug":"события-и-обработчики-событии","link":"#события-и-обработчики-событии","children":[]},{"level":3,"title":"Атрибуты","slug":"атрибуты","link":"#атрибуты","children":[]},{"level":3,"title":"Плавное изменение свойств на jQuery","slug":"плавное-изменение-своиств-на-jquery","link":"#плавное-изменение-своиств-на-jquery","children":[]},{"level":3,"title":"jQuery UI","slug":"jquery-ui","link":"#jquery-ui","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/instruments/jquery.md"}');export{y as comp,A as data};