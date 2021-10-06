$(function() {
  /*** 初始化*/
  User.init();
  $(window).resize(function() {
    User.setPopup();
  });

  if (User.checkLogin()) {
    User.changeTopLogin();
  }

  /**独立登录页面 交互效果*/
  if ($('#J_top_login').length) {
    $(document).on("click", "#J_top_login", function () {
      User.showLogin();
      return false;
    });
  }

  if ($('#J_top_reg').length) {
    $(document).on("click", "#J_top_reg", function () {
      User.showReg();
      return false;
    });
  }

  if ($('.pop-mask').length) {
    $('.pop-mask').click(function() {
      User.hidePopup();
      return false;
    });
  }
});

var User = {
  is_login: false,
  username: null,
  init: function() {
    if($('.pop-mask').length < 1) {
      var pop_html = '<div class="pop-mask"></div><div class="pop-dialog" id="J_pop_dialog"></div>';
      $("body").append(pop_html);
    }
    User.setPopup();
  },
  setPopup: function() {
    var maskW = $(window).width();
    var maskH = $(document).height();

    $('.pop-mask').css({
      "width":maskW,
      "height":maskH
    });
  },
  showPopup: function() {
    User.setPopup();
    $('.pop-mask').fadeIn(200);
    $('.pop-dialog').slideDown();
  },
  hidePopup: function() {
    $('.pop-mask').fadeOut(200);
    $('.pop-dialog').slideUp();
  },
  checkLogin:function() {
    $.ajax({
      type: "get",
      url: '/api/ajax/checklogin.php',
      async: false,
      success: function(flag) {
        if (flag == 1) {
          User.is_login = true
        }
      }
    });
    return User.is_login
  },
  showLogin: function(_callback) {
    $('#J_pop_dialog').load("/api/ajax/login.php", function () {
      User.showPopup();

      $('#J_login_submit').click(function () {
        User.login(_callback);
      });

      $('#pop-register').click(function () {
        User.showReg(function(){
          User.hidePopup();
          User.changeTopLogin();
        });
      });
      // bind click method
      $('body').bind('keydown', function (event) {
        var keycode = event.which || event.keyCode;
        if (keycode == 13) {
          User.login(_callback);
        }
      });
    });
  },
  showReg: function(_callback) {
    $('#J_pop_dialog').load("/api/ajax/register.php", function () {
      User.showPopup();

      /**绑定验证*/
      //User.validateRegForm();

      $('#J_reg_submit').click(function () {
        //if (checkRegAll()) {
          User.reg(_callback);
        //}
      });

      $('#pop-login').click(function () {
        User.showLogin(function(){
          User.hidePopup();
          User.changeTopLogin();
        });
      });
    });
  },
  login: function(_callback) {
    var username = $.trim($('#J_login_username').val());
    var password = $.trim($('#J_login_password').val());
    var checkcode = $.trim($('#J_login_checkcode').val());
    if($('#J_login_remember').prop("checked") == true){
      var lifetime = 315360000;
    }

    if (username == '') {
      $('#J_login_username').addClass('input-error').next('.input-msg').remove();
      $('#J_login_username').parent().append('<div class="input-msg">请填写用户名<i class="icon-error"></i></div>');
      return false;
    }

    if (password == '') {
      $('#J_login_password').addClass('input-error').next('.input-msg').remove();
      $('#J_login_password').parent().append('<div class="input-msg">您漏填密码了<i class="icon-error"></i></div>');
      return false;
    }
    
    if (checkcode == '') {
      $('#J_login_checkcode').addClass('input-error').next('.input-msg1').remove();
      $('#J_login_checkcode').parent().append('<div class="input-msg1">请输入验证码<i class="icon-error"></i></div>');
      return false;
    }

    $.ajax({
      type: 'POST',
      url: '/api/ajax/login.php',
      dataType: 'html',
      data: 'username=' + username + '&password=' + password + '&checkcode=' + checkcode + '&action=login',
      //username=123456&password=123456&checkcode=5186&usecookie=0&act=login&submit=%B5%C7%26%23160%3B%26%23160%3B%26%23160%3B%26%23160%3B%C2%BC
      //data:{
      //  'username':username,'password':password,'lifetime':lifetime,enews:'login'                      //提交字段
      //},
      success: function (data) {
        if(data == 'FailUserId') {
          $('#J_login_username').addClass('input-error').next('.input-msg').remove();
          $('#J_login_username').parent().append('<div class="input-msg">用户名错误<i class="icon-error"></i></div>')
        } else if(data == 'FailPassword') {
          $('#J_login_password').addClass('input-error').next('.input-msg').remove();
          $('#J_login_password').parent().append('<div class="input-msg">密码错误<i class="icon-error"></i></div>')
        } else if(data == 'checkcode') {
          $('#J_login_checkcode').addClass('input-error').next('.input-msg1').remove();
          $('#J_login_checkcode').parent().append('<div class="input-msg1">验证码错误<i class="icon-error"></i></div>')
        } else {
          User.hidePopup();
          User.changeTopLogin();
          $('body').unbind('keydown');
        }
      }
    });
  },
  /* reg: function(_callback) {
  }, */
  
  reg: function(_callback) {
    var username = $.trim($('#J_reg_username').val());//注册用户名
    var password = $.trim($('#J_reg_password').val());//注册用户名密码
    var repassword = $.trim($('#J_reg_repassword').val());//确认注册用户名密码
    var email = $.trim($('#J_reg_email').val());//注册用户邮箱
    var checkcode = $.trim($('#J_reg_checkcode').val());//验证码
    
    /* if($('#J_login_remember').prop("checked") == true){
      var lifetime = 315360000;
    } */

    if (username == '') {
      $('#J_reg_username').addClass('input-error').next('.input-msg').remove();
      $('#J_reg_username').parent().append('<div class="input-msg">请填写用户名<i class="icon-error"></i></div>');
      return false;
    }

    if (password == '') {
      $('#J_reg_password').addClass('input-error').next('.input-msg').remove();
      $('#J_reg_password').parent().append('<div class="input-msg">请输入注册密码！<i class="icon-error"></i></div>');
      return false;
    }
    
    if (repassword == '') {
      $('#J_reg_repassword').addClass('input-error').next('.input-msg').remove();
      $('#J_reg_repassword').parent().append('<div class="input-msg">请再次输入注册密码！<i class="icon-error"></i></div>');
      return false;
    }
    if (email == '') {
      $('#J_reg_email').addClass('input-error').next('.input-msg').remove();
      $('#J_reg_email').parent().append('<div class="input-msg">请输入注册邮箱！<i class="icon-error"></i></div>');
      return false;
    }
    if(checkcode == ''){
     $('#J_reg_checkcode').addClass('input-error').next('.input-msg1').remove();
     $('#J_reg_checkcode').parent().append('<div class="input-msg1">请输入验证码！<i class="icon-error"></i></div>');
     return false;    
    }

    $.ajax({
      type: 'POST',
      url: '/api/ajax/register.php',
      dataType: 'html',
      data: 'username=' + username + '&password=' + password + '&repassword=' + repassword + '&email=' + email + '&checkcode=' + checkcode + '&sex=0&qq=&action=newuser',
      //data:{
      //  username=asdf&password=111111&repassword=111111&email=111@qq.com&sex=0&qq=&act=newuser&submit=%CC%E1%BD%BB                     //提交字段
      //},
      success: function (data) {
        if(data == 'FailUsername') {
          $('#J_reg_username').addClass('input-error').next('.input-msg').remove();
          $('#J_reg_username').parent().append('<div class="input-msg">请输入用户名<i class="icon-error"></i></div>')
        } else if(data == 'FailPassword') {
          $('#J_reg_password').addClass('input-error').next('.input-msg').remove();
          $('#J_reg_password').parent().append('<div class="input-msg">请输入密码<i class="icon-error"></i></div>')
        } else if (repassword == 'Failrepassword') {
          $('#J_reg_repassword').addClass('input-error').next('.input-msg').remove();
          $('#J_reg_repassword').parent().append('<div class="input-msg">请再次输入密码！<i class="icon-error"></i></div>');
        } else if (email == 'Failemail') {
          $('#J_reg_email').addClass('input-error').next('.input-msg').remove();
          $('#J_reg_email').parent().append('<div class="input-msg">请输入注册邮箱！<i class="icon-error"></i></div>');
        } else if (checkcode == 'checkcode') {
          $('#J_reg_checkcode').addClass('input-error').next('.input-msg1').remove();
          $('#J_reg_checkcode').parent().append('<div class="input-msg1">请输入验证码！<i class="icon-error"></i></div>');
        }else {
          User.hidePopup();
          User.changeTopLogin();
          $('body').unbind('keydown');
        }
      }
    });
  }, 
  
  
  changeTopLogin: function() {
    $.ajax({
      type:'get',
      url:'/api/ajax/checkuser.php',
      dataType: "json",
      success: function(data){
        if(data.newmessage != 0) {        
         if ($("#J_top_user").length) {
           $("#J_top_user li:first").html('<a href="javascript:;" class="link" role="drop"><i class="icon-login"></i>Hi,' + data.uname + '</a><div class="drop-down user-center" role="drop-down" style="display: none;"><a href="/user/" target="_blank">会员中心</a><a href="/user/bookcase">我的书架</a><a href="/user/" target="_blank">短消息</a><a href="/logout.php">退出</a></div>');
           var a = $(".top-menu-bd").find('[role="drop"]'),
           b = $(".top-menu-bd").find('[role="drop-down"]');
           $.each(a,
            function(c) {
             fnMouseHover(a[c], b[c])
           })
          }
          //$('#J_top_user').html('欢迎您，<span class="red">' + data.uname + '</span> |<a class="spec" href="/user/" target="_blank">会员中心</a><a class="spec" href="/index.php/c/payment/" target="_blank">短消息</a><a class="spec" href="/index.php/c/payment/" target="_blank">我的书架</a><a href="/logout.php">退出</a>');
        } else {        
          if ($("#J_top_user").length) {
           $("#J_top_user li:first").html('<a href="javascript:;" class="link" role="drop"><i class="icon-login"></i>Hi,' + data.uname + '</a><div class="drop-down user-center" role="drop-down" style="display: none;"><a href="/user/" target="_blank">会员中心</a><a href="/user/bookcase">我的书架</a><a href="/logout.php">退出</a></div>');
           var a = $(".top-menu-bd").find('[role="drop"]'),
           b = $(".top-menu-bd").find('[role="drop-down"]');
           $.each(a,
            function(c) {
             fnMouseHover(a[c], b[c])
           })
          }
          //$('#J_top_user').html('<li class=""><a href="javascript:;" class="link" role="drop"><i class="icon-login"></i>Hi,' + data.uname + '</a><div class="drop-down user-center" role="drop-down" style="display: none;"><a href="/user/">我的书架</a><a href="/logout.php">退出</a></div></li>');
        }
      }
    })
  }
};
