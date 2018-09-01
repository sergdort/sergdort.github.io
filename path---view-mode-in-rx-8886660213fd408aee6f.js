webpackJsonp([0xe682b2b0c441],{517:function(n,s){n.exports={data:{site:{siteMetadata:{title:"iOS Astronaut's Blog 🚀",author:"Serg Dort"}},markdownRemark:{id:"/Users/sergdort/Documents/Projects/Personal/blog/src/pages/view-mode-in-rx/index.md absPath of file >>> MarkdownRemark",html:'<p>According to the <a href="https://docs.microsoft.com/en-us/previous-versions/msp-n-p/hh848246(v%3dpandp.10)">Microsoft Docs</a> view model acts as an intermediary between the view and the model, and is responsible for handling the view logic. Typically, the view model interacts with the model by invoking methods in the model classes. The view model then provides data from the model in a form that the view can easily use.</p>\n<p>Entering Rx world prepare to think about UI events, Network requests, Data base request etc. as a <strong>Stream</strong> of values over the time.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-a8a50.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHiIRqSf//EABgQAQADAQAAAAAAAAAAAAAAAAEAEBES/9oACAEBAAEFAnI1s6Wv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8hweBY7wLkIdGfQ23/2gAMAwEAAgADAAAAEFs//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EKx//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QiP/EABkQAQADAQEAAAAAAAAAAAAAAAEAEUEhMf/aAAgBAQABPxBDFIl84wlFy1OVA2EHUE8Zte+Szs//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="morpheus"\n        title=""\n        src="/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-f8fb9.jpeg"\n        srcset="/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-e8976.jpeg 148w,\n/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-63df2.jpeg 295w,\n/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-f8fb9.jpeg 590w,\n/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-85e3d.jpeg 885w,\n/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-d1924.jpeg 1180w,\n/static/morpheus-f8e4c7b842a0c32b80d45c04d2e31e7d-a8a50.jpeg 1280w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Keeping this in mind I like to think about a <strong>ViewModel</strong> as a <a href="https://en.wikipedia.org/wiki/Black_box">“Black Box”</a> which accepts some UI triggers (button tap, table view selection, text editing events etc.), other dependencies (NeworkService, DataBaseService, LocationService) and applies Rx <a href="http://reactivex.io/documentation/operators.html">operators</a> (which determines a behaviour). And after that, from the ViewModel, you can get that transformed observables and bind them back to your UI applying the behavior.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/black_box-b86ccbce44dc8bd7148289301386dff2-d3bf8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 28.58481724461106%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABKUlEQVQY051RO0vDUBi9MQ8jJMEHJCgh4AM6OVp06FxwcIkV1NXRDgUpDs75I4JuDlldXRwy+RMqliAdUu/NfVWuX2IFkUweOHxwzvcd7uEi1IA4jjUYWpNnGEatJ0mCGsG5OGOMn0opzjnnPaXU0o9n2/YGjA5wH4I6ruuu/b4lhLQIxgclxnsw2yUhbQQBijNVQ0pJsyxrwe56dWCa5q3neQqCPiFcWZZ1Ucm+70dVg6IoHqs7MZlQXpZCzGYCjV+Veht9B8JrWZqmu7AcBUFgQ+B9GIYyiqKx4zhC1/Vj0DzwdmDHec/zF/UH6OEOx89P01hI3PuY4qN55YV5q0XgKnAZuNK/7KPN7S3tsNs168p5fkLz/IZRekUJGTKMh+i/uB4MGj/tC/lknBHs/u5NAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="black_box"\n        title=""\n        src="/static/black_box-b86ccbce44dc8bd7148289301386dff2-fb8a0.png"\n        srcset="/static/black_box-b86ccbce44dc8bd7148289301386dff2-1a291.png 148w,\n/static/black_box-b86ccbce44dc8bd7148289301386dff2-2bc4a.png 295w,\n/static/black_box-b86ccbce44dc8bd7148289301386dff2-fb8a0.png 590w,\n/static/black_box-b86ccbce44dc8bd7148289301386dff2-526de.png 885w,\n/static/black_box-b86ccbce44dc8bd7148289301386dff2-d3bf8.png 1067w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As example I want to show how you could implement a list of searchable data and dislpay it in a table view with a search bar</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/heroes_list-4620fe5a4d36e40c248af46ee2c2097a-856c2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 270px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.77777777777777%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAIAAAAGkY33AAAACXBIWXMAAAsSAAALEgHS3X78AAAD0ElEQVRIx41WW4gTVxg+L9q3PhafBR9a6ZMPKoItVIoKsnhZ10tpC1IqxqWr4A1BRBEf3EUFFbHtQ2ErDcVSd0WCtvWyWq+7XjaOuW0ymVvmltmZZJLJJJtJv5zRbdyNs/k4/Jxz5vzz/+e/fDNEVVVRFCVJ0nW9Wq1WKFzXtW07lUrFYjGe56f3Acdx6vV6MhEPh38j5XIZ50qlUuVd4JBNMeORU6lUXTdv2pKiE7y1VqtBurNQfYvWTbhVr7miUVMtj3CcIEk5UWwzJEnO5RTI2Y9yOWxKROClRqMxNTVVo6B+1LCEv6Zp6Xoe0t9phed5hYJNRsejyWSK43nDMPP5SUhNy6uqriiqLCu+ESxnDJyBR+R8b+/xvtCLccayLFmGnzIiBEut1mrtgH0y+M1nG3o/vzd61yk5mqZyHAflRmcgP4cvdh/qG4s9wQL2Gl4DafRD7dW94EGWd+2et+yHwciYoeVex+IoDBQMZGoihajMYfnjTccWbDz56z+vmjGvezCLy0zLYJDvjvT27V/9bPSKZTk8z0Gn0THI2YHuw3uXjj4ego/FYgHvw67XGchTzvoryuUM2ymjht1CoWCaJgLekfJ9Vr8yLslWmc2kOY5HtJLJJBLekdtXrw2Hdmx79O8IFr7PPqajEmSZTzGnD+0Y+v0yL4hIUJKCo8hkMv4OJOatr35jWUQBa3nbqeBNU9QOzVFT+pHDAgVTLoMDvBmDMLJ1Oy5oVllBHygQTalpGsIGDsEEUQAHtL9zJJr96U40q0wauqZqTUDZMAy/T6iyCFahh70Zg3QdvPDltr6hJwk8dClXwU+fcVqNtA/YqZ2hE5s3Df8Z4QU+kUg0i3oiDcTjcfSdr/beVH2958CBgaMjzLNmerz/y4tmywseZN6H85ct/ujGw6vgIxgsFout+m+v+h7L67q3ru/66s69+1igNgMao82dt69d83fkeqnY5DqLQtN05MkwJvPgtEmwmoHvAWQb5a4vVoW2r3n9fERRNVEQcI5ls/iMYCIIAugPkmVZ5G925MiEYkazol1xG7SY/GKmsgO3H7BWeIzj9WIixiBP2WyWYRjkCab89pg+2iZgN29eDA/2SzlmdkrnTtWtowvPLPmgmB7M8JrAc6jkdDqDqsa15+7nX/buOtjTI7wcA49YpomPph9zTAIK882dd65acenceV2VHfpZhQ44CBOfjzAJUh5Y/+nKRZ9EwpclWUbfI7dIDJxnKYKdJ/t+PBnqPzLMpGhtt4lqkOUtZ459+/26P2Ix9FGy2VIT+JUA6YA9glsK+A8h5cYa5nRHMgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="heroes_list"\n        title=""\n        src="/static/heroes_list-4620fe5a4d36e40c248af46ee2c2097a-856c2.png"\n        srcset="/static/heroes_list-4620fe5a4d36e40c248af46ee2c2097a-5878c.png 148w,\n/static/heroes_list-4620fe5a4d36e40c248af46ee2c2097a-856c2.png 270w"\n        sizes="(max-width: 270px) 100vw, 270px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Let’s imagine that all model staff implemented and all we need to do is create ViewModel and ViewController</p>\n<p>So, let’s define the UI triggers:</p>\n<ul>\n<li>search trigger (user can type to search data in the list)</li>\n<li>scroll triggers (user can scroll to pull new data from the list)</li>\n</ul>\n<p>Now we can define the ViewModel interface</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">class</span> <span class="token class-name">HeroListViewModel</span> <span class="token punctuation">{</span>\n   \n   <span class="token keyword">let</span> mainTableItems<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">HeroCellSection</span><span class="token punctuation">]</span><span class="token operator">></span>\n   <span class="token keyword">let</span> searchTableItems<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">HeroCellSection</span><span class="token punctuation">]</span><span class="token operator">></span>\n   \n   <span class="token keyword">init</span><span class="token punctuation">(</span>uiTriggers<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n         searchQuery<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">String</span><span class="token operator">></span><span class="token punctuation">,</span>\n         nextPageTrigger<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span><span class="token punctuation">,</span>\n         searchNextPageTrigger<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span> \n      api<span class="token punctuation">:</span> <span class="token builtin">HeroAPI</span><span class="token punctuation">)</span>\n      \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now let’s define transformation we want to apply to our initial triggers:</p>\n<ul>\n<li>transfrom search query into request</li>\n<li>prevent firing request for empty query</li>\n<li>prevent fire reqest every time user type new character</li>\n<li>cancel previous request in favor of new one</li>\n<li>hit request every time user scrolls to the bottom edge of scroll view</li>\n<li>append previous state (array) with new data</li>\n</ul>\n<p>Implementation of transformations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">HeroListViewModel</span> <span class="token punctuation">{</span>\n   \n   <span class="token keyword">let</span> mainTableItems<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">HeroCellSection</span><span class="token punctuation">]</span><span class="token operator">></span>\n   <span class="token keyword">let</span> searchTableItems<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">HeroCellSection</span><span class="token punctuation">]</span><span class="token operator">></span>\n   <span class="token keyword">let</span> dismissTrigger<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span>\n   \n   <span class="token keyword">init</span><span class="token punctuation">(</span>uiTriggers<span class="token punctuation">:</span> <span class="token punctuation">(</span>searchQuery<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">String</span><span class="token operator">></span><span class="token punctuation">,</span>\n      nextPageTrigger<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span><span class="token punctuation">,</span>\n      searchNextPageTrigger<span class="token punctuation">:</span> <span class="token builtin">Observable</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span><span class="token punctuation">,</span>\n      dismissTrigger<span class="token punctuation">:</span> <span class="token builtin">Driver</span><span class="token operator">&lt;</span><span class="token builtin">Void</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span> api<span class="token punctuation">:</span> <span class="token builtin">HeroAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n    \n    searchTableItems <span class="token operator">=</span> uiTriggers<span class="token punctuation">.</span>searchQuery\n        <span class="token punctuation">.</span><span class="token builtin">filter</span> <span class="token punctuation">{</span> <span class="token operator">!</span>$<span class="token number">0</span><span class="token punctuation">.</span><span class="token builtin">isEmpty</span> <span class="token punctuation">}</span><span class="token comment">//1</span>\n        <span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">:</span> <span class="token builtin">MainScheduler</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span><span class="token comment">//2</span>\n        <span class="token punctuation">.</span>flatMapLatest <span class="token punctuation">{</span> <span class="token comment">//3</span>\n            <span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token function">searchItems</span><span class="token punctuation">(</span>$<span class="token number">0</span><span class="token punctuation">,</span>\n                batch<span class="token punctuation">:</span> <span class="token builtin">Batch</span><span class="token punctuation">.</span>initial<span class="token punctuation">,</span>\n                endPoint<span class="token punctuation">:</span> <span class="token builtin">EndPoint</span><span class="token punctuation">.</span><span class="token builtin">Characters</span><span class="token punctuation">,</span>\n                nextBatchTrigger<span class="token punctuation">:</span> uiTriggers<span class="token punctuation">.</span>searchNextPageTrigger<span class="token punctuation">)</span> <span class="token comment">// 6</span>\n               <span class="token punctuation">.</span>catchError <span class="token punctuation">{</span> <span class="token number">_</span> <span class="token keyword">in</span>\n                  <span class="token keyword">return</span> <span class="token builtin">Observable</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n               <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token punctuation">.</span><span class="token builtin">map</span> <span class="token punctuation">{</span> <span class="token comment">//4</span>\n            <span class="token keyword">return</span> $<span class="token number">0</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token builtin">HeroCellData</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token punctuation">.</span><span class="token builtin">map</span> <span class="token punctuation">{</span><span class="token comment">//5</span>\n            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">HeroCellSection</span><span class="token punctuation">(</span>items<span class="token punctuation">:</span> $<span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n        <span class="token punctuation">.</span><span class="token function">asDriver</span><span class="token punctuation">(</span>onErrorJustReturn<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ol>\n<li>\n<p>Filters empty string, remember we don’t want fire request for empty query</p>\n</li>\n<li>\n<p>Prevents to fire request every time user types new character, fire only if there is 0.3 sec pause</p>\n</li>\n<li>\n<p>Transforms search query into request and cancels previuos</p>\n</li>\n<li>\n<p>Transfroms<strong>Hero</strong>intodummy<strong>HeroCellData</strong>(eg. title, image url)</p>\n</li>\n<li>\n<p>Transforms Array of<strong>HeroCellData</strong>into<strong>HeroCellSection</strong>(this needed to bind it to the UITableView)</p>\n</li>\n<li>\n<p>Triggers next page request </p>\n</li>\n</ol>\n<p>And now let’s bind our transformed <strong>Observables</strong> back to the <strong>UI</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code class="language-swift">     <span class="token comment">//1</span>\n      <span class="token keyword">let</span> viewModel <span class="token operator">=</span> <span class="token function">HeroListViewModel</span><span class="token punctuation">(</span>uiTriggers<span class="token punctuation">:</span><span class="token punctuation">(</span>\n          searchQuery<span class="token punctuation">:</span> searchCotroller<span class="token punctuation">.</span>searchBar<span class="token punctuation">.</span>rx_text<span class="token punctuation">.</span><span class="token function">asObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          nextPageTrigger<span class="token punctuation">:</span> tableView<span class="token punctuation">.</span>rx_nextPageTriger<span class="token punctuation">,</span>\n          searchNextPageTrigger<span class="token punctuation">:</span> searchContentController<span class="token punctuation">.</span>tableView<span class="token punctuation">.</span>rx_nextPageTriger\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n          api<span class="token punctuation">:</span> <span class="token function">DefaultHeroAPI</span><span class="token punctuation">(</span>paramsProvider<span class="token punctuation">:</span> <span class="token builtin">HeroesParamsProvider</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token comment">//2</span>\n      viewModel<span class="token punctuation">.</span>mainTableItems\n         <span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span>tableView<span class="token punctuation">.</span><span class="token function">rx_itemsWithDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">)</span>\n         <span class="token punctuation">.</span><span class="token function">addDisposableTo</span><span class="token punctuation">(</span>disposableBag<span class="token punctuation">)</span>\n      <span class="token comment">//3</span>\n      viewModel<span class="token punctuation">.</span>searchTableItems\n         <span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span>searchContentController<span class="token punctuation">.</span>tableView<span class="token punctuation">.</span><span class="token function">rx_itemsWithDataSource</span><span class="token punctuation">(</span>searchDataSource<span class="token punctuation">)</span><span class="token punctuation">)</span>\n         <span class="token punctuation">.</span><span class="token function">addDisposableTo</span><span class="token punctuation">(</span>disposableBag<span class="token punctuation">)</span></code></pre>\n      </div>\n<ol>\n<li>Creates the  <strong>ViewModel</strong></li>\n<li>Binds Main table items to the <code class="language-text">UITableView</code></li>\n<li>Binds search items to the <code class="language-text">UISearchController</code> tableView</li>\n</ol>\n<h3>Summary</h3>\n<ul>\n<li>Our view model is “pure” it’s immutable, we don’t even need a reference to it in ViewController (the<strong>disposeBag</strong>keeps subscriptions alive)</li>\n<li>All logic encapsulated in one place</li>\n<li>It’s can be easily tested with <a href="https://github.com/ReactiveX/RxSwift/tree/master/RxTests">RxTests</a> .</li>\n</ul>\n<h3>Further reading</h3>\n<ul>\n<li><a href="http://www.introtorx.com/">Intro to Rx</a></li>\n<li><a href="https://store.raywenderlich.com/products/rxswift">RxSwift Book</a></li>\n<li><a href="http://reactivex.io/">Rx.io</a></li>\n<li><a href="https://github.com/RxSwiftCommunity/RxDataSources">RxDataSources</a></li>\n<li><a href="https://github.com/sergdort/RxMarvel">Original Code</a></li>\n</ul>\n<p><strong>Happy RxSwift coding!  🚀</strong></p>',frontmatter:{title:"ViewModel in RxSwift world",date:"June 11, 2016"}}},pathContext:{slug:"/view-mode-in-rx/",previous:null,next:{fields:{slug:"/implement-rx/"},frontmatter:{title:"Learn Rx by implementing Observable"}}}}}});
//# sourceMappingURL=path---view-mode-in-rx-8886660213fd408aee6f.js.map