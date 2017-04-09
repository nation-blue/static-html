$(function () {
	var fhtop=$(".to-top")
	fhtop.hide();
	var top;
	var t;

	$(window).scroll(function () {
		if ($(this).scrollTop()>300) {
			fhtop.show();
			clearTimeout(t);
			t=setTimeout(function () {
				fhtop.animate({bottom:120},100,function () {
					fhtop.animate({bottom:102},100);
				});
			},200);
		}else{
			fhtop.hide();
		};
		top=$(this).scrollTop();
	});

	fhtop.click(function(){
		$({someValue: top }).animate({someValue: 0}, {
			duration: 500,
			step: function() {
				$(window).scrollTop(this.someValue);
			}
		});
	});

})