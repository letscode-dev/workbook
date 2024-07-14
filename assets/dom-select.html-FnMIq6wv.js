import{_ as s,o as n,c as a,b as t}from"./app-C9uO4c8d.js";const e="/workbook/assets/dom-WiGccQXr.jpg",p={},c=t('<h1 id="выборка-элементов-страницы" tabindex="-1"><a class="header-anchor" href="#выборка-элементов-страницы"><span>Выборка элементов страницы</span></a></h1><h3 id="объектная-модель-представления-документа" tabindex="-1"><a class="header-anchor" href="#объектная-модель-представления-документа"><span>Объектная модель представления документа</span></a></h3><ul><li><code>DOM</code> (Document Object Model) - объектная модель представления документа</li><li>Независящий от платформы и языка программирования способ представления документа, позволяющий программам и скриптам получить доступ к содержимому HTML, XHTML и XML документов, а также изменять содержимое, структуру и оформление таких документов</li><li>Всё содержимое документа представлено в виде иерархии объектов</li><li>Структура этой иерархии стандартизирована, чтобы обеспечить независимость от платформы</li></ul><h3 id="структура-dom-документа" tabindex="-1"><a class="header-anchor" href="#структура-dom-документа"><span>Структура DOM документа</span></a></h3><img src="'+e+`" style="width:450px;"><h3 id="выборка-элементов-страницы-1" tabindex="-1"><a class="header-anchor" href="#выборка-элементов-страницы-1"><span>Выборка элементов страницы</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.nav.bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Возвращает первый элемент внутри документа</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.nav&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Возвращает список элементов в пределах документа</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// По id</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// По названию класса (первый элемент)</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// По атрибуту name</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// По названию тега (все элементы)</span></span>
<span class="line"></span></code></pre></div>`,8),o=[c];function l(i,u){return n(),a("div",null,o)}const k=s(p,[["render",l],["__file","dom-select.html.vue"]]),d=JSON.parse('{"path":"/themes/learn/js/basic/dom-select.html","title":"Выборка элементов страницы","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Объектная модель представления документа","slug":"объектная-модель-представления-документа","link":"#объектная-модель-представления-документа","children":[]},{"level":3,"title":"Структура DOM документа","slug":"структура-dom-документа","link":"#структура-dom-документа","children":[]},{"level":3,"title":"Выборка элементов страницы","slug":"выборка-элементов-страницы-1","link":"#выборка-элементов-страницы-1","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/js/basic/dom-select.md"}');export{k as comp,d as data};
