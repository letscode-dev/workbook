import{_ as a,o as n,c as s,b as t}from"./app-C9uO4c8d.js";const p={},e=t(`<h1 id="выборка-элементов-формы" tabindex="-1"><a class="header-anchor" href="#выборка-элементов-формы"><span>Выборка элементов формы</span></a></h1><h3 id="input-type-text" tabindex="-1"><a class="header-anchor" href="#input-type-text"><span><code>&lt;input type=&quot;text&quot;&gt;</code></span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> element<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;new value&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="input-type-checkbox" tabindex="-1"><a class="header-anchor" href="#input-type-checkbox"><span><code>&lt;input type=&quot;checkbox&quot;&gt;</code></span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> element<span class="token punctuation">.</span>checked<span class="token punctuation">;</span> </span>
<span class="line">element<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="input-type-radio" tabindex="-1"><a class="header-anchor" href="#input-type-radio"><span><code>&lt;input type=&quot;radio&quot;&gt;</code></span></a></h3><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>r1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>r2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>r3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> radio <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=&quot;radio&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>radio<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span><span class="token punctuation">(</span>radio<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">let</span> value <span class="token operator">=</span> radio<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">radio<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>   </span>
<span class="line"></span></code></pre></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span><code>&lt;select&gt;</code></span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> select <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> select<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> select<span class="token punctuation">.</span>options<span class="token punctuation">[</span>select<span class="token punctuation">.</span>selectedIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> select<span class="token punctuation">.</span>options<span class="token punctuation">[</span>select<span class="token punctuation">.</span>selectedIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div>`,11),o=[e];function c(l,u){return n(),s("div",null,o)}const r=a(p,[["render",c],["__file","dom-form.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/js/advanced/dom-form.html","title":"Выборка элементов формы","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"<input type=\\"text\\">","slug":"input-type-text","link":"#input-type-text","children":[]},{"level":3,"title":"<input type=\\"checkbox\\">","slug":"input-type-checkbox","link":"#input-type-checkbox","children":[]},{"level":3,"title":"<input type=\\"radio\\">","slug":"input-type-radio","link":"#input-type-radio","children":[]},{"level":3,"title":"<select>","slug":"select","link":"#select","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"themes/learn/js/advanced/dom-form.md"}');export{r as comp,k as data};
