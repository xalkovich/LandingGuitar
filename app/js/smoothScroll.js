$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({ scrollTop: $(target).offset().top - 90 }, 1000);
    });
});