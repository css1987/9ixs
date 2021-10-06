$(function(){
 var $drop=$('.top-menu-bd').find('[role="drop"]'),$dropDown=$('.top-menu-bd').find('[role="drop-down"]');
 var mask=new Mask();

 $.each($drop,function(i){
  fnMouseHover($drop[i],$dropDown[i]);
 })

 $('[role="tab"]').on('click',function(){
  if($(this).next().length==0) return;
  showThis($(this));
  setHeight()
  $(window).on('resize',function(){
   setHeight()
  })
 })

 $('[role="close"]').on('click',function(){
  closeThis($(this));
 })

 $('.tab-directory-content').on('click','dt',function(){
  setHeight();
  $(this).next().slideToggle(setHeight).siblings('dd').slideUp();
 })

 $('body').on('click','[role="pop-comment"]',function(){
  mask.create();
  $('[role="pop-comment-wp"]').show();
 })

 $('body').on('click','[role="btn-ok"]',function(){
  $(this).parents('.question-wp').hide().next().show();
 })

 $('body').on('click','[role="pop-close"]',function(){
  mask.close();
  $(this).parents('.pop').hide();
 })

 //阅读设置
 !function(){

  var arrColor = ['#f6f4ec','#fff','#f8eded','#f2f8ed','#f0f5fb','#f7f8ed'],
  arrFontFamily= ['microsoft yahei','SimHei','simsun','方正启体简体'],
  $article     = $('[role="article"]'),
  $articleBd   = $('[role="article-body"]');

  $('[role="read-setting"]').on('click',function(e){
   var setting={
    'color1':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',0, 7);
    },
    'color2':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',1, 7);
    },
    'color3':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',2, 7);
    },
    'color4':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',3, 7);
    },
    'color5':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',4, 7);
    },
    'color6':function(){
     setTheme($(e.target));
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('theme',5, 7);
    },
    'font-family1':function(){
     setFamily($(e.target));
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontFamily',0, 7);
    },
    'font-family2':function(){
     setFamily($(e.target));
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontFamily',1, 7);
    },
    'font-family3':function(){
     setFamily($(e.target));
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontFamily',2, 7);
    },
    'font-family4':function(){
     setFamily($(e.target));
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontFamily',3, 7);
    },
    'fontsize1':function(){
     var fontSize=parseInt($articleBd.css('font-size'));
     fontSize=--fontSize<12?12:fontSize;
     $('[role="fontsize2"]').html(fontSize);
     $articleBd.css({'font-size':fontSize});
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontSize',fontSize, 7);
    },
    'fontsize3':function(){
     var fontSize=parseInt($articleBd.css('font-size'));
     fontSize=++fontSize>48?48:fontSize;
     $('[role="fontsize2"]').html(fontSize);
     $articleBd.css({'font-size':fontSize});
     writeCookie('fontset',$articleBd.attr('style'), 7);
     writeCookie('fontSize',fontSize, 7);
    },
    /*** 重置默认设置*/
    'reset-default':function(){
     $('[role="fontsize2"]').html(16);
     $('[role="article"],[role="article-body"]').removeAttr('style');
     writeCookie('bgcset',$article.attr('style'), 7);
     writeCookie('fontset',$articleBd.attr('style'), 7);
     setTheme($('[role^="color"]').eq(0));
     setFamily($('[role^="font-family"]').eq(0));
     writeCookie('theme',0, 7);
     writeCookie('fontFamily',0, 7);
    }
   }

   if(setting.hasOwnProperty($(e.target).attr('role'))){
    setting[$(e.target).attr('role')]();
   }

  });

  function setTheme(obj){
   obj.siblings().html('').end().html('<i class="icon-select"></i>');
   $article.css({'background-color':arrColor[obj.index()]});
  }

  function setFamily(obj){
   obj.addClass('cur').siblings('a').removeClass('cur');
   $articleBd.css({'font-family':arrFontFamily[obj.index()]});
  }

  //读取cookie中的设置信息
  readCookie('bgcset')?$article.attr('style',readCookie('bgcset')):'';
  readCookie('fontset')?$articleBd.attr('style',readCookie('fontset')):'';
  readCookie('theme')?setTheme($('[role^="color"]').eq(readCookie('theme'))):'';
  readCookie('fontFamily')?setFamily($('[role^="font-family"]').eq(readCookie('fontFamily'))):'';
  readCookie('fontSize')?$('[role="fontsize2"]').html(readCookie('fontSize')):'';

 }();

 $(window).on('resize',function(){
  if($(this).width()<930){
   $('.fix-tool-left').css({
    'position':'fixed',
    'left':0,
    'margin-left':0
   })
   $('.fix-tool-right').css({
    'position':'fixed',
    'left':'auto',
    'right':0,
    'margin-right':0
   })
  }else{
   $('.fix-tool-left,.fix-tool-right').removeAttr('style');
  }
 });

 $(window).scroll(function(){
  var $this=$(this);
  if($this.scrollTop()>=115){
   $('.fix-tool-left').addClass('fixtoolfixed');
  }else{
   $('.fix-tool-left').removeClass('fixtoolfixed');
   $('.fix-tool-left').css({'_top':'auto'});
  }
 });

 //回到顶部
 $('.toTop').on('click',function(){
  if($(window).scrollTop()==0) return;
  $('.fix-tool-left').css({'_top':'auto'});
  $("html,body").animate({scrollTop: 0}, 1000);
 });

 //弹层居中
 setCenter($('.pop'));

 //placeholder
 fixPlaceholder($('.form-wp textarea'));
 //阅读翻页
 $(document).keydown(function(e) {
  var url = '';
  switch(e.keyCode) {
   case 37:
    url = $("a#pager_prev").attr('href');
    break;
   case 39:
    url = $("a#pager_next").attr('href');
    break;
   case 13:
    url = $("a#pager_current").attr('href');
    break;
  }
  if(url != '') {
   window.location = url;
  }
 });
 //阅读翻页END
});

