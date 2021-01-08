$(window).on('load', function () {
	// 消えるタイミングはお好みで
	//ブロックブラウザ(レイアウト崩れのため)
	var agent = window.navigator.userAgent.toLowerCase();
	var version = window.navigator.appVersion.toLowerCase();
	var result = true;
	if (agent.indexOf("msie") > -1) {
		result = false;
	} else if (agent.indexOf("trident/7") > -1) {
		result = false;
	}

	if (result == false) {
		$("#browser").toggleClass("show");
	}

	$('.loading').delay(400).fadeOut(300);
});



$(document).ready(function () {
	$('.layout-nav').load('/include/nav.html');
	$('.layout-footer').load('/include/ftnav.html');

	$("#navbutton").click(function () {
		$(".trigger").toggleClass("active");
		$(this).toggleClass("btntgle");
		$(".layout-nav").toggleClass("open");
	});
	$(".layout-main, .layout-footer").click(function () {
		if ($(".layout-nav").hasClass("open")) {
			$(".trigger").toggleClass("active");
			$("#navbutton").toggleClass("btntgle");
			$(".layout-nav").toggleClass("open");
		}
	})

	$(".scroll").click(function (event) {
		event.preventDefault();

		var url = this.href;

		var parts = url.split("#");
		var target = parts[1];

		var target_offset = $("#" + target).offset();
		var target_top = target_offset.top - 48;

		$('html, body').animate({ scrollTop: target_top }, 1000, 'swing');
	});

	$(".accordion").click(function (event) {
		event.preventDefault();

		var url = this.href;

		var parts = url.split("#");
		var target = parts[1];
		if ($("#" + target).hasClass("toggle")) {
			$("#" + target).slideUp("0.2");
		} else {
			$("#" + target).slideDown("0.2");
		}
		$("#" + target).toggleClass("toggle")
		$(this).parent().toggleClass("open");
	});
});
