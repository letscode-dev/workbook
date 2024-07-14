import{_ as l,r as a,o,c as i,e as t,w as p,b as u,a as s,d as n}from"./app-C9uO4c8d.js";const r={},k=u(`<h1 id="css-фильтры" tabindex="-1"><a class="header-anchor" href="#css-фильтры"><span>CSS фильтры</span></a></h1><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* Размытие (напрямую к body применить нельзя) */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* Яркость, 100% по умолчанию */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">/* Контрастность, 100% по умолчанию */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>70%<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">/* Черно-белое, 0% по умолчанию */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Поворот оттенка, определяет угол, 0deg по умолчанию */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* Инвертирование */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">opacity</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* Прозрачность */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">/* Изменение насыщенности */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">/* Сепия */</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">/* Добавляет тень к изображениям, учитывая прозрачные участки */</span></span>
<span class="line">	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>10px 10px 3px orange<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Можно применять несколько фильтров. Первый фильтр применяется к исходному изображению, а остальные к предыдущему</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span> <span class="token function">sepia</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div></div><h3 id="backdrop-filter" tabindex="-1"><a class="header-anchor" href="#backdrop-filter"><span>backdrop-filter</span></a></h3><ul><li>Аналогичен <code>filter</code>, но работает только с фоном, не трогая сам элемент</li><li>Значения такие же как у <code>filter</code></li></ul>`,6),d=s("div",{class:"language-css","data-highlighter":"prismjs","data-ext":"css","data-title":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},"div"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("	"),s("span",{class:"token property"},"backdrop-filter"),s("span",{class:"token punctuation"},":"),n(),s("span",{class:"token function"},"blur"),s("span",{class:"token punctuation"},"("),n("10px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])])],-1),f=s("div",{class:"language-css","data-highlighter":"prismjs","data-ext":"css","data-title":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},"div"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("	"),s("span",{class:"token property"},"filter"),s("span",{class:"token punctuation"},":"),n(),s("span",{class:"token function"},"blur"),s("span",{class:"token punctuation"},"("),n("10px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])])],-1),h=s("h3",{id:"примеры",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#примеры"},[s("span",null,"Примеры")])],-1),m=s("h4",{id:"пример-сравнения-filter-и-backdrop-filter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#пример-сравнения-filter-и-backdrop-filter"},[s("span",null,"Пример сравнения filter и backdrop-filter")])],-1);function g(_,b){const e=a("v-two"),c=a("v-iframe");return o(),i("div",null,[k,t(e,null,{first:p(()=>[d]),last:p(()=>[f]),_:1}),h,m,t(c,{height:"350",src:"https://codepen.io/Sergeenkov/embed/WNQXYyw?height=265&theme-id=dark&default-tab=css,result"})])}const x=l(r,[["render",g],["__file","filters.html.vue"]]),y=JSON.parse('{"path":"/themes/learn/html/transform/filters.html","title":"CSS фильтры","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"backdrop-filter","slug":"backdrop-filter","link":"#backdrop-filter","children":[]},{"level":3,"title":"Примеры","slug":"примеры","link":"#примеры","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/html/transform/filters.md"}');export{x as comp,y as data};