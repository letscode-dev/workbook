import{_ as p,r as x,o as c,c as r,a as n,b as a,d as t,f as s,e as o}from"./app-5ffc5dde.js";const l={},i=n("h1",{id:"node-js-и-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node-js-и-npm","aria-hidden":"true"},"#"),a(" Node.js и NPM")],-1),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},d=n("hr",null,null,-1),m=n("ul",null,[n("li",null,[n("code",null,"Node.js"),a(" - программная платформа для JavaScript")]),n("li",null,[n("code",null,"NPM (Node.js Package Manager)"),a(" - менеджер пакетов, входящий в состав Node.js")])],-1),g=n("h3",{id:"команды",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#команды","aria-hidden":"true"},"#"),a(" Команды")],-1),h=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init    <span class="token comment"># Инициализация проекта (создание package.json)</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span> <span class="token comment"># Инициализация проекта с параметрами по умолчанию</span>
<span class="token function">npm</span> i       <span class="token comment"># Установить все пакеты из package.json</span>
<span class="token function">npm</span> up      <span class="token comment"># Обновить все пакеты из package.json</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--save</span> package     <span class="token comment"># Установить package и добавить запись в секцию dependencies package.json </span>
<span class="token function">npm</span> i --save-dev package <span class="token comment"># Установить package и добавить запись в секцию devDependencies package.json</span>
<span class="token function">npm</span> i <span class="token parameter variable">--g</span> package        <span class="token comment"># Установить package глобально</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> r package   <span class="token comment"># Удалить package</span>
<span class="token function">npm</span> up package  <span class="token comment"># Обновить package</span>
<span class="token function">npm</span> run package <span class="token comment"># Запустить package</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start <span class="token comment"># Запустить скрипт &quot;start&quot;</span>
</code></pre></div>`,4),_=n("h3",{id:"package-json",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#package-json","aria-hidden":"true"},"#"),a(" package.json")],-1),f=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// package.json для Parcel</span>
<span class="token punctuation">{</span>
	<span class="token comment">// Название приложения</span>
	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>

	<span class="token comment">// Версия приложения                             </span>
	<span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>

	<span class="token comment">// Скрипт для приложения                       </span>
	<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// Зависимости</span>
	<span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// Зависимости для разработки</span>
	<span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function v(j,q){const e=x("ExternalLinkIcon");return c(),r("div",null,[i,n("ul",null,[n("li",null,[n("a",u,[a("Node.js"),t(e)])]),n("li",null,[n("a",k,[a("NPM"),t(e)])])]),d,m,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),g,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),h,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),_,s(" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "),f])}const y=p(l,[["render",v],["__file","nodejs.html.vue"]]);export{y as default};
