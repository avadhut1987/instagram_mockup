function make3col() {
	document.getElementById('thirdImg').style.display = "block";
	document.getElementById('thirdPicInfo').style.display = "block";
	for (var i = 0; i < document.getElementsByClassName('col-12 col-sm-6').length; i++) {
		if (document.getElementsByClassName('col-12 col-sm-6')[i].className) {
			document.getElementsByClassName('col-12 col-sm-6')[i].className = "col-lg-4 col-md-6";
			i--;
		}
	}

}

function make2col() {
	document.getElementById('thirdImg').style.display = "none";
	document.getElementById('thirdPicInfo').style.display = "none";
	for (var i = 0; i < document.getElementsByClassName('col-lg-4 col-md-6').length; i++) {
		if (document.getElementsByClassName('col-lg-4 col-md-6')[i].className) {
			document.getElementsByClassName('col-lg-4 col-md-6')[i].className = "col-12 col-sm-6";
			i--;
		}
	}
}