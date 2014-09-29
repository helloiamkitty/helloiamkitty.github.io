---
layout:     post
title:      【译】滚动后固定内容
category: blog
description: 如何实现滚动到特定高度时将指定内容固定在页面顶部。
---



*原文：* [http://css-tricks.com/scroll-fix-content/][source]

##开篇
有个读者发给我一张GIF图，里面展示了谷歌页面在手机上的一个很酷的效果。（当你在安卓机子上的Chrome浏览器中打开谷歌首页就能看到）页面中，有个跟随页面滚动的搜索框，居于页面的中部，当页面滚动到搜索框接近顶部时，它贴在了页面的顶部。让我们说点其他的吧，因为，你懂得。。。（译者注：作者贴了个twitter吐槽自己职位，大意是说，我是个web开发工程师，所以我大部分的时间都花在了满足让内容在滚动到某处时贴在页面顶部这样的需求中）

![twitter](/images/scrollFix/twitter.jpg)

这是一个很酷的效果,特别是能够提高用户体验，而且能够避免愚蠢的注入广告贴在页面上。下面是这张GIF图：

![gif](/images/scrollFix/google-version-of-scroll-fixed.gif)

##只需要两个步骤
跟很多很棒的技巧一样，其实本质上并没有很复杂的东西。我们需要做的只是思考（同时设计）以下两个不同的状态：

1. 搜索框在它的可滚动的位置
2. 搜索框在固定的头部的位置


我们在这两个状态中简单地用样式名进行切换。没有必要使用两个搜索表单然后根据不同场景显示不同表单，虽然这样看起来很好，但是我们不想在维持两个搜索框之间的同步上花费功夫。所以在一个搜索表单上操作就够了。

##第一步
![state1](/images/scrollFix/state-1.png)

我将在这里使用SCSS来写样式，这样管理两个状态的嵌套代码看起来会很整洁。
代码：

	.top-header {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 320px;
	  height: 60px;
	}
	
	.search { /* Container just in case we want more than just the search input to come along */
	  position: absolute;
	  top: 155px;
	  left: 20px;
	  right: 20px;
	  input {
	    width: 265px;
	    transition: width 0.2s;
	    -webkit-appearance: none; /* Autoprefixer doesn't catch this */
	  }
	}
	
	.top {
	  height: 250px; /* Space in here for search */
	  padding-top: 40px;
	  position: relative;
	}


##第二步
![state1](/images/scrollFix/state-2.png)

假设我们这里用类名"fix-search"作用在父元素上。

代码：

	.top-header {
	  ...
	  .fix-search & {
	    background: #eee;
	  }
	}
	
	.search { /* Container just in case we want more than just the search input to come along */
	  ...
	  .fix-search & {
	    position: fixed;
	    top: 10px;
	    input {
	      width: 250px;
	    }
	  }
	}


##切换状态
这个步骤的关键是在合适的时候切换到特定的类名。在我们的demo中，我们可以先测试出页面滚动到完美位置的滚动高度，然后在JS代码中写死该值，紧接着监听滚动事件即可。

jQuery代码：

	var wrap = $("#wrap");

	wrap.on("scroll", function(e) {
	    
	  if (this.scrollTop > 147) {
	    wrap.addClass("fix-search");
	  } else {
	    wrap.removeClass("fix-search");
	  }
	  
	});

以上JS代码就是我们在两个状态中切换的所有逻辑代码。如果页面滚动了147像素或以上，它将应用"fix-search"这个类名，否则不采取动作。甚至你将页面由下往上滚动时，也能正常切换（因为上面的逻辑监听了页面的滚动事件）。


##demo
<div class="codepen-resizeable ui-resizable"><iframe id="cp_embed_AdaKr" src="//codepen.io/chriscoyier/embed/AdaKr?height=563&amp;theme-id=1&amp;slug-hash=AdaKr&amp;default-tab=result&amp;user=chriscoyier" scrolling="no" frameborder="0" height="563" allowtransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width: 100%; overflow: hidden;"></iframe><div class="cover"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>



##周期性执行
一般来说，当涉及到页面中绑定滚动事件就不得不提到周期性执行的问题：当你在滚动事件中绑定了函数时你必须考虑[周期性执行](http://davidwalsh.name/javascript-debounce-function)，否则的话，该函数将会被频繁地调用导致页面性能下降。

##CSS
这类效果最理想的情况下是用纯CSS来实现。不过到目前为止，我还没有见到很棒的方案。但我一直为人们用CSS做出疯狂的东西而感到惊讶，所以如果有合适的方案的话我会更新本文的。

也许有一天我们可以做滚动位置的媒体查询？


##浏览器支持
你会注意到demo里主要依赖了position的fixed属性，它在移动端有着简略的历史。当我说它在目前能得到“不错的”支持时，你应该有你自己的判断。

相关阅读：

* [Can I Use](http://caniuse.com/#feat=css-fixed)
* [Fixed Positioning in Mobile Browsers](http://bradfrostweb.com/blog/mobile/fixed-position/)
* [Issues with position fixed & scrolling on iOS](http://remysharp.com/2012/05/24/issues-with-position-fixed-scrolling-on-ios)


[source]: http://css-tricks.com/scroll-fix-content/