
/*Main Namespace*/

var virtual = new Object() || {};

virtual = {
	
	page : $("body").data("page"),

	initialize:function(){

		this.initializeHeader();
		this.initializeLazyLoad();
		this.initializePlugins();
		this.initializeFooter();
		
		var currentPage = (typeof this.page != "undefined") ? this.page : "home";
		switch(currentPage) {
			case "home":
				this.initializeSlider();
				this.initializeHomePage();
				break;
			case "services":	
				this.initializeSlider();			
				this.initializeServices();
				break;
			case "culture":
				this.initializeCulture();
				break;
			case "approach":
				this.initializeApproach();
				break;
			case "cases":
				this.initializeCases();
				break;
			case "member":
				this.initializeCases();
				break;
			default:
				break;
		}
		this.initializeWow();
	},

	initializeHeader:function(){
		var header = '';
		var mobileheader = '';
		var dds    = '';
	
		header += '<div class="navbar-fixed">';
		header += '<nav id="web-header" class="transparent">';
		header += '<div class="nav-wrapper container">';
		header += '<a href="#" class="brand-logo black-text">';
		header += '<small class="bold cyan-text"><em>Virtual </em><em class="white-text">Techies</em></small>';
		header += '</a>';					
		header += '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars cyan-text"></i></a>';
		header += '<ul id="nav-mobile" class="right hide-on-med-and-down">';

		mobileheader += '<ul class="side-nav" id="mobile-demo">';
		$(headerdata.mainLinks).each(function(h){
			if(headerdata.mainLinks[h].isMain){
				if(!headerdata.mainLinks[h].hasChild){
					header += '<li><a href="'+headerdata.mainLinks[h].link+'">'+headerdata.mainLinks[h].text+'</a></li>';
				}
				else{
					header += '<li><a class="dropdown-button" href="'+headerdata.mainLinks[h].link+'" data-gutter="0" data-inDuration="300" data-outDuration="225" data-constrainWidth="false" data-hover="true" data-beloworigin="true" data-activates="dropdown-'+h+'">'+headerdata.mainLinks[h].text+' <i class="fa fa-caret-down"></i></a></li>';
					dds    += '<ul id="dropdown-'+h+'" class="dropdown-content">';
					$(headerdata.mainLinks[h].childs).each(function(c){
						dds += '<li><a href="'+headerdata.mainLinks[h].childs[c].link+'">'+headerdata.mainLinks[h].childs[c].text+'</a></li>';
					});
					dds += '</ul>';
				}
				mobileheader += '<li><a href="'+headerdata.mainLinks[h].link+'">'+headerdata.mainLinks[h].text+'</a></li>';
			}
		});	
		mobileheader += '</ul>';
		header += '</ul>';
		header += mobileheader;
		header += '</div></nav></div>';	

		$('header').html(header + dds).attr("id","site-navbar").addClass("big");
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

		$(document).scroll(function(){
			if($(this).scrollTop() > 50){
				$("#web-header").addClass("white z-depth-1").removeClass("transparent z-depth-0");
				$("#site-wrapper #site-navbar").removeClass("big");
				$("#site-navbar").find(".hide-on-med-and-down li a").addClass("white-text").removeClass("black-text");
			}
			else{
				$("#web-header").addClass("transparent z-depth-0").removeClass("white z-depth-1");
				$("#site-wrapper #site-navbar").addClass("big");
				$("#site-navbar").find(".hide-on-med-and-down li a").addClass("black-text").removeClass("white-text");
			}
		});
		
	},

	initializeFooter:function(){
		var footer = '';
		footer += '<div class="footer-copyright black-text">';
		footer += '<div class="container">';
		footer += '<div class="row">';
		footer += '<div class="col s12 m6 l6 center-align">';
		footer += '<p class="no-mar">© '+new Date().getFullYear()+' Virtual Techies. All Rights Reserved.</p>';
		footer += '</div>';
		footer += '<div class="col s12 m6 l6 center-align">';
		footer += '<p class="no-mar">Designed & Developed by <a href="http://akkiparekhcv.appspot.com/">Ankit Parekh</a></p>';
		footer += '</div></div></div></div>';

		if($('footer').length){
			if(!$('.footer-copyright').length){
				$('footer').append(footer);
			}
		}
	},

	initializeLazyLoad : function(){
		$("img.lazy, img , .image").lazyload({
			effect    : "fadeIn",
			threshold : 200
		});
	},

	initializePlugins : function(){		
		$(".btn").addClass("waves-effect waves-light z-depth-3");
		$(".btn.cyan").removeClass("cyan").addClass("site-bg");
		this.initializeWow();
	},

	initializeHomePage : function() {

		var virtual = this;
		var isMobile = virtual.detectDevice();

		var features = '<div class="container">';
		$(homedata.introFeatures).each(function(f){
			features += '<div class="row '+(f==0 ? '' : 'top')+'">';
			if(isMobile ||  f % 2 == 0){
				var alignment = isMobile ? "center-align wow slideIn" : "right-align wow slideInRight";
				features += '<div class="col s12 m6 l6">';
				features += '<img data-original="'+homedata.introFeatures[f].imgPath+'" class="wow slideInLeft lazy responsive-img">';
				features += '</div>';
				features += '<div class="col s12 m6 l6 '+alignment+'">';
				features += homedata.introFeatures[f].featureText;
				features += homedata.introFeatures[f].featuredesc;
				features += '</div>';
			}
			else{
				features += '<div class="col s12 m6 l6 left-align wow slideInLeft">';
				features += homedata.introFeatures[f].featureText;
				features += homedata.introFeatures[f].featuredesc;
				features += '</div>';
				features += '<div class="col s12 m6 l6">';
				features += '<img data-original="'+homedata.introFeatures[f].imgPath+'" class="lazy responsive-img">';
				features += '</div>';
			}	
			features += '</div>';
		});
		features += '</div>';
		$("#introFeatures").html(features);

		$("#connect .card-panel").hover(function(){
			$(this).toggleClass("transparent no-shadow cyan-text site-bg hoverable white-text z-depth-5");
		},function(){
			$(this).toggleClass("transparent no-shadow cyan-text site-bg hoverable white-text z-depth-5");
		});
		virtual.initializeWow();
		virtual.initializeLazyLoad();
	},

	initializeCulture : function() {
		var team = '';

		$(teamdata.culturedata).each(function(c){
			team += '<div class="col s6 m3 l3">';
			team += '<div class="card-panel transparent black-text no-shadow"><p>';
			team += '<img class="responsive-img lazy" data-original="'+teamdata.culturedata[c].imgPath+'"><br>';
			team += '<span class="truncate flow-text">'+teamdata.culturedata[c].name+'</span>';
			team += '<span class="">'+teamdata.culturedata[c].role+'</span>';
			team += '</p>';
			team += '</div></div>';
		});		
		$("#teamrow").html(team);
		this.initializeLazyLoad();

		$("#goToTribe").on("click",function(){
			$('html, body').animate({
				scrollTop: $("#tribeMembers").offset().top
			}, 2000);
		});

		$("#teamrow .card-panel").css("cursor","pointer").hover(function(){
			$(this).addClass("z-depth-3 white-text site-bg");
			$(this).removeClass("transparent no-shadow black-text");			
		},function(){
			$(this).removeClass("z-depth-3 white-text site-bg");
			$(this).addClass("transparent no-shadow black-text");
		});
	},

	initializeApproach: function() {
		var approachLines= '';
			approachLines += '<ul>';
		$(approachData.process).each(function(p){
			approachLines += '<li>';
			approachLines += '<span class="number">'+(p+1)+'</span>';
			approachLines += '<div class="step '+(p % 2 == 0 ? "" : "invert")+'">';
			approachLines += '<div class="card no-shadow white valign-wrapper">';
			if(p % 2 != 0) {
				approachLines += '<h3>'+approachData.process[p].name+'</h3>';
			}
			approachLines += '<div class="front">';
			approachLines += '<i class="fa fa-5x cyan-text valign '+approachData.process[p].icon+'"></i>';
			approachLines += '</div>';
			approachLines += '<div class="back">';
			approachLines += '<p>'+approachData.process[p].desc+'</p>';
			approachLines += '</div>';
			approachLines += '</div>';
			if(p % 2 == 0) {
				approachLines += '<h3>'+approachData.process[p].name+'</h3>';
			}
			approachLines += '</div>';
			approachLines += '</li>';
		});		
		approachLines += '</ul>';
		$("#approachLines").html(approachLines);

		var techs = '';
		$(approachData.technologies).each(function(t){
			techs += '<div class="col s4 m2 l2">';
			techs += '<div class="no-pad card-panel transparent no-shadow hoverable white-text">';
			techs += '<img data-original="'+approachData.technologies[t].imgPath+'" class="lazy respoonsive-img">';
			techs += '<p class="no-mar flow-text">'+approachData.technologies[t].name+'</p></div>';
			techs += '</div>';
		});
		$("#technologies #techs").html(techs);
		this.initializeLazyLoad();

		$("#technologies #techs .card-panel")
		.css("transition","all .2s ease-in-out")
		.hover(function(){
			$(this).toggleClass("no-shadow z-depth-5").css("transform","scale(1.1)");		
		},function(){
			$(this).toggleClass("no-shadow z-depth-5").css("transform","scale(1)");	
		});

		var chooselines = '';
		chooselines += '<div class="row">';
		$(approachData.choose).each(function(c){
			chooselines += '<div class="col s12 m4 l4 center-align">';
			chooselines += '<div class="card-panel transparent no-shadow cyan-text hoverable">';
			chooselines += '<i class="fa fa-5x valign '+approachData.choose[c].icon+'"></i>';
			chooselines += '<h3 class="flow-text">'+approachData.choose[c].heading+'</h3>';
			chooselines += '<p>'+approachData.choose[c].desc+'</p>';
			chooselines += '</div></div>';
		});
		chooselines += '</div>';
		$("#chooseSection").html(chooselines);

		$("#chooseSection .card-panel").hover(function(){
			$(this).toggleClass("transparent no-shadow site-bg cyan-text white-text z-depth-5");		
		},function(){
			$(this).toggleClass("transparent no-shadow site-bg cyan-text white-text z-depth-5");	
		});

		$("#goToApproach").on("click",function(){
			$('html, body').animate({
				scrollTop: ($("#approachLines").offset().top - 100)
			}, 2000);
		});

		$(".tags").typed({
            strings: ["Business owners with big dreams.","Bringing ideas to life.","Owners who want to work within a budget.","Cutting edge technology & marketing.","Taking your business to the next level.","Happy customers.","Results!"],
            typeSpeed: 30,
            backSpeed: 0,
            startDelay: 0,
            backDelay: 700,
            randomize: 100,
            cursorChar: '|',
            showCursor:true,
            loop:true,
            contentType: 'text', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ 
				// Uncomment these lines to make the cursor disappear after 2s. (2000 -> 2 s) 
				// setTimeout(function(){
				// jQuery(".typed-cursor").hide(); 
				// }, 2000);
			},
            resetCallback: function() { newTyped(); }
        });

        $(window).on('scroll', function(){
			$(".cd-timeline-block").each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});

        var carousel = $('.owl-carousel');
		/*initializing Slider*/
		carousel.owlCarousel({
			loop: true,
			center: true,
			items: 1,
			nav : false,
			dots : false,
			autoplayHoverPause: true,
			animateOut: 'slideOutUp',
			animateIn: 'slideInUp',
			lazyLoad   : true
		});

		$(".controls li").on("click", function(){
			var index = $(this).index();
			carousel.trigger("to.owl.carousel", [index, 500, true]);
			$(this).find("i").addClass("fa-circle").removeClass("fa-circle-o");
			$(this).siblings().find("i").addClass("fa-circle-o").removeClass("fa-circle");
		});

		$(".numbering .card").hover(function(){
			$(this).toggleClass("flip no-shadow z-depth-5");		
		},function(){
			$(this).toggleClass("flip no-shadow z-depth-5");	
		});
	},

	initializeCases: function() {

	},

	initializeServices:function() {
		var virtual = this;
		var isMobile = virtual.detectDevice();
		var service = '';
		$(serviceData.services).each(function(f){
			service += '<div class="site-pad--sm"></div>';
			service += '<div class="row valign-wrapper '+(f==0 ? '' : 'top')+'">';
			if(isMobile ||  f % 2 == 0){
				var alignment = isMobile ? "center-align wow slideIn" : "valign right-align wow slideInRight";
				service += '<div class="col s12 m6 l6">';
				service += '<img data-original="'+serviceData.services[f].img+'" class="wow slideInLeft lazy responsive-img">';
				service += '</div>';
				service += '<div class="col s12 m6 l6'+alignment+'">';
				service += serviceData.services[f].heading;
				service += serviceData.services[f].desc;
				service += '</div>';
			}
			else{
				service += '<div class="col s12 m6 l6 valign left-align wow slideInLeft">';
				service += serviceData.services[f].heading;
				service += serviceData.services[f].desc;
				service += '</div>';
				service += '<div class="col s12 m6 l6">';
				service += '<img data-original="'+serviceData.services[f].img+'" class="lazy responsive-img">';
				service += '</div>';
			}	
			service += '</div>';
			service += '<div class="site-pad--sm"></div>';
		});
		$("#servicesSection").html(service);
		virtual.initializeWow();
		virtual.initializeLazyLoad();
	},

	detectDevice:function(){
		var isMobile = false;
		var md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile()) {
			isMobile = true;
		}
		return isMobile;
	},

	initializeSlider:function() {

		var virtual = this;
		var isMobile = virtual.detectDevice();
		/*initializing Slider*/
		$('.owl-carousel').owlCarousel({
			loop       : true,
			nav        : false,
			dots       : false,
			lazyLoad   : true,
			items      : 1,
			pagination : false,
			autoplay   : true,
			autoplayHoverPause: true,

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

		if(isMobile){
			$('.owl-carousel .slider-title h3').addClass("flow-text").css("margin-top","60%");
			$("#weDoSec").css("top","-45px").css("z-index" ,"1");
		}

		$('.parallax').parallax();
	},

	initializeWow : function(){		
		$(".wow").attr("data-wow-duration","2s").attr("data-wow-delay","1s");
		wow = new WOW();
		wow.init();
	}
};

$(function(){
	virtual.initialize();
});
