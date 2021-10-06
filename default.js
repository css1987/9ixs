$(document).ready(function(){
 Startup();
 //加载图片
 if($('.lazyload_box').length){
  var showeffect='';
  if($.browser.msie){
   showeffect='show'
  }else{
   showeffect='fadeIn'
  }
  $('.lazyload_box img').lazyload({
   original:'_src',placeholder:'/assets/img/ajax-loading.gif',threshold:0,effect:showeffect,effectspeed:'200',onerror:'/assets/img/nocover.jpg'
  })
 }//加载图片end
});

/** Core **/
function Startup() {
  _J_search();
  _J_nav_user();
  _J_index();//top.
  _J_index2();//top.
  _J_top();//top.
  _J_top1();//top
  _J_shuku();
  _J_shuku1();
  _J_shuku2();
  _J_shuku3();
  _J_shuku4();
  _J_infotop();
  _J_inforight1();
  _J_inforight2();
  _J_inforight3();
  _J_inforight4();
  _J_bottom();
  _J_tc();
  _J_sideTools1();//右下
}

function _J_search() {
 $("#J_search").append('<form name="articlesearch" method="post" action="/modules/article/search.php" target="_blank"><input type="text" class="search_focus" id="searchkey" name="searchkey" maxlength="100" value="总裁"/><input name="searchtype" value="" checked="checked" /><input type="submit" class="btn_search" value="小说搜索"></form>');
}
function _J_nav_user(){
 $("#J_nav_user").append('<li><a href="/modules/article/bookcase.php" rel="nofollow">云书架</a></li><li><a href="/book/toptime_0_0_0_0_0_0_0_0_1.html" target="_blank">编辑推荐</a></li><li class="abs-right"><a target="_blank" href="/top/allvisit/1.html">小说点击榜</a></li><li class="abs-right"><a target="_blank" href="/yuedu/" rel="nofollow">阅读记录</a><i style="" class="i_new-b"></i></li>');
}

function _J_index(){
$("#index").append('');
}
function _J_index2(){
$("#index2").append('');
}
function _J_top(){
$("#top").append('');
}
function _J_top1(){
$("#top1").append('');
}
function _J_shuku(){
$("#shuku").append('<div class="clearfix"></div>');
}
function _J_shuku1(){
$("#shuku1").append('<div class="clearfix""></div>');
}
function _J_shuku2(){
$("#shuku2").append('<div class="clearfix""></div>');
}
function _J_shuku3(){
$("#shuku3").append('<div class="clearfix""></div>');
}
function _J_shuku4(){
$("#shuku4").append('<div class="wrap_in clearfix"></div>');
}
function _J_infotop(){
$("#infotop").append('');
}
function _J_inforight1(){
$("#inforight1").append('<div class="clearfix""></div>');
}
function _J_inforight2(){
$("#inforight2").append('<div class="clearfix""></div>');
}
function _J_inforight3(){
$("#inforight3").append('<div class="clearfix""></div>');
}
function _J_inforight4(){
$("#inforight4").append('<div class="wrap_in clearfix"></div>');
}
function _J_bottom(){
$("#bottom").append('');
}
function _J_tc(){
$("#tc").append('');
}
function _J_sideTools1(){
$("#sideTools1").append('');
}

$(function(){
 if ($('[placeholder]').length > 0) {
  $('[placeholder]').placeholder()
 }
 var $drop=$('.top-menu-bd').find('[role="drop"]'),$dropDown=$('.top-menu-bd').find('[role="drop-down"]');
 $.each($drop,function(i){
  fnMouseHover($drop[i],$dropDown[i]);
 })
 //回到顶部
 $('#backtop').on('click',function(){
  if($(window).scrollTop()==0) return;
  $('.fix-tool-left').css({'_top':'auto'});
  $("html,body").animate({scrollTop: 0}, 1000);
 });
 /*幻灯片*/
 function ui_slide(){
  var wrap=$("#J_slideContainer"),pic_box=$("#J_showImg"),info_box=$("#J_showInfo"),thumb=$("#J_slideThumb"),thumb_item=thumb.find("li"),thumb_mask=thumb.find('img'),pic_item=pic_box.find("li"),bor_current=wrap.find(".img_overview"),info_box_item=info_box.find('li'),bor_stepLen=81,cur_index=0,len=thumb_item.length,slide_timer;
  if(len>0){
   pic_item.eq(0).show();
   thumb_mask.eq(0).css({
    opacity:1
   });
   info_box_item.eq(0).show()
  }
  function init(){
   autoPlay();
   thumb_item.bind({
    mouseover:function(){
     clearInterval(slide_timer);
     var idx=$(this).index();
     pic_item.animate({
      opacity:"hide"
     }
     ,400);
     thumb_mask.css({
      opacity:0.5
     });
     thumb_item.removeClass('cur');
     $(this).addClass('cur');
     thumb_mask.eq(idx).css({
      opacity:1
     });
     bor_current.animate({
      top:(idx*bor_stepLen)-1
     }
     ,200);
     pic_item.eq(idx).animate({
      opacity:"show"
     }
     ,400);
     info_box_item.hide().stop().eq(idx).show()
    }
    ,mouseout:function(){
     autoPlay()
    }
   })
  }
  function judgeIndex(){
   if(cur_index>=len){
    cur_index=0
   }
   else if(cur_index<0){
    cur_index=len-1
   }
  }
  function autoPlay(){
   slide_timer=setInterval(function(){
    cur_index++;
    judgeIndex();
    switchTo(cur_index,"next")
   }
   ,4000)
  }
  function switchTo(index,direction){
   if(direction=="next"){
    pic_item.animate({
     opacity:"hide"
    }
    ,400);
    bor_current.animate({
     top:(index*bor_stepLen)-1
    }
    ,400);
    pic_item.eq(index).animate({
     opacity:"show"
    }
    ,400);
    thumb_mask.css({
     opacity:0.5
    });
    thumb_item.removeClass('cur').stop().eq(index).addClass('cur');
    thumb_mask.eq(index).animate({
     opacity:1
    }
    ,400);
    info_box_item.hide().stop(true,true).eq(index).show()
   }
  }
  init()
 }
 ui_slide();
/*幻灯片end*/
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
//书签
 function addbookcase(bid,cid)
{  
  url="/modules/article/addbookcase.php?bid="+bid+"&cid="+cid;
		window.open(url);
  //ajax.request(url,{oncomplete:function(){displaydialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});
  //ajax.tip(event,url,3000);
} 
//投票
function vote(id)
{
  url="/modules/article/uservote.php?id="+id;
  window.open(url);
  //Ajax.Request(url,{onComplete:function(){displayDialog(this.response.replace(/<br[^<>]*>/g,'\n'));}});
}

//管理书
function articlemanage(id){
  url="/modules/article/articlemanage.php?id="+id;
  window.open(url);

}
