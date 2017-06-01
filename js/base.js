//公共部分

//底部logo二维码，二维码的效果与响应式效果
var aLogo = $('.contact-logo').find('img');
aLogo.on('click mouseover',function(){
	$('.erweima').css('display','none');
	$('.erweima').find('img').css('display','inline-block');
	$('.erweima').find('img').css('visibility','visible');
	if($(window).width()<400){
		$('.erweima').css('display','block');
		$('.erweima').find('img').css('display','none');
		$('.erweima').find('img').eq(aLogo.index(this)).css('display','inline-block');
	}else{
		$('.erweima').css('display','block');
		$('.erweima').find('img').css('visibility','hidden');
		$('.erweima').find('img').eq(aLogo.index(this)).css('visibility','visible');
	}
});
aLogo.on('touchstart mouseout',function(){
	$('.erweima').css('display','none');
});


//1.home首页
function homeJs(){
	//banner宽度与比例
	function banner(num){
		$('#home-banner').find('img').css('height',$(window).width()*num).css('width',$(window).width());
	}
	banner(0.4);
	//改变屏幕宽度、刷新时banner宽度与比例的改变
	$(window).on('resize load',function(){
		banner(0.4);
		if($(window).width()<751){
			banner(0.5);
		}
	});
};




//  2.关于我们
function aboutUs(){

  //侧边滑动按钮
  var slideone   = Math.ceil(parseFloat($('#slideone').offset().top))-100+'px';
  var slidetwo   = Math.ceil(parseFloat($('#slidetwo').offset().top))-100+'px';
  var slidethree = Math.ceil(parseFloat($('#slidethree').offset().top))-100+'px';

  $("#before").click(function(){
    $('html,body').animate({scrollTop:0}, 600);
  })
  $(".UIdesign").click(function(){
    $('html,body').animate({scrollTop:slideone}, 600);
  })
  $(".WEBeditor").click(function(){
    $('html,body').animate({scrollTop:slidetwo}, 600);
  })
  $(".PHPeditor").click(function(){
    $('html,body').animate({scrollTop:slidethree}, 600);
  });

  $(window).on('resize load',function(){
    slideone   = Math.ceil(parseFloat($('#slideone').offset().top))-100+'px';
    slidetwo   = Math.ceil(parseFloat($('#slidetwo').offset().top))-100+'px';
    slidethree = Math.ceil(parseFloat($('#slidethree').offset().top))-100+'px';
  })

  $(window).on('resize load scroll',function(){
    if($(window).scrollTop()<parseInt(slideone)){
      $("#before").css({"background":"#d71718"}).siblings().css({"background":"#fff"});
    }
    else if($(window).scrollTop()<parseInt(slidetwo)){
      $(".UIdesign").css({"background":"#d71718"}).siblings().css({"background":"#fff"});
    }
    else if($(window).scrollTop()<parseInt(slidethree)){
      $(".WEBeditor").css({"background":"#d71718"}).siblings().css({"background":"#fff"});
    }
    else if($(window).scrollTop()>=parseInt(slidethree)){
      $(".PHPeditor").css({"background":"#d71718"}).siblings().css({"background":"#fff"});
    }

  })

};



//  3.作品展示

function webCase(){
	//旋转木马插件
	$(".flipster").flipster({
		itemContainer: 			'ul', // Container for the flippin' items.
		itemSelector: 			'li', // Selector for children of itemContainer to flip
		style:							'carousel', // Switch between 'coverflow' or 'carousel' display styles
		start: 							0, // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

		enableKeyboard: 		true, // Enable left/right arrow navigation
		enableMousewheel: 	true, // Enable scrollwheel navigation (up = left, down = right)
		enableTouch: 				true, // Enable swipe navigation for touch devices

		enableNav: 					false, // If true, flipster will insert an unordered list of the slides
		enableNavButtons: 	false, // If true, flipster will insert Previous / Next buttons

		onItemSwitch: 			function(){}, // Callback function when items are switches
	});

	//相册插件
  $("a[rel^='prettyPhoto']").prettyPhoto();

};


