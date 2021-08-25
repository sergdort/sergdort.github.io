webpackJsonp([30044197126937],{517:function(n,a){n.exports={data:{site:{siteMetadata:{title:"iOS Developer in search for meaning 🧘‍♂️",author:"Serg Dort"}},markdownRemark:{id:"/Users/sergdort/Documents/Projects/Personal/blog/src/pages/custom-environment-swift-ui/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/environment-b756e3cdd240c13bce17e6ae117dc83c-22ac4.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwT/2gAMAwEAAhADEAAAAc+wmYZwaE//xAAZEAACAwEAAAAAAAAAAAAAAAAAAgERMUL/2gAIAQEAAQUC0RoVTq7Mj//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AVf/xAAVEQEBAAAAAAAAAAAAAAAAAAAREP/aAAgBAgEBPwEZ/8QAGBAAAwEBAAAAAAAAAAAAAAAAARARADH/2gAIAQEABj8C7oWav//EABkQAQEAAwEAAAAAAAAAAAAAAAEAESExQf/aAAgBAQABPyEDLQnOn0uyArMdFOxoL//aAAwDAQACAAMAAAAQ1M//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxBT/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EHCW/8QAGxABAAMBAAMAAAAAAAAAAAAAAQARIUExYXH/2gAIAQEAAT8QUCkLL7NxA0dfUGlvl1guFiLvIvK1ajT5GBggdJ//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="environment"\n        title=""\n        src="/static/environment-b756e3cdd240c13bce17e6ae117dc83c-f8fb9.jpg"\n        srcset="/static/environment-b756e3cdd240c13bce17e6ae117dc83c-e8976.jpg 148w,\n/static/environment-b756e3cdd240c13bce17e6ae117dc83c-63df2.jpg 295w,\n/static/environment-b756e3cdd240c13bce17e6ae117dc83c-f8fb9.jpg 590w,\n/static/environment-b756e3cdd240c13bce17e6ae117dc83c-22ac4.jpg 660w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>@Environment - is a property wrapper that allows any view access to global dependencies e.g Calendar,  Locale, ColorScheme etc.</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">CalendarView</span><span class="token punctuation">:</span> <span class="token builtin">View</span> <span class="token punctuation">{</span>\n    @<span class="token function">Environment</span><span class="token punctuation">(</span>\\<span class="token punctuation">.</span>calendar<span class="token punctuation">)</span> <span class="token keyword">var</span> calendar<span class="token punctuation">:</span> <span class="token builtin">Calendar</span>\n    \n    <span class="token keyword">var</span> body<span class="token punctuation">:</span> some <span class="token builtin">View</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>But what if we want to create our own global dependencies that are tight to our app domain. For example, we may want <code class="language-text">ImageFetcher</code> to be accessible for any view that can display remote images, so that images that were displayed on previous screens of our app would not need to be fetched again. </p>\n<p>Turns out SwiftUI allows us to do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">MovieCell</span><span class="token punctuation">:</span> <span class="token builtin">View</span> <span class="token punctuation">{</span>\n    @<span class="token function">Environment</span><span class="token punctuation">(</span>\\<span class="token punctuation">.</span>imageFetcher<span class="token punctuation">)</span> <span class="token keyword">var</span> fetcher<span class="token punctuation">:</span> <span class="token builtin">ImageFetcher</span>\n    <span class="token keyword">var</span> movie<span class="token punctuation">:</span> <span class="token builtin">Movie</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">var</span> poster<span class="token punctuation">:</span> <span class="token builtin">AnyPublisher</span><span class="token operator">&lt;</span><span class="token builtin">UIImage</span><span class="token punctuation">,</span> <span class="token builtin">Never</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> fetcher<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> movie<span class="token punctuation">.</span>posterURL<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">var</span> body<span class="token punctuation">:</span> some <span class="token builtin">View</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In order to achieve that we need to implement a couple of requirements.</p>\n<p><code class="language-text">EnvironmentKey</code> - requires us to provide a default value for our custom dependency.</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> protocol <span class="token builtin">EnvironmentKey</span> <span class="token punctuation">{</span>\n\n    associatedtype <span class="token builtin">Value</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">var</span> defaultValue<span class="token punctuation">:</span> <span class="token keyword">Self</span><span class="token punctuation">.</span><span class="token builtin">Value</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">struct</span> <span class="token builtin">ImageFetcherKey</span><span class="token punctuation">:</span> <span class="token builtin">EnvironmentKey</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token keyword">let</span> defaultValue<span class="token punctuation">:</span> <span class="token builtin">ImageFetcher</span> <span class="token operator">=</span> <span class="token function">ImageFetcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">defaultValue</code> will be created when we first time access it via @Environment.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-e894a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.093784078516904%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVQoz1WR2W4aQRBF52sSZehZumeDWcEYBphgwCzGYGEnlhzJyUsk//9JMcaJ8nBUvVTdvlVtTY5vrB5/0+x+cHP4KbyyOP5iuHikvu4xyBRV4dKvS7rjEcFgSNjLKIuUvIyJygCdBpgswE81Vj47Mtk8M1l/ZyoMvh4op3vZP/P2cs1oqHEinyKzSXoObuyhQhcvVPi5S7Lqkd4W5OuKZJliVeMt9fLElQjl9ZaommPyGcV4je1GhL4ij2xcnQgpRmKoNb6r6NgK+1MH+7Pd0hGstHlitnuh2YrDzTdx+cRkdWI035MkMYHx6YY2vTzBJAlJrMm7hiTSeJ6P7ykcx8Fx37Gq6wOD5oFydkc127f0hWK0JIoijDEopUhFNA2/EMkDvjjVOiY0Ad1I2ve8NucsbBXVhrIWgelOZndHPtlK3BFXU4IgaHEdJcVK3IorPxZCAu0JHYzcG3nkr2BWrhlM7+Uz7rmaH+g3e8LzHLMxWtxp7beJHeW0RUp1LpzXH2fvYudoBf2ttHxkdCMsHqhvT22MqgbX9XAuhY5zmdV//Dv7EP0DmNgPUsfZTcUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="defaultValue"\n        title=""\n        src="/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-fb8a0.png"\n        srcset="/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-1a291.png 148w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-2bc4a.png 295w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-fb8a0.png 590w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-526de.png 885w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-fa2eb.png 1180w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-08f6a.png 1770w,\n/static/defaultValue-18c0050935c2bdcc2668497aa790bb26-e894a.png 1834w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>By extending <code class="language-text">EnvironmentValues</code> we provide a property that we are going to use to access it via @Environment property wrapper.</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">extension</span> <span class="token builtin">EnvironmentValues</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> imageFetcher<span class="token punctuation">:</span> <span class="token builtin">ImageFetcher</span> <span class="token punctuation">{</span>\n        <span class="token keyword">get</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">[</span><span class="token builtin">ImageFetcherKey</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">set</span> <span class="token punctuation">{</span>\n            <span class="token keyword">self</span><span class="token punctuation">[</span><span class="token builtin">ImageFetcherKey</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token operator">=</span> newValue\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Complete implemetation can be found <a href="https://github.com/sergdort/CombineFeedback/blob/master/Example/Views/AsyncImage.swift">here</a></p>',frontmatter:{title:"Custom @Environment keys in SwiftUI",date:"July 08, 2019"}}},pathContext:{slug:"/custom-environment-swift-ui/",previous:{fields:{slug:"/object-composition/"},frontmatter:{title:"Power of Composition"}},next:{fields:{slug:"/collection-view-insert-in-front/"},frontmatter:{title:"Inserting Dynamic Height cells keeping Scroll position"}}}}}});
//# sourceMappingURL=path---custom-environment-swift-ui-325e17ff733cfd79c2f2.js.map