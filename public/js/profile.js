function  make2col() {

	for (var i = 0; i < document.getElementsByClassName('col-lg-4 col-md-6').length; i++) {
		if (document.getElementsByClassName('col-lg-4 col-md-6')[i].className) {
			document.getElementsByClassName('col-lg-4 col-md-6')[i].className = "col-6";
			i--;
		}
	}
	// document.getElementsByClassName('grid3')[0].style.stroke = 'gray';
	document.getElementsByClassName('grid2')[0].style.stroke = 'black';
}

function  make3col() {
	for (var i = 0; i < document.getElementsByClassName('col-6').length; i++) {
		if (document.getElementsByClassName('col-6')[i].className) {
			document.getElementsByClassName('col-6')[i].className = "col-lg-4 col-md-6";
			i--;
		}
	}	
}

if(window.innerWidth <= 576) {
	if (document.getElementsByClassName('col-lg-4 col-md-6').length) {
		for (var i = 0; i < document.getElementsByClassName('col-lg-4 col-md-6').length; i++) {
			if (document.getElementsByClassName('col-lg-4 col-md-6')[i].className) {
				document.getElementsByClassName('col-lg-4 col-md-6')[i].className = "col-6";
				i--;
			}
		}
	}
}

for (var i = 0; i < document.getElementsByClassName('img').length; i++) {
	document.getElementsByClassName('img')[i].style.background = 'url(../img/img0'+i+'.jpg';
	document.getElementsByClassName('img')[i].style.backgroundSize = '100% 100%';
}