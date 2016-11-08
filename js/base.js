/*----------------------------------------- title -----------------------------------------*/
var titleWords=document.getElementsByTagName("title")[0].innerText;
var titleChange='' + titleWords;
			
var speed = 1000;
			
function titleScroll(){
	if(titleChange.length <= titleWords.length){
		titleChange += "-" + titleWords;
	}
	titleChange=titleChange.substring(1,titleChange.length);
	document.title=titleChange.substring(0,titleWords.length);

	window.setTimeout("titleScroll()",speed);
}
/*------------------------------------------------------------------------------------------*/

/*------------------------------------------ time ------------------------------------------*/
/*var time = document.getElementById("time");
var year,month,date,today
today = new Date();//定义新的对象
year = today.getYear();//年
month = today.getMonth() + 1;//月
date = today.getDate();//日
document.write(year + "年" + month + "月" + date + "日")
			
var weekarray = new Array(7);
weekarray[0] = "星期日";
weekarray[1] = "星期一";
weekarray[2] = "星期二";
weekarray[3] = "星期三";
weekarray[4] = "星期四";
weekarray[5] = "星期五";
weekarray[6] = "星期六";
weekday = today.getDay();//星期
document.write(weekarray[weekday]);
			
function startTime(){
	var today = new Date();
	var h = today.getHours();//时
	var m = today.getMinutes();//分
	var s = today.getSeconds();//秒
	m = checktime(m);
	s = checktime(s);
	time.innerHTML = h+":"+m+":"+s;
	t = setTimeout("startTime()",1000);
	//t=setInterval("startTime()",1000);
}
function checktime(i){
	if(i < 10){
		i = "0" + i;
	}
	return i
}*/
setInterval("document.getElementById('time').innerText=new Date().toLocaleString()",1000);
/*------------------------------------------------------------------------------------------*/

/*---------------------------------------- 回到顶部 ----------------------------------------*/
window.onload = function () {
	var oBtn = document.getElementById('toatop');
	var timer = null;
	var bFlag = false;

	oBtn.onclick = function () {
		moveScroll(0,300);
	}; 

	window.onscroll = function () {
		if (bFlag) {
			clearInterval(timer);
		};
		bFlag=true;
	};

	function moveScroll(target,time) {
		var start = document.documentElement.scrollTop || document.body.scrollTop;
		var dis = target - start;
		var count = Math.floor(time/30);
		var n = 0;

		clearInterval(timer);
		timer = setInterval(function () {
			n++;
			bFlag = false;
			document.documentElement.scrollTop = start + dis * n/count;
			document.body.scrollTop = start + dis * n/count;
			if (n == count) {    
				clearInterval(timer);
			};
		},30);
	};
};
/*------------------------------------------------------------------------------------------*/

/*----------------------------------------- 状态栏 -----------------------------------------*/
var msg = "欢迎来到 老街角！";
var interval = 500;
var seq = 0;
			
function statuShow(){
    window.status = msg.substring(0,seq + 1);
	seq ++;
				
	len = msg.length;
	if(seq > len){
	    seq = 0;
		window.status = "";
	}
				
	window.setTimeout("statuShow()",interval);
}
			
statuShow();
/*------------------------------------------------------------------------------------------*/

/*---------------------------------------- 刷新缓存 ----------------------------------------*/
window.applicationCache.addEventListener('updateready', function(e) {
	if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		window.applicationCache .swapCache();
		if (confirm('A new version of this site is available. Load it?')) {
			window.location.reload();
		}
	} else {
	// Manifest didn't changed. Nothing new to server.
	}
}, false);
/*------------------------------------------------------------------------------------------*/
