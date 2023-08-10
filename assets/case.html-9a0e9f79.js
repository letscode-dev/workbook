import{_ as e,r as c,o as x,c as l,f as s,a as n,b as a,d as o,e as t}from"./app-1d00ddda.js";const u={},i=n("h1",{id:"условные-операторы",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#условные-операторы","aria-hidden":"true"},"#"),a(" Условные операторы")],-1),k=n("h3",{id:"операторы-сравнения",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#операторы-сравнения","aria-hidden":"true"},"#"),a(" Операторы сравнения")],-1),r=t(`<ul><li><code>=</code> - присвоить</li><li><code>==</code> - равно</li><li><code>===</code> - тождественно равно</li><li><code>!</code> - отрицание</li><li><code>!==</code> - неравно</li><li><code>&gt;</code> - больше</li><li><code>&lt;</code> - меньше</li><li><code>&gt;=</code> - больше или равно</li><li><code>&lt;=</code> - меньше или равно</li><li><code>&amp;&amp;</code> - логическое «И»</li><li><code>||</code> - логическое «ИЛИ»</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">==</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">===</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
</code></pre></div>`,2),d=n("h3",{id:"условныи-оператор-if",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#условныи-оператор-if","aria-hidden":"true"},"#"),a(" Условный оператор if")],-1),h=n("h4",{id:"одно-условие",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#одно-условие","aria-hidden":"true"},"#"),a(" Одно условие")],-1),m=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> weather <span class="token operator">=</span> <span class="token string">&#39;хорошая&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>weather <span class="token operator">===</span> <span class="token string">&#39;хорошая&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Идём гулять&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Идём в кино&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),g=n("h4",{id:"несколько-условии",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#несколько-условии","aria-hidden":"true"},"#"),a(" Несколько условий")],-1),f=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> weather <span class="token operator">=</span> <span class="token string">&#39;хорошая&#39;</span><span class="token punctuation">;</span> <span class="token comment">// хорошая погода</span>
<span class="token keyword">const</span> mood <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>         <span class="token comment">// хорошее настроение</span>

<span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>weather <span class="token operator">===</span> <span class="token string">&#39;хорошая&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>mood<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Идём гулять&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Идём в кино&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),_=n("h3",{id:"условныи-оператор-switch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#условныи-оператор-switch","aria-hidden":"true"},"#"),a(" Условный оператор switch")],-1),b=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),w={href:"https://learn.javascript.ru/ifelse#operator-voprositelnyy-znak",target:"_blank",rel:"noopener noreferrer"},v={href:"https://learn.javascript.ru/comparison",target:"_blank",rel:"noopener noreferrer"};function y(j,N){const p=c("ExternalLinkIcon");return x(),l("div",null,[i,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),r,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),d,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),s("---------------------------------------------------------"),h,s("---------------------------------------------------------"),m,s("---------------------------------------------------------"),g,s("---------------------------------------------------------"),f,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),_,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),b,n("ul",null,[n("li",null,[n("a",w,[a("Тернарный оператор"),o(p)])]),n("li",null,[n("a",v,[a("Операторы сравнения и логические значения"),o(p)])])])])}const B=e(u,[["render",y],["__file","case.html.vue"]]);export{B as default};
