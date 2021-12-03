let logoFiles = ["logo1.png", "logo2.png", "logo3.png", "logo4.png"];

const LOGO = document.querySelector("#logo")

var index = 0;

var ticker = setInterval(function () {
	LOGO.src = logoFiles[index];
	index++;
	if (index >= logoFiles.length) {
		index = 0;
	}

}, 800);