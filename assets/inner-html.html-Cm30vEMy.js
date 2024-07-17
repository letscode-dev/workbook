import{_ as s,o as n,c as a,a as e}from"./app-DzKhGkmf.js";const l={},t=e(`<h1 id="методы-innertext-и-innerhtml" tabindex="-1"><a class="header-anchor" href="#методы-innertext-и-innerhtml"><span>Методы innerText и innerHTML</span></a></h1><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-html;"><code><span class="line"><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> id</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;element&quot;</span><span style="color:#383A42;">&gt;Element&lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="shiki one-light vp-code" style="background-color:#FAFAFA;color:#383A42 language-javascript;"><code><span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> element</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> document.</span><span style="color:#4078F2;">querySelector</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;#element&#39;</span><span style="color:#383A42;">);</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">element.</span><span style="color:#E45649;">innerText</span><span style="color:#0184BC;">  =</span><span style="color:#50A14F;"> &#39;New Text&#39;</span><span style="color:#383A42;">;               </span><span style="color:#A0A1A7;font-style:italic;">// Именить текст</span></span></span>
<span class="line"><span class="line"><span style="color:#383A42;">element.</span><span style="color:#E45649;">innerHTML</span><span style="color:#0184BC;">  =</span><span style="color:#50A14F;"> &#39;&lt;h2&gt;New HTML Code&lt;/h2&gt;&#39;</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// Изменить HTML</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> text</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> element.</span><span style="color:#E45649;">innerText</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// Получить текст</span></span></span>
<span class="line"><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> html</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> element.</span><span style="color:#E45649;">innerHTML</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// Получить HTML</span></span></span></code></pre></div>`,3),o=[t];function p(c,r){return n(),a("div",null,o)}const y=s(l,[["render",p],["__file","inner-html.html.vue"]]),A=JSON.parse('{"path":"/themes/learn/js/basic/inner-html.html","title":"Методы innerText и innerHTML","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/basic/inner-html.md"}');export{y as comp,A as data};
