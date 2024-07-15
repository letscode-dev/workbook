import{_ as s,o as a,c as n,a as e}from"./app-DMxIp5QW.js";const p={},t=e(`<h1 id="node-js-и-npm" tabindex="-1"><a class="header-anchor" href="#node-js-и-npm"><span>Node.js и NPM</span></a></h1><ul><li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></li><li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a></li></ul><hr><ul><li><code>Node.js</code> - программная платформа для JavaScript</li><li><code>NPM (Node.js Package Manager)</code> - менеджер пакетов, входящий в состав Node.js</li></ul><h3 id="команды" tabindex="-1"><a class="header-anchor" href="#команды"><span>Команды</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> init    <span class="token comment"># Инициализация проекта (создание package.json)</span></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span> <span class="token comment"># Инициализация проекта с параметрами по умолчанию</span></span>
<span class="line"><span class="token function">npm</span> i       <span class="token comment"># Установить все пакеты из package.json</span></span>
<span class="line"><span class="token function">npm</span> up      <span class="token comment"># Обновить все пакеты из package.json</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">--save</span> package     <span class="token comment"># Установить package и добавить запись в секцию dependencies package.json </span></span>
<span class="line"><span class="token function">npm</span> i --save-dev package <span class="token comment"># Установить package и добавить запись в секцию devDependencies package.json</span></span>
<span class="line"><span class="token function">npm</span> i <span class="token parameter variable">--g</span> package        <span class="token comment"># Установить package глобально</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> r package   <span class="token comment"># Удалить package</span></span>
<span class="line"><span class="token function">npm</span> up package  <span class="token comment"># Обновить package</span></span>
<span class="line"><span class="token function">npm</span> run package <span class="token comment"># Запустить package</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> run start <span class="token comment"># Запустить скрипт &quot;start&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>package.json</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// package.json для Parcel</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Название приложения</span></span>
<span class="line">	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// Версия приложения                             </span></span>
<span class="line">	<span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// Скрипт для приложения                       </span></span>
<span class="line">	<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// Зависимости</span></span>
<span class="line">	<span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// Зависимости для разработки</span></span>
<span class="line">	<span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,11),c=[t];function o(l,i){return a(),n("div",null,c)}const k=s(p,[["render",o],["__file","nodejs.html.vue"]]),d=JSON.parse('{"path":"/themes/learn/js/bundlers/nodejs.html","title":"Node.js и NPM","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Команды","slug":"команды","link":"#команды","children":[]},{"level":3,"title":"package.json","slug":"package-json","link":"#package-json","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/bundlers/nodejs.md"}');export{k as comp,d as data};
