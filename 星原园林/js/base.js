/*页面左上角数字的跳动代码****************/
var w_id = Array("w1","w2","w3","w4","w5","w6","w7","w8");var boo = Array(true,true,true,true,true,true,true,true);var heig = Array(0,0,0,0,0,0,0,0);var i = 0;function tg(){var obj = document.getElementById(w_id[0]);obj.style.bottom = heig[0]+"px";if(boo[0]){tgup();}else{tgdown();}if(heig[0]<0){return;}setTimeout(tg,10);}function tgup(){heig[0]++;if(heig[0]==5){tg1();}if(heig[0]>=11){boo[0] = false;}}function tgdown(){heig[0]--;if(heig[0]<0){boo[0] = true;}}function tg1(){var obj = document.getElementById(w_id[1]);obj.style.bottom = heig[1]+"px";if(boo[1]){tgup1();}else{tgdown1();}if(heig[1]<0){return;}setTimeout(tg1,10);}function tgup1(){heig[1]++;if(heig[1]==5){tg2();}if(heig[1]>=11){boo[1] = false;}}function tgdown1(){heig[1]--;if(heig[1]<0){boo[1] = true;}}function tg2(){var obj = document.getElementById(w_id[2]);obj.style.bottom = heig[2]+"px";if(boo[2]){tgup2();}else{tgdown2();}if(heig[2]<0){return;}setTimeout(tg2,10);}function tgup2(){heig[2]++;if(heig[2]==5){tg3();}if(heig[2]>=11){boo[2] = false;}}function tgdown2(){heig[2]--;if(heig[2]<0){boo[2] = true;}}function tg3(){var obj = document.getElementById(w_id[3]);obj.style.bottom = heig[3]+"px";if(boo[3]){tgup3();}else{tgdown3();}if(heig[3]<0){return;}setTimeout(tg3,10);}function tgup3(){heig[3]++;if(heig[3]==5){tg4();}if(heig[3]>=11){boo[3] = false;}}function tgdown3(){heig[3]--;if(heig[3]<0){boo[3] = true;}}function tg4(){var obj = document.getElementById(w_id[4]);obj.style.bottom = heig[4]+"px";if(boo[4]){tgup4();}else{tgdown4();}if(heig[4]<0){return;}setTimeout(tg4,10);}function tgup4(){heig[4]++;if(heig[4]==5){tg5();}if(heig[4]>=11){boo[4] = false;}}function tgdown4(){heig[4]--;if(heig[4]<0){boo[4] = true;}}function tg5(){var obj = document.getElementById(w_id[5]);obj.style.bottom = heig[5]+"px";if(boo[5]){tgup5();}else{tgdown5();}if(heig[5]<0){return;}setTimeout(tg5,10);}function tgup5(){heig[5]++;if(heig[5]==5){tg6();}if(heig[5]>=11){boo[5] = false;}}function tgdown5(){heig[5]--;if(heig[5]<0){boo[5] = true;}}function tg6(){var obj = document.getElementById(w_id[6]);obj.style.bottom = heig[6]+"px";if(boo[6]){tgup6();}else{tgdown6();}if(heig[6]<0){return;}setTimeout(tg6,10);}function tgup6(){heig[6]++;if(heig[6]==5){tg7();}if(heig[6]>=11){boo[6] = false;}}function tgdown6(){heig[6]--;if(heig[6]<0){boo[6] = true;}}function tg7(){var obj = document.getElementById(w_id[7]);obj.style.bottom = heig[7]+"px";if(boo[7]){tgup7();}else{tgdown7();}if(heig[7]<0){return;}setTimeout(tg7,10);}function tgup7(){heig[7]++;if(heig[7]>=11){boo[7] = false;}}function tgdown7(){heig[7]--;if(heig[7]<0){boo[7] = true;}}var ti;var tim=setInterval(tg,2500);function clear_i(){window.clearInterval(ti);};function start(){window.clearInterval(tim);ti=setInterval(tg,2500);};/*window.onload=tim;*/window.onfocus = start;window.onblur = clear_i;


/*搜索框js代码************************************/
//搜索框事件
$("#input").focus(function(){
		$(this).val("");
	});
$("#input").blur(function(){
		if($(this).val()==""){
			$(this).val("输入关键字");
		}
	});
//按钮事件
$("#search").mouseover(function(){
		$(this).attr("src","images/search_btn_hover.jpg");
	});
$("#search").mouseout(function(){
	$(this).attr("src","images/search_btn.jpg");
});
//提交时验证
function empty(){
	if($("#input").val()=="输入关键字" || $("#input").val()==""){
		alert("没有输入搜索内容！！");
		return false;
	}
	
	return true;
}
	

/*banner图片切换代码***********************************************/
var box = new Array("#banner_pic01","#banner_pic02","#banner_pic03");
var ind = new Array("#banner_index01","#banner_index02","#banner_index03");
var banner_i = 1;
var banner_t = setInterval(com,4000);
$("#banner").mouseover(function(){clearInterval(banner_t);});
$("#banner").mouseout(function(){banner_t = setInterval(com,4000);});
function com(){
	
	$("#banner_index").children().children().attr("src",'images/banner_index.jpg');
	$(ind[banner_i]).attr("src",'images/banner_index_curren.jpg');
	$("#banner_pic_box").children().fadeOut();
	$(box[banner_i]).fadeIn();
	banner_i++;
	if(banner_i>=3){banner_i=0};
	return;
}
function lgo(){
	$("#banner_index").children().children().attr("src",'images/banner_index.jpg');
	$(ind[banner_i]).attr("src",'images/banner_index_curren.jpg');
	$("#banner_pic_box").children().fadeOut();
	$(box[banner_i]).fadeIn();
	banner_i++;
	if(banner_i>=3){banner_i=0};
}
$("#banner_index01").click(function(){
		banner_i=0;
		lgo();
		return;
	});
$("#banner_index02").click(function(){
		banner_i=1;
		lgo();
		return;
	});
$("#banner_index03").click(function(){
		banner_i=2;
		lgo();
		return;
	});
	function win(){
		tim=setInterval(tg,2500);
		banner_t = setInterval(com,4000);
		
	}
//window.onload=banner_t;	






	
	
	
	
	
	
	
	