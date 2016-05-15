jQuery(document).ready(function($) {
	
	var navId = '#nav', navOpenClass = 'nav-open';

	$('#nav-menu').on('click', function (event) {
		if($(navId).hasClass(navOpenClass)) {

			$(navId).animate({
				height: 0
			  },
				300, function() {
				setTimeout(function () {
					$(navId).removeClass(navOpenClass).removeAttr('style');
				}, 320);
			});
		}
		else {
			// alert('close nav');
			// $(navId).addClass(navOpenClass);

			var newHeight = $(navId).css('height', 'auto').height();
			// alert(newHeight);
			$(navId).height(0).animate({
				height: newHeight
			},
				300, function() {
				/* stuff to do after animation is complete */
				setTimeout(function () {
					$(navId).addClass(navOpenClass).removeAttr('style');
				}, 320);
			});
		}
	});
	// $('#nav-menu') Ends

	var navClass = '.sub-menu', subOpenClass = 'sub-menu-open';

	$('.menu-item-has-children').on('click', function (event) {

		// $(this).children('.sub-menu').css('display', 'none');			
		// alert('clicked');
		if($(navClass).hasClass(subOpenClass)) {

			$(navClass).animate({
				height: 0
			  },
				300, function() {
				setTimeout(function () {
					// $(navClass).firstChild('li').css('border', '1px solid red');
					$(navClass).removeClass(subOpenClass).removeAttr('style');
				}, 320);
			});
		}
		else {
			// alert('close nav');
			// $(navId).addClass(navOpenClass);

			var newHeight = $(navClass).css('height', 'auto').height();
			// alert(newHeight);
			$(navClass).height(0).animate({
				height: newHeight
			},
				300, function() {
				/* stuff to do after animation is complete */
				setTimeout(function () {
					$(navClass).addClass(subOpenClass).removeAttr('style');
				}, 320);
			});
		}
	});
	// $('.sub-menu') Ends

});
// jQuery(document) Ends