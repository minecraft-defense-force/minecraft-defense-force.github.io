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

	!function dead_warnings() { if (document.location.pathname.endsWith("/death.html")) return; /** @return HTMLElement */ function findHeader() { return document.getElementById("header-inner") || document.getElementsByClassName("layout-header")[0]; } var header = findHeader(); if (header == null) { console.log("header not found"); return; } console.log("header", header); var height = header.offsetHeight; console.log("height", height); header.style.height = (height * 2) + "px"; var noticeDiv = document.createElement("div"); noticeDiv.style.position = "absolute"; noticeDiv.style.top = height + "px"; noticeDiv.style.height = height + "px"; noticeDiv.style.left = "0"; noticeDiv.style.width = "100%"; noticeDiv.style.backgroundColor = "rgb(255, 47, 47)"; var noticeA = document.createElement("a"); noticeA.append("マインクラフト防衛部連邦の終了について"); noticeA.href = "/news/death.html"; noticeA.style.position = "relative"; noticeA.style.left = "50%"; noticeA.style.transform = "translateX(-50%)"; noticeA.style.display = "inline-block"; noticeA.style.width = "auto"; noticeA.style.textAlign = "center"; noticeA.style.lineHeight = "48px"; noticeA.style.color = "rgb(231, 248, 255)"; noticeA.style.textDecoration = "none"; noticeDiv.append(noticeA); header.append(noticeDiv); /* navigation */ var nav = document.getElementsByClassName("layout-nav")[0]; if (nav == null) { console.log("nav not found"); return; } nav.style.top = (height * 2) + "px"; }() 
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
