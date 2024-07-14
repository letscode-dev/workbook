import{_ as s,o as n,c as a,a as t}from"./app-DMxIp5QW.js";const e={},p=t(`<h1 id="псевдоклассы-hover-not-focus-active-visited-link" tabindex="-1"><a class="header-anchor" href="#псевдоклассы-hover-not-focus-active-visited-link"><span>Псевдоклассы (hover, not, focus, active, visited, link)</span></a></h1><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">a</span><span class="token punctuation">:</span>hover       <span class="token comment">/* Наведение на элемент */</span></span>
<span class="line"><span class="token property">a</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>hover<span class="token punctuation">)</span> <span class="token comment">/* Увод с элемента */</span></span>
<span class="line"><span class="token property">a</span><span class="token punctuation">:</span>active      <span class="token comment">/* Активный элемент */</span></span>
<span class="line"><span class="token property">a</span><span class="token punctuation">:</span>focus       <span class="token comment">/* Элемент в фокусе */</span></span>
<span class="line"><span class="token property">a</span><span class="token punctuation">:</span>visited     <span class="token comment">/* Посещеннае ссылки */</span></span>
<span class="line"><span class="token property">a</span><span class="token punctuation">:</span>link        <span class="token comment">/* Не посещенные ссылки */</span></span>
<span class="line"></span></code></pre></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">transition</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">a:not(:hover)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">transition</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3),o=[p];function c(l,i){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","hover.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/html/pseudo/hover.html","title":"Псевдоклассы (hover, not, focus, active, visited, link)","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/html/pseudo/hover.md"}');export{u as comp,k as data};