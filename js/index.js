
/* 下部分图片滚动代码 */
var list1 = document.getElementById("pic_box01");
var list2 = document.getElementById("pic_box02");
var list1_left = 0;
var list2_left = 0;
function move_left(){
	list1_left += 20;
	list2_left += 20;
	give();
	if(list1_left == 220 || list1_left == 440 || list1_left == 660 || list1_left == 880 || list1_left == 1100 || list1_left == 1320 || list1_left == 1540 || list1_left == 1760 || list1_left == 0|| list1_left == -220|| list1_left == -440|| list1_left == -660){
		go_left();
		give();
		//clearInterval(left_m);
		return;
	}
	setTimeout(move_left,5);
	return;
}
function move_right(){
	list1_left -= 20;
	list2_left -= 20;
	give();
	if(list1_left == 220 || list1_left == 440 || list1_left == 660 || list1_left == 880 || list1_left == 1100 || list1_left == 1320 || list1_left == 1540 || list1_left == 1760 || list1_left == 0 || list1_left == -220|| list1_left == -440|| list1_left == -660){
		go_right();
		give();
		return;
	}
	setTimeout(move_right,5);
	return;
}
function give(){
	list1.style.left = list1_left+"px";
	list2.style.left = list2_left+"px";
}
function go_left(){
	if(list2_left >= 440){
		list2_left = -1320;
	}
	if(list1_left >= 1320){
		list1_left = -440;
	}
}
function go_right(){
	if(list2_left <= -1320){
		list2_left = 440;
	}
	if(list1_left <= -440){
		list1_left = 1320;
	}
}
var show_s=setInterval(move_left,4000);
$("#show").mouseover(function(){clearInterval(show_s);});
$("#show").mouseout(function(){show_s = setInterval(move_left,4000);});

//箭头icon图标翻转效果
var two_arrow_i = 10;
var two_arrow_b =true;
function two_arrow(){
	$(".two_arrow").css("height",two_arrow_i+"px");
	if(two_arrow_b){
		two_arrow_i -=2;
	}else{
		two_arrow_i +=2;
	}
	if(two_arrow_i < 2){
		two_arrow_b = false;
	}
	if(two_arrow_i > 10){
		two_arrow_b = true;
	}
}
setInterval(two_arrow,100);










