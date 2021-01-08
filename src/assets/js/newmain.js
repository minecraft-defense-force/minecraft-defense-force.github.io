$(function (){
	$(document).ready(function() {
		$('nav').load('../../pages/include/headerNav.html');
		$('#footer-nav').load('../../pages/include/footerNav.html');
	});
  $("#navbutton").click(function(){
    $(".trigger").toggleClass("active");
    $(this).toggleClass("btntgle");
    $("nav").toggleClass("open");
    $("main").toggleClass("slide");
		$("footer").toggleClass("slide");
  });
});
