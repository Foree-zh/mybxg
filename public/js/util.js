define(['jquery','util'],function($){
	return {
		setMenu :function(path){
			$('.navs a[href="'+path+'"]').addClass('active');
		}
	}
})