/**
* The first js file to be loaded.
* Takes care of setting up all the required paths
*/

// Configure Require Js
requirejs.config({
    baseUrl: 'js',
    paths: {
        waitSeconds: 1,
        jquery: [
            'jquery-2.1.1.min'
        ],
        data          : 'data',
        site          : 'virtual',
        lazy          : 'jquery.lazyload.min',
        backbone      : 'libs/backbone/backbone',
        underscore    : 'libs/backbone/underscore.min',
        materialize   : 'libs/materialize/js/materialize.min',
        owlCarousel   : 'libs/owl-carousel/owl.carousel.min',
        mobileDetect  : 'libs/mobile-detect/mobile-detect.min',
        template      : 'libs/template/template'
    }
}); 
