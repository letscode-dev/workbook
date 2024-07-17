import{_ as s,o as a,c as n,a as t}from"./app-DKm6lmEq.js";const p={},e=t(`<h1 id="parcel" tabindex="-1"><a class="header-anchor" href="#parcel"><span>Parcel</span></a></h1><p><a href="https://parceljs.org/getting_started.html" target="_blank" rel="noopener noreferrer">Parcel: Documentation</a></p><h4 id="структура-проекта" tabindex="-1"><a class="header-anchor" href="#структура-проекта"><span>Структура проекта</span></a></h4><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">+ public</span>
<span class="line">	- favicon.png</span>
<span class="line">	- index.html</span>
<span class="line">+ src</span>
<span class="line">	- index.js</span>
<span class="line">- .gitignore</span>
<span class="line">- package.json</span>
<span class="line"></span></code></pre></div><h4 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html"><span>index.html</span></a></h4><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	...</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../src/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre></div><h4 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>package.json</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// package.json для Parcel</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel public/index.html --open&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel build public/index.html&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;axios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.19.2&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;parcel-bundler&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.12.4&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h4 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore"><span>.gitignore</span></a></h4><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .gitignore для Parcel</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">/</span><span class="token punctuation">.</span>cache</span>
<span class="line"><span class="token operator">/</span>dist</span>
<span class="line"><span class="token operator">/</span>node_modules</span>
<span class="line"></span></code></pre></div>`,10),l=[e];function o(c,i){return a(),n("div",null,l)}const u=s(p,[["render",o],["__file","parcel.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/js/bundlers/parcel.html","title":"Parcel","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/bundlers/parcel.md"}');export{u as comp,k as data};
