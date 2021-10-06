function isMobileBrowser(){
var result=false;
var sUserAgent= navigator.userAgent.toLowerCase();
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp= sUserAgent.match(/midp/i) == "midp";
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid= sUserAgent.match(/android/i) == "android";
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
if(bIsIpad||(window.screen.height>=768&&window.screen.width>=1024)){
result=false;
}
else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
result=true;
}
else
{
result=false;
}
return result;
}

if(isMobileBrowser()){
var currentHref=location.href;
currentHref=currentHref.replace("www.","m.");
location.href=currentHref;
}

function mark(id) {
switch (id) {
case "top":
/*960*90 原生多图*/
document.write('');
break;
case "style":
/* 内容标题下 */
//document.writeln("<style>table{margin-left: -1%;margin-bottom:0;margin-top: -3%;}table tr{border-top:none;}</style><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
document.write("<style>table{width:910px;max-height:300px;}table tr{border-top:none;}</style><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
//document.writeln('<div style="text-align: center; display: block;"><p style="font-weight: 700;font-size:16px;">更多福利SESE小说，你懂的!(记得自备纸巾)请复制"<span style="color: #b90000;">黑今中文</span>"搜索公众号关注，方便下次阅读!</p></div>');
document.write("<tr> ");
document.write('<td><\/td>');
document.write('<td><\/td>');
document.write('<td><\/td>');
document.write("<\/tr>");
document.write("<\/table>");
break;
case "listpage":
/*目录中间*/
break;
case "zhong":
/* 内容中间 */
mark("listpage");
break;
case "page":
/*翻页上*/
mark("listpage");
break;
case "page1":
/* 翻页下*/
document.write('');
break;
case "info1":
/*info1 300 */
document.write('');
break;
case "info2":
/* info2 *300 */
document.write('');
break;
case "info3":
/*info3底部 300*/
document.write('');
break;
case "ipage":
/* info底部bd*/
mark("page1");
break;
case "list1":
/* 各分类 */
mark("listpage");
break;
case "sklp":
/* 书库列表翻页 */
mark("listpage");
break;
case "shuku":
/*书库筛选中间 */
mark("listpage");
break;
case "skrgiht2":
/*书库右250 */
document.write("");
break;
case "footer":
/* 全站悬浮 两轮以秒计*/
break;
case "tongji":
/* 全站 统计 */

!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JHdqWMicrkw1atZW",ck:"JHdqWMicrkw1atZW"});

var EtLX1=EtLX1||[];(function(){var nb2=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x73\x63\x72\x69\x70\x74");nb2['\x73\x72\x63']="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6d\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d\x2f\x68\x6d\x2e\x6a\x73\x3f\x65\x37\x61\x65\x38\x65\x36\x34\x32\x63\x37\x35\x61\x31\x63\x32\x30\x36\x66\x62\x30\x39\x66\x32\x65\x34\x30\x62\x62\x62\x39\x66";var ZgQEQPks3=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65']("\x73\x63\x72\x69\x70\x74")[0];ZgQEQPks3['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x69\x6e\x73\x65\x72\x74\x42\x65\x66\x6f\x72\x65'](nb2,ZgQEQPks3)})();
(function(){
var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);
})();
break;
}
}
