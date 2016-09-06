
/*Main Namespace*/

var virtual = new Object() || {};

virtual = {
	
	page : $("body").attr("data-page"),

	initialize:function(){

		this.initializeHeader();
		this.initializePlugins();
		this.initializeLazyLoad();
		
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
			case "team":
				this.initializeMember();
				break;
			case "contact":
				this.initializeContact();
				break;
			case "startAProject":
				this.initializeStartAProject();
				break;
			case "terms":
				this.initializeTerms();
				break;
			default:
				break;
		}
		this.initializeFooter();
		this.initializeWow();
		if(!this.detectDevice()){
			this.initiailizeBackTop();
		}		
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
			footer += '<li><a data-serviceClicked="graphic" href="service.html" class="gotoService" href="service.html">Graphic Design</a></li>';
			footer += '<li><a data-serviceClicked="startup" href="startAProject.html" class="" href="service.html">App Ideas</a></li>';
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
			footer += '<div class="col s12 m4 l4 white-text '+(virtual.detectDevice() ? "" : "right-align")+'">';
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

	initializeHomePage : function() {

		var virtual = this;
		var isMobile = virtual.detectDevice();
		var alignment = "";
		var features = '<div class="container">';
		$(homedata.introFeatures).each(function(f){
			features += '<div class="row '+(f==0 ? '' : 'top')+'">';
			if(isMobile ||  f % 2 == 0){
				alignment = isMobile ? "center-align wow slideIn" : "right-align wow slideInRight";
				features += '<div class="col s12 m6 l6">';
				features += '<img data-src="'+homedata.introFeatures[f].imgPath+'" class="wow slideInLeft lazy responsive-img">';
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
				features += '<img data-src="'+homedata.introFeatures[f].imgPath+'" class="lazy responsive-img">';
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

		$("#enquirySubmit").click(function(e) {
			e.preventDefault();
	        $(".error").hide();
	        var hasError = false;
	        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	        var emailFromVal = $("#email").val();
	        if (emailFromVal == '') {
	            $("#email").after('<span class="error red-text">You forgot to enter the email address.</span>');
	            hasError = true;
	        } else if (!emailReg.test(emailFromVal)) {
	            $("#email").after('<span class="error red-text">Enter a valid email address to send to.</span>');
	            hasError = true;
	        }
	        var Name = $("#name").val();
	        if (Name == '') {
	            $("#name").after('<span class="error red-text">You forgot to enter the Name</span>');
	            hasError = true;
	        }
	        var companyName = $("#Company_name").val();
	        var messageVal = $("#comment").val();
	        if (messageVal == '') {
	            $("#comment").after('<span class="error red-text">You forgot to enter the message.</span>');
	            hasError = true;
	        }
	        if (hasError == false) {
	            $("#enquirySubmit").val('Sending...');
	         	$.ajax({
					type: "POST",
					url: "sendemail.php",
					data: {
						email: emailFromVal,
		                user: Name,
		                message: messageVal,
		                companyName:companyName
					},
					success: function(){
						$("#enquirySubmit").val('Send Message');
	                	$("#contactform")[0].reset();
					}
				});
	        }
	        return false;
	    });
	},

	initializeCulture : function() {

		var teamTemplate =  '<div class="col s6 m3 l3">'
						 +  '<div class="card-panel transparent black-text no-shadow"><p>'
						 +  '<img class="responsive-img lazy" data-src="imgPath"><br>'
				 		 +  '<span class="truncate flow-text">name</span>'
						 +  '<span class="">role</span></p></div></div>';
		this.createHtmlTemplates($("#teamrow"), teamTemplate, teamdata.culturedata);
		this.initializeLazyLoad();
		this.initializeAnimateTo($("#goToTribe"), $("#tribeMembers"));
		$("#teamrow .card-panel").css("cursor","pointer").hover(function(){
			$(this).addClass("z-depth-3 white-text site-bg");
			$(this).removeClass("transparent no-shadow black-text");			
		},function(){
			$(this).removeClass("z-depth-3 white-text site-bg");
			$(this).addClass("transparent no-shadow black-text");
		}).click(function(e){
			e.preventDefault();
			var name = $(this).find("span.truncate").text();
			localStorage.setItem('memberName',name);
			window.location.href = 'member.html';
		});
	},

	initializeApproach: function() {
		var virtual = this;
		var isMobile = virtual.detectDevice();
		var approachLines= '';
			approachLines += '<ul>';
		$(approachData.process).each(function(p){
			approachLines += '<li>';
			approachLines += '<span class="number">'+(p+1)+'</span>';
			approachLines += '<div class="step '+(p % 2 == 0 ? "" : "invert")+'">';
			approachLines += '<div class="card no-shadow white '+(isMobile ? "" : "valign-wrapper")+'">';
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

		var techTemplate = '<div class="col s4 m2 l2">'
						 + '<div class="no-pad card-panel transparent no-shadow hoverable white-text">'
						 + '<img id="name" alt="name" data-src="imgPath" class="lazy responsive-img">'
						 + '<p class="no-mar flow-text">name</p></div></div>';
		this.createHtmlTemplates($("#technologies #techs"), techTemplate, approachData.technologies);
		
		var techCols = $("#technologies #techs .col");
		var techColsNo = (isMobile) ?  3 : 6;
		for(var i = 0; i < techCols.length; i+=techColsNo) {
			techCols.slice(i, i+techColsNo).wrapAll("<div class='row'></div>");
		}
		
		this.initializeLazyLoad();
		$("#technologies #techs img#CSS, #technologies #techs img#HTML").css("width","50px");
		$("#technologies #techs img#Jquery").css("width","55px");		

		$("#technologies #techs .card-panel").css("transition","all .2s ease-in-out").hover(function(){
			$(this).toggleClass("no-shadow z-depth-5").css("transform","scale(1.1)");		
		},function(){
			$(this).toggleClass("no-shadow z-depth-5").css("transform","scale(1)");	
		});

		var chooseUsTemplate = '<div class="col s12 m4 l4 center-align">'
							 + '<div class="card-panel transparent no-shadow cyan-text hoverable">'
							 + '<i class="fa fa-5x valign icon"></i>'
							 + '<h3 class="flow-text">heading</h3>'
							 + '<p>desc</p>'
							 + '</div></div>';
		this.createHtmlTemplates( $("#chooseSection"), chooseUsTemplate, approachData.choose);
		
		$("#chooseSection .card-panel").hover(function(){
			$(this).toggleClass("transparent no-shadow site-bg cyan-text white-text z-depth-5");		
		},function(){
			$(this).toggleClass("transparent no-shadow site-bg cyan-text white-text z-depth-5");	
		});
		this.initializeAnimateTo($("#goToApproach"), $("#timeline"));

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
            contentType: 'text',
            loopCount: false,
            callback: function(){ 
			},
            resetCallback: function() { newTyped(); }
        });

		if(!isMobile){
	        $(".pillarstags").typed({
	            strings: ["Collaboration","Iteration","Long-term"],
	            typeSpeed: 150,
	            backSpeed: 0,
	            startDelay: 0,
	            backDelay: 700,
	            randomize: 100,
	            cursorChar: '|',
	            showCursor:true,
	            loop:true,
	            contentType: 'text',
	            loopCount: false,
	            resetCallback: function() { newTyped(); }
	        });
	    }
	    else{
	    	$(".pillarstags").html("Collaboration | Iteration | Long-term");
	    }
		
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
			$(document).scroll();
		});

		$(".numbering .card").hover(function(){
			$(this).toggleClass("flip no-shadow z-depth-5");		
		},function(){
			$(this).toggleClass("flip no-shadow z-depth-5");	
		});
	},

	initializeCases: function() {
		var casesTemplate = '<div class="col s12 m4 l4 center-align">'
						  + '<a href="url"><div class="card-panel hvr-grow-shadow workcards no-shadow transparent">'
						  + '<p class="cyan-text bold flow-text">name</p>'
						  + '<img data-src="imgPath" class="z-depth-3 lazy responsive-img">'
						  + '</div></a></div>';
		this.createHtmlTemplates($("#worksSection"), casesTemplate, casesData.cases);
		
		var divs = $("div#worksSection > div.col");
		for(var i = 0; i < divs.length; i+=3) {
			divs.slice(i, i+3).wrapAll("<div class='row'></div>");
		}
		
		var testimonalTemplate 	= '<div class="item">' 
								+ '<img style="opacity:1!important" data-src="imgPath" class="lazy responsive-img">'
								+ '<p class="white-text flow-text"><i class="fa fa-quote-left"></i> saying <i class="fa fa-quote-right"></i></p>'
								+ '<p class="cyan-text right-align flow-text">name<br>- <small class="white-text"> position </small></p></div>';
		this.createHtmlTemplates($("#testimonals .owl-carousel"), testimonalTemplate, casesData.testimonals);
		this.initializeSlider();
		$(".testimonals-controls li").on("click", function(){
			var index = $(this).index();
			$('.owl-carousel').trigger("to.owl.carousel", [index, 500, true]);
			$(this).find("i").addClass("fa-circle").removeClass("fa-circle-o");
			$(this).siblings().find("i").addClass("fa-circle-o").removeClass("fa-circle");
			$(document).scroll();
		});
		this.initializeLazyLoad();

		$(".rocketCard").hover(function(){
			$(this).toggleClass("transparent cyan-text site-bg hoverable white-text z-depth-3 z-depth-5");
		},function(){
			$(this).toggleClass("transparent cyan-text site-bg hoverable white-text z-depth-3 z-depth-5");
		});
		this.initializeAnimateTo($("#goToCases"), $("#worksSection"));
	},

	initializeStartAProject: function() {
		this.initializeAnimateTo($("#goToStart"), $("#formSection"));
		$("#startAProjectBtn").addClass("hide");

		var service = '';
		$(startProject.services).each(function(s) {
			service += '<div class="input-field col s12 m6 l6 black-text">';
			service += '<input class="filled-in" type="checkbox" id="'+startProject.services[s].replace(/\s/g,"")+'"  data-value="'+startProject.services[s]+'"/>';
			service += '<label for='+startProject.services[s].replace(/\s/g,"")+'>'+startProject.services[s]+'</label>';
			service += '</div>';
		});
		$("#typeOfProduct").html(service);

		var divs = $("#typeOfProduct .col");
		for(var i = 0; i < divs.length; i+=2) {
		  divs.slice(i, i+2).wrapAll("<div class='row no-mar'></div>");
		}	
		$('select').material_select();			
		$('.dropdown-content li:not(.disabled) > span').css({"color":"#00bcd4"}).addClass("bold");
	
		$('select#budget').prev(".dropdown-content").find("li").each(function(l) {
			var span = $(this).find("span").text().replace(/\./g,"<i class='fa fa-rupee'></i>");
			$(this).find("span").html(span);
		});

		// sending Project enquiry details
		$("#projectEnquirySubmit").click(function(e) {
			e.preventDefault();
	        var hasError     = false;
	        var emailReg 	 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	        
	        var details = {
	        	name 	: $.trim($("#Full_name").val()),
	        	email   : $.trim($("#email").val()),
	        	phone   : $.trim($("#Phone").val()),
	        	Company : $.trim($("#Company").val()),
	        	budget  : $("#budget").val(),
	        	time    : $("#timeframe").val(),
	        	message : $.trim($("#requirements").val()),
	        	finder  : $.trim($("#found").val()),
	        	ProjectType : []
	        };	        

	        $("#typeOfProduct input[type=checkbox]").each(function(i) {
	        	if($(this).prop("checked")) {
	        		details["ProjectType"] = $(this).attr("data-value");
	        	}
	        });
	         
	        if( !details.name.length    || 
	        	!details.email.length   || 
	        	!details.phone.length   ||
	        	(details.budget == null) ||
	        	(details.time   == null) ||
	        	!details.message.length ||
	        	!emailReg.test(details.email) || 
	        	!details.ProjectType.length)
	        {
	        	hasError = true;
	        }

	        (!details.name.length) 		  ? $("#Full_name").addClass("invalid") : $("#Full_name").removeClass("invalid");
	        (!details.email.length) 	  ? $("#email").addClass("invalid") : $("#email").removeClass("invalid");
	        !emailReg.test(details.email) ? $("#email").addClass("invalid") : $("#email").removeClass("invalid");
	        (!details.phone.length) 	  ? $("#Phone").addClass("invalid") : $("#Phone").removeClass("invalid");
	        (!details.message.length) 	  ? $("#requirements").addClass("invalid") : $("#requirements").removeClass("invalid");
	        (details.budget == null)  	  ? $("#budget").parent().next("label").addClass("red-text invalid") : $("#budget").parent().next("label").removeClass("red-text invalid");
	        (details.time   == null)      ? $("#timeframe").parent().next("label").addClass("red-text invalid") : $("#timeframe").parent().next("label").removeClass("red-text invalid");
	        (!details.ProjectType.length) ? $("#pt").addClass("red-text invalid") : $("#pt").removeClass("red-text invalid");
	        
	        if (!hasError) {
	            $("#projectEnquirySubmit").val('Submitting Details...');
	            $.post("sendProjectEnquiry.php", {
	                name 	: details.name,
		        	email   : details.email,
		        	phone   : details.phone,
		        	Company : details.Company,
		        	budget  : details.budget,
		        	time    : details.time,
		        	message : details.message,
		        	finder  : details.finder,
		        	type 	: details.ProjectType.join(",")	        	
	            }, function(data) {
	                $("#projectEnquirySubmit").val('Submit');
	                $("#projectform")[0].reset();
	                Materialize.toast('You have successfully submitted the details. Our team Will Contact you shortly..', 3000);
	            });
	        }
	        else {
	        	$('html, body').animate({
					scrollTop: ($(".invalid").offset().top - 200)
				}, 2000);
	        	Materialize.toast('You missed something !', 3000);
	        }
	        return false;
	    });
	},

	initializeServices:function() {
		var virtual = this;
		var isMobile = virtual.detectDevice();
		var service = '';
		$(serviceData.services).each(function(f){
			service += '<div class="site-pad--sm"></div>';
			service += '<div class="row '+ (!isMobile ? 'valign-wrapper ' : ' ') + (f==0 ? '' : 'top')+'">';
			if(isMobile ||  f % 2 == 0){
				var alignment = isMobile ? "center-align wow slideIn" : "valign right-align wow slideInRight";
				service += '<div class="col s12 m6 l6">';
				service += '<img data-src="'+serviceData.services[f].img+'" class="wow slideInLeft lazy responsive-img">';
				service += '</div>';
				service += '<div class="col s12 m6 l6 '+alignment+'">';
				service += serviceData.services[f].heading;
				service += serviceData.services[f].desc;
				service += '<p><a data-serviceClicked="'+serviceData.services[f].serviceName+'" href="service.html" class="gotoService btn cyan">Lets Start</a><p>';
				service += '</div>';
			}
			else{
				service += '<div class="col s12 m6 l6 valign left-align wow slideInLeft">';
				service += serviceData.services[f].heading;
				service += serviceData.services[f].desc;
				service += '<p><a data-serviceClicked="'+serviceData.services[f].serviceName+'" href="service.html" class="gotoService btn cyan">Lets Start</a><p>';
				service += '</div>';
				service += '<div class="col s12 m6 l6">';
				service += '<img data-src="'+serviceData.services[f].img+'" class="lazy responsive-img">';
				service += '</div>';
			}	
			service += '</div>';
			service += '<div class="site-pad--sm"></div>';
		});
		$("#servicesSection").html(service);
		virtual.initializeServicePageLinks();

		var additionalTemplate  = '<div class="col s6 m3 l3 center-align">'
					   			+ '<a href="startAProject.html"><div class="card-panel transparent no-shadow"><img data-src="imgPath" class="wow fadeIn lazy responsive-img">'
					   			+ '<p class="white-text bold">desc</p></div></a></div>';

		this.createHtmlTemplates($("#additional"), additionalTemplate, serviceData.additional);
		var divs = $("#additional > div.col");
		for(var i = 0; i < divs.length; i+=4) {
			divs.slice(i, i+4).wrapAll("<div class='row'></div>");
		}

		$("#additional .card-panel").css("transition","all .2s ease-in-out").hover(function(){
			$(this).toggleClass("no-shadow z-depth-3-white transparent site-bg").css("transform","scale(1.1)");		
		},function(){
			$(this).toggleClass("no-shadow z-depth-3-white transparent site-bg").css("transform","scale(1)");	
		});

		virtual.initializeWow();
		virtual.initializeLazyLoad();
		virtual.initializePlugins();
	},

	initializeMember:function() {

		var virtual = this;

		if(virtual.page != "team") {

			var clickedName = localStorage.getItem("memberName");
			var otherMembers = '';
			$(teamdata.memberdata).each(function(f) {
				if(teamdata.memberdata[f].name == clickedName) {
					$("#name").html(teamdata.memberdata[f].name);
					$("#tagline").html(teamdata.memberdata[f].tagline);
					$("#mail").attr("href",teamdata.memberdata[f].mailId);
					$(".avatar").css("background-image","linear-gradient(rgba(0, 0, 0, 0.32),rgb(9, 9, 9)), url("+teamdata.memberdata[f].imgPath+")");
					$("#doLine").html(teamdata.memberdata[f].headingLine);
					$("#story").html(teamdata.memberdata[f].story);
					$("#happyPeople p.flow-text").html("<i class='fa fa-quote-left'></i> " +teamdata.memberdata[f].happyPeople + " <i class='fa fa-quote-right'></i>");
					$("#socialLinks a#facebookUrl").attr("href",teamdata.memberdata[f].fbId);
					$("#socialLinks a#linkedinUrl").attr("href",teamdata.memberdata[f].linkedinId);
					$("#socialLinks a#twitterUrl").attr("href",teamdata.memberdata[f].twitterId);
					$("#socialLinks a#skypeUrl").attr("href",teamdata.memberdata[f].skypeId);
				}
				else {			
					otherMembers += '<div class="col s12 m4 l4 center-align">';
					otherMembers += '<div class="card transparent cyan-text no-shadow">';
					otherMembers += '<div class="card-image center-align z-depth-5">';
					otherMembers += '<img data-src="'+teamdata.memberdata[f].imgPath+'">';
					otherMembers += '<span class="card-title">'+teamdata.memberdata[f].name+'</span>';
					otherMembers += '</div>';
					otherMembers += '<div class="card-content">';
					otherMembers += '<p class="flow-text bold">'+teamdata.memberdata[f].role+'</p>.';
					otherMembers += '</div>';
					otherMembers += '</div></div>';
				}			
			});

			$("#otherMembers").html(otherMembers);
			virtual.initializeWow();
			virtual.initializeLazyLoad();

			$("#otherMembers .card").css("cursor","pointer").hover(function(){
				$(this).toggleClass("transparent no-shadow z-depth-5 white-text site-bg");
				$(this).find(".card-image").toggleClass("z-depth-5");
			},function(){
				$(this).toggleClass("transparent no-shadow z-depth-5 white-text site-bg");
				$(this).find(".card-image").toggleClass("z-depth-5");
			}).click(function(e){
				e.preventDefault();
				var name = $(this).find(".card-title").text();
				localStorage.setItem('memberName',name);
				window.location.href = 'member.html';
			});

			$("#socialLinks a").hover(function(){
				$(this).parent(".card-panel").toggleClass("site-bg white z-depth-5 no-shadow");
				$(this).find("i").toggleClass("cyan-text white-text");
				$(this).toggleClass("circle white transparent");
			},function(){
				$(this).parent(".card-panel").toggleClass("site-bg white z-depth-5 no-shadow");
				$(this).find("i").toggleClass("cyan-text white-text");	
				$(this).toggleClass("circle white transparent");	
			});
		}
		else {
			var membersTemplate = '<div class="col s12 m3 l3 center-align">'
								+ '<div class="card-panel transparent cyan-text no-shadow">'
								+ '<img class="lazy circle responsive-img z-depth-3" data-src="imgPath">'
								+ '<br><span class="flow-text truncate">name</span>'
								+ '<p class="bold black-text">role</p><p>'
								+ '<a class="btn btn-flat btn-floating"><i class="fa cyan-text fa-facebook"></i></a>'
								+ '<a class="btn btn-flat btn-floating"><i class="fa cyan-text fa-twitter"></i></a>'
								+ '<a class="btn btn-flat btn-floating"><i class="fa cyan-text fa-linkedin"></i></a>'
								+ '<a class="btn btn-flat btn-floating"><i class="fa cyan-text fa-skype"></i></a>'
								+ '</p></div></div>';
			this.createHtmlTemplates($("#teamMembers"), membersTemplate, teamdata.memberdata);
			virtual.initializeWow();
			virtual.initializeLazyLoad();
			virtual.initializeAnimateTo($("#goToMembers"), $("#happyPeople"));
		}
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

		var virtual   = this,
			isMobile  = virtual.detectDevice(),
			slider    = $('.owl-carousel');
		
		var checkIsReady = function() {
			if(virtual.page == "home" || virtual.page == "services"){
				if($("#loadOne").length && $("#loadTwo").length){
					setTimeout(function(){ 
	                    $('#loadTwo .owl-carousel').addClass("owl-loaded");
	                    $("#loadTwo").removeClass("hide");
						$("#loadOne").remove();
	                },2000);
				}
			}
		};
		
		if(slider.length) {
			/*initializing Slider*/
			$(slider).on('initialized.owl.carousel', function(event) {
				checkIsReady();
			}).owlCarousel({
				callbacks  : true,
				loop       : true,
				nav        : false,
				dots       : false,
				lazyLoad   : (virtual.page == "home" ? false : true),
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
			}).show();

			if(isMobile){
				$('.owl-carousel .slider-title h3').addClass("flow-text").css("margin-top","60%");
				$("#weDoSec").css("top","-45px").css("z-index" ,"1");
			}
		}
	},

	initializeContact: function(){
		$("gmap_canvas").css("height",$("#contactForm").height + 100);
		$("#enquirySubmit").click(function(e) {
			e.preventDefault();
	        $(".error").hide();
	        var hasError = false;
	        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	        var emailFromVal = $("#email").val();
	        if (emailFromVal == '') {
	            $("#email").after('<span class="error red-text">You forgot to enter the email address.</span>');
	            hasError = true;
	        } else if (!emailReg.test(emailFromVal)) {
	            $("#email").after('<span class="error red-text">Enter a valid email address to send to.</span>');
	            hasError = true;
	        }
	        var Name = $("#name").val();
	        if (Name == '') {
	            $("#name").after('<span class="error red-text">You forgot to enter the Name</span>');
	            hasError = true;
	        }
	        var companName = $("#CompanyName").val();
	        var messageVal = $("#comment").val();
	        if (messageVal == '') {
	            $("#comment").after('<span class="error red-text">You forgot to enter the message.</span>');
	            hasError = true;
	        }
	        if (hasError == false) {
	            $("#enquirySubmit").val('Sending...');
	            $.post("sendemail.php", {
	                email: emailFromVal,
	                user: Name,
	                message: messageVal,
	                companName:companName
	            }, function(data) {
	                $("#submit").html('Send Message');
	                $("#contact-form")[0].reset();
	            });
	        }
	        return false;
	    });
	},

	initializeTerms : function(){
		this.initializeAnimateTo($("#goToPolicy"), $("#webSiteTerms"));
		var termsTemplate = '<div class="flow-text"><span class="bold cyan-text">point</span><p class="padLeft20">termdesc</p></div>';
		this.createHtmlTemplates($("#termsTemplate"), termsTemplate, terms.termsData);
		var policyTemplate = '<li><i class="termsDot fa fa-circle"></i> policydesc</li>';
		this.createHtmlTemplates($("#policyTemplate"), policyTemplate, terms.policiesData);
	},

	initializeWow : function(){		
		$(".wow").attr("data-wow-duration","1s").attr("data-wow-delay","1s");
		wow = new WOW();
		wow.init();
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
		delete htmlString;
		delete htmlcontainer;
		delete htmltemplate;
		delete iteratee;
	},

	initiailizeBackTop:function(){
	   	
	   	var virtual = this;
	   	$(document).find('.fixed-action-btn').remove();

	   	var links = [
	   		{page :"home", 	   link:"index.html",    icon:"fa-home"},
	   		{page :"culture",  link:"culture.html",  icon:"fa-chain"},
	   		{page :"approach", link:"approach.html", icon:"fa-paper-plane"},
	   		{page :"cases",    link:"cases.html", 	 icon:"fa-briefcase"},
	   		{page :"services", link:"services.html", icon:"fa-tags"},
	   		{page :"team",     link:"team.html", 	 icon:"fa-users"},
	   		{page :"contact",  link:"contact.html",  icon:"fa-phone"}
	   	];
	   	
	   	var backtotopTemplate = '';
			backtotopTemplate += '<div class="fixed-action-btn hide" style="bottom: 45px; right: 24px;">';
			backtotopTemplate += '<a id="backToTop" class="btn-floating btn-large cyan"><i class="fa fa-chevron-up"></i></a>';
			backtotopTemplate += '<ul>';
			$(links).each(function(l){
				if(links[l].page != virtual.page){
					backtotopTemplate += '<li><a href="'+links[l].link+'" data-link="'+links[l].page+'" class="btn-floating cyan"><i class="fa '+links[l].icon+'"></i></a></li>';
				}
			});
			backtotopTemplate += '</ul></div>';

	   	$(document).find('#site-wrapper').after(backtotopTemplate);
	   	$(window).scroll(function(){
			($(window).scrollTop() >= 600) ? $(".fixed-action-btn").removeClass("hide") : $(".fixed-action-btn").addClass("hide");
		});
		this.initializeAnimateTo($('.fixed-action-btn #backToTop'), 0);
        $('.fixed-action-btn li').each(function(){
        	$(this).find("a").attr("data-position","left").attr("data-delay",50).attr("data-tooltip",$(this).find("a").attr('data-link')).tooltip();
        });
	},

	initializeAnimateTo: function(element, scrollToElement){
		$(element).on("click", function(e){
        	e.preventDefault();
        	if(scrollToElement == 0){
        		$('html, body').animate({scrollTop:0}, 2000);
        	}
        	else{
        		$('html, body').animate({
					scrollTop: $(scrollToElement).offset().top
				}, 2000);
        	}			
			return false;
        });
	}
};

$(function(){
	virtual.initialize();
});