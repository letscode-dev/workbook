import{_ as p,o,c,f as n,e as a,a as s,b as t}from"./app-1d00ddda.js";const e={},u=a(`<h1 id="инкремент-и-декремент" tabindex="-1"><a class="header-anchor" href="#инкремент-и-декремент" aria-hidden="true">#</a> Инкремент и декремент</h1><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

index<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// Увеличивает на 1 после выполнения действия</span>
index<span class="token operator">--</span><span class="token punctuation">;</span>  <span class="token comment">// Уменьшает на 1 после выполнения действия</span>
<span class="token operator">++</span>index<span class="token punctuation">;</span>  <span class="token comment">// Увеличивает на 1 до выполнения действия</span>
<span class="token operator">--</span>index<span class="token punctuation">;</span>  <span class="token comment">// Уменьшает на 1 до выполнения действия</span>
</code></pre></div>`,2),l=s("h4",{id:"пример-на-инкремент",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#пример-на-инкремент","aria-hidden":"true"},"#"),t(" Пример на инкремент")],-1),i=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Johnny&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Первый вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// =&gt; &quot;Tony&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после первого вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 0</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Второй вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">// =&gt; &quot;Tony&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после второго вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Третий вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token operator">++</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// =&gt; &quot;Johnny&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после третьего вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 2</span>
</code></pre></div>`,1),k=s("h4",{id:"пример-на-декремент",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#пример-на-декремент","aria-hidden":"true"},"#"),t(" Пример на декремент")],-1),r=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Johnny&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Первый вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// =&gt; &quot;Johnny&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после первого вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 2</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Второй вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">// =&gt; &quot;Johnny&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после второго вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Третий вызов&#39;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token operator">--</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// =&gt; &quot;Tony&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Значение index после третьего вызова&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 0</span>
</code></pre></div>`,1);function d(g,m){return o(),c("div",null,[u,n("---------------------------------------------------------"),l,n("---------------------------------------------------------"),i,n("---------------------------------------------------------"),k,n("---------------------------------------------------------"),r])}const h=p(e,[["render",d],["__file","increment.html.vue"]]);export{h as default};
