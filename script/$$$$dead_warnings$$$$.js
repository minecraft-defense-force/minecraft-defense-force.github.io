!function dead_warnings() {
    if (document.location.pathname.endsWith("/death.html")) return;
    /** @return HTMLElement */
    function findHeader() {
        return document.getElementById("header-inner") || document.getElementsByClassName("layout-header")[0];
    }

    var header = findHeader();
    if (header == null) {
        console.log("header not found");
        return;
    }

    console.log("header", header);
    var height = header.offsetHeight;
    console.log("height", height);
    header.style.height = (height * 2) + "px";

    var noticeDiv = document.createElement("div");
    noticeDiv.style.position = "absolute";
    noticeDiv.style.top = height + "px";
    noticeDiv.style.height = height + "px";
    noticeDiv.style.left = "0";
    noticeDiv.style.width = "100%";
    noticeDiv.style.backgroundColor = "rgb(255, 47, 47)";

    var noticeA = document.createElement("a");
    noticeA.append("マインクラフト防衛部連邦の終了について");
    noticeA.href = "/news/death.html";

    noticeA.style.position = "relative";
    noticeA.style.left = "50%";
    noticeA.style.transform = "translateX(-50%)";
    noticeA.style.display = "inline-block";
    noticeA.style.width = "auto";
    noticeA.style.textAlign = "center";
    noticeA.style.lineHeight = "48px";
    noticeA.style.color = "rgb(231, 248, 255)";
    noticeA.style.textDecoration = "none";

    noticeDiv.append(noticeA);
    header.append(noticeDiv);

    /* navigation */
    var nav = document.getElementsByClassName("layout-nav")[0];
    if (nav == null) {
        console.log("nav not found");
        return;
    }
    nav.style.top = (height * 2) + "px";
}()
