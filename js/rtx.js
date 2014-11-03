$(function(){
	var winH = $(window).height();
	var winW = $(window).height();
	$(".left_nav").addClass("absolute");
	$(".left_nav").css({
		"top":winH+50
	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=pageTop(1) && scrollTop<pageTop(11)){
			$(".left_nav").css({
				// "position":"fixed",
				"top":50
			});
			$(".left_nav").removeClass("absolute").addClass("fixed_ie");
			if(winW>=600){
				$(".fixed_link").fadeIn();
			}
		}else{
			$(".left_nav").removeClass("fixed_ie").addClass("absolute");
			if(scrollTop>pageTop(12)){
				$(".left_nav").css({
					"top":pageTop(13)+50
				});
			}else{
				$(".left_nav").css({
					"top":winH+50
				});
			}
			if(winW>=600){
				$(".fixed_link").fadeOut();
			}
		}

		if(scrollTop>pageTop(0)){
			$(".backTop").fadeIn();
		}else{
			$(".backTop").fadeOut();
		}

		if(scrollTop>=pageTop(1) && scrollTop<pageTop(5)){
			$(".left_nav ul li").removeClass("active").eq(1).addClass("active");
		}else if(scrollTop>=pageTop(5) && scrollTop<pageTop(8)){
			$(".left_nav ul li").removeClass("active").eq(2).addClass("active");
		}else if(scrollTop>=pageTop(8) && scrollTop<pageTop(12)){
			$(".left_nav ul li").removeClass("active").eq(3).addClass("active");
		}else if(scrollTop>=pageTop(12) && scrollTop<pageTop(13)){
			$(".left_nav ul li").removeClass("active").eq(4).addClass("active");
		}else{
			$(".left_nav ul li").removeClass("active").eq(0).addClass("active");
		}

	})
	
	function pageTop(ind){
		var page_item = $(".page_item").eq(ind).position().top;
		return page_item;
	}


	$(".left_nav ul li a").click(function(){
		var ind = $(".left_nav ul li a").index(this);
		
		switch(ind){
			case 0 :
				scrollPage(0);
			break;
			case 1 :
				scrollPage(1);
			break;
			case 2 :
				scrollPage(5);
			break;
			case 3 :
				scrollPage(8);
			break;
			case 4 :
				scrollPage(12);
			break;
		}
		return false;
	})


	function scrollPage(ind){
		var page_item = $(".page_item").eq(ind).position().top;
		$('body,html').animate({scrollTop:page_item},300);
	}


	$(".rtx_first_down").click(function(){
		scrollPage(1);
	})

	$(".backTop,.back_top").click(function(){
		scrollPage(0);
	})



	//娲诲姩椤甸潰
	$(".say").mouseenter(function(){
		$(this).css({
			"-webkit-animation-play-state":"paused",
			"-moz-animation-play-state":"paused",
			"animation-play-state":"paused"
		});
		$(this).find(".icon").css({
			"-webkit-animation-play-state":"paused",
			"-moz-animation-play-state":"paused",
			"animation-play-state":"paused"
		});
	})
	$(".say").mouseleave(function(){
		$(this).css({
			"-webkit-animation-play-state":"running",
			"-moz-animation-play-state":"running",
			"animation-play-state":"running"
		});

		$(this).find(".icon").css({
			"-webkit-animation-play-state":"running",
			"-moz-animation-play-state":"running",
			"animation-play-state":"running"
		});
		
	})


	$(".say .icon").click(function(){
		var ind = $(".say .icon").index(this);
		$(".comfirm_say").fadeIn();
		$(".content_area ul li").hide().eq(ind).show();
	})

	$(".comfirm_say .close_win,.bottom_btn .close").click(function(){
		$(".comfirm_say").fadeOut();
		return false;
	})

})