$(document).ready(function () {
    $('.catalog__body').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1300,
        autoplaySpeed: 5000,
        infinity: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    speed: 1000,
                    waitForAnimate: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.feedback__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1300,
        autoplaySpeed: 5000,
        infinity: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    speed: 1000,
                    waitForAnimate: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});