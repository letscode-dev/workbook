import{_ as t,o as e,c as p,f as a,a as n,b as s,e as x}from"./app-936f69c4.js";const o={},c=n("h1",{id:"создание-элементов",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#создание-элементов","aria-hidden":"true"},"#"),s(" Создание элементов")],-1),u=n("h3",{id:"создание",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#создание","aria-hidden":"true"},"#"),s(" Создание")],-1),l=x(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Go to google&#39;</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;class-google&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,1),i=n("h3",{id:"добавление-на-страницу",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#добавление-на-страницу","aria-hidden":"true"},"#"),s(" Добавление на страницу")],-1),r=x(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> wrapper <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#wrapper&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Внутри элемента после контента</span>
wrapper<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Внутри элемента перед контентом</span>
wrapper<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> wrapper<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// После элемента</span>
wrapper<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// До элемента</span>
wrapper<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Заменить элемент другим элементом</span>
wrapper<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// insertBefore (1 - элемент который вставляем, 2 - элемент перед которым вставляем)</span>
<span class="token comment">// insertBefore (1 - чем заменяем, 2 - что заменяем)</span>
</code></pre></div>`,1),k=n("h3",{id:"удаление",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#удаление","aria-hidden":"true"},"#"),s(" Удаление")],-1),d=x(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Удаление нового элемента</span>
wrapper<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Удаление элемента обертки</span>
wrapper<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Удаление нового элемента (если родитель body)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function m(h,f){return e(),p("div",null,[c,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),u,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),l,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),i,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),r,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d])}const g=t(o,[["render",m],["__file","create-element.html.vue"]]);export{g as default};
