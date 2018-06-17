;(function($){
    $(function(){
        /*$('.our-slider').slick({
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            //fade: true,
            slidesToShow: 3
        });*/
        "use strict";
        $('.ba-section').slick({
            dots: false,
            initialSlide: 0,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            prevArrow: '.arrowRight',
            nextArrow: '.arrowLeft',
            slide: '.ba-slider'

        });

        /*---   SCROLL   ---*/

        var offset = $('.ba-header h1').offset().top;
        console.log(offset);

        function scrollShow() {
            if ($(window).scrollTop() >= offset) {
                $('.scroll-up').show(300);
            } else {
                $('.scroll-up').hide(300);
            }
        }

        scrollShow();
        $(window).on('scroll', function () {
            // console.log($(window).scrollTop());
            scrollShow();
        });
        $('main').on('click', '.scroll-up', function () {
            $(window).scrollTop(0);
        });

    });
})(jQuery);
