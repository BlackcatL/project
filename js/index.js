

/*--------------------------------------- 任务 滚动条 ---------------------------------------*/
/*var miaoshu = document.getElementById("miaoshu");
var p = document.getElementById("p");
var area = document.getElementById("Area");
var Line = document.getElementById("Line");

Line.onmousedown = function(e){
	var ev = e || window.event;
	var offY = ev.offsetY;
	document.onmousemove = function(e){
		var ev = e || window.event;
		Line.style.top = ev.clientY - offY + "px";
		if(Line.offsetTop <= 0){
			Line.style.top = 0;
		}else if(Line.offsetTop >= area.offsetHeight - Line.offsetHeight){
			Line.style.top = area.offsetHeight - Line.offsetHeight + "px";
		};

		var offContenY = p.offsetHeight - miaoshu.offsetHeight;
		var offScrollY = area.offsetHeight - Line.offsetHeight;
		var scale = offContenY / offScrollY;
		p.style.top = -Line.offsetTop * scale + "px";
		console.log();
		return false;
	};
	document.onmouseup = function(){
		document.onmousemove = null;
	};
};*/
/*------------------------------------------------------------------------------------------*/