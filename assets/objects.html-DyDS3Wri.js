import{_ as n,o as s,c as a,a as t}from"./app-Cnl6SgT-.js";const p="/workbook/assets/object-B29-CC_L.png",e={},o=t('<h1 id="объекты" tabindex="-1"><a class="header-anchor" href="#объекты"><span>Объекты</span></a></h1><img src="'+p+`" style="width:650px;"><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;tony@mail.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">&#39;555 Some st&#39;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Boston&#39;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>email<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>address<span class="token punctuation">.</span>street<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="цикл-for-in-для-перебора-ключеи-объекта" tabindex="-1"><a class="header-anchor" href="#цикл-for-in-для-перебора-ключеи-объекта"><span>Цикл <code>for..in</code> для перебора ключей объекта</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// Ключи </span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Значения</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre></div>`,5),c=[o];function l(i,r){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","objects.html.vue"]]),d=JSON.parse('{"path":"/themes/learn/js/paradigms/objects.html","title":"Объекты","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Цикл for..in для перебора ключей объекта","slug":"цикл-for-in-для-перебора-ключеи-объекта","link":"#цикл-for-in-для-перебора-ключеи-объекта","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/paradigms/objects.md"}');export{k as comp,d as data};