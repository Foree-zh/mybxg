define(['jquery','cookie'],function($){
	// NProgress.start();

	// NProgress.done();
	// 控制左侧菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出功能
	$('#loginout').click(function(){
		
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					location.href='/main/login'
				}
			}

		});
	});
	//验证是否登录
	var sessionID = $.cookie('PHPSESSID');
	if(!sessionID&&location.pathname!='/main/login'){
		//sessionID 不存在  重新跳转到登录页
		location.href='/main/login';
	};

	//获取登录信息
	var loginInfo = $.cookie('loginInfo');
	//console.log(loginInfo);
	var info = JSON.parse(loginInfo);
	$('.profile img').attr('src',info.tc_avatar);
	$('.profile h4').html(info.tc_name);
});





	

	




