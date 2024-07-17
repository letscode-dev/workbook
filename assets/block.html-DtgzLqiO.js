import{_ as a,r as p,o as t,c as e,d as c,a as s}from"./app-BS_Q0RPl.js";const o={},l=s(`<h1 id="блочные-элементы-div" tabindex="-1"><a class="header-anchor" href="#блочные-элементы-div"><span>Блочные элементы: <code>div</code></span></a></h1><h3 id="особенности-блочных-элементов" tabindex="-1"><a class="header-anchor" href="#особенности-блочных-элементов"><span>Особенности блочных элементов</span></a></h3><ul><li>Элементы на обтекают друг друга</li><li>Ширина равна 100% от ширины родителя</li><li>Высота равна высоте контента</li><li>Можно применять свойства <code>width</code> и <code>height</code></li></ul><h3 id="внешнии-отступ-margin" tabindex="-1"><a class="header-anchor" href="#внешнии-отступ-margin"><span>Внешний отступ: <code>margin</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>                <span class="token comment">/* сверху=справа=снизу=слева=10px */</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 10px 15px 20px 25px<span class="token punctuation">;</span> <span class="token comment">/* сверху=10px, справа=15px, снизу=20px, слева=25px */</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>           <span class="token comment">/* сверху=снизу=10px, справа=слева=20px */</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>            <span class="token comment">/* отступ сверху */</span></span>
<span class="line">	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>         <span class="token comment">/* отступ снизу */</span></span>
<span class="line">	<span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>           <span class="token comment">/* отступ слева */</span></span>
<span class="line">	<span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>          <span class="token comment">/* отступ справа */</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>                <span class="token comment">/* центрирование блока по горизонтали */</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>              <span class="token comment">/* центрирование блока по горизонтали и задание отступа сверху и снизу=0 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="внутреннии-отступ-padding" tabindex="-1"><a class="header-anchor" href="#внутреннии-отступ-padding"><span>Внутренний отступ: <code>padding</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>                <span class="token comment">/* сверху=справа=снизу=слева=10px */</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px 20px 25px<span class="token punctuation">;</span> <span class="token comment">/* сверху=10px, справа=15px, снизу=20px, слева=25px */</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>           <span class="token comment">/* сверху=снизу=10px, справа=слева=20px */</span></span>
<span class="line">	<span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>            <span class="token comment">/* отступ сверху */</span></span>
<span class="line">	<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>         <span class="token comment">/* отступ снизу */</span></span>
<span class="line">	<span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>           <span class="token comment">/* отступ слева */</span></span>
<span class="line">	<span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>          <span class="token comment">/* отступ справа */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="обнуление-margin-и-padding-у-body" tabindex="-1"><a class="header-anchor" href="#обнуление-margin-и-padding-у-body"><span>Обнуление <code>margin</code> и <code>padding</code> у <code>body</code></span></a></h4><ul><li>По умолчанию у <code>body</code> есть отступы</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span> </span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> </span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="ширина-width" tabindex="-1"><a class="header-anchor" href="#ширина-width"><span>Ширина: <code>width</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>      <span class="token comment">/* Щирина */</span></span>
<span class="line">	<span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>  <span class="token comment">/* Максимальная ширина */</span></span>
<span class="line">	<span class="token property">min-width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>  <span class="token comment">/* Минимальная ширина  */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="высота-height" tabindex="-1"><a class="header-anchor" href="#высота-height"><span>Высота: <code>height</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>      <span class="token comment">/* Высота */</span></span>
<span class="line">	<span class="token property">max-height</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>  <span class="token comment">/* Максимальная высота */</span></span>
<span class="line">	<span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>  <span class="token comment">/* Минимальная высота */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="рамка-border-border-radius" tabindex="-1"><a class="header-anchor" href="#рамка-border-border-radius"><span>Рамка: <code>border</code>, <code>border-radius</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>           <span class="token comment">/* Рамка 2px сплошная оранжевая */</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>      <span class="token comment">/* Рамка 2px сплошная прозрачная */</span></span>
<span class="line">	<span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>       <span class="token comment">/* Рамка сверху */</span></span>
<span class="line">	<span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>    <span class="token comment">/* Рамка снизу */</span></span>
<span class="line">	<span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>      <span class="token comment">/* Рамка слева */</span></span>
<span class="line">	<span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>     <span class="token comment">/* Рамка справа */</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>                <span class="token comment">/* Радиус для всех четырёх углов */</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>           <span class="token comment">/* Радиус верхнего левого и нижнего правого уголков = 10px, верхнего правого и нижнего левого углов = 15px; */</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 15px 20px 25px<span class="token punctuation">;</span> <span class="token comment">/* По очереди устанавливает радиус для верхнего левого, верхнего правого, нижнего правого и нижнего левого углов */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="обводка-outline" tabindex="-1"><a class="header-anchor" href="#обводка-outline"><span>Обводка: <code>outline</code></span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">outline</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span> <span class="token comment">/* Обводка 2px сплошная оранжевая */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="тень-у-блоков-box-shadow" tabindex="-1"><a class="header-anchor" href="#тень-у-блоков-box-shadow"><span>Тень у блоков: <code>box-shadow</code></span></a></h3><ul><li><code>1px</code> - смещение по горизонтали</li><li><code>2px</code> - смещени по вертикали</li><li><code>3px</code> - размытие</li><li><code>4px</code> - толщина</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 2px 3px 4px blue<span class="token punctuation">;</span>       <span class="token comment">/* Внешняя тень */</span></span>
<span class="line">	<span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 1px 2px 3px 4px blue<span class="token punctuation">;</span> <span class="token comment">/* Внутренняя тень */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="задание-нескольких-тенеи" tabindex="-1"><a class="header-anchor" href="#задание-нескольких-тенеи"><span>Задание нескольких теней</span></a></h4><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">box-shadow</span><span class="token punctuation">:</span></span>
<span class="line">	    0 0 0 5px red<span class="token punctuation">,</span></span>
<span class="line">	    0 0 0 10px green<span class="token punctuation">,</span></span>
<span class="line">	    0 0 0 15px blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="примеры-тенеи-у-блоков" tabindex="-1"><a class="header-anchor" href="#примеры-тенеи-у-блоков"><span>Примеры теней у блоков</span></a></h4>`,24),i=s(`<h3 id="css-overflow" tabindex="-1"><a class="header-anchor" href="#css-overflow"><span>CSS Overflow</span></a></h3><ul><li>Свойство <code>overflow</code> управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>   <span class="token comment">/* Добавление полос прокрутки, если контент не помешается в блок */</span></span>
<span class="line">	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* Обрезка контента, если контент не помешается в блок */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3);function r(d,u){const n=p("v-iframe");return t(),e("div",null,[l,c(n,{height:"350",src:"https://codepen.io/Sergeenkov/embed/pYypGp?height=265&theme-id=default&default-tab=html,result"}),i])}const h=a(o,[["render",r],["__file","block.html.vue"]]),m=JSON.parse('{"path":"/themes/learn/html/basic/block.html","title":"Блочные элементы: div","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Особенности блочных элементов","slug":"особенности-блочных-элементов","link":"#особенности-блочных-элементов","children":[]},{"level":3,"title":"Внешний отступ: margin","slug":"внешнии-отступ-margin","link":"#внешнии-отступ-margin","children":[]},{"level":3,"title":"Внутренний отступ: padding","slug":"внутреннии-отступ-padding","link":"#внутреннии-отступ-padding","children":[]},{"level":3,"title":"Ширина: width","slug":"ширина-width","link":"#ширина-width","children":[]},{"level":3,"title":"Высота: height","slug":"высота-height","link":"#высота-height","children":[]},{"level":3,"title":"Рамка: border, border-radius","slug":"рамка-border-border-radius","link":"#рамка-border-border-radius","children":[]},{"level":3,"title":"Обводка: outline","slug":"обводка-outline","link":"#обводка-outline","children":[]},{"level":3,"title":"Тень у блоков: box-shadow","slug":"тень-у-блоков-box-shadow","link":"#тень-у-блоков-box-shadow","children":[]},{"level":3,"title":"CSS Overflow","slug":"css-overflow","link":"#css-overflow","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/html/basic/block.md"}');export{h as comp,m as data};