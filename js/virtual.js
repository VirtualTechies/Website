
/*Main Namespace*/

var virtual = new Object() || {};

virtual = {
	initialize:function(){
		this.initializePlugins();
	},

	initializePlugins:function(){
		/*initializing Slider*/
		$('.owl-carousel').owlCarousel({
			loop       : true,
			nav        : false,
			dots       : false,
			lazyLoad   : true,
			items      : 1,
			pagination :false,

			responsiveClass:true,
			responsive:{
				0:{
				    items:1
				},
				600:{
				    items:1
				},
				1000:{
				    items:1
				}
			}
		});

		$('.button-collapse').sideNav({
			menuWidth    : 300,
			edge         : 'left',
			closeOnClick : true
		});

		$('.dropdown-button').dropdown({
			inDuration: 300,
			outDuration: 225,
			constrain_width: false,
			hover: true,
			gutter: 0,
			belowOrigin: true,
			alignment: 'left'
		});

		$('.parallax').parallax();
	}	
};

(function(){
	virtual.initialize();
})();
