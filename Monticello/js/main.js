;(function ($) {
    $(function () {
        $('.ba-header-slaider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            fade: true
        });

        $('.ba-news-wrapper').slick({
            autoplay: true,
            dots: true,
            initialSlide: 0,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            prevArrow: '.arrowRight',
            nextArrow: '.arrowLeft',
            slide: '.ba-news-block'
        });

        var map,
            pointPin = {lat: 40.706254, lng: -73.9459947},
            pointCenter = {lat: 40.6781784, lng: -73.9441579};

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: pointCenter,
                zoom: 13,
                disableDefaultUI: false,
                scrollwheel: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]


            });
            var image = {
                url: 'img/pin.png'
            };
            var marker = new google.maps.Marker({
                position: pointPin,
                map: map,
                icon: image
            });
        }

        initMap();


        /*---   SCROLL   ---*/

        $('.ba-projects > .ba-projects-city__map').click(function () {
            alert('hello');
        });

        var offset = $('.ba-projects').offset().top;

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

        $('.ba-footer-logo').click(function () {
            $('html, body').animate({
                scrollTop: $('.ba-header').offset().top
            }, 300);
        });
        $('.ba-header-arrow').click(function () {
            $('html, body').animate({
                scrollTop: $('.ba-projects').offset().top
            }, 300);
        });
        $('#project').click(function () {
            $('html, body').animate({
                scrollTop: $('.ba-projects').offset().top
            }, 3000);
        });
        $('#news').click(function () {
            $('html, body').animate({
                scrollTop: $('.ba-news').offset().top
            }, 4000);
        });
        $('#contact').click(function () {
            $('html, body').animate({
                scrollTop: $('.ba-card').offset().top
            }, 5000);
        });
        $('.ba-projects-city__map').change(function () {
            console.log(55);
        });

    });
})(jQuery);
