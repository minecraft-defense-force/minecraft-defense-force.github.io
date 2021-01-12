$(window).on('load', function () {
    // 消えるタイミングはお好みで
    $('.loading').delay(1000).fadeOut(300);
});


$(function (){
	$(document).ready(function() {
		$('#side-nav').load('../../include/headerNav.html');
		$('#footer-nav').load('../../include/footerNav.html');
	});
  $("#navbutton").click(function(){
    $(".trigger").toggleClass("active");
    $(this).toggleClass("btntgle");
    $("#side-nav").toggleClass("open");
  });
	$("#scroll").click(function(){
		$("html,body").animate({scrollTop:$('#main').offset().top - 50}, 500);
	});
	$("#retop").click(function(){
		$("html,body").animate({scrollTop:$('#header').offset().top - 50}, 500);
	});

	$("#main, #header-image, #footer").click(function(){
		if($("#side-nav").hasClass("open")){
			$(".trigger").toggleClass("active");
	    $("#navbutton").toggleClass("btntgle");
			$("#side-nav").toggleClass("open");
		}
	})
});
