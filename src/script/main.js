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

	$('.loading').delay(500).fadeOut(300);

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
			var referer_warn = "<div class='warning show' id='referer-warn'>" +
				"<span class='warning_text'>" +
				"ホームページを引っ越しました。ブックマークの更新などお願いします。" +
				"</span>" +
				"</div>"
			$("#browser").before(referer_warn)
		}
	}()

	$$$$dead_warnings$$$$();
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
