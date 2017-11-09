$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		var targetFull = $(this).attr('href');
		var target = '.'+ targetFull.slice(1);
		$('a').removeClass('active');
		$(this).addClass('active');
		$('html, body').animate({ scrollTop: $(target).offset().top - 0}, 1000);
	});
});