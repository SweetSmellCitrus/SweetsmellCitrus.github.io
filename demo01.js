function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
function per(){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
		 showPic(this);
         return false;
		
        }
    }
}
function showPic(whicPic) {
        var source = whicPic.getAttribute("href")
        var flag = document.getElementById("flag");
        flag.setAttribute("src", source);
    }
addLoadEvent(per);