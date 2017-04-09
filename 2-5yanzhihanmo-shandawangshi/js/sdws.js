$(function () {
	var btn=$(".btn");

	var flag=true;
	btn.click(function () {
		if (flag) {
			btn.css("background","url('../img/jian.png')");
			$(".sdws-list-box dd").css("display","none");
			flag=false;
		}else{
			btn.css("background","url('../img/jia.png')");
			$(".sdws-list-box dd").css("display","block");
			flag=true;
		}
	})
})