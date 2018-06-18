;(function($){
    $(function(){
        $('.ba-section').slick({
            dots: true,
            speed: 300,
            slidesToShow: 1,
            prevArrow: '.arrowRight',
            nextArrow: '.arrowLeft',
            slide: '.ba-slider',
            infinite: true,
            fade: true
        });
        $('.click-me').on('mousedown', function () {
            $('div.ba-logo').css('color', '#EE9635');
        });
        $('.click-a').on('mousedown', function () {
            $('div.ba-logo').css('text-shadow', '1px 1px 3px white, 0 0 1em red');
        });
        $('.click-s').on('mousedown', function () {
            $('div.ba-logo').css('font-size', '42px');
        });
        $('.click-W').on('mousedown', function () {
            $('div.ba-logo').css('font-size', '36px');
            $('div.ba-logo').css('color', '#FFFFFF');

        });
    });
})(jQuery);
