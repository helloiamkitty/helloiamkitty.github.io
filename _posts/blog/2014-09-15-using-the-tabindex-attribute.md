---
layout:     post
title:      【译】使用tabindex特性
category: blog
description: 介绍 HTML 特性 tabindex 的一篇文章。
---



*原文：* [http://www.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/][source]

##开篇
HTML特性`tabindex`被用来管理键盘的焦点。使用得当的话，它能有效地处理web组件。然而，如果使用不得当，该属性也会让针对键盘用户的网页内容可用性被摧毁。

tabindex特性指定一个页面元素可以取得焦点，同时也决定了该元素是如何获取焦点的。它用一个整数作为值，键盘根据它的值是正数、负数还是0来做出不同的交互。

要理解为什么tabindex特性对可用性有如此强大的影响，你必须知道键盘交互的方式。键盘用户通常会通过tab键来浏览web内容，方式是：从一个可获焦元素到下一个顺序的可获焦元素。

##默认的
有些交互的HTML元素，例如链接，表单控件是默认可获焦的。当它们被包含在web页面中，它们在源代码中的排布顺序决定了他们的获焦顺序。

	<label for="username">Username:</label>
	<input type="text" id="username">
	
	<label for="password">Password:</label>
	<input type="password" id="password">
	
	<input type="submit" value="Log in">

在这个例子中，一个键盘用户会用tab键在username字段上获取焦点，然后是password字段，最后是登陆按钮。这三个元素都是默认可获焦的，同时它们在源代码出现的顺序决定了它们被访问到的顺序。换句话说，不需要显式地设置tabindex特性，因为它能被浏览器轻松地处理。

##tabindex=0
当tebindex被设置成0时，该元素被插入了tab键的焦点顺序中，具体位置取决于它在源代码中的位置。如果该元素是默认可获焦的，那使用tabindex就是多此一举，但如果你用到了像`<span>`或`<div>`这样的元素，那设置tabindex就是让元素包括进焦点顺序的最自然的方式。


有必要提到的一点是，请尽可能地使用可获焦的HTML元素，因为它们易用性更强。例如，你如果选择用`<button>`或者`<input type="checkbox">`，浏览器会自动处理好键盘焦点和键盘交互的问题。而当你使用其他非可获焦元素时，你必须手动地提供对键盘焦点和键盘交互的支持。

##tabindex=-1
当tabindex被设置成负整数，例如，-1时，该元素就变成了可编程地获焦的元素，但它不被包含在tab键的焦点顺序中。换句话说，它不能被一个使用键盘的tab键来导航的用户访问到，但它能被脚本触发获焦。

举个例子，将焦点移动到表单返回的错误信息中。该错误信息一般被放置在表单的顶部，所以你需要将用户的注意力集中到该错误信息上，同时，对只能用键盘的用户来说，他们能够从表单的开头开始修改填写出现的错误。你并不想将错误信息被包含在tab键的焦点顺序中。

	<div role="group" id="error" aria-labelledby="errorHead" tabindex="-1">
	<h2 id="errorHead">Your information contains three errors</h2>
	<ul>
	...
	</ul>
	</div>

##tabindex=1+
将tabindex赋值成一个正整数，则会带来问题。它强制指定了tab键的焦点顺序，这可能会和预期的顺序有出入。

	<label for="username">Username:</label>
	<input type="text" id="username" tabindex="3">
	
	<label for="password">Password:</label>
	<input type="password" id="password" tabindex="1">
	
	<input type="submit" value="Log in" tabindex="2">

在这个例子中，视觉表现出来的焦点顺序是符合预期的：先是username字段，紧接着是password字段，最后是登陆按钮。但是，此时这个顺序变得毫无意义，真正的表现是，焦点首先会来到password字段，然后是登陆按钮，最后才是username字段。

当你意识到password字段会第一个获得焦点时，事情会变得很糟糕。无论该元素前面有多少个可获焦元素，当该元素的tabindex被设置成1时，它都将会是页面上第一个获得焦点的元素。

##总结
tabindex特性具有两面性，它可能改善了，也可能摧毁了针对键盘用户的页面可用性。所以当你要使用tabindex特性时，谨记如下几点：

* 使用tabindex=0来将元素包含进tab键的焦点顺序中，但请优先使用具备可获焦属性的元素
* 使用tabindex=-1来给予一个元素可编程的获焦能力，但它将被排除在tab键的焦点顺序外
* 避免使用tabindex=1+


[source]: http://www.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/