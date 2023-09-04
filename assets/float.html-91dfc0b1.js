import{_ as x,r as e,o,c,f as s,d as l,a as n,b as a,e as t}from"./app-9e24aef3.js";const u="/workbook/assets/float-7eee94c5.png",i={},r=n("h1",{id:"float",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#float","aria-hidden":"true"},"#"),a(" Float")],-1),k=n("h3",{id:"обтекание",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#обтекание","aria-hidden":"true"},"#"),a(" Обтекание")],-1),d=t(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token comment">/* Выравнивает элемент по левому краю, все остальные элементы обтекают его по правой стороне */</span>
	<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
	<span class="token comment">/* Выравнивает элемент по правому краю, все остальные элементы обтекают его по левой стороне */</span>
	<span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
	<span class="token comment">/* Обтекание элемента не задается */</span>  
	<span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>   <span class="token comment">/* Отключить обтекание слева */</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>  <span class="token comment">/* Отключить обтекание справа */</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>   <span class="token comment">/* Отключить обтекание справа и слева */</span>	
<span class="token punctuation">}</span>
</code></pre></div>`,2),h=n("h3",{id:"пример-использования-float-и-отключения-обтекания-clearfix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#пример-использования-float-и-отключения-обтекания-clearfix","aria-hidden":"true"},"#"),a(" Пример использования "),n("code",null,"float"),a(" и отключения обтекания ("),n("code",null,"clearfix"),a(")")],-1),m=t('<img src="'+u+`" style="width:400px;"><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>item1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>item2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container:after</span><span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>    <span class="token comment">/* Содержимое не нужно */</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token comment">/* Для отключения обтекания необходим блочный элемент */</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>    <span class="token comment">/* Отключение обтекание справа и слева */</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:first-child</span> <span class="token punctuation">{</span>
	<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>   <span class="token comment">/* Применение обтекания слева */</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:last-child</span> <span class="token punctuation">{</span>
	<span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span> <span class="token comment">/* Применение обтекания справа */</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),g=n("h3",{id:"примеры",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#примеры","aria-hidden":"true"},"#"),a(" Примеры")],-1),f=n("h4",{id:"float-image",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#float-image","aria-hidden":"true"},"#"),a(" Float Image")],-1);function _(v,y){const p=e("v-iframe");return o(),c("div",null,[r,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),h,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),m,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),g,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),f,l(p,{height:"350",src:"https://codepen.io/Sergeenkov/embed/ReorRW?height=265&theme-id=default&default-tab=html,result"})])}const q=x(i,[["render",_],["__file","float.html.vue"]]);export{q as default};
