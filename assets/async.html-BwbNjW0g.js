import{_ as e,r as c,o,c as l,d as p,w as a,b as n,a as i,e as s}from"./app-BS_Q0RPl.js";const u={},k=n("h1",{id:"async-function-es2017",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#async-function-es2017"},[n("span",null,"Async Function (ES2017)")])],-1),r=n("h3",{id:"объявление",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#объявление"},[n("span",null,"Объявление")])],-1),d=n("div",{class:"language-javascript","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// Стрелочная")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"foo"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"AsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"})])])],-1),h=n("div",{class:"language-javascript","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// Обычная")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"AsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("  ")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"})])])],-1),g=n("div",{class:"language-javascript","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// Стрелочная")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"AsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"})])])],-1),m=n("div",{class:"language-javascript","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// Обычная")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"AsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"})])])],-1),y=i(`<h3 id="описание" tabindex="-1"><a class="header-anchor" href="#описание"><span>Описание</span></a></h3><ul><li><code>Async Function</code> - асинхронная функция (<code>Promise</code> + <code>Generator</code>)</li><li>Асинхронная функция возвращает <u>Promise</u>, для получения значения используется then</li><li>await дожидается выполнения <u>Promise</u>, вытаскивает значение и возвращает его</li><li>await можно использовать только внутри асинхронной функции</li><li>await необязательно ставить перед вызовом асинхронной фунцкии. это может быть любая функция, возвращающая <u>Promise</u></li></ul><h3 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры"><span>Примеры</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// AJAX-запрос</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getResource</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&#39;https://swapi.co/api/people/1/&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">body</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Асинхронная функция</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>   </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h3 id="использование-в-классах-и-объектах" tabindex="-1"><a class="header-anchor" href="#использование-в-классах-и-объектах"><span>Использование в классах и объектах</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Свойство объекта</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">getUser</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Метод объекта</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Класс</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Obj</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,9);function w(f,j){const t=c("v-two");return o(),l("div",null,[k,r,p(t,null,{first:a(()=>[d]),last:a(()=>[h]),_:1}),p(t,null,{first:a(()=>[g]),last:a(()=>[m]),_:1}),y])}const _=e(u,[["render",w],["__file","async.html.vue"]]),x=JSON.parse('{"path":"/themes/learn/js/async/async.html","title":"Async Function (ES2017)","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Объявление","slug":"объявление","link":"#объявление","children":[]},{"level":3,"title":"Описание","slug":"описание","link":"#описание","children":[]},{"level":3,"title":"Примеры","slug":"примеры","link":"#примеры","children":[]},{"level":3,"title":"Использование в классах и объектах","slug":"использование-в-классах-и-объектах","link":"#использование-в-классах-и-объектах","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/js/async/async.md"}');export{_ as comp,x as data};