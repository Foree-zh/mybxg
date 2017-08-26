<?php 
	
	$dir ='main';   //默认目录名称
	$filename = 'index';  //默认文件名称


	//路由 :路径的分发、导航 ， index.php的作用就是根据请求URL的不同，导航到不同的页面

	//var_dump($_SERVER);
	
	//判断数组中是否包含一指定属性
	if(array_key_exists('PATH_INFO',$_SERVER)){
		//获取URL中的路径 /mian/index
		$path  =$_SERVER['PATH_INFO'];
		//去掉路径中的第一个斜杠
		$str = substr($path,1); //main/index
		//分割路径和文件名称
		$arr = explode('/',$str);
		if(count($arr)==2){
			$dir = $arr[0];//覆盖目录名称
			$filename =$arr[1];//覆盖文件名称
		}else{
			//如果不是两层路径就条状到登陆页面
			$filename = 'login';
		}
	
	}
	//路径的格式 /main/index
	// /main/login
	// /teacher/list
	// /teacher/add
	
	//在当前页面嵌入一个子页面
	include('./views/'.$dir.'/'.$filename.'.html');
	
 ?>