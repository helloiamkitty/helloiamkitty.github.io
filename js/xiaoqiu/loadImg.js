
var arrImg = ["http://helloiamkitty.github.io/images/xiaoqiu/img/xiaoqiuhk_logo.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/bg2.png", "http://helloiamkitty.github.io/images/xiaoqiu/sprite/style-coi140917145322.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pie-ios.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pie-and.png"];
var arrImg2x = ["http://helloiamkitty.github.io/images/xiaoqiu/img/xiaoqiuhk_logo.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/bg2@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/sprite/style-coi140917145322@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pie-ios@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pie-and@2x.png"];
var lazyLoad = {
    section_0: ["http://helloiamkitty.github.io/images/xiaoqiu/img/xiaoqiuhk_logo.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/bg2@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/bg2.png", "http://helloiamkitty.github.io/images/xiaoqiu/sprite/style-coi140917145322@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/sprite/style-coi140917145322.png"],
    section_1: [],
    section_3: [],
    section_4: ["http://helloiamkitty.github.io/images/xiaoqiu/img/pie-ios@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-ios.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and.png"],
    section_5: [],
    section_6: [],
    section_7: ["http://helloiamkitty.github.io/images/xiaoqiu/img/pop-7@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pop-7.png"],
    section_8: ["http://helloiamkitty.github.io/images/xiaoqiu/img/pop-8@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/pop-8.png"],
    section_9: [],
    section_10: ["http://helloiamkitty.github.io/images/xiaoqiu/img/radar-net@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/radar-inner@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/radar-pop@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/radar-net.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/radar-inner.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/radar-pop.png"],
    section_11: ["http://helloiamkitty.github.io/images/xiaoqiu/img/face-hit@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/face-hit.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/face@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/face.png"],
    section_12: [],
    section_13: [],
    section_14: [],
    section_15: [],
    section_16: [],
    section_17: ["http://helloiamkitty.github.io/images/xiaoqiu/img/share@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/logo@2x.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/share.png", "http://helloiamkitty.github.io/images/xiaoqiu/img/logo.png"]
};
var loading_single = function(numLoaded, length, src, obj) {
    var width_pro = (numLoaded / length) * 100;
    width_pro += "%";
    $('.loading-num').text(Math.floor((numLoaded / length) * 100) + "%");
    $('.loading-inner').css("width", width_pro);
};
var loading_all = function(numError) {
    $('#fullpage').show();
    $('.loadingPage').fadeOut();
    $('.ele-btn a').click(function() {
        window.location = "http://weidian.com/?userid=160615473"
    });
    $(document).ready(function() {
        document.body.onclick = function() {
            return false;
        };
        $('.ele-btn a').click(function() {
            window.location = "http://weidian.com/?userid=160615473"
        });
        var cur_index = 1;
        var back_color = [
        	'#fff', 
        	"#7bc9e7", 
        	"#7bc9e7", 
        	"#05bd64", 
        	"#05bd64", 
        	"#5fa3ff",
        	"#5fa3ff",
        	"#5fa3ff",
        	"#4EC6B2", 
        	"#F79536", 
        	"#ED2438"];
        $('#fullpage').fullpage({
            verticalCentered: true,
            scrollingSpeed: 20,
            easing: 'easeInQuart',
            css3: true,
            sectionsColor: back_color,
            onLeave: function(index, direction) {
                $('.section-nav span').removeClass('active');
                if (index > direction)
                    $('.section-nav span').eq(index - 2).addClass('active');
                else
                    $('.section-nav span').eq(index).addClass('active');
                if (index == 1 || index == 2)
                    $('.section').eq(index).addClass('active');
                switch (index) {
                    case 4:
                        scene5_leave(index);
                        break;
                    case 5:
                        scene6_leave(index);
                        break;
                    case 6:
                        scene7_leave(index);
                        break;
                    case 7:
                        scene8_leave(index);
                        break;
                    case 8:
                        scene9_leave(index);
                        break;
                    default:
                        break;
                }
            },
            afterLoad: function(anchorLink, index) {
                cur_index = index;
                switch (index) {
                    case 4:
                        scene5(index);
                        break;
                    case 5:
                        scene6(index);
                        break;
                    case 6:
                        scene7(index);
                        break;
                    case 7:
                        scene9(index);
                        break;
                    case 8:
                        scene9(index);
                        break;
                    default:
                        break;
                }
            },
            afterRender: function() {},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
            onSlideLeave: function(anchorLink, index, slideIndex, direction) {}
        });
        $('.up').click(function() {
            $.fn.fullpage.moveSectionDown();
        });
        var single_nav = '<span></span>';
        var len = $('.section').length;
        for (var i = 0; i < len; i++) {
            $('.section-nav').append(single_nav);
        };
        $('.section-nav span').eq(0).addClass('active');
        $('.section-nav').css('marginTop', "-" + ($('.section-nav').height()) / 2 + "px");

        function orientationChange() {
            switch (window.orientation) {
                case 0:
                case 180:
                    $("body").removeClass("orientaion-change");
                    $.fn.fullpage.moveTo(cur_index);
                    break;
                case -90:
                case 90:
                    $('.phone-change').css("backgroundColor", back_color[cur_index - 1]);
                    $("body").addClass("orientaion-change");
                    break;
            }
        }
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
    });
};
var loading_error = function(numLoaded, length, src, obj) {};

