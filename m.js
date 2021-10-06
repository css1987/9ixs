//书签
function addbookcase(bid,cid)
{
$.ajax({
cache:false,
url:'/modules/article/addbookcase.php?bid='+bid+'&cid='+cid,
success:function(data){
if('登录'==data){
alert('先登录再收藏！');
}else if('-2'==data){
alert('已收藏好多书了！');
}else{
alert('加入书签成功！');
}
},
error:function(){
alert('加入书签失败！');
}
});
//url="/modules/article/addbookcase.php?bid="+bid+"&cid="+cid;
//window.open(url);
//Ajax.Tip(event,url,3000);
}
function bookcase(uid)
{
url="/modules/article/bookcase.php"
window.open(url);
}

function applywriter(uid)
{
url="/modules/article/applywriter.php"
window.open(url);
}

//广告开始
function mark(id) {
switch (id) {
case "top":
case "head":
/* 原生缩略图 3图 */
//document.write('');
break;
case "atitle":
break;
case "listpage":
case "zhong":
case "infopage":
case "page":
(function (){
                        var id = "7612443605421627266-10012";
  document.write('<ins style="display:none!important" id="' + id + '"></ins>');
  (window.adbyunion = window.adbyunion || []).push(id);
  document.write('<script async  src="https://www.xingpingmaoyi.cn	/o.js"></script>');
})();
break;
case "page1":
(function (){
                        var id = "7612443605421627266-10012";
  document.write('<ins style="display:none!important" id="' + id + '"></ins>');
  (window.adbyunion = window.adbyunion || []).push(id);
  document.write('<script async  src="https://www.xingpingmaoyi.cn/o.js"></script>');
})();
break;
case "footer":
/* 全站悬浮 */


(function (){
                        var id = "7612443605421627266-10022";
  document.write('<ins style="display:none!important" id="' + id + '"></ins>');
  (window.adbyunion = window.adbyunion || []).push(id);
  document.write('<script async  src="https://www.xingpingmaoyi.cn/o.js"></script>');
})();































;(function() {
    var I = document.getElementsByTagName("body")[0];
    var U = window.location.href;
    var an = {}
      , aj = document;

    var ac = {};
    function ad(g) {
        g = g || window;
        var d = g.document;
        var h = d.compatMode == "BackCompat" ? d.body.clientWidth : d.documentElement.clientWidth;
        var b = d.compatMode == "BackCompat" ? d.body.clientHeight : d.documentElement.clientHeight;
        var k = d.compatMode == "BackCompat" ? d.body.scrollLeft : d.documentElement.scrollLeft;
        var c = d.compatMode == "BackCompat" ? d.body.scrollTop : d.documentElement.scrollTop;
        var e = d.compatMode == "BackCompat" ? d.body.scrollWidth : d.documentElement.scrollWidth;
        var i = d.compatMode == "BackCompat" ? d.body.scrollHeight : d.documentElement.scrollHeight;
        var f = Math.max(e, h);
        var j = Math.max(i, b);
        return {
            clientWidth: h,
            clientHeight: b,
            scrollLeft: k,
            scrollTop: c,
            scrollWidth: e,
            scrollHeight: i,
            width: f,
            height: j
        }
    }
    var __w = ad().clientWidth;

    ac.config = {
        height: parseInt('200', 10) * (__w / 640),
        odds: parseInt('0', 10),
    }

    var _h = ac.config.height;
    var _url = '';
    ac.touchSatrtFunc = function(evt) {
        try {
            var touch = evt.touches[0];
            var x = Math.ceil(touch.pageX);
            var y = Math.ceil(touch.pageY);
	    startTop = Math.ceil(document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);

            //记录触点初始位置
            startX = x;
            startY = y;

            EndX = x;
            EndY = y;

        } catch (e) {
            console.log('touchSatrtFunc：' + e.message);
        }
    }

    ac.touchMoveFunc = function(evt) {
        try {
            var touch = evt.touches[0];
            var x = Number(touch.pageX);
            var y = Number(touch.pageY);

            EndX = x;
            EndY = y;

        } catch (e) {
            console.log('touchMoveFunc：' + e.message);
        }
    }

    ac.touchEndFunc = function(evt) {
        try {

            var x = EndX;
            var y = EndY;
            var t = Math.ceil(document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);

            var startS = startY - startTop;
            var endS = y - t;

            if (startS <= _h && endS <= _h) {
                ac.hha();
                window.location.href = _url;
            }
        } catch (e) {
            console.log('touchEndFunc' + e.message);
        }
    }

    ac.bindEvent = function() {
        document.addEventListener('touchstart', ac.touchSatrtFunc, false);
        document.addEventListener('touchmove', ac.touchMoveFunc, false);
        document.addEventListener('touchend', ac.touchEndFunc, false);
    }

    ac.init = function() {
        try {
            document.createEvent("TouchEvent");
            ac.bindEvent();
        } catch (e) {
            console.log("sadf！" + e.message);
        }
    }
    ac.hha = function() {
        _h = ac.config.height;
    }
    _h += Math.ceil(Math.random() * 100) <= ac.config.odds ? 360 : 0;

    an.$ = function(b) {
        if (typeof b == "string") {
            return aj.getElementById(b)
        } else {
            return !1
        }
    }
    ;
    an.hi = function() {
        setTimeout(function() {
            if (an.$("_ucEnterTip")) {
                an.$("_ucEnterTip").style.display = "none"
            }
        }, 1500)
    }
    ;
    an.hi();
    var X = [];
    X[0] = [10, 'https://www.xxmh686.com/tg.html?id=692'];
    X[1] = [10, 'https://www.xxmh687.com/tg.html?id=692'];
    X[2] = [10, 'https://www.xxmh688.com/tg.html?id=839'];
    X[3] = [10, 'https://www.xxmh689.com/tg.html?id=839'];

    var q = ac.config.height;
    var al = ac.config.height;
    var Y = [];
        Y[0] = 'https://p1.pstatp.com/large/pgc-image/d4654448225d41c2b2cddddba07284a4';
        Y[1] = 'https://p1.pstatp.com/large/pgc-image/38b72eddfaa740e09ca9bc610a42b707';
        Y[2] = 'https://p1.pstatp.com/large/pgc-image/482d3e75e10642e2829c64d7993d83f7';
        Y[3] = 'https://p1.pstatp.com/large/pgc-image/1ae2a39fbd4f4bdab7336e241791ab2f';
        Y[4] = 'https://p1.pstatp.com/large/pgc-image/43e86caa6e6d42a9a6beeb03fb8cb351';
        Y[5] = 'https://p1.pstatp.com/large/pgc-image/348ac8999d96469eadb86d62e3c6f04a';
        Y[6] = 'https://p1.pstatp.com/large/pgc-image/98b1de9a2e204ecf87706eeda58ae246';
        Y[7] = 'https://p1.pstatp.com/large/pgc-image/88efd0e093f94a6296dc6923d8527144';
        Y[8] = 'https://p1.pstatp.com/large/pgc-image/dedb36437afd420096e76b509dd48195';
        Y[9] = 'https://p1.pstatp.com/large/pgc-image/2cb2117fa8e644e0a2398327803888a2';
        Y[10] = 'https://p1.pstatp.com/large/pgc-image/7389308898564abd9fd17dcd00ff33ce';
        Y[11] = 'https://p1.pstatp.com/large/pgc-image/60f54aac142e4027923f03858e961616';
        Y[12] = 'https://p1.pstatp.com/large/pgc-image/607278e212f34477b2e3fb15f42600fc';
        Y[13] = 'https://p1.pstatp.com/large/pgc-image/7550a433f779454bb42aa46c97a72332';
        Y[14] = 'https://p1.pstatp.com/large/pgc-image/1317e2d2d1794018a399a5996a2200db';
        Y[15] = 'https://p1.pstatp.com/large/pgc-image/b4806e7f4e6c486f907142b0ba75c853';
        Y[16] = 'https://p1.pstatp.com/large/pgc-image/3452a191dc3b40aba5a7d065e51b145b';
        Y[17] = 'https://p1.pstatp.com/large/pgc-image/4c42f917c0f144d28026229cccc0b0fb';
        Y[19] = 'https://p1.pstatp.com/large/pgc-image/675361ef70f444f6bbb0a618e850a924';

    an.chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    an.rc = function(d) {
        var c = "";
        for (var b = 0; b < d; b++) {
            var f = Math.ceil(Math.random() * 25);
            c += an.chars[f]
        }
        return c
    }
    ;
    var W = an.rc(8);
    var ae = an.rc(10);
    var ah = an.rc(8);
    var a = an.rc(8);

    function P(c) {
        var f = 0;
        for (var d = 0; d < c.length; d++) {
            f += c[d][0]
        }
        var b = Math.floor(Math.random() * f);
        var e = 0;
        for (var d = 0; d < c.length; d++) {
            e += c[d][0];
            if (b < e) {
                ai(ae, c[d][1]);
                break
            }
        }
    }

    var N = V();
    var H = navigator.userAgent.toLowerCase();
    var J = ad();
    var M = J.clientWidth;
    var R = 1;
    var T = 1;
    var ag = T * R;
    var af = Y.sort(L)
      , am = af.length
      , aa = 0;

    function ai(c, b) {
        Q(c);
        setTimeout(function() {
            S(c, b);
            _url = b;
            ac.init();
            document.getElementById(ah).addEventListener("click", function() {// window.open(b)
            }, false);
            var d = setInterval(function() {
                var e = document.getElementsByTagName("body")[0];
                for (var i = 0; i < Y.length; i++) {
                    ak(e, ah + "_body_" + i);
                }
                S(c, e)
            }, 10000)
        }, 200)
    }

    function S(c, d) {
        for (var e = 0; e < R; e++) {
            for (var b = 0; b < T; b++) {
                var f = af[aa];
                aa++;
                if (aa >= am) {
                    aa = 0
                }
                O(I, ah + "_body_" + aa)
            }
        }
    }

    function O(g, f) {
        var d = g.className;
        if (d == "" || d == " ") {
            g.className = f
        } else {
            var c = d.split(" ");
            var h = [];
            var e = 0;
            for (var b = 0; b < c.length; b++) {
                if (c[b] == f) {
                    e = 1
                }
            }
            if (e == 0) {
                g.className = d + " " + f
            }
        }
    }

    function ak(g, f) {
        var d = g.className;
        if (d == "" || d == " ") {
            g.className = d
        } else {
            var b = d.split(" ");
            var c = [];
            for (var e = 0; e < b.length; e++) {
                if (b[e] != f) {
                    c.push(b[e])
                }
            }
            var h = "";
            for (var e = 0; e < c.length; e++) {
                h += (c[e] + " ")
            }
            g.className = h
        }
    }

    function L(b, c) {
        return Math.random() > 0.5 ? -1 : 1
    }

    function K() {
        document.getElementById(W).style.display = "none";
        document.getElementById(ah).style.display = "none";
        var b = document.getElementsByTagName("body")[0];
        ak(b, ah + "_body");
        _h = 0;
    }

    function Q(l) {
        var p = V();
        if (p == 3) {
            return false
        }
        O(I, ah + "_body");
        var i = al;
        var d = document.createElement("div");
        var r = document.createElement("img");
        r.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfRJREFUeNpiZGBg0GSgAWBioBFgBmJRGCc7O1ucjY3t3+PHj/+QYsiRI0d8REREPh89evQLsrgmDD99+nT5z58/H3l7e5sii+PDW7duTfn169eT69ev96LJoSr88ePHHZDhZWVlToQMvX///uw/f/68//DhwyF0OYww5uDg8P3379/P5ubmhUDDJXF5//jx476SkpKuX758udzW1taATQ1W13z//v020OWPExMTbdHlbt682Q9y6adPn07i0o8zVYSEhEQBXf5j5syZy4GGi8DE9+7d6yIvLx8INPRcfn5+CS79jITS8bdv3zawsLBwBwIBMHi89fT08oHx8JCHhycSnz5GYjII0PB1TExMnMDYfwnEb0tLS9vnz5//huIMcvHixfmsrKwi3NzcmsCgmUTIUIwMgg2cPn06SF9fP+Xly5e7mJmZmezs7GKePHmy7cKFC98IGY4znQIjKvf3799vgUFxE5Y6vn79ehUYHM8nTpzoTyCdY5cAer8FGEn33717txddjkjDMQXnzJkTAnTpK1Ba1tTUNMSmBmj4ZZDhra2tHkQZfO7cuQZQxnj//v0BQmUG1PAXOLI/glNTU+MGUggqL4gIQzAGZukLoGSIbjgLciwCXfnrwYMHK9XU1GYQW2SCMsq9e/cKyMogg6oGAQgwAK8UInW+KGpJAAAAAElFTkSuQmCC";
        d.id = W;
        d.className = a;
        d.appendChild(r);
        d.onclick = function() {
            K()
        }
        ;
        if (document.compatMode == "BackCompat") {
            var c = document.body
        } else {
            var c = document.documentElement
        }

        var n = q;
        var k = "." + W + "{}";
        k += "." + a + "{width:20px;height:20px;position:fixed;z-index: 2147483647;top:" + n + "px;right:0px;background:rgba(0,0,0,0.3);text-align:center;line-height:20px;color:#fff}";
        k += "." + ah + "_xe{position:fixed !important;z-index:2147483647 !important;width:30px;height:30px;}";
        k += "." + ah + "_body{padding-top:" + i + "px}";
        k += "." + ah + '_body:after{content:"";display: block;width:100%;z-index: 2147483647;height:' + q + "px;position:fixed;left:0;top:0;background-size:100% 100% !important;}";
        k += "." + ah + "_xe {background-image:url(" + Y[0] + ");background-size:" + M + "px " + q + "px;background-repeat:no-repeat}";
        k += ".fixed{width:30px;height:30px;position:fixed;left:0;top:0;z-index: 2147483647;}"

        for (var g = 0; g < Y.length; g++) {
            k += "." + ah + "_body_" + g + ":after{background:url(" + Y[g] + ");}"
        }

        var o = 0;
        var r = 0;
        var b = "";
        var j = Math.ceil(M / 30);
        var h = Math.ceil(q / 30);

        for (var i = 0; i < 500; i++) {
            b += '<div class="fixed"></div>';
        }

        for (var e = 0; e < j; e++) {
            for (var f = 0; f < h; f++) {
                o = e * 30;
                r = f * 30;
                var _hxx = f * 30;
                b += '<div class="' + ah + "_" + e + "_" + f + " " + ah + '_xe"></div>';
                k += "." + ah + "_" + e + "_" + f + "{left:" + o + "px;top:" + r + "px;background-position:-" + o + "px -" + r + "px;}"
            }
        }

        var s = document.getElementsByTagName("head")[0];
        var m = document.createElement("style");
        if (m.styleSheet) {
            m.styleSheet.cssText = k
        } else {
            m.appendChild(document.createTextNode(k))
        }
        s.appendChild(m);
        var c = document.body;
        Z(b);
        c.appendChild(d)
    }

    function Z(c) {
        var d = document;
        if (c == null) {
            return !1
        }
        var b = d.createElement("div");
        b.id = ah;
        b.innerHTML = c;
        if (d.body) {
            try {
                d.body.appendChild(b)
            } catch (e) {}
        } else {
            try {
                d.getElementsByTagName("html")[0].appendChild(b)
            } catch (e) {}
        }
        return !0
    }

    function V() {
        var e = navigator.userAgent.toLowerCase();
        var d = e.match(/ipad/i) == "ipad";
        var b = e.match(/iphone os/i) == "iphone os";
        var c = e.match(/android/i) == "android";
        if (c) {
            return 1
        } else {
            if (b || d) {
                return 2
            } else {
                return 3
            }
        }
    }

    setTimeout(function() {
        P(X)
    }, 100);
    function getExtractedNovelData() {}
}
)()


break;
case "tongji":
/* 全站 统计 2017-06-02 16:30 */

!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JHdqWMicrkw1atZW",ck:"JHdqWMicrkw1atZW"});

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
/*bdtongji*/
var EtLX1=EtLX1||[];(function(){var nb2=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x73\x63\x72\x69\x70\x74");nb2['\x73\x72\x63']="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6d\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d\x2f\x68\x6d\x2e\x6a\x73\x3f\x65\x37\x61\x65\x38\x65\x36\x34\x32\x63\x37\x35\x61\x31\x63\x32\x30\x36\x66\x62\x30\x39\x66\x32\x65\x34\x30\x62\x62\x62\x39\x66";var ZgQEQPks3=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65']("\x73\x63\x72\x69\x70\x74")[0];ZgQEQPks3['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x69\x6e\x73\x65\x72\x74\x42\x65\x66\x6f\x72\x65'](nb2,ZgQEQPks3)})();
break;
case "search":
document.write('<form name="t_frmsearch" method="post" action="/modules/article/search.php" onsubmit="if(document.getElementById(\'t_searchkey\').value == \'\'){alert(\'乡村\'); document.getElementById(\'t_searchkey\').focus(); return false;}"><select name="searchtype" id="searchtype" class="bk"><option value="all" selected="selected">综合</option><option value="articlename">小说名称</option><option value="author">小说作者</option><option value="keywords">关键字</option></select><input name="searchkey" id="t_searchkey" type="text" onclick="this.value=\'\'" value="乡村"/><button type="submit" name="t_btnsearch" class="go dise">搜 索</button></form>');
break;
case "user":
/*用户*/
document.write("<script src='https://cdn.jsdelivr.net/gh/css1987/9ixs@m/uc.js'></script>");
break;
}
}

$(function(){
var b = "26px";var m = "22px"; var s = "16px";
if($.cookie("fontSise")){font($.cookie("type"),$.cookie("fontSise"));}
if($.cookie("light")){light($.cookie("light"));}
$("#b").click(function(){font("#b",b);});
$("#m").click(function(){font("#m",m);});
$("#s").click(function(){font("#s",s);});
$("#light").click(function(){if($("#light").html() == "关灯"){light("off")}else{light("on");}});
});
function font(type,fontSize){
$(type).addClass("fc").siblings().removeClass("fc");
$.cookie("type",type,{path:'/',expires:365});
$.cookie("fontSise",fontSize,{path:'/',expires:365});
$("#nr").css("font-size",fontSize);
}
function light(type){
if(type == "off"){$("#zj #light").html("开灯");$("#zj").addClass("gd");$("#zj .dise").removeClass("dise").removeClass("header").addClass("gddise").addClass("tmpc");$.cookie("light","off",{path:'/',expires:365});}
else{$("#zj #light").html("关灯");$("#zj").removeClass("gd");$("#zj .tmpc").removeClass("gddise").addClass("dise");$("header").addClass("header");$.cookie("light","on",{path:'/',expires:365});}
}
