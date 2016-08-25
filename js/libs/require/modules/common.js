/**
* The first js file to be loaded.
* Takes care of setting up all the required paths
*/

// Configure Require Js
requirejs.config({
    baseUrl: 'assets',
    paths: {
        waitSeconds: 1,

        jQuery       : 'jquery-2.1.1.min',
        homeProd     : 'home.min',
        siteProd     : 'site.min',
        cultureProd  : 'site.min',
        hammerJs     : '../js/libs/hammer/hammerjs',
        velocity     : '../js/libs/hammer/velocity',
    },
    shim:{
        'homeProd':{
            deps: ['hammerJs', 'velocity']
        }
    }
}); 
