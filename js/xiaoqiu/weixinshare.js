
var shareInfo={appid:'',imgUrl:'http://qzonestyle.gtimg.cn/aoi/sola/20141009162923_NXt0OmYzxt.png',lineLink:'http://qzonestyle.gtimg.cn/touch_proj/proj-pad-report/index.html',descContent:'2014腾讯 中国平板电脑用户行为报告',shareTitle:'中国平板电脑用户行为报告 - 腾讯ISUX'}
function shareFriend(){WeixinJSBridge.invoke('sendAppMessage',{"appid":shareInfo.appid,"img_url":shareInfo.imgUrl,"img_width":"250","img_height":"250","link":shareInfo.lineLink,"desc":shareInfo.descContent,"title":shareInfo.shareTitle},function(res){})}
function shareTimeline(){WeixinJSBridge.invoke('shareTimeline',{"img_url":shareInfo.imgUrl,"img_width":"200","img_height":"200","link":shareInfo.lineLink,"desc":shareInfo.descContent,"title":shareInfo.shareTitle},function(res){});}
function shareWeibo(){WeixinJSBridge.invoke('shareWeibo',{"content":shareInfo.descContent,"url":shareInfo.lineLink,},function(res){});}
document.addEventListener('WeixinJSBridgeReady',function onBridgeReady(){WeixinJSBridge.on('menu:share:appmessage',function(argv){shareFriend();});WeixinJSBridge.on('menu:share:timeline',function(argv){shareTimeline();});WeixinJSBridge.on('menu:share:weibo',function(argv){shareWeibo();});},false);/*  |xGv00|ada705fd2b625605c7ea77ef07c32d49 */