import{_ as s,o as a,c as n,a as l}from"./app-VEkiASiR.js";const p={},o=l(`<h1 id="функции" tabindex="-1"><a class="header-anchor" href="#функции"><span>Функции</span></a></h1><h3 id="функция-не-возвращающая-значение" tabindex="-1"><a class="header-anchor" href="#функция-не-возвращающая-значение"><span>Функция, не возвращающая значение</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> sum</span><span style="color:#383A42;">(a, b) {</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> b;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(result);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#4078F2;">sum</span><span style="color:#383A42;">(</span><span style="color:#986801;">34</span><span style="color:#383A42;">, </span><span style="color:#986801;">12</span><span style="color:#383A42;">);</span></span></span></code></pre></div><h3 id="функция-возвращающая-значение" tabindex="-1"><a class="header-anchor" href="#функция-возвращающая-значение"><span>Функция, возвращающая значение</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> sum</span><span style="color:#383A42;">(a, b) {</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> b;</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> result;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> sum</span><span style="color:#383A42;">(</span><span style="color:#986801;">34</span><span style="color:#383A42;">, </span><span style="color:#986801;">12</span><span style="color:#383A42;">);</span></span></span></code></pre></div><h3 id="глобальные-и-локальные-переменные" tabindex="-1"><a class="header-anchor" href="#глобальные-и-локальные-переменные"><span>Глобальные и локальные переменные</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Глобальная переменная</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> test</span><span style="color:#383A42;">() {</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">	// Локальная переменная</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> b</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 20</span><span style="color:#383A42;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a, b);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span></code></pre></div><h3 id="пример-определить-площадь-поверхности-планет" tabindex="-1"><a class="header-anchor" href="#пример-определить-площадь-поверхности-планет"><span>Пример: Определить площадь поверхности планет</span></a></h3><ul><li>Площадь поверхности сферы</li><li><code>A = 4 * pi * r * r</code></li></ul><h4 id="решение-1" tabindex="-1"><a class="header-anchor" href="#решение-1"><span>Решение 1</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> mars</span><span style="color:#0184BC;">    =</span><span style="color:#986801;"> 3390</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// km</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> mercury</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 2440</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// km</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> pi</span><span style="color:#0184BC;">    =</span><span style="color:#986801;"> 3.14</span><span style="color:#383A42;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> surfaceMars</span><span style="color:#0184BC;">    =</span><span style="color:#986801;"> 4</span><span style="color:#0184BC;"> *</span><span style="color:#383A42;"> pi </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> mars </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> mars;</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> surfaceMercury</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 4</span><span style="color:#0184BC;"> *</span><span style="color:#383A42;"> pi </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> mercury </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> mercury;</span></span></span></code></pre></div><h4 id="решение-2-через-функции" tabindex="-1"><a class="header-anchor" href="#решение-2-через-функции"><span>Решение 2 (через функции)</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> mars</span><span style="color:#0184BC;">    =</span><span style="color:#986801;"> 3390</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// km</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> mercury</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 2440</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// km</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> pi</span><span style="color:#0184BC;">    =</span><span style="color:#986801;"> 3.14</span><span style="color:#383A42;">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> surface</span><span style="color:#383A42;">(r) {</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">	return</span><span style="color:#986801;"> 4</span><span style="color:#0184BC;"> *</span><span style="color:#383A42;"> pi </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> r </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> r;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> surfaceMars</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> surface</span><span style="color:#383A42;">(mars);</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> surfaceMercury</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> surface</span><span style="color:#383A42;">(mercury);</span></span></span></code></pre></div>`,13),e=[o];function c(t,r){return a(),n("div",null,e)}const y=s(p,[["render",c],["__file","function.html.vue"]]),A=JSON.parse('{"path":"/themes/learn/js/basic/function.html","title":"Функции","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Функция, не возвращающая значение","slug":"функция-не-возвращающая-значение","link":"#функция-не-возвращающая-значение","children":[]},{"level":3,"title":"Функция, возвращающая значение","slug":"функция-возвращающая-значение","link":"#функция-возвращающая-значение","children":[]},{"level":3,"title":"Глобальные и локальные переменные","slug":"глобальные-и-локальные-переменные","link":"#глобальные-и-локальные-переменные","children":[]},{"level":3,"title":"Пример: Определить площадь поверхности планет","slug":"пример-определить-площадь-поверхности-планет","link":"#пример-определить-площадь-поверхности-планет","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/basic/function.md"}');export{y as comp,A as data};