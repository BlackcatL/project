/*** 以jq的形式获取值 ***/
function MyObject(name){
	this.obj = function (name){
		var idReg = /^#([a-zA-Z_]+)\w*?$/g;
		var classReg  =/^\.([a-zA-Z_]+)\w*?$/g;
		var tagReg = /^[a-zA-Z]+$/g;
		if(idReg.test(name)){
			this.push(document.getElementById(name.replace("#","")));
		}else if(classReg.test(name)){
			var all = document.getElementsByCalssName(name.replace(".",""));
			for (var i = 0; i < all.length; i++){
				this.push(all[i]);
			};
		}else if(tagReg.test(name)){
			var all = document.getElementsByTagName(name);
			for (var i = 0; i < all.length; i++) {
				this.push(all[i]);
				this.push(all[i]);
			};
		};
		//return null;
	};
	this.obj(name);
	this.click = function (fun){
		for (var i = 0; i < this.length; i++) {
			this[i].onclick = fun;
		};
	};
};

MyObject.prototype = [];

function $(name){
	return new MyObject(name);
};

/*****************************************/
/* **************·********************** */
/* ************···********************** */
/* ***********········****************** */
/* **********·········****************** */
/* **********···········*****····******* */
/* ***********·········***··*****··***** */
/* ***********·········**··**··**··***** */
/* *********·············*****···******* */
/* ******···············**************** */
/* ****··**··············*************** */
/* ****··**···············************** */
/* *****··**··············************** */
/* *******···············*************** */
/* ***********·············************* */
/* ************************************* */
/*****************************************/
