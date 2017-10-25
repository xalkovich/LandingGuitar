$(document).ready(function() {
var clock = $('.counter').FlipClock(1230,{
clockFace: 'Counter'
});
setTimeout(function() {
		setInterval(function() {
			clock.increment();
		}, 6000);
	});
});