//导航js
$(function () {

	$('.nav li:not(:first)').hover(function(){
		var index=$('.nav li:not(:first)').index(this);
		t=setTimeout(function(){
			$('.nav li dl:eq('+index+')').slideDown(300);
			},150)
		},function(){
			clearTimeout(t);
			$('.nav li dl').slideUp(200);
	})
})