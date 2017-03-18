//右侧产品栏
$(".a").click(function(){
    $(".right").animate({right:'-15%'},"slow");
    $(".a").css("display","none");
    $(".b").css("display","block");
})
$(".b").click(function(){
    $(".right").animate({right:'0'},"slow");
    $(".b").css("display","none");
    $(".a").css("display","block");
})

//banner轮播
var box = new Array("#banner_pic01","#banner_pic02","#banner_pic03");
var ind = new Array("#banner_index01","#banner_index02","#banner_index03");
var banner_i = 1;
var banner_t = setInterval(com,4000);
$("#banner_pic_box").mouseover(function(){clearInterval(banner_t);});
$("#banner_pic_box").mouseout(function(){banner_t = setInterval(com,4000);});
function com(){
    //轮播按钮的颜色
    $("#nav").children().css('background','#fff');
    $(ind[banner_i]).css('background','#ff9900');
    //图片变换
    // $(ind[banner_i]).attr("src",'images/banner_index_curren.jpg');
    $("#banner_pic_box").children().fadeOut();
    $(box[banner_i]).fadeIn();
    banner_i++;
    if(banner_i>=3){banner_i=0};
}
    //轮播按钮的点击变换
$("#banner_index01").click(function(){
    banner_i=0;
    com();
});
$("#banner_index02").click(function(){
    banner_i=1;
    com();
});
$("#banner_index03").click(function(){
    banner_i=2;
    com();
});