
	var oFloat3 = document.getElementById('fload3');
	var oFloat4 = document.getElementById('fload4');
	var aSection_float3 = oFloat3.getElementsByTagName('section');
	var oLabel_float4 = oFloat4.getElementsByTagName('label')[0];
	var oInput_checkall = oLabel_float4.getElementsByTagName('input')[0];
 	var oBtn_submit = document.getElementById('btn_submit');
	var num_a = 0,num_b = 0;
	var achecked = null;
	var alabel = null;
	var all_price = 0;
 	var oHeji = document.getElementById('heji');
 	// var all_price_old = 0;
 //全选框
	//oInput_checkall的checkbox的默认选择与点击变换
	oInput_checkall.checked = true;
	oLabel_float4.className = 'label_check';
	// oInput_checkall.onclick = function(){	};
	// 传参改变按钮的图像
	function change_change(oBtn,oPic){
		oPic.className = '';
		if (oBtn.checked == true) {
			oPic.className = 'label_check';
		}else{
			oPic.className = '';
		}
	};

	for (var i = 0; i < aSection_float3.length; i++) {
		change_float3(aSection_float3[i]);
	}
	function change_float3(oSection){
		var oLabel = oSection.getElementsByTagName('label')[0];
		var oChecked = oLabel.getElementsByTagName('input')[0];

		//oChecked的checkbox的默认选择与点击变换
		oLabel.className = 'label_check';
		oChecked.checked = true;
		//传参引用前面的函数。
		oChecked.onclick = function(){
			all_check();
		};
		oInput_checkall.onclick = function(){
			achecked = [];
			alabel = [];
			for (var i = 0; i < aSection_float3.length; i++) {
				achecked.push(aSection_float3[i].getElementsByTagName('input')[0]);
				alabel.push(aSection_float3[i].getElementsByTagName('label')[0]);
				change_change(oInput_checkall,oLabel_float4);
				if(oInput_checkall.checked == true){
					achecked[i].checked = true;
				}else{
					achecked[i].checked = false;
				}
				change_change(achecked[i],alabel[i]);
			}
			all_check();
		  //计算更新后的合计总价
			// jisuan();
		};
		//当fload3中有选框未选时，fload4的选框未被选中，当fload3中的选框全被选中时，fload4的选框也会被选中
		all_check();
		function all_check(){
			change_change(oChecked,oLabel);
			achecked = [];
			alabel = [];
			num_a = 0;
			num_b = 0;
			for (var i = 0; i < aSection_float3.length; i++) {
				achecked.push(aSection_float3[i].getElementsByTagName('input')[0]);
				if (achecked[i].checked == true) {
					num_b ++;
				}	else {
					num_a ++;
				}
			}
			if(num_a>0){
				oInput_checkall.checked = false;
			}else if(num_b == achecked.length){
				oInput_checkall.checked = true;
			}
		  change_change(oInput_checkall,oLabel_float4);
		  //submit的结算总数
		  oBtn_submit.value = '去 结 算 ('+num_b+')';
		  //计算更新后的合计总价
			// jisuan();
		};
	};
 //加减按钮与价格计算
	function add_minus(){
		// all_price = 0;
		for (var i = 0; i < aSection_float3.length; i++) {
			buy_number(aSection_float3[i]);
		}
	};
	add_minus();
 	function buy_number(obj){
	 	var oDiv_section = obj.getElementsByTagName('div')[0];
	 	var aP_section = oDiv_section.getElementsByTagName('p');
	 	var oSpan_price = parseFloat(aP_section[1].getElementsByTagName('span')[0].innerHTML);
	 	var aInput_number = aP_section[3].getElementsByTagName('input');
	 	var num_buy=parseInt(aInput_number[1].value);
	 	var oInput_lable = obj.getElementsByTagName('input')[0];

	 	// var sum_price=0;
	 	//判断checkbox是否被选中，计算被选中的商品价格合计
	 	// var oInput_checkbox = obj.getElementsByTagName('input')[0];
	 	//初始化
	 	// sum_price=oSpan_price;
	 	// aInput_number[1].value = num_buy;

	 	aInput_number[0].onclick = function (){
	 		num_buy=parseInt(aInput_number[1].value);
	 		if (num_buy>1) {
	 			num_buy--;
	 			aInput_number[1].value = num_buy;
	 			//当--实现时更改这合计价格
		 		// all_price -=oSpan_price;
		 		// heji();
	 		}else{
	 			var delete_buy = confirm("你要将宝贝移出购物车吗？");
	 			if (delete_buy==true) {
	 				obj.parentNode.removeChild(obj);

	 				if(oInput_lable.checked == true){
		 				num_b-=1;
			 		 //submit的结算总数
			  		oBtn_submit.value = '去 结 算 ('+num_b+')';
	 				// num_b-=1;
		 		 // //submit的结算总数
		  		// oBtn_submit.value = '去 结 算 ('+num_b+')';
		  		//当宝贝移出时更改这合计价格
			 		// all_price -=oSpan_price;
			 		// heji();
	 				}else{
	 					//当checked未被选中时，text=0删除商品时，float4的全选按钮会重新计算得出是否被选择；
		  			for (var i = 0; i < aSection_float3.length; i++) {
							change_float3(aSection_float3[i]);
						}
		  		};
	 			}
	 		}
	 	};
	 	aInput_number[2].onclick = function (){
	 		num_buy=parseInt(aInput_number[1].value);
	 		num_buy++;
	 		aInput_number[1].value = num_buy;
	 		//当++实现时更改这合计价格
	 		// all_price +=oSpan_price;
	 		// heji();
	 	};
	 	// function heji() {
		 // 	if (oInput_checkbox.checked==true) {
		 // 		sum_price=oSpan_price*num_buy;
			// 	all_price += sum_price;
			// }
			// oHeji.innerHTML = all_price;
	 	// }
	 	// heji();
	 // 	if (oInput_checkbox.checked==true) {
	 // 		sum_price=oSpan_price*num_buy;
		// 	all_price += sum_price;
		// }
		// oHeji.innerHTML = all_price;
 	};
 //   !!!!!!!!计算！！！
	function jisuan_zong(){
		all_price = 0;
		for (var i = 0; i < aSection_float3.length; i++) {
			jisuan_f(aSection_float3[i]);
		}
	};
	jisuan_zong();
 	function jisuan_f(obj){
	 	var aP_section = obj.getElementsByTagName('p');
	 	var oInput_checkbox = obj.getElementsByTagName('input')[0];
	 	var oSpan_price = parseFloat(aP_section[1].getElementsByTagName('span')[0].innerHTML);
	 	var aInput_number = aP_section[3].getElementsByTagName('input');
	 	var num_buy=parseInt(aInput_number[1].value);
	 	if (oInput_checkbox.checked==true) {
			all_price += oSpan_price*num_buy;
		}
		oHeji.innerHTML = all_price;
 	};
 	//点击任何按钮都可以直接发生计算，取代了以上的部分点击事件。已被注释
	window.onclick = function (){
		jisuan_zong();
	};

	//input[type=text]内容发生非点击事件改变时。
	//解决方法之一是直接设置一个循环定时器执行jisuan_zong()
	//方法二  oninput事件

	for (var i = 0; i < aSection_float3.length; i++) {
		text_change(aSection_float3[i]);
	}
 	function text_change(obj){
	 	var aP_section = obj.getElementsByTagName('p');
	 	var oInput_text = aP_section[3].getElementsByTagName('input')[1];
	 	var oInput_lable = obj.getElementsByTagName('input')[0];

	 	oInput_text.value =1;
	 	oInput_text.onclick = function(){
	 		// select()就是使text处于被选中的状态；
	 		oInput_text.select();
	 	};
	 	oInput_text.oninput = function(){
	 		if(oInput_text.value==''){
	 			oInput_text.value=1;
	 			oInput_text.select();
	 		}else if(oInput_text.value == 0){
	 			//当text中输入0时，提醒是否要删除这一商品；
	 			var delete_buy = confirm("你要将宝贝移出购物车吗？");
	 			if (delete_buy==true) {
	 				obj.parentNode.removeChild(obj);
	 				if(oInput_lable.checked == true){
		 				num_b-=1;
			 		 //submit的结算总数
			  		oBtn_submit.value = '去 结 算 ('+num_b+')';
		  		};
		  	}else{oInput_text.value=1;
	 			oInput_text.select();
	 			}
	 		}else if(parseInt(oInput_text.value) != oInput_text.value){
	 			oInput_text.value=1;
	 			oInput_text.select();
	 		}
	 			jisuan_zong();
	 	};
 	};



