import{_ as p,r as e,o as c,c as o,f as s,d as l,e as u,a as n,b as a}from"./app-108d57de.js";const i={},x=u(`<h1 id="css-селекторы" tabindex="-1"><a class="header-anchor" href="#css-селекторы" aria-hidden="true">#</a> CSS селекторы (&gt;, +, ~)</h1><div class="language-css" data-ext="css"><pre class="language-css"><code>ul li &gt; span   <span class="token comment">/* Не все span, а только дочерние span */</span>
ul li + li     <span class="token comment">/* Все последующие элементы li */</span>
.class1 ~ div  <span class="token comment">/* Все div элементы после class1 */</span>
.class1 ~ *    <span class="token comment">/* Все элементы после class1 */</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		item
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>inside item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>inside item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>outside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> silver<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container &gt; div</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 4px solid blue<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),k=n("h3",{id:"примеры",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#примеры","aria-hidden":"true"},"#"),a(" Примеры")],-1),d=n("h4",{id:"custom-checkbox",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-checkbox","aria-hidden":"true"},"#"),a(" Custom Checkbox")],-1);function g(r,m){const t=e("v-iframe");return c(),o("div",null,[x,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),s("---------------------------------------------------------"),d,s("---------------------------------------------------------"),l(t,{height:"350",src:"https://codepen.io/Sergeenkov/embed/LMLjYG?height=265&theme-id=default&default-tab=css,result"})])}const v=p(i,[["render",g],["__file","selector-tilda.html.vue"]]);export{v as default};