function loadimg(arr, funLoading, funOnLoad, funOnError) {
    var numLoaded = 0,
        numError = 0,
        isObject = Object.prototype.toString.call(arr) === "[object Object]" ? true : false;
    var arr = isObject ? arr.get() : arr;
    for (a in arr) {
        var src = isObject ? $(arr[a]).attr("data-src") : arr[a];
        preload(src, arr[a]);
    }

    function preload(src, obj) {
        var img = new Image();
        img.onload = function() {
            numLoaded++;
            funLoading && funLoading(numLoaded, arr.length, src, obj);
            funOnLoad && numLoaded == arr.length && funOnLoad(numError);
        };
        img.onerror = function() {
            numLoaded++;
            numError++;
            funOnError && funOnError(numLoaded, arr.length, src, obj);
        }
        img.src = src;
    }
}

function capture_orientation (event) {
         var alpha = event.alpha;
         var beta = event.beta;
         var gamma = event.gamma;
        $('#text-txt').text('Orientation - Alpha: '+alpha+', Beta: '+beta+', Gamma: '+gamma);
         if(gamma>-45&&gamma<45){
             var val="rotateY("+((gamma/2))+"deg)";
             $('.rotate-dom').css({transform:val,"-webkit-transform":val});
         }

    }
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', capture_orientation, false);
    } else {
        $('#text-txt').text("没有这个属性");
    }

    window.setTimeout(function(){
        $('.section-0 .hold-1 .pie').addClass('aaa');
    },2000);



    function scene5(index) {
        var ops = {
            useEasing: true,
              useGrouping : true,
              separator : ',',
              decimal : '.',
              prefix : '',
              suffix : '%'
        };
    // var demo = new countUp("num22", 0, 46, 0, 0.5, ops);
    // demo.start();
    $('.section-' + 5).find('li').each(function () {
        var demo = new countUp("n5-" + $(this).attr('data-0'), 0, $(this).attr('data-0'), 0, 0.5, ops);
        demo.start();
        $(this).find('.td-data').animate({'width': $(this).attr('data-len') + 'px'},1000);
    });
    }

function scene6(index){
    window.setTimeout(function(){
        document.getElementById("pie_wrap").className="active-pie";
    },1000);
    window.setTimeout(function(){
        $('#pie_wrap #c1_r,#pie_wrap #c1_l').css({"transform":"scale(1.1)","-webkit-transform":"scale(1.1)"});
    },1500);
}
function scene6_leave(index){
        document.getElementById("pie_wrap").className="";
    $('#pie_wrap #c1_r,#pie_wrap #c1_l').css({"transform":"scale(1)","-webkit-transform":"scale(1)"});
}
function scene9(index) {
        var ops = {
            useEasing: true,
                  useGrouping : true,
                  separator : ',',
                  decimal : '.',
                  prefix : '￥',
                  suffix : ''
    };
    $('.section-' + 9).find('li').each(function () {
        var demo = new countUp($(this).attr('data-id'), 0, $(this).attr('data-0'), 0, 0.5, ops);
        demo.start();
        $(this).find('.td-data').animate({'width': $(this).attr('data-len') + 'px'},1000);
    });
};
    function scene7(index){
        $('.section-'+7).find('.table-wrap li').each(function(){
            $(this).find('.td-data').animate({'height': $(this).attr('data-len') + 'px'},1000,function(){$(this).addClass('td-data-done')});
        });
    }
    function scene7_leave(index){
        $('.section-'+7).find('.table-wrap li').each(function(){
            $(this).find('.td-data').animate({'height': 0 + 'px'},100,function(){$(this).removeClass('td-data-done')});
        });
    }
function scene8(index){
       $('.section-'+8).find('.table-wrap li').each(function(){
           $(this).find('.td-data').animate({'height': $(this).attr('data-len') + 'px'},1000,function(){$(this).addClass('td-data-done')});
       });
   }
   function scene8_leave(index){
       $('.section-'+8).find('.table-wrap li').each(function(){
           $(this).find('.td-data').animate({'height': 0 + 'px'},100,function(){$(this).removeClass('td-data-done')});
       });
   }
    function scene9_leave(index){
        $('.section-' + 9).find('li').each(function () {
            $(this).find('.td-data').animate({'width': 0 + 'px'},100);
        });
    }
    function scene5_leave(index){
        $('.section-' + 5).find('li').each(function () {
            $(this).find('.td-data').animate({'width': 0 + 'px'},100);
        });
    }
    var firstLoad=[];
    for(var i=0;i<=5;i++){
        var arr=lazyLoad["section_"+i];
        if(arr!=null&&arr!=undefined)
        firstLoad=firstLoad.concat(lazyLoad["section_"+i]);
    }
    if(window.devicePixelRatio==null||window.devicePixelRatio==undefined){
        loadimg(["http://qzonestyle.gtimg.cn/aoi/sola/20141009162923_NXt0OmYzxt.png"],loading_single,loading_all,loading_error);
    }
    else{
        if(window.devicePixelRatio>=1.25)
            loadimg(arrImg2x,loading_single,loading_all,loading_error);
        else
            loadimg(arrImg,loading_single,loading_all,loading_error);
    }