$(function(){
	var oPay_way = document.getElementById('pay_way');
	var aBtn_check =oPay_way.getElementsByTagName('input');
	var oBtn_submit = document.getElementById('btn_submit');
	aBtn_check[0].onclick = function(){
		aBtn_check[1].className = '';
		aBtn_check[0].className = 'actived_pay';
	}
	aBtn_check[1].onclick = function(){
		aBtn_check[0].className = '';
		aBtn_check[1].className = 'actived_pay';
	}
	oBtn_submit.onclick = function(){
		// location.href='pay _failure.html'
		var check = confirm('是否支付成功？')
		if (check==true) {
			location.href ='pay _success.html';
		}else{
			location.href='pay _failure.html';
		}
	}
})