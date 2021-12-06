$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
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
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.clinics-slider').slick({
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    centerMode: true,
    appendArrows: '.clinics-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

// range
window.addEventListener("DOMContentLoaded", () => {
    let range1 = new rSlider({
        element: "#range1",
        tick: 1
    });
});

$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

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

$( ".datepicker" ).datepicker();

$(document).ready(function () {
    class rSlider {
        constructor(args) {
            this.el = document.querySelector(args.element);
            this.min = +this.el.min || 0;
            this.max = +this.el.max || 100;
            this.step = +this.el.step || 1;
            this.tick = args.tick || this.step;
            this.addTicks();
            this.dataRange = document.createElement("div");
            this.dataRange.className = "data-range";
            this.el.parentElement.appendChild(this.dataRange, this.el);
            this.updatePos();
            this.el.addEventListener("input", () => {
                this.updatePos();
            });
        }

        addTicks() {
            let wrap = document.createElement("div");
            wrap.className = "range";
            this.el.parentElement.insertBefore(wrap, this.el);
            wrap.appendChild(this.el);
            let ticks = document.createElement("div");
            ticks.className = "range-ticks";
            wrap.appendChild(ticks);
            for (let t = this.min; t <= this.max; t += this.tick) {
                let tick = document.createElement("span");
                tick.className = "range-tick";
                ticks.appendChild(tick);
                let tickText = document.createElement("span");
                tickText.className = "range-tick-text";
                tick.appendChild(tickText);
                tickText.textContent = t;
            }
        }

        getRangePercent() {
            let max = this.el.max,
                min = this.el.min,
                relativeValue = this.el.value - min,
                ticks = max - min,
                percent = relativeValue / ticks;
            return percent;
        }

        updatePos() {
            let percent = this.getRangePercent(),
                left = percent * 100,
                emAdjust = percent * 3;
            this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;
            // this.dataRange.innerHTML = this.el.value;
        }
    }
});