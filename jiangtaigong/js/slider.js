// JavaScript Document
	var outer=document.getElementById("content");
    var oInner=document.getElementById("inner");
	var oLi=oInner.getElementsByTagName("li");
	var btn=document.getElementById("nav").getElementsByTagName("li");
	btn[0].className="ehover";
	var step=0;
	var timer=null;
	for(var i=0; i<btn.length; i++){
        btn[i].indx=i;
        btn[0].className="ehover";
		}
	/*图片移动开始*/
	function setLeftEdge(target)
{
Imgwidth=oLi[0].getElementsByTagName("img");
var ImgW=Imgwidth[0].width;
		document.getElementById("inner").style.left=(-ImgW*target)+"px";
		}
		
		
		for(var i=0; i<btn.length; i++){
        btn[i].onclick=function(){
          //window.clearTimeout(timer);
            for(var i=0; i<btn.length; i++){
                btn[i].className="";
                btn[this.indx].className="ehover";
            }
            setLeftEdge(this.indx); 
        }    
    
}
/*图片移动结束*/

	
function automove(){
step++;
if(step<btn.length){
             for(var i=0; i<btn.length; i++){
                btn[i].className="";
                btn[step].className="ehover";
               setLeftEdge(step*-$(".on").width());
            }           
    	 }else{ 
                step=btn.length-4;        
         }

timer=window.setTimeout(automove,3000);
}
automove();
/*图片按钮*/
for(var i=0; i<btn.length; i++){
        btn[i].onclick=function(){
          //window.clearTimeout(timer);
            for(var i=0; i<btn.length; i++){
                btn[i].className="";
                btn[this.indx].className="ehover";
            }
            setLeftEdge(-$(".on").width()*this.indx); 
        }    
    }
oInner.onmouseover=function(){window.clearTimeout(timer);}
oInner.onmouseout=function(){timer=window.setTimeout(automove,3000);}
 
btn.onmouseout=function(){timer=window.setTimeout(automove,3000);} 