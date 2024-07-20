import{_ as s,o as a,c as n,a as l}from"./app-CQgiRq2t.js";const e={},p=l(`<h1 id="создание-элементов" tabindex="-1"><a class="header-anchor" href="#создание-элементов"><span>Создание элементов</span></a></h1><h3 id="создание" tabindex="-1"><a class="header-anchor" href="#создание"><span>Создание</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> element</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> document.</span><span style="color:#4078F2;">createElement</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;div&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">element.</span><span style="color:#E45649;">innerHTML</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;Go to google&#39;</span><span style="color:#383A42;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">element.</span><span style="color:#E45649;">className</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;class-google&#39;</span><span style="color:#383A42;">;</span></span></span></code></pre></div><h3 id="добавление-на-страницу" tabindex="-1"><a class="header-anchor" href="#добавление-на-страницу"><span>Добавление на страницу</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> wrapper</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> document.</span><span style="color:#4078F2;">querySelector</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#wrapper&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Внутри элемента после контента</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#4078F2;">appendChild</span><span style="color:#383A42;">(element);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Внутри элемента перед контентом</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#4078F2;">insertBefore</span><span style="color:#383A42;">(element, wrapper.</span><span style="color:#E45649;">lastChild</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// После элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#E45649;">parentNode</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">insertBefore</span><span style="color:#383A42;">(element, wrapper);</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// До элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#E45649;">parentNode</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">appendChild</span><span style="color:#383A42;">(element);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Заменить элемент другим элементом</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#E45649;">parentNode</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">replaceChild</span><span style="color:#383A42;">(element, wrapper);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// insertBefore (1 - элемент который вставляем, 2 - элемент перед которым вставляем)</span></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// insertBefore (1 - чем заменяем, 2 - что заменяем)</span></span></span></code></pre></div><h3 id="удаление" tabindex="-1"><a class="header-anchor" href="#удаление"><span>Удаление</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Удаление нового элемента</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#E45649;">parentNode</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">removeChild</span><span style="color:#383A42;">(element);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Удаление элемента обертки</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">wrapper.</span><span style="color:#E45649;">parentNode</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">removeChild</span><span style="color:#383A42;">(wrapper);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Удаление нового элемента (если родитель body)</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">document.</span><span style="color:#E45649;">body</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">removeChild</span><span style="color:#383A42;">(element);</span></span></span></code></pre></div>`,7),o=[p];function t(c,r){return a(),n("div",null,o)}const y=s(e,[["render",t],["__file","create-element.html.vue"]]),A=JSON.parse('{"path":"/themes/learn/js/advanced/create-element.html","title":"Создание элементов","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Создание","slug":"создание","link":"#создание","children":[]},{"level":3,"title":"Добавление на страницу","slug":"добавление-на-страницу","link":"#добавление-на-страницу","children":[]},{"level":3,"title":"Удаление","slug":"удаление","link":"#удаление","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/advanced/create-element.md"}');export{y as comp,A as data};