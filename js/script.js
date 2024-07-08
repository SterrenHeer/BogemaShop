$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close, .burger a').click(() => {
        $('.burger').toggleClass('show');
        $('.burger_dropdown :checked').prop('checked', false);
    });
    $(window).on( "resize", () => {
        $('.burger').removeClass("show")
        $('.burger_dropdown :checked').prop('checked', false);
    });
});