function fnMouseHover(ele1,ele2) {
 ele1.onmouseenter = ele2.onmouseenter = function() {
  $(ele1).parents('li').addClass('cur');
  clearTimeout(ele1.timer);
  ele2.style.display = 'block';
 };
 ele1.onmouseleave = ele2.onmouseleave = function() {
  ele1.timer = setTimeout(function() {
   $(ele1).parents('li').removeClass('cur');
   ele2.style.display = 'none';
  }, 300);
 };
}

function closeThis($obj,$parent){
 $parent=$parent||'.fix-tool-left';
 $obj.parents($parent).find('.whitebar').hide();
 $obj.parents($parent).find('[role="tab-content"]').hide();
}
function showThis($obj){
 closeThis($obj);
 $obj.parents('[role="tab-pane"]').find('.whitebar').show();
 $obj.parents('[role="tab-pane"]').find('[role="tab-content"]').show();
}

function setHeight(){
 var tabContentHeight=$('[role="tab-content"]').height();
 var viewHeight=$(window).height()*0.7;
 if(tabContentHeight>viewHeight){
  $('[role="tab-content"]').find('dl').height(viewHeight)
 }
}

/**
 * [writeCookie description]
 * @param  {[type]} name  [description]
 * @param  {[type]} value [description]
 * @param  {[type]} hours [description]
 * @return {[type]}       [description]
 */
function writeCookie(name, value, hours) {
 var expire = "";
 if (hours != null) {
  expire = new Date((new Date()).getTime() + hours * 3600000);
  expire = "; expires=" + expire.toGMTString();
 }
 document.cookie = name + "=" + escape(value) + expire;
}
function readCookie(name) {
 var cookieValue = "";
 var search = name + "=";
 if (document.cookie.length > 0) {
  offset = document.cookie.indexOf(search);
  if (offset != -1) {
   offset += search.length;
   end = document.cookie.indexOf(";", offset);
   if (end == -1) end = document.cookie.length;
   cookieValue = unescape(document.cookie.substring(offset, end))
  }
 }
 return cookieValue;
}

/**
 * [fixPlaceholder description]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function fixPlaceholder(obj){
 $.each(obj,function(){
  $(this).on({
   'focus':function(){
    $(this).parent().find('.placeholder').hide();
   },
   'blur':function(){
    if($(this).val()===''){
     $(this).parent().find('.placeholder').show();
    }
   }
  })
 })
}
/**
 * [Mask description]
 */
function Mask() {
 var mask,div;
 return {
  create: function() {
   if(!mask){
    div=document.createElement('div');
    div.className='pop-mask';
    mask = document.body.appendChild(div)
   }
  },
  close: function() {
   if(mask){
    document.body.removeChild(div)
    mask=null;
   }
  }
 }
}
/**
 * [setCenter description]
 * @param {[type]} obj  [description]
 * @param {[type]} opts [description]
 */
function setCenter(obj,opts){
 var defaults={
  'position':'fixed',
  'left':'50%',
  'top':'50%'
 }
 options = $.extend({}, defaults, opts);
 $.each(obj,function(){
  $(this).css({
   'position':options.position,
   'left':options.left,
   'top':options.top,
   'margin-left':-$(this).width()/2+'px',
   'margin-top':-$(this).height()/2+'px'
  })
 })
}
;

//书签
function addbookcase(bid,cid)
{
  
  url="/modules/article/addbookcase.php?bid="+bid+"&cid="+cid;
		window.open(url);
  //Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});
  //Ajax.Tip(event,url,3000);
}
//评论
function reviews(bid)
{
  url="/modules/article/reviews.php?aid="+bid+"&type=all#post"
  window.open(url);
  //openDialog(url,1)
}
//投票
function vote(id)
{
  url="/modules/article/uservote.php?id="+id;
  window.open(url);
  //Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});
}
