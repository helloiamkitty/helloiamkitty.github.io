---
layout:     post
title:      【译】跨浏览器的CSS图像模糊
category: blog
description: 现在页面中越来越多的毛玻璃效果，本文的image blur方案，解决了大部分图片的模糊化。不过ie9+，还是得用STACKBLUR等使用js的方法来实现了。
---

<style>
#blur-container{
	width: 100%;
	background: black;
	overflow: hidden;
}
.blur{
	width: 48%;
	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
	filter: url(/assets/svg/blur.svg#blur);
	progid: DXImageTransform.Microsoft.Blur(pixelradius=2);
	filter: blur(3px);
	-webkit-transition: .9s -webkit-filter linear;
}
</style>
<div id="blur-container">
<img src="images/blue/pakistani-woman.jpg" alt="blablabla" class="blur">
<img src="images/blue/pakistani-woman.jpg" alt="blablabla" style="width:50%">
</div>


*原文：* [http://demosthenes.info/blog/534/Cross-browser-Image-Blur-with-CSS][source]


##开篇
在本篇文章中，我将展示如何在现代浏览器中使用CSS和SVG技术对图像进行模糊处理。一如既往地说明一下：我展示的相关技术可以在所有浏览器中正常使用，但仅限于该浏览器最近的新版本。


>关于IE9+的说明

>随着微软非常上进地让IE浏览器迈向了web标准，它也放弃了许多自IE5.5以来都支持的CSS属性，其中包括接下来会提到的DX滤镜。非常不幸运的是，微软没有用CSS3的属性来代替这些被放弃的CSS属性，这使得IE9,10和11处于进退两难的境地。因此，我在此建议开发者们，如果需要让你的图像模糊效果在所有浏览器上看起来一模一样的话，请用使用了canvas的解决方案[StackBlur][StackBlur]。


图像模糊类似于PhotoShop中的高斯模糊，它包括CSS和SVG，这意味着我们可以在浏览器中原生地实现这种效果。（例如，用这张Khalil Shah拍摄的[图片][Khalil Shah]）

有一个设计上的警告：如果不当地使用图像模糊，或者过度频繁地使用该效果，可能让你的用户很快产生头痛的副作用，那感觉就好像参加了一场历时一周的狂欢party后再访问你的网站一样。因此，图像模糊一般与鼠标的移动操作结合起来，用以取消模糊效果，我也将在文章中展示这个方面。


##实例
首先，我们先来展示最容易的实现版本：使用最新的CSS3滤镜。

我们的HTML5结构如下：

	<img src="pakistani-woman.jpg" alt="blablabla" class=blur>

接下来是模糊特效，通过CSS类名来实现：

	img.blur{ 
		width:367px; 
		height:459px;
		-webkit-filter:blur(3px);
		-moz-filter: blur(3px);
		-o-filter: blur(3px);
		-ms-filter: blur(3px);
		filter: blur(3px);
	}


为了在当前的Firefox浏览器中支持该特效，我们需要增加一个SVG滤镜：

	<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
		<filter id="blur">
			<feGaussianBlur stdDeviation="3" />
		</filter>
	</svg>

将上面的代码保存为*blur.svg*文件，我们的CSS代码需要更新成：

	img.blur{ 
		width:367px; 
		height:459px;
		-webkit-filter:blur(3px);
		-moz-filter: blur(3px);
		-o-filter: blur(3px);
		-ms-filter: blur(3px);
		filter: blur(3px);
		filter: url(blur.svg#blur);
	}

为了在IE4-9中获取同样的效果，我们需要使用古老的DX微软滤镜。这时候我们的代码再次更新：

	img.blur{ 
		width:367px; 
		height:459px;
		-webkit-filter:blur(3px);
		-moz-filter: blur(3px);
		-o-filter: blur(3px);
		-ms-filter: blur(3px);
		filter: blur(3px);
		filter: url(blur.svg#blur);
		filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
	}

##关掉特效

如果你想将视线聚焦在图片上，你必须使用一个新的CSS声明来取消特效。在这个实例中，我在鼠标移动到图片上面的时候撤销了特效，这里使用了`:hover`伪类。（你可以在文章开头的头部图片中看到此效果）

	img.blur:hover{
		filter: none;
		-webkit-filter: blur(0px);
		-moz-filter: blur(0px);
		-ms-filter: blur(0px);
		filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
	}

如果你正在使用Chrome浏览器，你会发现鼠标移上去的时候图片是随着时间慢慢变清晰，这里使用到的技术我会在以后的文章中提及。


##处理图像边缘的问题

跟使用其他滤镜不一样的是，在这里会遇到一个问题：模糊特效会在元素的边缘外部产生模糊效果，外部模糊的尺寸为我们当前指定的模糊数值。如果你只想在图片的内图使用模糊特效的话，以下几个方法你或许用得上：

1. 如果你的图片的边缘都是同种颜色的，那么你可以设置`body`标签或者图片容器标签的`background-color`值为和图片边缘一样的颜色。
2. 使用裁剪属性*clip*，来修剪图片的边缘。clip属性总是以如下的顺序声明：

		clip: rect( 上, 右, 下, 左)
以上面的实例为例，图片长度为367px，高度为459px，模糊数值为2px，所以clip要声明成如下值：
		
		clip: rect(2px,365px,457px,2px);
（注意：clip属性只能应用在声明了`position:absolute`的标签上才会生效。如果你想在IE8和IE8之前的浏览器中得到支持，记得去掉数值后面的*px*单位）
3. 使用一个略小于图片尺寸的标签当做图片的容器（例如一个`<div>`标签），然后在容器上应用`overflow:hidden`，最后往上、往左微移图片的位置，来消除可见的图片外部的模糊特效。

##模糊文字

当然，你可以使用本文提到的滤镜来模糊文字，但是，有一个更好的选择，我在这篇文章中有过讨论：[Blurring Text WIth CSS][Blurring Text WIth CSS]

[source]: http://demosthenes.info/blog/534/Cross-browser-Image-Blur-with-CSS
[StackBlur]: http://quasimondo.com/StackBlurForCanvas/StackBlurDemo.html
[Khalil Shah]: http://flickr.com/photos/khalilshah/271078402
[Blurring Text WIth CSS]: http://demosthenes.info/blog/539/CrossBrowser-CSS-Filters-Blurring-Text
