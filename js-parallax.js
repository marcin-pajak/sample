onScrollParallax = function ( e ) {
	var parallax = document.getElementById('parallax-background'),
		offset = (-1)*(window.pageYOffset/4);

	parallax.style.msTransform = 'translate3d(' + '0px, ' + offset + 'px, ' + '0)';
	parallax.style.webkitTransform = 'translate3d(' + '0px, ' + (-1)*(window.scrollY/4) + 'px, ' + '0)';
	parallax.style.transform = 'translate3d(' + '0px, ' + offset + 'px, ' + '0)';
};