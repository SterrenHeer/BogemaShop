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
$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

const changeHeartColor = (hearts) => {
    hearts.forEach(favorite => {
        favorite.addEventListener('click', (e) => {
            let img = favorite.querySelector('img');
            img.getAttribute('src') == 'icons/heart.svg' ? img.setAttribute('src', 'icons/heart_fill.svg') : img.setAttribute('src', 'icons/heart.svg')
        });
    });
}

if (document.querySelector('.bestsellers_field') != null) {
    slider({
        containerSelector: '.bestsellers_container',
        slideSelector: '.bestsellers_slide',
        prevSlideSelector: '.bestsellers_prev',
        nextSlideSelector: '.bestsellers_next',
        wrapperSelector: '.bestsellers_wrapper',
        fieldSelector: '.bestsellers_field',
        elementsPerPage: 4,
        elementsPerPageMobile: 2,
        indicatorsClass: `bestsellers_indicators`,
        columnGap: 30,
        swipe: true,
    });
}
if (document.querySelector('.bestsellers_container.slider_2') != null) {
    slider({
        containerSelector: '.bestsellers_container.slider_2',
        slideSelector: '.bestsellers_slide',
        prevSlideSelector: '.bestsellers_prev',
        nextSlideSelector: '.bestsellers_next',
        wrapperSelector: '.bestsellers_wrapper',
        fieldSelector: '.bestsellers_field',
        elementsPerPage: 4,
        elementsPerPageMobile: 2,
        indicatorsClass: `bestsellers_indicators`,
        columnGap: 30,
        swipe: true,
    });
}

if (document.querySelector('.bestsellers_slide') != null) {
    bestsellers_hearts = document.querySelectorAll('.bestsellers_favorite');
    changeHeartColor(bestsellers_hearts);
}
