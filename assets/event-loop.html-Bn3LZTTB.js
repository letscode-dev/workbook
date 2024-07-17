import{_ as n,o as s,c as a,a as p}from"./app-Bzk8FeN-.js";const t="/workbook/assets/event-loop-BT1SMYL_.png",e={},o=p(`<h1 id="event-loop" tabindex="-1"><a class="header-anchor" href="#event-loop"><span>Event Loop</span></a></h1><ul><li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer">Статья на MDN</a></li><li><a href="https://habr.com/ru/post/461401/" target="_blank" rel="noopener noreferrer">Статья на Habr</a></li><li><a href="https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436" target="_blank" rel="noopener noreferrer">Статья на Medium</a></li></ul><h3 id="описание" tabindex="-1"><a class="header-anchor" href="#описание"><span>Описание</span></a></h3><ul><li>Движок браузера выполняет JavaScript в одном потоке. Он не может поставить обработку события на паузу, переключиться на другое событие, а после возобновить выполнение первого. Все события обрабатываются последовательно и каждое до конца</li></ul><ol><li>Сначала выполняется синхронный код</li><li>Потом выполняется асинхронный код: setTimeout, AJAX-запросы к серверу и т.д.</li></ol><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// =&gt; 1, 3, 2</span></span>
<span class="line"></span></code></pre></div><img src="`+t+`" style="width:500px;"><h3 id="эволюция-методов-по-работе-с-асинхронным-кодом" tabindex="-1"><a class="header-anchor" href="#эволюция-методов-по-работе-с-асинхронным-кодом"><span>Эволюция методов по работе с асинхронным кодом</span></a></h3><h4 id="_1-callback-функции" tabindex="-1"><a class="header-anchor" href="#_1-callback-функции"><span>1. Callback-функции</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Асинхронный код</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Асинхронный код</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-promise" tabindex="-1"><a class="header-anchor" href="#_2-promise"><span>2. Promise</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">body</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_3-генераторы" tabindex="-1"><a class="header-anchor" href="#_3-генераторы"><span>3. Генераторы</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">getApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="_4-асинхронные-функции" tabindex="-1"><a class="header-anchor" href="#_4-асинхронные-функции"><span>4. Асинхронные функции</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getApi</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,17),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","event-loop.html.vue"]]),d=JSON.parse('{"path":"/themes/learn/js/async/event-loop.html","title":"Event Loop","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Описание","slug":"описание","link":"#описание","children":[]},{"level":3,"title":"Эволюция методов по работе с асинхронным кодом","slug":"эволюция-методов-по-работе-с-асинхронным-кодом","link":"#эволюция-методов-по-работе-с-асинхронным-кодом","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/async/event-loop.md"}');export{k as comp,d as data};