var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		document.getElementsByClassName('logo_text')[0].style.visibility = 'visible';
	} else {
		document.getElementsByClassName('logo_text')[0].style.visibility = 'hidden';
	}
	prevScrollPos = currentScrollPos;
};

function gridSystem3() {
	document.getElementsByClassName('grid3')[0].style.stroke = 'black';
	document.getElementsByClassName('grid2')[0].style.stroke = 'gray';
	make3col();
}
function gridSystem2() {
	document.getElementsByClassName('grid3')[0].style.stroke = 'gray';
	document.getElementsByClassName('grid2')[0].style.stroke = 'black';
	make2col();
}