//4.web_build 网站定制
function webBuild(){
	setTimeout(function(){
		//解决异步加载地图是地图未完全加载的问题
		//初始化
		$("#mapcontrol").slideUp("slow");
	},1000)
  $("#click").click(function(){
  	$("#mapcontrol").slideToggle("slow");
	});
};

//百度地图API功能
function loadJScript() {
	//jsonp解决跨域问题和实现异步加载
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=euK5F9GrRsNemAzrh0vbLWAl3oKGeso6&callback=init";
	document.body.appendChild(script);
}
function init() {
	//获取地点，创建地图
	var map = new BMap.Map("allmap");            // 创建Map实例
	var point = new BMap.Point(114.279655,30.466599); // 创建点坐标
	map.centerAndZoom(point,16);								//地图大小级数
	map.enableScrollWheelZoom();                 //启用滚轮放大缩小

	//添加控件
	map.addControl(new BMap.NavigationControl());		//地图平移缩放控件
	map.addControl(new BMap.ScaleControl());      //比例尺控件
	map.addControl(new BMap.OverviewMapControl());//缩略地图控件
	map.addControl(new BMap.MapTypeControl());		//地图类型控件
	map.setCurrentCity("武汉");// 仅当设置城市信息时，MapTypeControl的切换功能才能可用
	//添加图标
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	//添加标注
	var label = new BMap.Label("武汉工商学院实验楼601",{offset:new BMap.Size(20,-10)});
			label.setStyle({
		 color : "black",
		 fontSize : "14px",
		 fontFamily:"微软雅黑",
		 border:"none"
	 });
	marker.setLabel(label);
}
	//window.onload = loadJScript;  //异步加载地图



// 5.study_web 知识共享
function studyWeb(){
	/* stydy_web网页
	 * 动态点赞
	 * 此效果包含css3，部分浏览器不兼容（如：IE10以下的版本）
	*/
	$(".praise-click").click(function(){
		var praise_img = $(this).parent().find(".praise-img");
		var text_box = $(this).parent().find(".add-num");
		var praise_txt = $(this).parent().find(".praise-txt");
		var num=parseInt(praise_txt.text());
		if(praise_img.attr("src") == ("images/yizan.png")){
			$(this).html("<img src='images/zan.png' class='praise-img' class='animation' />");
			praise_txt.removeClass("hover");
			text_box.show().html("<em class='add-animation'>-1</em>");
			$(".add-animation").removeClass("hover");
			num -=1;
			praise_txt.text(num)
		}else{
			$(this).html("<img src='images/yizan.png' class='praise-img' class='animation' />");
			praise_txt.addClass("hover");
			text_box.show().html("<em class='add-animation'>+1</em>");
			$(".add-animation").addClass("hover");
			num +=1;
			praise_txt.text(num)
		}
	});
};


