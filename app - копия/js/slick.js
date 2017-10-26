$(document).ready(function () {
	var slides = $('.slides');
	var filter = '.slick-active *[data-animate]';
	var filterOne = '.slick-slide *[data-animate]';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	// Скрытие текста до появления слайда
	slides.on('init', function (slick, currentSlide) {
		slides.find(filter).each(function () {
			$(this).removeClass('hidden');
		});
	});

	// First Slid effect
	slides.on('init', function (slick) {
		slides.find(filter).each(function () {
			$(this).addClass('animated ' + $(this).attr('data-animate')).on(animationEnd, function () {
				$(this).removeClass('animated ' + $(this).attr('data-animate'));
			});
		});
	});

	// First slide Effect duration
	slides.on('init', function (slick) {
		slides.find('*[data-duration]').each(function () {
			var duration = $(this).attr("data-duration");
			$(this).css("animation-duration", duration + "s").on(animationEnd, function () {
				$(this).removeAttr("style");
			});
		});
	});


	// Slider
	$('.slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		useTransform: false,
		pauseOnHover: false,
		// speed: 2000,

	});

	// Скрытие текста до появления слайда
	slides.on('afterChange', function (slick, currentSlide) {
		slides.find(filter).each(function () {
			$(this).removeClass('hidden');
		});
	});

	slides.on('beforeChange', function (slick, currentSlide) {
		slides.find(filterOne).each(function () {
			$(this).addClass('hidden');
		});
	});

	// Slides after change effect
	slides.on('afterChange', function (slick, currentSlide) {
		slides.find(filter).each(function () {
			$(this).addClass('animated ' + $(this).attr('data-animate')).on(animationEnd, function () {
				$(this).removeClass('animated ' + $(this).attr('data-animate'));
			});
		});
	});

	// Other slides Effect duration
	slides.on('afterChange', function (slick) {
		slides.find('*[data-duration]').each(function () {
			var duration = $(this).attr("data-duration");
			$(this).css("animation-duration", duration + "s").on(animationEnd, function () {
				$(this).removeAttr("style");
			});
		});
	});

	// Other slides Effect delay
	slides.on('afterChange', function (slick) {
		slides.find('*[data-delay]').each(function () {
			var delay = $(this).attr("data-delay");
			$(this).css("animation-delay", delay + "s").on(animationEnd, function () {
				$(this).removeAttr("style");
			});
		});
	});
});


