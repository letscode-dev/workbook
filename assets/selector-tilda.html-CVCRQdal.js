import{_ as a,r as n,o as t,c as p,e,b as c}from"./app-C9uO4c8d.js";const l={},o=c(`<h1 id="css-селекторы" tabindex="-1"><a class="header-anchor" href="#css-селекторы"><span>CSS селекторы (&gt;, +, ~)</span></a></h1><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line">ul li &gt; span   <span class="token comment">/* Не все span, а только дочерние span */</span></span>
<span class="line">ul li + li     <span class="token comment">/* Все последующие элементы li */</span></span>
<span class="line">.class1 ~ div  <span class="token comment">/* Все div элементы после class1 */</span></span>
<span class="line">.class1 ~ *    <span class="token comment">/* Все элементы после class1 */</span></span>
<span class="line"></span></code></pre></div><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">		item</span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>inside item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>inside item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background</span><span class="token punctuation">:</span> silver<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container &gt; div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 4px solid blue<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры"><span>Примеры</span></a></h3><h4 id="custom-checkbox" tabindex="-1"><a class="header-anchor" href="#custom-checkbox"><span>Custom Checkbox</span></a></h4>`,6);function i(u,k){const s=n("v-iframe");return t(),p("div",null,[o,e(s,{height:"350",src:"https://codepen.io/Sergeenkov/embed/LMLjYG?height=265&theme-id=default&default-tab=css,result"})])}const d=a(l,[["render",i],["__file","selector-tilda.html.vue"]]),r=JSON.parse('{"path":"/themes/learn/html/selectors/selector-tilda.html","title":"CSS селекторы (>, +, ~)","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Примеры","slug":"примеры","link":"#примеры","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/html/selectors/selector-tilda.md"}');export{d as comp,r as data};