$(document).ready(function () {
    $('.line').click(function () {
        $('.line').hide('fade', 'fast', function () {
            $('.line').addClass('hidden', function () {
                $('.back').css('opacity','0.7');
                $('.navSmall').show('slide', 'slow').addClass('visible');
                $('.about').css({ 'paddingLeft': '24vh', 'transition': '1000ms' });
                $('.feedback').css({ 'paddingLeft': '20vh', 'transition': '1000ms' });
            });
        })

    })
})

$(document).ready(function () {
    $('.closeTop, .closeBottom').click(function () {
        $('.back').css('opacity', '0');
        $('.about').css({ 'paddingLeft': '0vh' });
        $('.feedback').css({ 'paddingLeft': '0vh' });
        $('.line').show('fade', 500).removeClass('hidden');
        $('.navSmall').hide('slide', 'slow', function () {
            $('.navSmall').removeClass('visible');
        });
    })
})