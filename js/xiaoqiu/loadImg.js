
var arrImg = ["http://qzonestyle.gtimg.cn/aoi/sola/20141009162923_NXt0OmYzxt.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/bg2.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/sprite/style-coi140917145322.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-ios.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and.png"];
var arrImg2x = ["http://qzonestyle.gtimg.cn/aoi/sola/20141009162923_NXt0OmYzxt.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/bg2@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/sprite/style-coi140917145322@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-ios@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and@2x.png"];
var lazyLoad = {
    section_0: ["http://qzonestyle.gtimg.cn/aoi/sola/20141009162923_NXt0OmYzxt.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/bg2@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/bg2.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/sprite/style-coi140917145322@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/sprite/style-coi140917145322.png"],
    section_1: [],
    section_3: [],
    section_4: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-ios@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-ios.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pie-and.png"],
    section_5: [],
    section_6: [],
    section_7: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pop-7@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pop-7.png"],
    section_8: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pop-8@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/pop-8.png"],
    section_9: [],
    section_10: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-net@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-inner@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-pop@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-net.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-inner.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/radar-pop.png"],
    section_11: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/face-hit@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/face-hit.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/face@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/face.png"],
    section_12: [],
    section_13: [],
    section_14: [],
    section_15: [],
    section_16: [],
    section_17: ["http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/share@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/logo@2x.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/share.png", "http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/img/logo.png"]
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
        window.location = "detail.html"
    });
    $(document).ready(function() {
        document.body.onclick = function() {
            return false;
        };
        $('.ele-btn a').click(function() {
            window.location = "detail.html"
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
            	console.log(index)
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
            	console.log(index)
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
} /*  |xGv00|e9bdfe4254d4d43fa2ae435232dccb28 */