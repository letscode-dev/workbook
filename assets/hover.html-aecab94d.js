import{_ as n,o as s,c as a,e as t}from"./app-936f69c4.js";const o={},p=t(`<h1 id="псевдоклассы-hover-not-focus-active-visited-link" tabindex="-1"><a class="header-anchor" href="#псевдоклассы-hover-not-focus-active-visited-link" aria-hidden="true">#</a> Псевдоклассы (hover, not, focus, active, visited, link)</h1><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">a</span><span class="token punctuation">:</span>hover       <span class="token comment">/* Наведение на элемент */</span>
<span class="token property">a</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>hover<span class="token punctuation">)</span> <span class="token comment">/* Увод с элемента */</span>
<span class="token property">a</span><span class="token punctuation">:</span>active      <span class="token comment">/* Активный элемент */</span>
<span class="token property">a</span><span class="token punctuation">:</span>focus       <span class="token comment">/* Элемент в фокусе */</span>
<span class="token property">a</span><span class="token punctuation">:</span>visited     <span class="token comment">/* Посещеннае ссылки */</span>
<span class="token property">a</span><span class="token punctuation">:</span>link        <span class="token comment">/* Не посещенные ссылки */</span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">a:hover</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:not(:hover)</span> <span class="token punctuation">{</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[p];function c(l,i){return s(),a("div",null,e)}const u=n(o,[["render",c],["__file","hover.html.vue"]]);export{u as default};
