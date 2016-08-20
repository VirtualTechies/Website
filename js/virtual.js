
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
			case "services":
				this.initializeHomePage();
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
			default:
				break;
		}
	},

	initializeHeader:function(){
		var header = '';
		var mobileheader = '';
		var dds    = '';
		
		header += '<nav class="white">';
		header += '<div class="nav-wrapper container">';
		header += '<a href="#" class="brand-logo black-text">';
		header += '<img src="img/logo.png" class="respoonsive-img">';
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
		header += '</div></nav>';	

		$('header').html(header + dds);
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
	},

	initializeHomePage : function() {

		var virtual = this;
		var isMobile = virtual.detectDevice();
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
		$('.parallax').parallax();

		var features = '<div class="container">';
		$(homedata.introFeatures).each(function(f){
			features += '<div class="row '+(f==0 ? '' : 'top')+'">';
			if(isMobile ||  f % 2 == 0){
				features += '<div class="col s12 m6 l6">';
				features += '<img data-original="'+homedata.introFeatures[f].imgPath+'" class="lazy responsive-img">';
				features += '</div>';
				features += '<div class="col s12 m6 l6">';
				features += homedata.introFeatures[f].featureText;
				features += homedata.introFeatures[f].featuredesc;
				features += '</div>';
			}
			else{
				features += '<div class="col s12 m6 l6">';
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
		virtual.initializeLazyLoad();
	},

	initializeCulture : function() {
		var team = '';

		$(teamdata.culturedata).each(function(c){
			team += '<div class="col s6 m3 l3"><p>';
			team += '<img class="responsive-img lazy" data-original="'+teamdata.culturedata[c].imgPath+'"><br>';
			team += '<span class="flow-text cyan-text">'+teamdata.culturedata[c].name+'</span><br>';
			team += '<span class="grey-text">'+teamdata.culturedata[c].role+'</span><br>';
			team += '</p></div>';
		});		
		$("#teamrow").html(team);
		this.initializeLazyLoad();
	},

	initializeApproach: function() {
		var approachLines= '';

		$(approachData.process).each(function(p){
			approachLines += '<div class="row top">';
			approachLines += '<div class="col s12 m4 l4 left-align">';
			approachLines += '<h1 class="c-intro__heading--sm cyan-text">'+approachData.process[p].name+' "</h1>';
			approachLines += '</div>';
			approachLines += '<div class="col s12 m8 l8 right-align">';
			approachLines += '<p class="black-text">'+approachData.process[p].desc+'</p>';
			approachLines += '</div></div>';
		});		
		$("#approachLines .container").html(approachLines);

		var techs = '';
		$(approachData.technologies).each(function(t){
			techs += '<div class="col s4 m2 l2">';
			techs += '<img data-original="'+approachData.technologies[t].imgPath+'" class="lazy respoonsive-img">';
			techs += '<p class="white-text flow-text">'+approachData.technologies[t].name+'</p></div>';
		});
		$("#technologies #techs").html(techs);
		this.initializeLazyLoad();
	},

	initializeCases: function() {

	},

	detectDevice:function(){
		var isMobile = false;
		var md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile()) {
			isMobile = true;
		}
		return isMobile;
	}
};

$(function(){
	virtual.initialize();
});
