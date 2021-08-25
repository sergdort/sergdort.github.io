webpackJsonp([0x6724658d2a1a],{519:function(n,s){n.exports={data:{site:{siteMetadata:{title:"iOS Developer in search for meaning 🧘‍♂️",author:"Serg Dort"}},markdownRemark:{id:"/Users/sergdort/Documents/Projects/Personal/blog/src/pages/implement-rx/index.md absPath of file >>> MarkdownRemark",html:'<p>From my perspective, there are several ways to learn new technology if you are a software developer:</p>\n<ul>\n<li>\n<p>Read about it</p>\n</li>\n<li>\n<p>Play with it</p>\n</li>\n<li>\n<p>Hack or implement something similar</p>\n</li>\n</ul>\n<p>There are a lot of examples around the web that illustrate the first two but very few that shows how to implement it.</p>\n<p>So in this article, we are going to implement to some extend naїv but working version of RxSwift</p>\n<h3>Observable</h3>\n<p>According to the <a href="https://github.com/ReactiveX/RxSwift/blob/master/RxSwift/ObservableType.swift">documentation</a> the interface of <code class="language-text">Observable</code> is pretty simple:</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> protocol <span class="token builtin">ObservableType</span> <span class="token punctuation">{</span>\n    associatedtype E\n\n    <span class="token keyword">func</span> subscribe<span class="token operator">&lt;</span>O<span class="token punctuation">:</span> <span class="token builtin">ObserverType</span><span class="token operator">></span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> O<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span> <span class="token keyword">where</span> O<span class="token punctuation">.</span>E <span class="token operator">==</span> E\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It has a method that takes an <strong>Observer</strong> and returns a <strong>Disposable</strong> which you can use later on to unsubscribe</p>\n<h3>Observer</h3>\n<p>Observer is a type that that handles events.</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> protocol <span class="token builtin">ObserverType</span> <span class="token punctuation">{</span>\n    associatedtype E\n\n    <span class="token keyword">func</span> <span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token builtin">Event</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token builtin">Event</span><span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token function">next</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>\n    <span class="token keyword">case</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token builtin">Error</span><span class="token punctuation">)</span>\n    <span class="token keyword">case</span> completed\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>Disposable</h3>\n<p>Disposable is an even simpler type which has only one method — <code class="language-text">dispose()</code> and responsibility for it is to clean up any resources that had been used during the subscription e.g network call or DB connection</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> protocol <span class="token builtin">Disposable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">func</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Let’s start from the bottom and implement these types</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">AnonimousDisposable</span><span class="token punctuation">:</span> <span class="token builtin">Disposable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> disposeClosure<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token number">_</span> disposeClosure<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>disposeClosure <span class="token operator">=</span> disposeClosure\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">disposeClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">CompositeDisposable</span><span class="token punctuation">:</span> <span class="token builtin">Disposable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">var</span> isDisposed<span class="token punctuation">:</span> <span class="token builtin">Bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token keyword">private</span> <span class="token keyword">var</span> disposables<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token builtin">Disposable</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>disposable<span class="token punctuation">:</span> <span class="token builtin">Disposable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> isDisposed <span class="token punctuation">{</span>\n            disposable<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token keyword">return</span>\n        <span class="token punctuation">}</span>\n        disposables<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>disposable<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> isDisposed <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>\n        disposables<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>\n            $<span class="token number">0</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        isDisposed <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>AnonymousDisposable</em>  —  provides closure that will be called on dispose</p>\n<p><em>CompositeDisposable</em> — is basically a container for disposables that will call dispose on each of them when it is disposed. And any attempt to add <em>Disposable</em> to already disposed <em>CompositeDisposable</em> will immediately dispose it</p>\n<p><em>Observer</em> is initialised with an <em>eventHandler</em> closure which is going to be called when a new <em>Event</em> arrives</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">:</span> <span class="token builtin">ObserverType</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> handler<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Event</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token number">_</span> handler<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span><span class="token builtin">Event</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token builtin">Event</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">handler</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And the last but not least <em>Observable</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">:</span> <span class="token builtin">ObservableType</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">typealias</span> E <span class="token operator">=</span> <span class="token builtin">Element</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> subscribeHandler<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token number">_</span> subscribtionClosure<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>subscribeHandler <span class="token operator">=</span> subscribtionClosure\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> subscribe<span class="token operator">&lt;</span>O <span class="token punctuation">:</span> <span class="token builtin">ObserverType</span><span class="token operator">></span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> O<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span> <span class="token keyword">where</span> O<span class="token punctuation">.</span>E <span class="token operator">==</span> E <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> composite <span class="token operator">=</span> <span class="token function">CompositeDisposable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> subscription <span class="token operator">=</span> <span class="token function">subscribeHandler</span><span class="token punctuation">(</span><span class="token builtin">Observer</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token keyword">in</span>\n            observer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> event<span class="token punctuation">)</span>\n            <span class="token keyword">switch</span> event <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> <span class="token punctuation">.</span>error<span class="token punctuation">,</span> <span class="token punctuation">.</span>completed<span class="token punctuation">:</span>\n                composite<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token keyword">default</span><span class="token punctuation">:</span>\n                <span class="token keyword">break</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        composite<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>disposable<span class="token punctuation">:</span> subscription<span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> composite\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As you can see there are lot of work done in the <code class="language-text">subscribe(observer:)</code> method which is out of responsibilities of the <em>Observable</em>:</p>\n<ul>\n<li>\n<p>managing disposables</p>\n</li>\n<li>\n<p>forwarding events to outer observer,</p>\n</li>\n<li>\n<p>We also need to check whether subscription was disposed before forwarding an event</p>\n</li>\n</ul>\n<p>So let’s encapsulate it in the helper type which we going to call <em>Sink</em>. As a sink from the kitchen, it’s will define behavior of the “stream” and dispose it when needed</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Sink</span><span class="token operator">&lt;</span>O<span class="token punctuation">:</span> <span class="token builtin">ObserverType</span><span class="token operator">></span><span class="token punctuation">:</span> <span class="token builtin">Disposable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">var</span> _disposed<span class="token punctuation">:</span> <span class="token builtin">Bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> _forward<span class="token punctuation">:</span> O\n    <span class="token keyword">private</span> <span class="token keyword">let</span> _subscriptionHandler<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span>O<span class="token punctuation">.</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> _composite <span class="token operator">=</span> <span class="token function">CompositeDisposable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">init</span><span class="token punctuation">(</span>forvard<span class="token punctuation">:</span> O<span class="token punctuation">,</span> subscriptionHandler<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span>O<span class="token punctuation">.</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        _forward <span class="token operator">=</span> forvard\n        _subscriptionHandler <span class="token operator">=</span> subscriptionHandler\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token builtin">Observer</span><span class="token operator">&lt;</span>O<span class="token punctuation">.</span>E<span class="token operator">></span><span class="token punctuation">(</span>handler<span class="token punctuation">:</span> forward<span class="token punctuation">)</span>\n        _composite<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>disposable<span class="token punctuation">:</span> <span class="token function">_subscriptionHandler</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">func</span> <span class="token function">forward</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token builtin">Event</span><span class="token operator">&lt;</span>O<span class="token punctuation">.</span>E<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> _disposed <span class="token punctuation">{</span>\n            <span class="token keyword">return</span>\n        <span class="token punctuation">}</span>\n        _forward<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> event<span class="token punctuation">)</span>\n        <span class="token keyword">switch</span> event <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token punctuation">.</span>completed<span class="token punctuation">,</span> <span class="token punctuation">.</span>error<span class="token punctuation">:</span>\n            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">default</span><span class="token punctuation">:</span>\n            <span class="token keyword">break</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        _disposed <span class="token operator">=</span> <span class="token boolean">true</span>\n        _composite<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now we can refactor our <em>Observable</em> implementation by using the <em>Sink</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">:</span> <span class="token builtin">ObservableType</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">typealias</span> E <span class="token operator">=</span> <span class="token builtin">Element</span>\n    <span class="token keyword">private</span> <span class="token keyword">let</span> _subscribeHandler<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token number">_</span> subscribtionClosure<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span><span class="token builtin">Observer</span><span class="token operator">&lt;</span><span class="token builtin">Element</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        _subscribeHandler <span class="token operator">=</span> subscribtionClosure\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">func</span> subscribe<span class="token operator">&lt;</span>O <span class="token punctuation">:</span> <span class="token builtin">ObserverType</span><span class="token operator">></span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> O<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Disposable</span> <span class="token keyword">where</span> O<span class="token punctuation">.</span>E <span class="token operator">==</span> E <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> sink <span class="token operator">=</span> <span class="token function">Sink</span><span class="token punctuation">(</span>forvard<span class="token punctuation">:</span> observer<span class="token punctuation">,</span> subscribtionHandler<span class="token punctuation">:</span> _subscribeHandler<span class="token punctuation">)</span>\n        sink<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> sink\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Let’s check if it works…</p>\n<p><img src="/observable-348c3b53b16273b3614ca10f66516679.gif" alt="observable"></p>\n<p>Well this is cool! But the power of Rx is also in the operators… So lets implement the <code class="language-text">map</code> operator</p>\n<p>The same as the <code class="language-text">map</code> for array <code class="language-text">map</code> in Rx transforms each element of the sequence by applying <code class="language-text">transform</code> function to it and returns new sequence</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">extension</span> <span class="token builtin">ObservableType</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token builtin">map</span><span class="token operator">&lt;</span>U<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">_</span> transform<span class="token punctuation">:</span> @escaping <span class="token punctuation">(</span>E<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-</span><span class="token operator">></span> U<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span>U<span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span>U<span class="token operator">></span> <span class="token punctuation">{</span> observer <span class="token keyword">in</span>\n            <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> <span class="token builtin">Observer</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token keyword">in</span>\n                <span class="token keyword">switch</span> event <span class="token punctuation">{</span>\n                <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">let</span> element<span class="token punctuation">)</span><span class="token punctuation">:</span>\n                    <span class="token keyword">do</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">try</span> observer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token function">transform</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>\n                        observer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span>\n                <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">let</span> e<span class="token punctuation">)</span><span class="token punctuation">:</span>\n                    observer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token keyword">case</span> <span class="token punctuation">.</span>completed<span class="token punctuation">:</span>\n                    observer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token punctuation">.</span>completed<span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="/map-f6310a7eae896c40a405bc8aa4d20875.gif" alt="map"></p>\n<h3>To recap :</h3>\n<p><em>Observable</em>  — is a type to which you can pass an <em>Observer</em> by calling the <code class="language-text">subscribe(observer:)</code> method . And as you saw all magic happens in the subscribe method. This is what make Rx so powerful — that you can transform sequence and pass instances of Observable without worrying that something gonna happened.</p>\n<h3>Conclusion:</h3>\n<p>Sure this is naive and not ready for production implementation. But I really hope that it shows that there is no magic behind Rx!</p>\n<p>Playground is available <a href="https://github.com/sergdort/HandMadeRx">here</a></p>\n<h3>Where to go from here:</h3>\n<ul>\n<li><a href="https://github.com/ReactiveX/RxSwift">RxSwift repo</a></li>\n<li><a href="http://reactivex.io/">ReactiveX website</a></li>\n<li><a href="https://store.raywenderlich.com/products/rxswift?_ga=2.15687862.1482396487.1496489051-1188417218.1476022016">RxSwift book by Ray Wenderlich team</a></li>\n<li><a href="https://www.youtube.com/watch?v=looJcaeboBY">Math behind Rx</a></li>\n</ul>',
frontmatter:{title:"Learn Rx by implementing Observable",date:"June 06, 2017"}}},pathContext:{slug:"/implement-rx/",previous:{fields:{slug:"/view-mode-in-rx/"},frontmatter:{title:"ViewModel in RxSwift world"}},next:{fields:{slug:"/component-based-tv/"},frontmatter:{title:"Component Based UITableView"}}}}}});
//# sourceMappingURL=path---implement-rx-a9130ef9336985bf6ba4.js.map