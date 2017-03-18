// JavaScript Document
window.onload=function reon(){
	//var winH=$("#on").height();
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

};
	window.onresize=function(){
		 location=location
	};