/* lazy-load */
$(window).on('scroll click', function() {
    $('.lazy-load').each(function() {
        if ($(window).scrollTop() + $(window).height() * 1.5 > $(this).offset().top)  {
            if ($(this).attr('data-src')) {
                $(this).attr('src', `${$(this).attr('data-src')}`);
                $(this).removeAttr('data-src');
            }
        }
    });
});