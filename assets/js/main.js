$(window).on('load', function () {
    // 消えるタイミングはお好みで
    $('.loading').delay(1000).fadeOut(300);

    !function webcrow_referer_warn() {
    	if (document.referrer === "") return;
		var hosts = [
			"boueibu.webcrow.jp",
			"boueibu.webcrow.jp:80",
			"boueibu.webcrow.jp:443",
		]
		// noinspection SpellCheckingInspection
		var isFromWebcrow;
		if (window.URL) {
			// noinspection SpellCheckingInspection
			isFromWebcrow = function() {
				var url = new URL(document.referrer);
				for (var i = 0; i < hosts.length; i++) {
					if (hosts[i] === url.host) return true;
				}
				return false;
			}
		} else {
			// noinspection SpellCheckingInspection
			isFromWebcrow = function() {
				var a = document.createElement("a");
				a.href = document.referrer;
				for (var i = 0; i < hosts.length; i++) {
					if (hosts[i] === a.host) return true;
				}
				return false;
			}
		}

		if (isFromWebcrow()) {
			var referer_warn = "<div class='warning' id='referer-warn' style='display: block;'>" +
				"<span class='warning_text'>" +
				"ホームページを引っ越しました。ブックマークの更新などお願いします。" +
				"</span>" +
				"</div>"
			$("#browser").after(referer_warn)
		}
	}()
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
