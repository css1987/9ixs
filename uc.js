//从cookie获取用户登录信息
var jieqiUserInfo = new  Array(); //用户信息数组
jieqiUserInfo['jieqiUserId'] = 0; //用户ID
jieqiUserInfo['jieqiUserUname'] = ''; //用户账号
jieqiUserInfo['jieqiUserUname_un'] = ''; //UNICODE编码的用户账号
jieqiUserInfo['jieqiUserName'] = ''; //用户名（昵称）
jieqiUserInfo['jieqiUserName_un'] = ''; //UNICODE编码的用户名（昵称）
jieqiUserInfo['jieqiUserGroup'] = 0; //用户组ID
jieqiUserInfo['jieqiUserGroupName'] = ''; //用户组
jieqiUserInfo['jieqiUserGroupName_un'] = ''; //UNICODE编码的用户组
jieqiUserInfo['jieqiUserVip'] = 0; //VIP等级
jieqiUserInfo['jieqiUserHonorId'] = 0; //头衔ID
jieqiUserInfo['jieqiUserHonor'] = ''; //头衔
jieqiUserInfo['jieqiUserHonor_un'] = ''; //UNICODE编码的头衔
jieqiUserInfo['jieqiNewMessage'] = 0; //新消息数量，默认 0
jieqiUserInfo['jieqiUserPassword'] = ''; //用户密码（MD5后的值）

//读取COOKIE，解析后赋值到数组
if(document.cookie.indexOf('jieqiUserInfo') >= 0){
var cookieInfo = get_cookie_value('jieqiUserInfo');
start = 0;
offset = cookieInfo.indexOf(',', start);
while(offset > 0){
tmpval = cookieInfo.substring(start, offset);
tmpidx = tmpval.indexOf('=');
if(tmpidx > 0){
tmpname = tmpval.substring(0, tmpidx);
tmpval = tmpval.substring(tmpidx+1, tmpval.length);
jieqiUserInfo[tmpname] = tmpval;
}
start = offset+1;
if(offset < cookieInfo.length){
offset = cookieInfo.indexOf(',', start);
if(offset == -1) offset =  cookieInfo.length;
}else{
offset = -1;
}
}
}

//读取COOKIE函数
function get_cookie_value(Name) {
var search = Name + "=";
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search);
if (offset != -1) {
offset += search.length;
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue = unescape(document.cookie.substring(offset, end));
}
}
return returnvalue;
}

if(jieqiUserInfo['jieqiUserId'] != 0 && jieqiUserInfo['jieqiUserId'] != '' && (document.cookie.indexOf('PHPSESSID') != -1 || jieqiUserInfo['jieqiUserPassword'] != '')){
document.write('<p><a rel="nofollow" href="/modules/article/bookcase.php">书架</a></p><p><a href="/logout.php" target="_self">退出</a></p>');
if(jieqiUserInfo['jieqiNewMessage'] > 0){
document.write('');
}
}else{
var jumpurl="";
if(location.href.indexOf("jumpurl") == -1){
jumpurl=location.href;
}
document.write('<p><a rel="nofollow" href="/login.php">登录</a></p><p><a rel="nofollow" href="/register.php">注册</a></p>');
}
