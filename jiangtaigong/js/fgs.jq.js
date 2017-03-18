//'$'用法；
function $( v ){
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}
//获取元素样式

function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
		/*
		    eg：  getStyle( $('div1'), 'marginRight' )
				获取到的是计算机（浏览器）计算后的样式

				background: url() red ……		复合样式（不要获取）
				backgroundColor									单一样式（不要用来做判断）

				不要有空格

				不要获取未设置后的样式：不兼容
		*/