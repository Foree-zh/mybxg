define(['jquery','template','util','bootstrap','state'],function($,template,util){
	var ret  =util.qs();
	// console.log(ret)

	// 设置导航菜单高亮
	util.setMenu(location.pathname);
	// $('.navs a[href="'+location.pathname+'"]').addClass('active')
	//调用后台接口获取列表数据
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			if(data.code==200){
				//解析数据渲染页面
				var html = template('teacherTpl',{list:data.result});
				$('#teacherInfo').html(html);


				//绑定预览单击事件
				$('.preview').click(function(){
					//获取当前记录ID
					var td =$(this).closest('td');
					var tcId = td.attr('data-tcId');
					//根据ID 查询数据
					$.ajax({
						type:'get',
						url:'/api/teacher/view',
						data:{tc_id:tcId},
						dataType:'json',
						success:function(data){
							//解析数据  渲染页面
							var html =template('modalTpl',data.result);
							console.log(html)
							$('#modalInfo').html(html);

							//显示弹窗
							$('#teacherModal').modal(); 
						}
					});

				});
				//控制启用和注销
				$('.eod').click(function(){
					//获取当前记录ID
					var td =$(this).closest('td');
					var tcId = td.attr('data-tcId');
					var tcStatus = td.attr('data-status');
					var that = this;
					//调用接口
					$.ajax({
						type:'post',
						url:'/api/teacher/handle',
						data:{tc_id:tcId,tc_status:tcStatus},
						dataType:'json',
						success:function(data){
							if(data.code ==200){
								//修改当前的状态
								td.attr('data-status',data.result.tc_status);
								//修改文字
								if(data.result.tc_status==0){
									$(that).html('注 销')
								}else{
									$(that).html('启 用')
								}
							}
						}
					})				    	
				});	
			}
		}
	});
})