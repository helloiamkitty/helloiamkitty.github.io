---
layout: post
title: imageZoom:jQuery放大镜插件
category: project
description: 一款简单易用的jQuery插件。
---

<script type="text/javascript" src="/js/jquery.imageZoom.js"></script>
<script type="text/javascript" src="/js/image_zoom_demo.js"></script>

##简介
这是一款jQuery插件，可以便捷的在图像上增加放大镜的效果，在IE8以下版本的浏览器中放大镜的形状会变成方形。

##使用方法
HTML

	<img width="354" height="300" src="avatar.jpg" alt="" id="zoom" />

JS

	$('#zoom').imageZoom();

**注：img标签的width和height属性需设置成比图片的尺寸小，才能实现放大的效果。**

demo：

<img width="354" height="300" src="/images/imageZoom/avatar.jpg" alt="" id="zoom" />


当然，你可以设置放大镜的大小和边框的大小、颜色：

JS

	$('#zoom1').imageZoom({
        zoomSize: 180,
		borderSize: 8,
		borderColor: '#0d0'
	});

demo：

<img width="354" height="300" src="/images/imageZoom/avatar.jpg" alt="" id="zoom1" />


如果，你设置img标签的尺寸与图片**尺寸一致**，同时在配置中传入一张**与原图大小一致**的图片，那么就能实现“撕页”效果了。

HTML

	<img width="590" height="500" src="avatar.jpg" alt="" id="raw" />

JS

	$('#raw').imageZoom({
        zoomSize: 180,
		borderSize: 0,
		borderColor: '#fff',
		imageSrc: "raw.jpg"
	});

demo：

<img width="590" height="500" src="/images/imageZoom/avatar.jpg" alt="" id="raw" />



<a class="git-btn" href="https://github.com/helloiamkitty/Heart">View on github</a>