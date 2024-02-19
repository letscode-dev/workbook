import{_ as e,r as o,o as c,c as r,a as n,b as s,d as l,f as a,e as t}from"./app-27e1038e.js";const i={},u=n("h1",{id:"parcel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#parcel","aria-hidden":"true"},"#"),s(" Parcel")],-1),k={href:"https://parceljs.org/getting_started.html",target:"_blank",rel:"noopener noreferrer"},d=n("h4",{id:"структура-проекта",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#структура-проекта","aria-hidden":"true"},"#"),s(" Структура проекта")],-1),g=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`+ public
	- favicon.png
	- index.html
+ src
	- index.js
- .gitignore
- package.json
`)])],-1),h=n("h4",{id:"index-html",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#index-html","aria-hidden":"true"},"#"),s(" index.html")],-1),_=t(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../src/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),q=n("h4",{id:"package-json",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#package-json","aria-hidden":"true"},"#"),s(" package.json")],-1),m=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// package.json для Parcel</span>
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel public/index.html --open&quot;</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parcel build public/index.html&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;axios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.19.2&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;parcel-bundler&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.12.4&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),x=n("h4",{id:"gitignore",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitignore","aria-hidden":"true"},"#"),s(" .gitignore")],-1),y=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .gitignore для Parcel</span>

<span class="token operator">/</span><span class="token punctuation">.</span>cache
<span class="token operator">/</span>dist
<span class="token operator">/</span>node_modules
</code></pre></div>`,1);function v(b,f){const p=o("ExternalLinkIcon");return c(),r("div",null,[u,n("p",null,[n("a",k,[s("Parcel: Documentation"),l(p)])]),a("---------------------------------------------------------"),d,a("---------------------------------------------------------"),g,a("---------------------------------------------------------"),h,a("---------------------------------------------------------"),_,a("---------------------------------------------------------"),q,a("---------------------------------------------------------"),m,a("---------------------------------------------------------"),x,a("---------------------------------------------------------"),y])}const N=e(i,[["render",v],["__file","parcel.html.vue"]]);export{N as default};
