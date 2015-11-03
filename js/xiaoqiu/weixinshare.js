
var shareInfo = {
    appid: '',
    imgUrl: 'http://helloiamkitty.github.io/images/xiaoqiu/img/xiaoqiuhk_logo.png',
    lineLink: 'http://helloiamkitty.github.io/xiaoqiuhk-2-year/',
    descContent: '小邱港货2周年啦！',
    shareTitle: '小邱港货2周年啦！'
}

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": shareInfo.appid,
        "img_url": shareInfo.imgUrl,
        "img_width": "250",
        "img_height": "250",
        "link": shareInfo.lineLink,
        "desc": shareInfo.descContent,
        "title": shareInfo.shareTitle
    }, function(res) {})
}

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url": shareInfo.imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": shareInfo.lineLink,
        "desc": shareInfo.descContent,
        "title": shareInfo.shareTitle
    }, function(res) {});
}

function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo', {
        "content": shareInfo.descContent,
        "url": shareInfo.lineLink,
    }, function(res) {});
}
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
    });
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        shareTimeline();
    });
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        shareWeibo();
    });
}, false); /*  |xGv00|ada705fd2b625605c7ea77ef07c32d49 */