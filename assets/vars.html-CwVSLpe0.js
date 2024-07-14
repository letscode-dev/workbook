import{_ as s,o as a,c as n,b as t}from"./app-C9uO4c8d.js";const p={},c=t(`<h1 id="переменные-в-css" tabindex="-1"><a class="header-anchor" href="#переменные-в-css"><span>Переменные в CSS</span></a></h1><ul><li>CSS Custom Properties</li></ul><h3 id="_1-определение-переменных" tabindex="-1"><a class="header-anchor" href="#_1-определение-переменных"><span>1. Определение переменных</span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-резервное-значение" tabindex="-1"><a class="header-anchor" href="#_2-резервное-значение"><span>2. Резервное значение</span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-переменные-в-calc" tabindex="-1"><a class="header-anchor" href="#_3-переменные-в-calc"><span>3. Переменные в <code>calc()</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--a</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--b</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--a<span class="token punctuation">)</span> * <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-переопределение-переменнои-в-media" tabindex="-1"><a class="header-anchor" href="#_4-переопределение-переменнои-в-media"><span>4. Переопределение переменной в <code>@media</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">:root</span> <span class="token punctuation">{</span> <span class="token property">--color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-переменные-в-svg" tabindex="-1"><a class="header-anchor" href="#_5-переменные-в-svg"><span>5. Переменные в SVG</span></a></h3><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>var(--color)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,13),e=[c];function l(o,u){return a(),n("div",null,e)}const r=s(p,[["render",l],["__file","vars.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/html/basic/vars.html","title":"Переменные в CSS","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1. Определение переменных","slug":"_1-определение-переменных","link":"#_1-определение-переменных","children":[]},{"level":3,"title":"2. Резервное значение","slug":"_2-резервное-значение","link":"#_2-резервное-значение","children":[]},{"level":3,"title":"3. Переменные в calc()","slug":"_3-переменные-в-calc","link":"#_3-переменные-в-calc","children":[]},{"level":3,"title":"4. Переопределение переменной в @media","slug":"_4-переопределение-переменнои-в-media","link":"#_4-переопределение-переменнои-в-media","children":[]},{"level":3,"title":"5. Переменные в SVG","slug":"_5-переменные-в-svg","link":"#_5-переменные-в-svg","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/html/basic/vars.md"}');export{r as comp,k as data};
