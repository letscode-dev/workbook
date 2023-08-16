import{_ as o,o as p,c as x,f as n,a as s,b as a,e as t}from"./app-108d57de.js";const e={},c=s("h1",{id:"операторы-разворота",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#операторы-разворота","aria-hidden":"true"},"#"),a(" Операторы разворота")],-1),r=s("h3",{id:"операторы-разворота-массивов",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#операторы-разворота-массивов","aria-hidden":"true"},"#"),a(" Операторы разворота массивов")],-1),l=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Kate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Natasha&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; [&quot;Kate&quot;, &quot;Jack&quot;, &quot;Tom&quot;, &quot;Tony&quot;, &quot;Natasha&quot;]</span>
</code></pre></div>`,1),u=s("h3",{id:"операторы-разворота-объектов",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#операторы-разворота-объектов","aria-hidden":"true"},"#"),a(" Операторы разворота объектов")],-1),k=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Более высокий приоритет</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;qwerty&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaults<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// user из options перезапишет user из defaults</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// =&gt;</span>
<span class="token comment">// {</span>
<span class="token comment">// 	host: &#39;localhost&#39;,</span>
<span class="token comment">// 	user: &#39;Tony&#39;,</span>
<span class="token comment">// 	password: &#39;qwerty&#39;</span>
<span class="token comment">// }</span>
</code></pre></div>`,1);function i(d,h){return p(),x("div",null,[c,n(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),r,n(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),l,n(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),u,n(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),k])}const _=o(e,[["render",i],["__file","spread.html.vue"]]);export{_ as default};
