webpackJsonp([59467930032717],{515:function(n,s){n.exports={data:{site:{siteMetadata:{title:"iOS Astronaut's Blog 🚀",author:"Serg Dort"}},markdownRemark:{id:"/Users/sergdort/Documents/Projects/Personal/blog/src/pages/object-composition/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-cd901.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGOWMKCP//EABsQAQACAgMAAAAAAAAAAAAAAAIAAQMREiEx/9oACAEBAAEFAgyQlfCZ/F0t3P/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAICAgMAAAAAAAAAAAAAAAABESECEjEyQf/aAAgBAQAGPwJtwzW69R1bEZQcn//EABsQAAIDAQEBAAAAAAAAAAAAAAABESFBYVGR/9oACAEBAAE/IWkI0dVVCzsRHvaiqcGcpF4d30//2gAMAwEAAgADAAAAEGcv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QWf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEn/xAAcEAEAAwEBAAMAAAAAAAAAAAABABEhMWFxgZH/2gAIAQEAAT8QEybRhS8+Tk0N4PB9INDA4yifky2JLDjktE9VSoKP7T//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="error"\n        title=""\n        src="/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-f8fb9.jpg"\n        srcset="/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-e8976.jpg 148w,\n/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-63df2.jpg 295w,\n/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-f8fb9.jpg 590w,\n/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-85e3d.jpg 885w,\n/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-d1924.jpg 1180w,\n/static/space_station-d6b78f2106cc8cd9d5676d243516a66b-cd901.jpg 1400w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://en.wikipedia.org/wiki/Object_composition">Object Composition</a> is one of the most important concepts in OOP, and it’s not surprising as it’s so natural as many real-world things are essentially a composition of smaller things.</p>\n<p>In this article, I’m not going to talk about <a href="https://en.wikipedia.org/wiki/Composition_over_inheritance">why we should prefer it over inheritance</a>, but I would rather like to share an example where in my opinion <em>object composition</em> shines.</p>\n<p>Let’s say we have an interface that abstracts how <code class="language-text">URLReqeust</code> is produced</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift">protocol <span class="token builtin">Request</span> <span class="token punctuation">{</span>\n    <span class="token keyword">func</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">URLRequest</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Basic <code class="language-text">Request</code> implementation may look like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">RequestWithURL</span><span class="token punctuation">:</span> <span class="token builtin">Request</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span>\n\n    <span class="token keyword">init</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">URLRequest</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">URLRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> url<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now let’s say we want to have a <code class="language-text">Request</code> that uses <code class="language-text">POST</code> HTTP method</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">POSTRequest</span><span class="token punctuation">:</span> <span class="token builtin">Request</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> base<span class="token punctuation">:</span> <span class="token builtin">Request</span>\n\n    <span class="token keyword">init</span><span class="token punctuation">(</span>base<span class="token punctuation">:</span> <span class="token builtin">Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>base <span class="token operator">=</span> base\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">URLRequest</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> request <span class="token operator">=</span> base<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        request<span class="token punctuation">.</span>httpMethod <span class="token operator">=</span> <span class="token string">"POST"</span>\n\n        <span class="token keyword">return</span> request\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The example above benefits from using Object Composition - what we do is we use another request and simply set <code class="language-text">httpMethod</code> property to <code class="language-text">POST</code>.</p>\n<p>Now let’s create a <code class="language-text">Request</code> that sets <strong>Bearer</strong> authentication header</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">BearerRequest</span><span class="token punctuation">:</span> <span class="token builtin">Request</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> base<span class="token punctuation">:</span> <span class="token builtin">Request</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> token<span class="token punctuation">:</span> <span class="token builtin">String</span>\n\n    <span class="token keyword">init</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">,</span> base<span class="token punctuation">:</span> <span class="token builtin">Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>base <span class="token operator">=</span> base\n        <span class="token keyword">self</span><span class="token punctuation">.</span>token <span class="token operator">=</span> token\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">URLRequest</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> request <span class="token operator">=</span> base<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        request<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">"Bearer <span class="token interpolation"><span class="token delimiter variable">\\(</span>token<span class="token delimiter variable">)</span></span>"</span><span class="token punctuation">,</span> forHTTPHeaderField<span class="token punctuation">:</span> <span class="token string">"Authorization"</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> request\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As you can experience the power that this approach provides is that we can create small, very reusable types and compose them to achieve complex behavior.</p>\n<p>Let’s see it in action, for example, let’s make a composition of requests that make authenticated <code class="language-text">POST</code> request, to specific URL and sets some data to the body.</p>\n<p>For that, we need to implement additional <code class="language-text">RequestWithBody</code> type</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">RequestWithBody</span><span class="token punctuation">:</span> <span class="token builtin">Request</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> base<span class="token punctuation">:</span> <span class="token builtin">Request</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> data<span class="token punctuation">:</span> <span class="token builtin">Data</span>\n\n    <span class="token keyword">init</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token builtin">Data</span><span class="token punctuation">,</span> base<span class="token punctuation">:</span> <span class="token builtin">Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data\n        <span class="token keyword">self</span><span class="token punctuation">.</span>base <span class="token operator">=</span> base\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">URLRequest</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> request <span class="token operator">=</span> base<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        request<span class="token punctuation">.</span>httpBody <span class="token operator">=</span> data\n\n        <span class="token keyword">return</span> request\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And compose all required requests together</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token function">BearerRequest</span><span class="token punctuation">(</span>\n    token<span class="token punctuation">:</span> <span class="token string">"SuperSecretToken"</span><span class="token punctuation">,</span>\n    base<span class="token punctuation">:</span> <span class="token function">RequestWithBody</span><span class="token punctuation">(</span>\n        data<span class="token punctuation">:</span> <span class="token function">Data</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">.</span>utf8<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        base<span class="token punctuation">:</span> <span class="token function">POSTRequest</span><span class="token punctuation">(</span>\n            base<span class="token punctuation">:</span> <span class="token function">RequestWithURL</span><span class="token punctuation">(</span>\n                url<span class="token punctuation">:</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string">"http://example.com"</span><span class="token punctuation">)</span><span class="token operator">!</span>\n            <span class="token punctuation">)</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Sure this approach may look verbose, but to some extent, it’s very declarative as the name of the request types are very descriptive and it’s easy to understand from the type definition what each of them does.</p>\n<p>And in my opinion, the biggest advantage that this approach provides - is maintainability (all of the <code class="language-text">Request</code> are small, doing one thing and are very easy to unit test and reuse).</p>\n<h2>Libraries that benefit from Composition</h2>\n<ul>\n<li><a href="https://github.com/ReactiveX/RxSwift">RxSwift</a>, all though from the public API perspective it’s a FRP library, but if you take a look on internal <a href="https://github.com/ReactiveX/RxSwift/blob/master/RxSwift/Observables/Filter.swift#L21">implementation</a> you’ll see that each operator it’s essentially a new <code class="language-text">Observable</code> type that composes the source and adds additional behavior.</li>\n<li><a href="https://github.com/facebook/react">React</a> and <a href="https://github.com/flutter/flutter">Flutter</a> are one of my favorites libraries as well, they take <strong>Object Composition</strong> on the next level, allowing to building small reusable components and compose them to build very sophisticated UI.</li>\n</ul>',frontmatter:{title:"Power of Composition",date:"September 01, 2018"}}},pathContext:{slug:"/object-composition/",previous:{fields:{slug:"/component-based-tv/"},frontmatter:{title:"Component Based UITableView"}},next:null}}}});
//# sourceMappingURL=path---object-composition-6b4ead45d2ce09d54ef1.js.map