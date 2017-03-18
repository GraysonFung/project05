// JavaScript Document
window.onload=function reon(){
	//var winH=$("#on").height();
	var wSec_fload3 = $("#fload3").innerWidth();
	var hSec_fload3=wSec_fload3*0.294;

	var w=window.innerWidth;
	var winH=w*0.5625;
	ww=window.innerHeight;
	if(ww>winH){
		winH=ww;
	$("#on").css('height',winH+'px');
	}
	$("#aside").css('height',winH+'px');
	$("#client").css('height',winH+'px');
	$("#on").css('height',winH+'px');
	$("#fload3 section").css('height',hSec_fload3+'px');
};
	window.onresize=function(){
		 location=location
	};