$(document).ready(function() {
    var home = $("#home").offset().top;
    var aboutme = $("#aboutme").offset().top - 100;
    var player = $("#player").offset().top - 100;
    var feedback = $("#feedback").offset().top - 200;
    var email = $("#email").offset().top - 800;
    var top = ($(document).scrollTop());
    // console.log(home);
    // console.log(aboutme);
    // console.log(top);
    if (top >= home && top <= aboutme ) {
        $("a[href='#home']").addClass('active');
    } 
   
    if (top >= aboutme && top <= player) {
        $("a[href='#aboutme']").addClass('active');
        
    }
    if (top >= player && top <= feedback) {
        $("a[href='#player']").addClass('active');
    }
    if (top >= feedback && top <= email) {
        $("a[href='#feedback']").addClass('active');
    }
    if (top >= email) {
        $("a[href='#email']").addClass('active');
    }

    $(window).scroll(function() {
        var test = ($(document).scrollTop());
    	if (test >= 100) {
    		$('.nav').addClass('navMenu');
    	}else{
    		$('.nav').removeClass('navMenu');
    	}
		
        if (test >= home && test <= aboutme ) {
        $("a[href='#home']").addClass('active');
        } else {
            $("a[href='#home']").removeClass('active');
    }
    if (test >= aboutme && test <= player) {
        $("a[href='#aboutme']").addClass('active');

    }else{
    	$("a[href='#aboutme']").removeClass('active');
    }
    if (test >= player && test <= feedback) {
        $("a[href='#player']").addClass('active');
    }else{
    	$("a[href='#player']").removeClass('active');
    }
    if (test >= feedback && test <= email) {
        $("a[href='#feedback']").addClass('active');
    }else{
    	$("a[href='#feedback']").removeClass('active');
    }
    if (test >= email) {
        $("a[href='#email']").addClass('active');
    }else{
    	$("a[href='#email']").removeClass('active');
    }
    });
});