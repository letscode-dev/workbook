import{_ as t,o as e,c as o,f as s,a as x,b as n,e as a}from"./app-10f0ee09.js";const p="/workbook/assets/z-index-d6805c7d.png",c={},i=x("h1",{id:"position",tabindex:"-1"},[x("a",{class:"header-anchor",href:"#position","aria-hidden":"true"},"#"),n(" position")],-1),l=x("h3",{id:"виды-позиционирования",tabindex:"-1"},[x("a",{class:"header-anchor",href:"#виды-позиционирования","aria-hidden":"true"},"#"),n(" Виды позиционирования")],-1),r=a(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token comment">/* Статичное (стандартное позиционирование) */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
	<span class="token comment">/* Относительное (положение устанавливается относительно его исходного места) */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token comment">/* Абсолютное (отсчёт координат ведётся от края окна браузера, если у родителя не установлено position: relative) */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token comment">/* Фиксированное (привязывается к указанной свойствами left, top, right, bottom и точке на экране) */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
	<span class="token comment">/* Липкое (сочетание относительного и фиксированного позиционирования) */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),u=x("h3",{id:"своиства-left-right-top-bottom",tabindex:"-1"},[x("a",{class:"header-anchor",href:"#своиства-left-right-top-bottom","aria-hidden":"true"},"#"),n(" Свойства: "),x("code",null,"left"),n(", "),x("code",null,"right"),n(", "),x("code",null,"top"),n(", "),x("code",null,"bottom")],-1),d=a(`<ul><li>Применяются для всех видов позиционирования кроме <code>static</code></li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),k=x("h3",{id:"порядок-расположения-элементов-z-index",tabindex:"-1"},[x("a",{class:"header-anchor",href:"#порядок-расположения-элементов-z-index","aria-hidden":"true"},"#"),n(" Порядок расположения элементов: "),x("code",null,"z-index")],-1),h=a('<img src="'+p+`" style="width:400px;"><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2);function _(m,f){return e(),o("div",null,[i,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),l,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),r,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),u,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),h])}const v=t(c,[["render",_],["__file","position.html.vue"]]);export{v as default};
