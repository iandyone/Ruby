$(document).ready(function () {
    $('.catalog__body').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        infinity: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });
});