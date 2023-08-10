import{_ as p,r as x,o as c,c as l,a as n,b as s,d as o,f as a,e}from"./app-43701ee7.js";const r={},i=n("h1",{id:"es6-модули-в-javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es6-модули-в-javascript","aria-hidden":"true"},"#"),s(" ES6-модули в JavaScript")],-1),k={href:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"import",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#"),s(" import")],-1),m=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Значение экспортированное по умолчанию  </span>
<span class="token keyword">import</span> MyClass <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Одно значение</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> libFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Несколько значений</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> libFunction<span class="token punctuation">,</span> libConst <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Изменение имени значения</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> libConst <span class="token keyword">as</span> name <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Импорт модуля как объекта, значениями свойств которого будут экспортированные значения (obj.libConst)</span>
<span class="token keyword">import</span> <span class="token string">&#39;./modules/lib&#39;</span> <span class="token keyword">as</span> obj<span class="token punctuation">;</span>

<span class="token comment">// Импорт модуля как объекта</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Импорт всех данных (в &quot;./modules/lib&quot; нет &quot;export&quot;), запуск кода из модуля</span>
<span class="token keyword">import</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Совмещение различных видов</span>
<span class="token keyword">import</span> MyClass<span class="token punctuation">,</span> <span class="token punctuation">{</span> libFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/lib&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,1),w=n("h3",{id:"export",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#export","aria-hidden":"true"},"#"),s(" export")],-1),y=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> MyClass<span class="token punctuation">;</span>               <span class="token comment">// Экспорт по умолчанию</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>                  <span class="token comment">// Одно значение</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> one<span class="token punctuation">,</span> two <span class="token punctuation">}</span><span class="token punctuation">;</span>                  <span class="token comment">// Несколько значений (const one, const two)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> one <span class="token keyword">as</span> once<span class="token punctuation">,</span> two <span class="token keyword">as</span> twice <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Изменение имени значения</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">libFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>libFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function _(b,h){const t=x("ExternalLinkIcon");return c(),l("div",null,[i,n("ul",null,[n("li",null,[n("a",k,[s("import"),o(t)])]),n("li",null,[n("a",u,[s("export"),o(t)])])]),a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),m,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),w,a(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),y])}const g=p(r,[["render",_],["__file","modules-es6.html.vue"]]);export{g as default};
