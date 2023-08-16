import{_ as o,r as e,o as c,c as l,f as a,a as n,b as s,d as u,e as t}from"./app-108d57de.js";const x={},i=n("h1",{id:"методы-работы-с-массивами",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#методы-работы-с-массивами","aria-hidden":"true"},"#"),s(" Методы работы с массивами")],-1),r=n("h3",{id:"методы",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#методы","aria-hidden":"true"},"#"),s(" Методы")],-1),k=t(`<h3 id="length-slice" tabindex="-1"><a class="header-anchor" href="#length-slice" aria-hidden="true">#</a> <code>length</code> <code>slice</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Длина массива (индекс последнего элемента)</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">// Вырезать с 1 до 7 не включая, если не указан второй аргумент, то до конца</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="indexof-lastindexof" tabindex="-1"><a class="header-anchor" href="#indexof-lastindexof" aria-hidden="true">#</a> <code>indexOf</code> <code>lastIndexOf</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Возвращает первый индекс, по которому элемент может быть найден в массиве или -1, если индекса нет</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="join-split" tabindex="-1"><a class="header-anchor" href="#join-split" aria-hidden="true">#</a> <code>join</code> <code>split</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Преобразование массива в строку с заданным разделителем</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Преобразование строки с заданным разделителем в массив </span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="push-unshift-pop-shift" tabindex="-1"><a class="header-anchor" href="#push-unshift-pop-shift" aria-hidden="true">#</a> <code>push</code> <code>unshift</code> <code>pop</code> <code>shift</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Добавление нового элемента в конец массива</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Добавление нового элемента в начало массива</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Удаление элемента из конца массива</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Удаление элемента из начала массива</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="reverse-sort-concat" tabindex="-1"><a class="header-anchor" href="#reverse-sort-concat" aria-hidden="true">#</a> <code>reverse</code> <code>sort</code> <code>concat</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Реверс (переворот массива)</span>
arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Сортировка по алфавиту</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Объединение массивов</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> <code>splice</code></h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Удалить с 3 индекса 2 элемента</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Добавление элементов</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;Алина&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Марина&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Замена элементов (заменить 2 удаленных элемента на Алексей, Билл)</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Алексей&quot;, &quot;Билл&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,12),d=n("h3",{id:"массивы-обьектов",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#массивы-обьектов","aria-hidden":"true"},"#"),s(" Массивы обьектов")],-1),h=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Андрей&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">&quot;andry@mail.ru&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Анна&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">&quot;anna@mail.ru&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// =&gt; &quot;Андрей&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; &quot;anna@mail.ru&quot;</span>
</code></pre></div>`,1),m={href:"https://learn.javascript.ru/array-iteration",target:"_blank",rel:"noopener noreferrer"};function f(g,v){const p=e("ExternalLinkIcon");return c(),l("div",null,[i,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),r,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),h,n("p",null,[n("a",m,[s("Массив: перебирающие методы"),u(p)])])])}const j=o(x,[["render",f],["__file","array.html.vue"]]);export{j as default};
