;(function($){
    $(function(){
        $('.tabs__link li').click(function () {
            if(!$(this).hasClass(".active"))
                var i = $(this).index();
            $('.tabs__link li.active').removeClass('active');
            $('.tabs__content').hide().removeClass('active');
            $(this).addClass('active');
            $($('.ba-tabN').children('.tabs__content')[i]).fadeIn(1000).addClass('active');

       });
    });
})(jQuery);