import{_ as n,o as s,c as a,a as t}from"./app-ruJknZjQ.js";const p={},o=t(`<h1 id="local-storage" tabindex="-1"><a class="header-anchor" href="#local-storage"><span>Local Storage</span></a></h1><ul><li><code>Google Chrome</code> -&gt; <code>F12</code> -&gt; <code>Application</code> -&gt; <code>Local Storage</code></li><li><code>localStorage</code> - это свойство глобального объекта браузера (window)</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, то перезаписывает новым значением)</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;77&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Получить значение</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Удаление ключа</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Очистка всего хранилища</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h4 id="объекты-и-массивы" tabindex="-1"><a class="header-anchor" href="#объекты-и-массивы"><span>Объекты и массивы</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">item1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">item2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">item3</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Сериализация объекта и запись в хранилище по ключу &quot;key&quot;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Преобразование из json в объект</span></span>
<span class="line"><span class="token keyword">const</span> returnObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","local-storage.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/js/advanced/local-storage.html","title":"Local Storage","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/advanced/local-storage.md"}');export{r as comp,k as data};