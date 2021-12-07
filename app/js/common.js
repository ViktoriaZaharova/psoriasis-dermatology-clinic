$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    var heightMain = $('main').height();

    if ($(this).scrollTop() > heightMain) {
        $('.btn-scroll-top').fadeIn();
    } else {
        $('.btn-scroll-top').fadeOut();
    }
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.reviews-slider').slick({
    slidesToShow: 5,
    dots: true,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                arrows: false,
                variableWidth: false,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true
            }
        }
    ]
});

$('.clinics-slider').slick({
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    centerMode: true,
    appendArrows: '.clinics-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                appendDots: '.clinics-slider__nav',
            }
        }
    ]
});

$('.video-preview-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1120,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

$('.result-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.license-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    appendDots: '.license-slider__nav',
    appendArrows: '.license-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});


$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.btn-result-view').on('click', function (e) {
    e.preventDefault();
    $('.btn-result-view').hide();
    $('.result-slider-box-before').removeClass('result-slider-box-before');
});



$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

$(".datepicker").datepicker();

$(function () {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
});

//плавный скролл end

$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        var heightHeader = $('header').height();

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - heightHeader}, 500);
    });
});