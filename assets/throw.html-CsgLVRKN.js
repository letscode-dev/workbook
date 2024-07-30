import{_ as s,o as a,c as n,a as l}from"./app-CBYysF61.js";const e={},p=l(`<h1 id="обработка-исключении" tabindex="-1"><a class="header-anchor" href="#обработка-исключении"><span>Обработка исключений</span></a></h1><h3 id="правила" tabindex="-1"><a class="header-anchor" href="#правила"><span>Правила</span></a></h3><ul><li><code>catch</code> или <code>finally</code> может отсутствовать</li><li>если ошибка необработана, скрипт не будет выполняться</li><li>если ошибка обработана в <code>catch</code>, скрипт продолжит выполнение</li></ul><h3 id="конструкция" tabindex="-1"><a class="header-anchor" href="#конструкция"><span>Конструкция</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">try</span><span style="color:#383A42;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">	// Инструкции, которые могут бросить исключение</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">catch</span><span style="color:#383A42;"> (идентификатор) {</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">	// Инструкции будут выполняться если в try произошло исключение</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">	// передается выражение (идентификатор), которое было в throw</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">finally</span><span style="color:#383A42;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">	// Инструкции будут выполняться независимо от исключения</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span></code></pre></div><h3 id="пример" tabindex="-1"><a class="header-anchor" href="#пример"><span>Пример</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">try</span><span style="color:#383A42;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">	throw</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Error</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Panic!&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">catch</span><span style="color:#383A42;"> (e) {</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(e.</span><span style="color:#E45649;">message</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">finally</span><span style="color:#383A42;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Код, который нужно выполнить&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">}</span></span></span></code></pre></div>`,7),o=[p];function c(t,r){return a(),n("div",null,o)}const A=s(e,[["render",c],["__file","throw.html.vue"]]),h=JSON.parse('{"path":"/themes/learn/js/advanced/throw.html","title":"Обработка исключений","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Правила","slug":"правила","link":"#правила","children":[]},{"level":3,"title":"Конструкция","slug":"конструкция","link":"#конструкция","children":[]},{"level":3,"title":"Пример","slug":"пример","link":"#пример","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/advanced/throw.md"}');export{A as comp,h as data};