;(function($){
    $(function(){
        var offset = $('.ba-content').offset().top;
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
            scrollShow();
        });
        $('main').on('click', '.scroll-up', function () {
            $(window).scrollTop(0);
        });


        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            return false;
        });


    });
})(jQuery);