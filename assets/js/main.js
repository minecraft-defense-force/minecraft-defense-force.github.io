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

	!function dead_warnings() { if (document.location.pathname.endsWith("/death.html")) return; /** @return HTMLElement */ function findHeader() { return document.getElementById("header-inner") || document.getElementsByClassName("layout-header")[0]; } var header = findHeader(); if (header == null) { console.log("header not found"); return; } console.log("header", header); var height = header.offsetHeight; console.log("height", height); header.style.height = (height * 2) + "px"; var noticeDiv = document.createElement("div"); noticeDiv.style.position = "absolute"; noticeDiv.style.top = height + "px"; noticeDiv.style.height = height + "px"; noticeDiv.style.left = "0"; noticeDiv.style.width = "100%"; noticeDiv.style.backgroundColor = "rgb(255, 47, 47)"; var noticeA = document.createElement("a"); noticeA.append("マインクラフト防衛部連邦の終了について"); noticeA.href = "/news/death.html"; noticeA.style.position = "relative"; noticeA.style.left = "50%"; noticeA.style.transform = "translateX(-50%)"; noticeA.style.display = "inline-block"; noticeA.style.width = "auto"; noticeA.style.textAlign = "center"; noticeA.style.lineHeight = "48px"; noticeA.style.color = "rgb(231, 248, 255)"; noticeA.style.textDecoration = "none"; noticeDiv.append(noticeA); header.append(noticeDiv); /* navigation */ var nav = document.getElementsByClassName("layout-nav")[0]; if (nav == null) { console.log("nav not found"); return; } nav.style.top = (height * 2) + "px"; }() 
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
