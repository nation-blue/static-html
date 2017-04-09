$(function () {

	var num=0;

	function lunbo (num) {
		$(".banner-bg img").css("display","none").eq(num).css("display","block");
	}

	$(".l-btn").click(function () {
		num=num-1;
		if (num==-1) {
			num=2;
		}
		lunbo(num);
	})

	$(".r-btn").click(function () {
		num=num+1;
		if (num==3) {
			num=0;
		}
		lunbo(num);
	})

})