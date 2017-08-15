$(function() {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	})
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	})
})

$('.arrow').click(function(event) {
	event.preventDefault();
	var n = $(document).height();
	$('html, body').animate({ scrollTop: 1000 }, 600);
})

$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	}
	else {
		$('.top').removeClass('active');
	}
});

$('.top').click(function () {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});