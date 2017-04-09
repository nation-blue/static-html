$(function(){

	$(".jsy-box dd").hide();

	$(".jsy-box dl").hover(function(){
		$(this).find("b").html("&or;");
		$(this).find("dd").finish();
		$(this).find("dd").slideToggle(200);
		
	},function(){
		$(this).find("dd").slideToggle(200);
		$(this).find("b").html("&and;");

	})

})