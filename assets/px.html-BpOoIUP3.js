import{_ as s,o as n,c as a,a as t}from"./app-DMxIp5QW.js";const p={},e=t(`<h1 id="единицы-измерения" tabindex="-1"><a class="header-anchor" href="#единицы-измерения"><span>Единицы измерения</span></a></h1><details class="custom-container details"><summary>Темы</summary><ul><li>Относительные и абсолютные единицы измерения</li><li>px, %, vh, vw, em, rem</li></ul></details><ul><li><code>px</code> - абсолютная единица измерения</li><li><code>%</code> - относительная, рассчитывается относительно родителя</li><li><code>vw</code> - viewport width, относительная, рассчитывается относительно viewport</li><li><code>vh</code> - viewport height, относительная, рассчитывается относительно viewport</li><li><code>em</code> - относительная, рассчитывается относительно родителя (берет значение font-size)</li><li><code>rem</code> - root em, относительная, рассчитывается относительно html (берет значение font-size)</li></ul><h3 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры"><span>Примеры</span></a></h3><h4 id="пример-1-задание-у-блока-100-ширины-и-высоты-в-процентах" tabindex="-1"><a class="header-anchor" href="#пример-1-задание-у-блока-100-ширины-и-высоты-в-процентах"><span>Пример #1. Задание у блока 100% ширины и высоты (в процентах)</span></a></h4><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">html, body</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="пример-2-задание-у-блока-100-ширины-и-высоты-в-vw-и-vh" tabindex="-1"><a class="header-anchor" href="#пример-2-задание-у-блока-100-ширины-и-высоты-в-vw-и-vh"><span>Пример #2. Задание у блока 100% ширины и высоты (в vw и vh)</span></a></h4><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="единица-измерения-em" tabindex="-1"><a class="header-anchor" href="#единица-измерения-em"><span>Единица измерения <code>em</code></span></a></h3><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Текст абзаца<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Текст для item1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Текст для item2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.item1</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.item2</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="единица-измерения-rem" tabindex="-1"><a class="header-anchor" href="#единица-измерения-rem"><span>Единица измерения <code>rem</code></span></a></h3><ul><li><code>rem</code> берется от <code>html</code></li></ul><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Текст абзаца<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Текст для item1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Текст для item2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">html, body</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.item1</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.item2</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,15),c=[e];function l(o,i){return n(),a("div",null,c)}const k=s(p,[["render",l],["__file","px.html.vue"]]),r=JSON.parse('{"path":"/themes/learn/html/basic/px.html","title":"Единицы измерения","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Примеры","slug":"примеры","link":"#примеры","children":[]},{"level":3,"title":"Единица измерения em","slug":"единица-измерения-em","link":"#единица-измерения-em","children":[]},{"level":3,"title":"Единица измерения rem","slug":"единица-измерения-rem","link":"#единица-измерения-rem","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/html/basic/px.md"}');export{k as comp,r as data};