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
    if (document.querySelector('.login') != null) {
        modal('[data-login]', 'data-close', '.login');
    }
    if (document.querySelector('.registration') != null) {
        modal('[data-registration]', 'data-close', '.registration');
    }
});
$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

$('input[name="phone"]').mask("+375 (99) 999-99-99");

// let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
// let newUrl = baseUrl + '?utm_source=yandex&utm_medium=cpc&utm_campaign=%7Bcampaign_name_lat%7D&utm_content=%7Bad_id%7D&utm_term=%7Bkeyword%7D';
// history.pushState(null, null, newUrl);

let utms_names = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_city'];

utms_names.forEach(name => {
    let utm_inputs = document.querySelectorAll(`.${name}`);
    utm_inputs.forEach(input => {
        input.value = new URL(window.location.href).searchParams.get(`${name}`);
    });
});   

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, closeSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute(closeSelector) == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });
}

if (document.querySelector('.catalog') != null) {
    $('.filter_button, .filter_close, .filter a').click(() => {
        $('.filter').toggleClass('show');
    });
    $(window).on( "resize", () => {
        $('.filter').removeClass("show")
    });
}

if (document.querySelector('.product') != null) {
    $('.product_ruler, .product_table_close').click(() => {
        $('.product_table').toggleClass('show');
    });
}

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
if (document.querySelector('.product_slider_field') != null) {
    let sliders = document.querySelectorAll('.product_slider');
    sliders.forEach((item, index) => {
        slider({
            containerSelector: `.product_slider.slider_${index}`,
            slideSelector: '.product_slider_image',
            wrapperSelector: '.product_slider_wrapper',
            fieldSelector: '.product_slider_field',
            indicatorsClass: `product_slider_indicators`,
            swipe: true,
        });
    })
}

if (document.querySelector('.product_tab') != null) {
    tabs('.product_wrapper', '.product_color', '.product_tab', '.product_colors', 'product_tab_active');
}

if (document.querySelector('.bestsellers_slide') != null) {
    bestsellers_hearts = document.querySelectorAll('.bestsellers_favorite');
    changeHeartColor(bestsellers_hearts);
}
if (document.querySelector('.catalog_item') != null) {
    catalog_hearts = document.querySelectorAll('.catalog_favorite');
    changeHeartColor(catalog_hearts);
}
if (document.querySelector('.product_favorite') != null) {
    product_hearts = document.querySelectorAll('.product_favorite');
    changeHeartColor(product_hearts);
}

if (document.querySelector('.range_slider') != null) {
    let ranges = document.querySelectorAll('.range_slider');
    ranges.forEach((range, index) => {
        noUiSlider.create(range, {
            start: [0.5, 1000],
            connect: true,
            range: {
                'min': 0.50,
                'max': 1000
            }
        });
        let buttons = range.querySelectorAll('.noUi-touch-area')
        buttons.forEach((btn, index) => {
            let p = document.createElement('div');
            p.classList.add('catalog_range_value');
            if (index == 1) {
                p.classList.add('last')
            }
            p.textContent = parseFloat(range.noUiSlider.get()[index]).toFixed(2);
            btn.appendChild(p);
            
            btn.addEventListener('click', () => {
                btn.querySelector('.catalog_range_value').innerHTML = parseFloat(range.noUiSlider.get()[index]).toFixed(2);
            });
            btn.addEventListener('mousemove', () => {
                btn.querySelector('.catalog_range_value').innerHTML = parseFloat(range.noUiSlider.get()[index]).toFixed(2);
            });
            btn.addEventListener('touchmove', () => {
                btn.querySelector('.catalog_range_value').innerHTML = parseFloat(range.noUiSlider.get()[index]).toFixed(2);
            });
        });
    });
}

$("form").submit(function (event) {
    event.preventDefault();
    let name = event.target.classList.value.split(' ').pop().slice(0, -5);
    let formData = new FormData(document.querySelector(`.${name}_form`));
    // for (key of formData.keys()) {
    //     console.log(`${key}: ${formData.get(key)}`);
    // }
    if (name.includes('order') || name.includes('contacts')) {
        sendPhp(name, formData);
    }
});

function sendPhp(name, data) {
    $.ajax({
        url: `./php/send_${name}.php`,
        type: 'POST',
        cache: false,
        data: data,
        dataType: 'html',
        processData: false,
        contentType: false,
        success: function (data) {
            $(`.${name}_form`).trigger('reset');
            if (name == 'order') {
                location="order_completion.html"
            }
        }
    });
}