//5.1  study_article学习文章
function studyArticle(){
	/* 动态点赞
	 * 此效果包含css3，部分浏览器不兼容（如：IE10以下的版本）
	*/
	$("#praise").click(function(){
		var praise_img = $("#praise-img");
		var text_box = $("#add-num");
		var praise_txt = $("#praise-txt");
		var num=parseInt(praise_txt.text());
		if(praise_img.attr("src") == ("images/yizan.png")){
			$(this).html("<img src='images/zan.png' id='praise-img' class='animation' />");
			praise_txt.removeClass("hover");
			text_box.show().html("<em class='add-animation'>-1</em>");
			$(".add-animation").removeClass("hover");
			num -=1;
			praise_txt.text(num)
		}else{
			$(this).html("<img src='images/yizan.png' id='praise-img' class='animation' />");
			praise_txt.addClass("hover");
			text_box.show().html("<em class='add-animation'>+1</em>");
			$(".add-animation").addClass("hover");
			num +=1;
			praise_txt.text(num)
		}
	});


	//举报
	$('.jubao').click(function(){
		var oJubao = confirm( "要向管理员举报此文章吗？" )
		if(oJubao){
			alert("已向管理员发送举报信息！！")
		}
	});
	//收藏
	$('.shoucang').click(join_favorite);
	//定义加入收藏夹函数
	function join_favorite(siteUrl, siteName){
		//捕获加入收藏过程中的异常
		try {
			//判断浏览器是否支持document.all
			if(document.all){
			//如果支持则用external方式加入收藏夹
			window.external.addFavorite(siteUrl,siteName);
			}else if(window.sidebar){
			//如果支持window.sidebar，则用下列方式加入收藏夹
			window.sidebar.addPanel(siteName, siteUrl,'');
			}
		}
		//处理异常
		catch (e) {
			alert("加入浏览器收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
		}
	}

	//评论区************************************************

	//发表评论
	$('.comment-text').find('button').click(function(){
		var oComment = $(this).parent().find('textarea').val();
		var oHtml = "<div class='media'><div class='media-left'><a href='#'><img class='media-object' src='images/no-name.jpg' alt='匿名头像'></a></div><div class='media-body'><h4 class='media-heading'><strong>游客</strong> &nbsp;<span>今天</span> :	  <b class='pull-right'><em>3</em> F</b>  </h4>  <p>"+ oComment +"</p><div class='pull-right re-yes'><span>回复</span> | <span>赞同(<b>2</b>)</span>	</div><div class='pinglun-huifu text-right'><textarea name=' id=' rows='1' placeholder='回复评论：'></textarea>		<button class='btn btn-defalt btn-sm' type='button'>Send</button><button class='btn btn-defalt btn-sm' type='button'>No</button>	</div>	<div class='clearfix'></div></div></div><hr/>";
		if( oComment == '' ){
			alert('同志！评论不能为空哟~')
		}else{
			var iFirst = $('.comment-fload').children().eq(0);
			iFirst.before(oHtml);
			oComment = $(this).parent().find('textarea').val('');
			// window.location.reload();
		}
	});

	//遍历评论内容
	$('.re-yes').each(function(){
		//评论回复框
		$(this).find('span').eq(0).click(function(){
			var oHuifu = $(this).parent().next();
			if(oHuifu.css('display') == 'none' ){
				oHuifu.fadeIn();
			}else{
				oHuifu.fadeOut();
			}
		});

		//评论点赞
		var oCheck = true;
		$(this).find('span').eq(1).click(function(){
			var oNum = Number($(this).find('b').html());
			if(oCheck){
				oNum++;
				oCheck = false;
			}else{
				oNum--;
				oCheck = true;
			}
				$(this).find('b').html(oNum);
		});

		//回复功能
		$(this).next().find('button').eq(0).click(function(){
			var oText = $(this).parent().find('textarea').eq(0).val();
			//判断回复是否为空
			if( oText != '' ){
				var html = "<div class='media'><div class='media-left'><a class='responsive' href='#'><img class='media-object' src='images/no-name.jpg' alt='匿名头像'></a></div><div class='media-body'><h4 class='media-heading'><strong>游客</strong> &nbsp;<span>今天</span> :</h4> <p>"+oText+"</p></div></div>";
				$(this).parent().next().after(html);
				$(this).parent().find('textarea').eq(0).val('');
				$(this).parent().fadeOut();
			}else{
				alert('同志！回复不能为空哟~')
			}
		});

		//点击no按钮，回复框消失
		$(this).next().find('button').eq(1).click(function(){
			$(this).parent().fadeOut();
		});

	})
};


// 6.join_us 加入我们
function joinUs(){
	document.getElementById("file").onchange = function() {
    document.getElementById("userdefinedFile").value = document.getElementById("file").value;
	}
};
