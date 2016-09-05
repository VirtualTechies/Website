
/*Main Namespace*/

var virtualService = new Object() || {};

virtualService = {
	
	page : $("body").data("page"),

	initialize:function(){

		this.initializeHeader();
		if(typeof this.page != "undefined") {			
			if(this.page == "service"){
				this.initializeLayout();
			}
			else if(this.page == "sitemap"){
				this.initializeSitemap();
				this.initializeServicePageLinks();
			}
		}
		this.initializeLazyLoad();
		this.initializePlugins();
		this.initializeFooter();
		this.initializeWow();
	},

	initializeHeader:function(){
		
		var virtual = this;
		var isMobile = virtual.detectDevice();

		var header = '';
		var mobileheader = '';
		var dds    = '';
	
		header += '<div class="navbar-fixed">';
		header += '<nav id="web-header" class="transparent">';
		header += '<div class="nav-wrapper container">';
		header += '<a href="index.html" class="brand-logo black-text">';
		header += '<small class="bold cyan-text"><em>Virtual </em><em class="white-text">Techies</em></small>';
		header += '</a>';					
		header += '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars cyan-text"></i></a>';
		header += '<ul id="nav-mobile" class="right hide-on-med-and-down">';

		mobileheader += '<ul class="side-nav" id="mobile-demo">';

		mobileheader += '<li><div class="grey lighten-4 logoView">';
        mobileheader += '<a id="mobile-logo" href="index.html"><img class="responsive-img" src="img/vtlogonew.png"></a>';
        mobileheader += '</div></li>';
		
		$(headerdata.mainLinks).each(function(h){
			if(headerdata.mainLinks[h].isMain){
				if(!headerdata.mainLinks[h].hasChild){
					header += '<li><a href="'+headerdata.mainLinks[h].link+'">'+headerdata.mainLinks[h].text+'</a></li>';
					mobileheader += '<li><div class="divider"></div></li>';
				mobileheader += '<li><a href="'+headerdata.mainLinks[h].link+'">'+headerdata.mainLinks[h].text+'</a></li>';
				}
				else{
					header += '<li><a class="dropdown-button" href="'+headerdata.mainLinks[h].link+'" data-gutter="0" data-inDuration="300" data-outDuration="225" data-constrainWidth="false" data-hover="true" data-beloworigin="true" data-activates="dropdown-'+h+'">'+headerdata.mainLinks[h].text+' <i class="fa fa-caret-down"></i></a></li>';
					dds    += '<ul id="dropdown-'+h+'" class="dropdown-content">';
					mobileheader += '<li class="no-padding"><ul class="collapsible collapsible-accordion"><li>';
            		mobileheader += '<a class="collapsible-header">'+ headerdata.mainLinks[h].text+' <i class="fa fa-caret-down right"></i></a>';
		            mobileheader += '<div class="collapsible-body"><ul>';          	
					$(headerdata.mainLinks[h].childs).each(function(c){
						dds += '<li><a href="'+headerdata.mainLinks[h].childs[c].link+'">'+headerdata.mainLinks[h].childs[c].text+'</a></li>';
						mobileheader += '<li><a href="'+headerdata.mainLinks[h].childs[c].link+'">'+headerdata.mainLinks[h].childs[c].text+'</a></li>';
					});
					mobileheader += '</ul></div></li></ul></li>';
					dds += '</ul>';
				}				
			}
		});	
		mobileheader += '<li><div class="divider"></div></li><li id="startAProjectBtn"><a class="btn cyan white-text" href="startAProject.html">Start a Project</a></li>';
		header 		 += '<li id="startAProjectBtn"><a class="btn cyan white-text" href="startAProject.html">Start a Project</a></li>';

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
			gutter: 100,
			belowOrigin: true,
			alignment: 'left'
		});
		$('.collapsible').collapsible();

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
		this.deleteAfterUse([isMobile, header, mobileheader, dds]);
	},

	initializeFooter:function(){
		var virtual = this,
			footer = '';
			footer += '<div class="container">';
				
			footer += '<div class="row"><div class="col s12 m4 l4 left-align white-text">';
			footer += '<p class="flow-text bold"><em><span class="cyan-text">Virtual</span> Techies</em></p>';
			footer += '<p>We bring your products or services across in ways that make people feel good as they engage with your business. We firmly believe that making your people happy is not about U or about Us; it"s all about UX.</p>';
			footer += '<p class="">STAY CONNECTED<br>Top design, tech and startup resources...</p>';
			footer += '<form class="row"><div class="input-field col s10 no-mar">';
			footer += '<input placeholder="Your email address" id="subscribe" type="text" class="validate"></div>';
			footer += '<div class="input-field col s2 no-mar">';
			footer += '<a id="subscribebtn" class="btn transparent-white-btn"><i class="fa fa-long-arrow-right"></i></a>';
			footer += '</div></form></div>';

			footer += '<div class="col s12 m3 l3 left-align white-text"><p class="flow-text bold padL20">Services</p>';
			footer += '<ul class="padL20" style="margin:0;">';
			footer += '<li><a data-serviceClicked="website" href="service.html" class="gotoService" href="service.html">Website Development</a></li>';
			footer += '<li><a data-serviceClicked="app" href="service.html" class="gotoService" href="service.html">App Development</a></li>';
			footer += '<li><a data-serviceClicked="ecommerce" href="service.html" class="gotoService" href="service.html">Ecommerce Development</a></li>';
			footer += '<li><a data-serviceClicked="webApp" href="service.html" class="gotoService" href="service.html">Web Application Development</a></li>';
			footer += '<li><a data-serviceClicked="design" href="service.html" class="gotoService" href="service.html">Design And User experience</a></li>';
			footer += '<li><a data-serviceClicked="logoDesign" href="service.html" class="gotoService" href="service.html">Logo Design</a></li>';
			footer += '<li><a data-serviceClicked="logoDesign" href="service.html" class="gotoService" href="service.html">Graphic Design</a></li>';
			footer += '<li><a data-serviceClicked="startup" href="service.html" class="gotoService" href="service.html">App Ideas</a></li>';
			footer += '<li><a data-serviceClicked="virtual" href="service.html" class="gotoService" href="service.html">Virtual reality Apps</a></li>';
			footer += '<li><a data-serviceClicked="digital" href="service.html" class="gotoService" href="service.html">Digital Makerting</a></li>';
			footer += '</ul></div>';

			footer += '<div class="col s12 m2 l2 left-align white-text"><p class="flow-text bold padL20">Navigate</p>';
			footer += '<ul class="padL20" style="margin: 0;">';
			footer += '<li><a href="index.html">Home</a></li>';
			footer += '<li><a href="culture.html">Culture</a></li>';
			footer += '<li><a href="approach.html">Approach</a></li>';
			footer += '<li><a href="cases.html">Portfolio</a></li>';
			footer += '<li><a href="services.html">Services</a></li>';
			footer += '<li><a href="team.html">Team</a></li>';
			footer += '<li><a href="index.html">Careers</a></li>';
			footer += '<li><a href="contact.html">Contact Us</a></li>';
			footer += '</ul></div>';

			footer += '<div class="col s12 m3 l3 left-align white-text"><p class="flow-text bold padL20">Reach Us</p>';
			footer += '<p class="row valign-wrapper padL20">';
			footer += '<span class="col s2"><i class="fa fa-mobile fa-3x valign"></i></span>';
			footer += '<span class="col s10">';
			footer += '<a href="tel:992035332" class="white-text">+91 992035332</a><br>';
			footer += '<a href="tel:992035332" class="white-text">+91 992035332</a>';
			footer += '</span></p>';
			footer += '<p class="row valign-wrapper padL20">';
			footer += '<span class="col s2"><i class="fa fa-envelope fa-lg valign"></i> </span>';
			footer += '<span class="col s10">';
			footer += '<a class="white-text" href="mailto:info@thevirtualtechies.com"> info@thevirtualtechies.com</a><br>';
			footer += '<a class="white-text" href="mailto:support@thevirtualtechies.com"> support@thevirtualtechies.com</a></span></p>';
			footer += '<p class="row valign-wrapper padL20">';
			footer += '<span class="col s2"><i class="fa fa-map-marker fa-2x valign"></i></span>';
			footer += '<span class="col s10">Mira-road, Thane<br>Mumbai - 401107<br>India</span></p></div></div>';
			footer += '<div style="margin:2rem 0" class="divider grey darken-3"></div>';
			footer += '<div class="row"><div class="col s12 m5 l5 left-align white-text">';
			footer += '© '+new Date().getFullYear()+' Virtual Techies. All Rights Reserved.</div>';
			footer += '<div class="col s12 m3 l3 white-text"><a href="terms.html"> Privacy Policy</a> | <a href="sitemap.html">Site Map</a></div>';
			footer += '<div class="col s12 m4 l4 right-align white-text">';
			footer += 'Designed &amp; Developed by <a href="http://akkiparekhcv.appspot.com/">Ankit Parekh</a>';
			footer += '</div></div></div>';

		if($('footer.footer').length){
			$('footer.footer').html(footer);
			virtual.initializeServicePageLinks();
		}
	},

	initializeLazyLoad : function(){
		$(window).lazyLoadXT();
		$("img.lazy, img , .image").lazyLoadXT();
	},

	initializePlugins : function(){
		$(".btn").addClass("waves-effect waves-light z-depth-3");
		$(".btn.cyan").removeClass("cyan").addClass("site-bg");
		this.initializeWow();
	},

	initializeLayout:function() {
		var virtual 		= this,
			isMobile 		= virtual.detectDevice(),
			serviceClicked  = localStorage.getItem("serviceClicked"),
			serviceTemplate = '';

		if(typeof serviceClicked !== "undefined") {
			$(serviceData.services).each(function(servickIndex, servick){
				if(servick.storageServiceName == serviceClicked){
					// slider section
					$("#serviceName").html(servick.serviceName);
					$("#serviceTagLine").html(servick.serviceTagLine);
					$(".first-sec-site.service").css("background-image","linear-gradient(rgba(0, 0, 0, 0.49),rgba(0, 0, 0, 0.86)), url('"+servick.mainImagePath+"')");
					
					//sections
					if(servick.showServiceSection) {
						$("#serviceSections .row:first-child h4").html(servick.serviceSectionHeading);
						$("#serviceSections .row:first-child p").html(servick.serviceSectionTagLine);
						var serviceSectionsTemplate = '';
						var serviceAlignment = "";
						$(servick.serviceSections).each(function(f){
							if(isMobile ||  f % 2 == 0){
								serviceAlignment = isMobile ? "center-align wow slideIn" : "right-align wow slideInRight";
								serviceSectionsTemplate += '<div class="equal-pad--sm"></div>';
								serviceSectionsTemplate += '<div class="row">';
								serviceSectionsTemplate += '<div class="col s12 m6 l6 center-align"><img class="block-center vertical-center lazy responsive-img" data-src="'+servick.serviceSections[f].sectionImg+'"></div>';
								serviceSectionsTemplate += '<div class="col s12 m6 l6 '+serviceAlignment+'"><p class="vertical-center">'+servick.serviceSections[f].sectionDesc+'</p></div>';								
								serviceSectionsTemplate += '</div><div class="equal-pad--sm"></div>';
							}
							else{
								serviceSectionsTemplate += '<div class="equal-pad--sm"></div>';
								serviceSectionsTemplate += '<div class="row">';
								serviceSectionsTemplate += '<div class="col s12 m6 l6 left-align wow slideInLeft"><p class="vertical-center">'+servick.serviceSections[f].sectionDesc+'</p></div>';								
								serviceSectionsTemplate += '<div class="col s12 m6 l6 center-align"><img class="block-center vertical-center lazy responsive-img" data-src="'+servick.serviceSections[f].sectionImg+'"></div>';								
								serviceSectionsTemplate += '</div><div class="equal-pad--sm"></div>';
							}
						});
						$("#serviceSectionsTemplate").html(serviceSectionsTemplate);
					}
					else{
						$("#serviceSections").addClass("hide");
					}

					//works
					if(servick.showWorksSection) {
						var worksTemplate = '';
						var alignment = "";
					
						$(servick.works).each(function(s){
							worksTemplate += '<div class="equal-pad--sm"></div><div class="row">';
							if(isMobile ||  s % 2 == 0){	
								alignment = isMobile ? "center-align wow slideIn" : "right-align wow slideInRight";							
								worksTemplate += '<div class="col s12 m5 l5"><div class="workImage vertical-center" style="background-image:url('+servick.works[s].workImg+')"></div></div>';
								worksTemplate += '<div class="col s12 offset-m1 offset-l1 m6 l6 '+alignment+'">'
											   + '<p class="flow-text bold no-mar">'+servick.works[s].workName+'</p>'
											   + '<p class="no-mar">'+servick.works[s].workdesc+'</p>'
											   + '<div class="row no-mar">'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Platform</p><p class="no-mar">'+servick.works[s].platforms.join(" ")+'</p></div>'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Development</p><p class="no-mar">'+servick.works[s].TimeTaken+'</p></div></div>'
											   + '<div class="row">'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Services</p><p class="no-mar">'+servick.works[s].servicesGiven.join(" ")+'</p></div>'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Focus</p><p class="no-mar">'+servick.works[s].Focus.join(" ")+'</p></div></div>'
											   + '<div class="row no-mar"><div class="col s6"></div><a target="_blank" href="'+servick.works[s].link+'" class="btn cyan">Check It Out</div>'
											   + '</div>';
							}
							else{							
								worksTemplate += '<div class="col s12 offset-m1 offset-l1 m6 l6 '+alignment+'">'
											   + '<p class="flow-text bold no-mar">'+servick.works[s].workName+'</p>'
											   + '<p class="no-mar">'+servick.works[s].workdesc+'</p>'
											   + '<div class="row">'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Platform</p><p class="no-mar">'+servick.works[s].platforms.join(" ")+'</p></div>'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Development</p><p class="no-mar">'+servick.works[s].TimeTaken+'</p></div></div>'
											   + '<div class="row">'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Services</p><p class="no-mar">'+servick.works[s].servicesGiven.join(" ")+'</p></div>'
											   + '<div class="col s6"><p class="no-mar cyan-text bold">Focus</p><p class="no-mar">'+servick.works[s].Focus.join(" ")+'</p></div></div>'
											   + '<div class="row"><div class="col s6"></div><a target="_blank" href="'+servick.works[s].link+'" class="btn cyan">Check It Out</div>'
											   + '</div>';
								worksTemplate += '<div class="col s12 m5 l5"><div class="workImage vertical-center" style="background-image:url('+servick.works[s].workImg+')"></div></div>';
							}
							worksTemplate += '</div><div class="equal-pad--sm"></div>';
						});		
						$("#worksTemplate").html(worksTemplate);
					}
					else{
						$("#worksSection, #otherWorksSection").addClass("hide");
					}

					if(servick.showPoliciesSection) {
						var pricingTemplate = '';
						var isAciveClass = "";
						$(servick.pricingPolicies).each(function(p){
							pricingTemplate += '<div class="col s12 m4 l4">';
							isAciveClass    =  (servick.pricingPolicies[p].active) ? "site-bg" : "white";
							pricingTemplate += '<div class="center-align card-panel z-depth-3 '+isAciveClass+'">';
							pricingTemplate += '<p class="black-text">'+servick.pricingPolicies[p].policyName+'</p>';
							pricingTemplate += '<div class="valign-wrapper center-align"><h3 class="width100 black-text">'+servick.pricingPolicies[p].policyPrice+'</h3></div>';
							pricingTemplate += '<ul>';
							$(servick.pricingPolicies[p].policyText).each(function(pt){
								pricingTemplate += '<li><div style="width:65%" class="center-block divider"></div><p>'+servick.pricingPolicies[p].policyText[pt]+'</p><li>';
							});
							pricingTemplate += '</ul>';
							pricingTemplate += '<p><a href="startAProject.html" class="btn site-bg white-text">Request quote</a></p>';
							pricingTemplate += '</div></div>';
						}); 

						$("#pricingTemplate").html(pricingTemplate);
						$("#pricingTemplate .transparent h3, #pricingTemplate .transparent li p").addClass("black-text");
						$("#pricingTemplate .site-bg h3, #pricingTemplate .site-bg p, #pricingTemplate .site-bg li p").addClass("white-text").removeClass("cyan-text");
						$("#pricingTemplate .site-bg a.btn").addClass("white cyan-text").removeClass("site-bg white-text");
						
						$("#pricingTemplate .card-panel").hover(function(){
							$(this).addClass("site-bg").removeClass("white");
							$(this).find("p, h3, li p").addClass("white-text").removeClass("black-text");
							$(this).find("a.btn").addClass("white cyan-text").removeClass("site-bg white-text");
							$("#pricingTemplate .card-panel").not($(this)).addClass("white").removeClass("site-bg");
							$("#pricingTemplate .card-panel").not($(this)).find("p, h3, li p").addClass("black-text").removeClass("white-text");
							$("#pricingTemplate .card-panel").not($(this)) .find("a.btn").addClass("site-bg white-text").removeClass("white cyan-text");
						});
						$("#pricingQuote").addClass("hide");
					}
					else{
						$("#pricingTemplate").addClass("hide");
						$("#pricingQuote").removeClass("hide");
					}

					if(servick.showFAQsection) {
						var FAQTemplate = '<div class="col s12 m6 l6"><div class="card-panel transparent no-shadow"><p class="bold flow-text cyan-text"><i class="fa left icon"></i> question</p><p>answer</p></div></div>';
						virtual.createHtmlTemplates($("#FAQTemplate"), FAQTemplate, servick.FAQS);	
					}
					else{
						$("#FAQSection").addClass("hide");
					}
					
					if(!isMobile){
						$(".vertical-center").addClass("valign");
						$(".vertical-center").parent(".col").parent(".row").addClass("valign-wrapper");
					}
					virtual.initializeWow();
					virtual.initializeLazyLoad();
					virtual.initializeMobilePadding();
					return false;
				}
			});
		}
		else {
			window.location = window.location.hostname + "/contact.html";
		}		
	},

	initializeSitemap:function() {
		$("#goToSitemap").on("click",function(){
			$('html, body').animate({
				scrollTop: $("#sitemapSection").offset().top
			}, 2000);
		});
		$("#sitemapSection p").addClass("no-mar");		
		if(this.detectDevice()){
			$("#sitemapSection #links #MainLinks, #sitemapSection #links #AboutLinks").wrapAll("<div class='row'></div>");
			$("#sitemapSection #links #TeamLinks, #sitemapSection #links #ServicesLinks").wrapAll("<div class='row'></div>");
		}
		else{
			$("#sitemapSection #links").addClass("row");
		}
		$("#sitemapSection a").each(function(){
			$(this).attr("data-position","right").attr("data-delay",50).attr("data-tooltip",$(this).text()).tooltip();
		});					  
	},

	detectDevice:function(){
		var isMobile = false;
		var md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile()) {
			isMobile = true;
		}
		return isMobile;
	},

	initializeWow : function(){
		$(".wow").attr("data-wow-duration","1s").attr("data-wow-delay","1s");
		wow = new WOW();
		wow.init();
	},

	createHtmlTemplates:function(templateContainer, template, collection) {
		var htmlString     = 					  new String || "";
		var htmlcontainer  = templateContainer || new Object || {};
		var htmltemplate   = template 		   || new String || "";
		var iteratee	   = collection        || new Array  || [];
		var replaceAll = function(str, find, replace) {
			return str.replace(new RegExp(find, 'g'), replace);
		};	

		$(iteratee).each(function(c){
			htmlString +=  function(template){
				for(var propertyName in iteratee[c]) {
					template = replaceAll(template, propertyName, iteratee[c][propertyName]);
				}
				return template;
			}(htmltemplate); 
		});
		htmlcontainer.html(htmlString);
		this.deleteAfterUse([htmlString, htmlcontainer, htmltemplate, iteratee]);
	},

	initializeMobilePadding: function(){
		if(this.detectDevice()){
			var pads = $(".equal-pad--sm");
			$(pads).each(function(padIndex, pad){
				$(pad).addClass("equal-pad--xs").removeClass("equal-pad--sm");
			});	
			this.deleteAfterUse(pads);		
		}
	},

	initializeServicePageLinks: function(){
		$(".gotoService").on("click", function() {			
			if(typeof $(this).attr("data-serviceClicked") !== "undefined") {	
				localStorage.setItem("serviceClicked", $(this).attr("data-serviceClicked"));
			}
			else{
				window.location = window.location.hostname + "/startAProject.html";
			}			
		});
	},

	deleteAfterUse: function(params){
		if(typeof params == Array) {
			$(params).each(function(paramsIndex, param){
				delete param;
			});
		}
		else if(typeof params == Object) {
			params = {};
			delete params;
		}
		else {
			delete params;
		}
	}
};	

$(function(){
	virtualService.initialize();
});