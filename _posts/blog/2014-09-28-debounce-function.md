---
layout:     post
title:      降低函数的触发频率
category: blog
description: 如果你的页面用JavaScript来完成高频率的任务，一个debounce function可以确保一个指定的任务不被触发得太频繁，从而保证了浏览器的性能。
---


*参考：* [http://davidwalsh.name/javascript-debounce-function/][source]


debounce function（不知道如何翻译成中文），它限制了一个函数被触发的频率。一个简单的例子，你监听了window的resize事件，当window的size发生变化时执行一个函数，函数对元素的位置做计算。该函数本身不重，但当resize时，它会执行成千上万次，容易造成浏览器卡死。于是，限制函数的执行频率就有了必要。


实现代码：

	//如果immediate为true，则函数会在定时器启动前执行
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};


调用示例：

	var myEfficientFn = debounce(function() {
		// All the taxing stuff you do
	}, 250);
	
	window.addEventListener('resize', myEfficientFn);





[source]: http://davidwalsh.name/javascript-debounce-function/