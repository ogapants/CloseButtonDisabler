window.onload = function() {
	var closeBtn = document.getElementsByClassName("btn js-comment-and-button js-quick-submit-alternative");
	if (closeBtn[0] != null) {//https://github.com/*/*/issues/new
		closeBtn[0].disabled = true;
		//closeBtn[0].style.display = "none";
	}
};
