define(['jquery'],function(){
	$(document).ajaxStart(function(){
		//控制遮罩的显示
		$('.overlay').show();
	});
	$(document).ajaxStop(function(){
		//控制遮罩隐藏
		
		$('.overlay').hide();
		
	});
});