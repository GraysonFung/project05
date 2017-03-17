$("#res").click(function(){
						document.getElementById("message").reset();
					})
				function title(){
					if($("#title").val()==""){
						alert("请填写主题！！！！");
						return false;
					}
					return true;
				}
				function name(){
					if($("#name").val()==""){
						alert("请填写姓名！！！！");
						return false;
					}
					return true;
				}
					
				function textarea(){
						if($("#textarea").val()==""){
							alert("请填写内容！！！！");
							return false;
						}
						return true;
					}
				function email(){
						var str = $("#email").val();
						if(str==""){
							alert("请填写E-mail！！！！");
							return false;
						}
						var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
						if(!reg.test(str)){
							alert("E-mail格式不正确！！！！");
							return false;
						}
						return true;
					}
				$("#title").blur(title);
				$("#name").blur(name);
				$("#email").blur(email);
				$("#textarea").blur(textarea);
				$("#sub").click(function(){
						if(!title()){
							return false;
						}
						if(!name()){
							return false;
						}
						if(!email()){
							return false;
						}
						document.getElementById("message").submit();
					});