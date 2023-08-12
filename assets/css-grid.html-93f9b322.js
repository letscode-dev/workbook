import{_ as c,r as p,o as r,c as l,a as n,b as a,d as t,f as s,e as x}from"./app-3e4ab473.js";const i="/workbook/assets/grid-scheme-30f6f729.jpg",d={},u=n("h1",{id:"css-grid",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-grid","aria-hidden":"true"},"#"),a(" CSS Grid")],-1),k={href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cssgridgarden.com/#ru",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"определения",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#определения","aria-hidden":"true"},"#"),a(" Определения")],-1),g=x('<ul><li><code>Grid Track</code> - расстояние между ближайшими двумя линиями, колонка или строка</li><li><code>Grid Line</code> - линия, создаваемая Grid Track. <u>gap</u> толщина линии</li><li><code>Grid Cell</code> - ячейка сетки</li><li><code>Grid Area</code> - область всегда прямоугольная. объединение нескольких ячеек в одну</li><li><code>Line-based placement</code> - позиционирование на основе линий</li></ul><img src="'+i+'" style="width:550px;">',2),_=n("h3",{id:"grid-container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid-container","aria-hidden":"true"},"#"),a(" Grid Container")],-1),f=x(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span> <span class="token comment">/* Объявление */</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token comment">/* Столбцы (3 штуки) */</span>
	<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px 300px<span class="token punctuation">;</span>
	<span class="token comment">/* Строки (3 штуки), можно не задавать. адаптируются под высоту контента */</span>
	<span class="token property">grid-template-rows</span><span class="token punctuation">:</span>    150px 150px<span class="token punctuation">;</span>
	<span class="token comment">/* Короткая запись строки / столбцы */</span>
	<span class="token property">grid-template</span><span class="token punctuation">:</span>         150px 150px / 300px 300px<span class="token punctuation">;</span>
	<span class="token comment">/* Размер по умолчанию для неявно заданных столбцов */</span>
	<span class="token property">grid-auto-columns</span><span class="token punctuation">:</span>     200px<span class="token punctuation">;</span>
	<span class="token comment">/* Размер по умолчанию для неявно заданных строк */</span>
	<span class="token property">grid-auto-rows</span><span class="token punctuation">:</span>        200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token comment">/* расстояние между строками и стобцами (толщина линии) */</span>
	<span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token comment">/* расстояние между столбцами */</span>
	<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token comment">/* расстояние между строками */</span>
	<span class="token property">row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),y=n("h4",{id:"для-grid-template-columns-и-grid-template-rows",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#для-grid-template-columns-и-grid-template-rows","aria-hidden":"true"},"#"),a(" Для "),n("code",null,"grid-template-columns"),a(" и "),n("code",null,"grid-template-rows")],-1),v=x("<ul><li><code>300px 300px 300px</code> - 3 элемента (фиксированные величины)</li><li><code>1fr 1fr 1fr</code> - 3 элемента (относительные величины) fr - фракция</li><li><code>500px 1fr 2fr</code> - 3 элемента (смешанные величины)</li><li><code>500px auto 500px</code> - 3 элемента (auto - занимает ширину контента)</li><li><code>repeat(3, 1fr)</code> - задать повторяющийся паттерн</li><li><code>minmax(150px, 250px) 1fr 1fr</code> - 3 элемента, первый с minmax</li><li><code>minmax(100px, auto)</code> - определяется автоматически по ширине элементов</li></ul>",1),b=n("h3",{id:"grid-element",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid-element","aria-hidden":"true"},"#"),a(" Grid Element")],-1),G=n("h4",{id:"grid-area",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid-area","aria-hidden":"true"},"#"),a(" Grid Area")],-1),w=x(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.cards</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
	<span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
	<span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
		<span class="token string">&quot;header  header  menu&quot;</span>
		<span class="token string">&quot;content content .&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
	<span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.menu</span> <span class="token punctuation">{</span>
	<span class="token property">grid-area</span><span class="token punctuation">:</span> menu<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
	<span class="token property">grid-area</span><span class="token punctuation">:</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),C=n("h3",{id:"примеры",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#примеры","aria-hidden":"true"},"#"),a(" Примеры")],-1);function N(E,V){const e=p("ExternalLinkIcon"),o=p("v-iframe");return r(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[a("A Complete Guide to Grid"),t(e)])]),n("li",null,[n("a",m,[a("Игра Grid Garden"),t(e)])])]),s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),h,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),g,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),_,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),f,s("---------------------------------------------------------"),y,s("---------------------------------------------------------"),v,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),b,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),s("---------------------------------------------------------"),G,s("---------------------------------------------------------"),w,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),C,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),t(o,{height:"350",src:"https://codepen.io/Sergeenkov/embed/mKNEQW?height=265&theme-id=default&default-tab=css,result"})])}const L=c(d,[["render",N],["__file","css-grid.html.vue"]]);export{L as default};
