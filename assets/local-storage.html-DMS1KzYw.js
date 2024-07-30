import{_ as s,o as a,c as n,a as l}from"./app-CBYysF61.js";const o={},p=l(`<h1 id="local-storage" tabindex="-1"><a class="header-anchor" href="#local-storage"><span>Local Storage</span></a></h1><ul><li><code>Google Chrome</code> -&gt; <code>F12</code> -&gt; <code>Application</code> -&gt; <code>Local Storage</code></li><li><code>localStorage</code> - это свойство глобального объекта браузера (window)</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, то перезаписывает новым значением)</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">localStorage.</span><span style="color:#4078F2;">setItem</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;id&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;77&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Получить значение</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> localStorage.</span><span style="color:#4078F2;">getItem</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;id&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Удаление ключа</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">localStorage.</span><span style="color:#4078F2;">removeItem</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;id&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Очистка всего хранилища</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">localStorage.</span><span style="color:#4078F2;">clear</span><span style="color:#383A42;">();</span></span></span></code></pre></div><h4 id="объекты-и-массивы" tabindex="-1"><a class="header-anchor" href="#объекты-и-массивы"><span>Объекты и массивы</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#E45649;">	item1</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#E45649;">	item2</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#986801;">123</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;two&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">3.0</span><span style="color:#383A42;">],</span></span></span>
<span class="line"><span class="line"><span style="color:#E45649;">	item3</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;hello&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">};</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Сериализация объекта и запись в хранилище по ключу &quot;key&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">localStorage.</span><span style="color:#4078F2;">setItem</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;key&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">JSON</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">stringify</span><span style="color:#383A42;">(obj));</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Преобразование из json в объект</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> returnObj</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> JSON</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">parse</span><span style="color:#383A42;">(localStorage.</span><span style="color:#4078F2;">getItem</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;key&quot;</span><span style="color:#383A42;">));</span></span></span></code></pre></div>`,5),e=[p];function t(c,r){return a(),n("div",null,e)}const y=s(o,[["render",t],["__file","local-storage.html.vue"]]),A=JSON.parse('{"path":"/themes/learn/js/advanced/local-storage.html","title":"Local Storage","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/advanced/local-storage.md"}');export{y as comp,A as data};