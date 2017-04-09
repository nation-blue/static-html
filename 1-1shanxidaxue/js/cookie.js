$(function () {
	function setCookie (name,val,time) {
		if (time==undefined) {
			document.cookie=name+"="+val;
		}else{
			var now = new Date();
			var nowTime = now.getTime();
			now.setTime(nowTime+1000*now);
			var str = now.toGMTString();
			document.cookie=name+"="+val+";expires="+str;
		}
	}

	function getCookie (attr) {
		var cookie = document.cookie;
		var arr = cookie.split("; ");
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split("=");
			if (arr2[0]==attr) {
				return arr2[1];
			}
		}
		return false;
	}

	function delCookie (attr) {
		var now = new Date();
		var nowTime = now.getTime();
		now.setTime(nowTime-1);
		var str = now.toGMTString();
		document.cookie = attr+"=a;expires="+str;
	}

	var index;
	if (!getCookie("index")) {
		$(".yindao").css("display","block");

		$(".yindao4").click(function () {
			$(".yindao").hide(500);
			setCookie("index",1);
		})
	}
	


})