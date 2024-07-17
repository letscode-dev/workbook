import{_ as a,r as n,o as e,c as p,d as t,a as c}from"./app-BS_Q0RPl.js";const o={},l=c(`<h1 id="css-shapes" tabindex="-1"><a class="header-anchor" href="#css-shapes"><span>CSS Shapes</span></a></h1><p><a href="https://webformyself.com/vvedenie-v-css-shapes/" target="_blank" rel="noopener noreferrer">Введение в CSS Shapes</a></p><ul><li><code>CSS Shapes</code> - позволяют определять геометрические фигуры, вокруг которых может обтекать текст</li><li>Shape работают только для <u>float</u> элементов у которых определена ширина и высота</li></ul><h3 id="спецификации" tabindex="-1"><a class="header-anchor" href="#спецификации"><span>Спецификации</span></a></h3><ul><li><strong>CSS Shapes Level 1</strong> - поддерживается</li><li><code>shape-outside</code> - определяет фигуру, вокруг которой может обтекать текст</li><li><strong>CSS Shapes Level 2</strong> - не поддерживается</li><li><code>shape-inside</code> - связано с текстом, содержащимся внутри фигуры</li></ul><h3 id="css-shapes-level-1-своиства" tabindex="-1"><a class="header-anchor" href="#css-shapes-level-1-своиства"><span>CSS Shapes Level 1: Свойства</span></a></h3><ul><li><code>shape-outside</code> - задание фигуры</li><li><code>shape-margin</code> - margin от shape до контента</li><li><code>shape-image-threshold</code> - определяется пороговое значение альфа - канала фигуры, или какой процент изображения может быть прозрачным. Альфа канал для обрезки по изображению</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token property">shape-margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-image-threshold</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="фигуры" tabindex="-1"><a class="header-anchor" href="#фигуры"><span>Фигуры</span></a></h3><h4 id="_1-окружность" tabindex="-1"><a class="header-anchor" href="#_1-окружность"><span>1. Окружность</span></a></h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><strong><code>shape-outside: circle (r at x y)</code></strong> - Окружность</li><li><code>r</code> - радиус (по умолчанию 50%)</li><li><code>at</code> - задание позиции</li><li><code>x</code> - позиция по горизонтали (по умолчанию 50%)</li><li><code>y</code> - позиция по вертикали (по умолчанию 50%)</li></ul></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> == <span class="token function">circle</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span></span>
<span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50% at 50% 50%<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-эллипс" tabindex="-1"><a class="header-anchor" href="#_2-эллипс"><span>2. Эллипс</span></a></h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><strong><code>shape-outside: ellipse (rx ry at x y)</code></strong> - Эллипс</li><li><code>rx</code> - радиус по оси &quot;x&quot; (по умолчанию 50%)</li><li><code>ry</code> - радиус по оси &quot;y&quot; (по умолчанию 50%)</li><li><code>at</code> - задание позиции</li><li><code>x</code> - позиция по горизонтали (по умолчанию 50%)</li><li><code>y</code> - позиция по вертикали (по умолчанию 50%)</li></ul></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>50% 50% at 50% 50%<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_3-прямоугольник" tabindex="-1"><a class="header-anchor" href="#_3-прямоугольник"><span>3. Прямоугольник</span></a></h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><strong><code>shape-outside: inset (top right bottom left round 10px)</code></strong> - Прямоугольник внутри Shape</li><li><code>top</code> - отступ сверху</li><li><code>right</code> - отступ справа</li><li><code>bottom</code> - отступ снизу</li><li><code>left</code> - отступ слева</li><li><code>round</code> - border-radius</li><li><code>10px</code> - закругление</li></ul></div><ul><li><code>inset(10px)</code> - задает одинаковые отступы по 10px со всех сторон</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>10px 10px 10px 10px<span class="token punctuation">)</span> == <span class="token function">inset</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_4-полигон" tabindex="-1"><a class="header-anchor" href="#_4-полигон"><span>4. Полигон</span></a></h4><ul><li>Может принимать массив точек x и y для создания любой сложной фигуры. Каждый элемент в массиве представляет <code>xi</code> <code>yi</code> и будет записан как <code>polygon(x1 y1, x2 y2, x3 y3)</code> и т.д.</li><li>Наименьшее количество наборов точек, которые мы можем применить к многоугольнику, составляет три, что дает треугольник</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><strong><code>shape-outside: polygon (p1, p2, p3 ...)</code></strong> -Полигон</li><li><code>p1</code> - xi yi-координаты</li></ul></div><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 100px 200px<span class="token punctuation">,</span> 0 200px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h5 id="расширения-браузеров-для-корректировки-фигур" tabindex="-1"><a class="header-anchor" href="#расширения-браузеров-для-корректировки-фигур"><span>Расширения браузеров для корректировки фигур</span></a></h5><ul><li>Firefox имеет встроенный редактор для фигур</li><li><a href="https://chrome.google.com/webstore/detail/css-shapes-editor/nenndldnbcncjmeacmnondmkkfedmgmp?hl=en-US" target="_blank" rel="noopener noreferrer">CSS Shapes Editor для Chrome</a></li></ul><h4 id="_5-изображение" tabindex="-1"><a class="header-anchor" href="#_5-изображение"><span>5. Изображение</span></a></h4><ul><li>Текст формируется по границе <code>SVG/PNG</code> изображения. Текст учитывает, какие области являются прозрачными, а какие непрозрачными, и соответствующим образом выравнивается</li><li>Используемое изображение должно быть CORS совместимым</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>image.png<span class="token punctuation">)</span></span></span>
<span class="line"></span></code></pre></div><h4 id="_6-градиент" tabindex="-1"><a class="header-anchor" href="#_6-градиент"><span>6. Градиент</span></a></h4><ul><li>Градиенты - это также изображения, и точно так же, как с изображением, текст будет обтекать прозрачную часть</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> 150px<span class="token punctuation">,</span> red 150px<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><ul><li>В примере задан градиент, в котором цвет и прозрачность соотносятся, как <code>50% / 50%</code>, и установить для <code>shape-image-threshold - .5</code></li><li>Т.е. все пиксели, которые более чем на 50% непрозрачны следует рассматривать как часть изображения</li></ul><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">shape-image-threshold</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> #2bf0a5<span class="token punctuation">,</span> transparent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> #2bf0a5<span class="token punctuation">,</span> transparent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры"><span>Примеры</span></a></h3>`,34);function i(u,r){const s=n("v-iframe");return e(),p("div",null,[l,t(s,{height:"450",src:"https://codepen.io/Sergeenkov/embed/bGEbXxM?height=245&theme-id=dark&default-tab=html,result"})])}const h=a(o,[["render",i],["__file","css-shapes.html.vue"]]),k=JSON.parse('{"path":"/themes/learn/html/transform/css-shapes.html","title":"CSS Shapes","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Спецификации","slug":"спецификации","link":"#спецификации","children":[]},{"level":3,"title":"CSS Shapes Level 1: Свойства","slug":"css-shapes-level-1-своиства","link":"#css-shapes-level-1-своиства","children":[]},{"level":3,"title":"Фигуры","slug":"фигуры","link":"#фигуры","children":[]},{"level":3,"title":"Примеры","slug":"примеры","link":"#примеры","children":[]}],"git":{"updatedTime":1720968190000,"contributors":[{"name":"Anton","email":"45148047+anton-sergeenkov@users.noreply.github.com","commits":1}]},"filePathRelative":"themes/learn/html/transform/css-shapes.md"}');export{h as comp,k as data};