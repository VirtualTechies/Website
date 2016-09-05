var headerdata = {
    "mainLinks": [
        { 
            text     : "Home",
            isMain   : true,
            hasChild : false,
            link     : "index.html",
            childs   : []
        },
        { 
            text     : "About Us",
            isMain   : true,
            hasChild : true,
            link     : "#",
            childs   : [
                { 
                    text     : "Culture",
                    isMain   : true,
                    hasChild : false,
                    link     : "culture.html",
                    childs   : []
                },
                { 
                    text     : "Approach",
                    isMain   : true,
                    hasChild : false,
                    link     : "approach.html",
                    childs   : []
                },
                { 
                    text     : "Works / Cases",
                    isMain   : true,
                    hasChild : false,
                    link     : "cases.html",
                    childs   : []
                }
            ]
        },
        /*{ 
            text     : "Products",
            isMain   : true,
            hasChild : true,
            link     : "#",
            childs   : [
                { 
                    text     : "Somatosensory Education ",
                    isMain   : true,
                    hasChild : false,
                    link     : "culture.html",
                    childs   : []
                },
                { 
                    text     : "3D Somatosensory dressing mirror",
                    isMain   : true,
                    hasChild : false,
                    link     : "approach.html",
                    childs   : []
                },
                { 
                    text     : "Somatosensory try internet",
                    isMain   : true,
                    hasChild : false,
                    link     : "cases.html",
                    childs   : []
                },
                { 
                    text     : "Somatosensory advertising",
                    isMain   : true,
                    hasChild : false,
                    link     : "cases.html",
                    childs   : []
                }
            ]
        },*/
        { 
            text     : "Services",
            isMain   : true,
            hasChild : false,
            link     : "services.html",
            childs   : []
        },
        /*{ 
            text     : "Blog",
            isMain   : true,
            hasChild : false,
            link     : "blog.html",
            childs   : []
        },*/
        { 
            text     : "Team",
            isMain   : true,
            hasChild : false,
            link     : "team.html",
            childs   : []
        },
        { 
            text     : "Contact",
            isMain   : true,
            hasChild : false,
            link     : "contact.html",
            childs   : []
        }
    ]
};

var serviceData = {
	services : [
		//website
		{
			storageServiceName : "website",
			mainImagePath  : "img/service/websiteDevelopment/websiteDevelopment.jpg",
			serviceName    : "Website Development",
			serviceTagLine : "These days, when people need ‘something’ they ask the internet. So if your online presence isn’t up to scratch - you’re not even going to be considered. A good website will not only look awesome, it’ll build credibility and turn your visitors into customers.",
			showServiceSection : true,
			serviceSectionHeading : "Website is the online face of business",
			serviceSectionTagLine : "We know web changes continuously, so we are keeping our eyes on new stuff. We build websites that look beautiful on all different screen sizes, using clean code that search engines love. And yes, mobile first!",
			serviceSections: [
				{
					sectionImg  : "img/service/websiteDevelopment/pic1.png",
					sectionDesc : "Our website development process is five years in the making -- structured for efficiency and high-quality output. We start with a website specifications document, ensuring your requirements are outlined and communicated to our team at the start, and follow-through with extensive quality assurance testing."
				},
				{
					sectionImg  : "img/service/websiteDevelopment/pic2.png",
					sectionDesc : "We also use a unique framework to streamline our website development process. It’s called FusionCMS and it’s designed to be scalable, customizable, and secure. It helps ensure consistent output and allows us more bandwidth to support you."
				},
				{
					sectionImg  : "img/service/websiteDevelopment/pic3.png",
					sectionDesc : "Want to be kept in the loop? During the Development Phase, we’ll create a development environment for your work-in-progress website so you can monitor our progress in real-time, while having an available test environment for your website training. This is just one of the many ways we approach websites differently."
				}
			],
			showWorksSection : true,
			works:[
				{
					workName :"Recruitio Consultants",
					workdesc :"Recruitio Consultants is a leading recruiting organization helping companies and job seekers to get the best in the industry. Recruitio Consultants LLP looks at the dilemmas at a new angle , to find new & better solutions, with clear business benefits. Being curious and experimental, assist us to focus on our market and adjacent markets for inspiration.The world of talent is constantly changing. Innovative new ideas, techniques and technologies are reshaping how organizations source, assess, engage and retain high performing talent.",
					workImg  :"img/service/works/Recruitio.png",
					platforms:["HTML5", "CSS3", "Material-Design, Javasrcipt, Jquery, Php"],
					TimeTaken:"3 Months",
					servicesGiven:["Web Design and Development, Web hosting, Logo Design"],
					Focus:["Brand generation, lead generation, new Setup for Business"],
					link:"http://recruitioconsultants.com/"
				}
			],
			showPoliciesSection : true,
			pricingPolicies:[
				{
					policyName : "BASIC PLAN",
					policyType : "Monthly",
					policyText : [
						"1 Project",
						"Fully Customized design layout", 
						"Up to 7 Static html Inner pages", 
						"Up to 5 Stock images included from StockImages ( Additional Images cost 100 per image )", 
						"Logo to be provided by client",
						"Homepage Banner Animation Slide Show",
						"Contact Form - Details sent to email",
						"Uploading the website to your URL ( Domain )",
						"Search engine friendly design",
						"Link to Social networking Websites like facebook, twitter, linkedIn, etc.",
						"Additional page at 250 per page",
						"FREE technical Support for 3 Months"
					],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub> 5,500</span>",
					active     : false
				},
				{
					policyName : "PREMIUM",
					policyType : "Monthly",
					policyText : [
						"5 Projects",
						"Fully Customized design layout", 
						"Up to 15 Static html Inner pages",
						"Up to 75 Stock images included from StockImages ( Additional Images cost 80 per image )",  
						"Logo design",
						"Homepage Banner Animation Slide Show",
						"Contact Form - Details sent to email",
						"Uploading the website to your URL ( Domain )",
						"Link to Social networking Websites like facebook, twitter, linkedIn, etc.",
						"Additional page at 250 per page",
						"FREE technical Support for 9 Months",
						"Search engine friendly design"
					],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub> 23,000</span>",
					active     : true
				},
				{
					policyName : "PLATINUM",
					policyType : "Monthly",
					policyText : [
						"10 Projects",
						"Fully Customized design layout", 
						"Unlimited Static html Inner pages",
						"Up to 200 Stock images included from StockImages ( Additional Images cost 80 per image )",  
						"Logo design",
						"Homepage Banner Animation Slide Show",
						"Contact Form - Details sent to email",
						"Uploading the website to your URL ( Domain )",
						"Link to Social networking Websites like facebook, twitter, linkedIn, etc.",
						"Additional page at 200 per page",
						"FREE technical Support for 2 years",
						"Search engine friendly design"
					],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub> 75,000</span>",
					active     : false
				}
			],
			showFAQsection : true,
			FAQS:[
				{
					question :"Explain the Process you follow",
					answer	 :"<p>At the initial stage, we will provide you the quote as per your requirement. Along with the quote, we will send you a Web Design questionnaire that you need to fill up and send us back, Once we get your order confirmation we will then create a customized mock-up based on the website questionnaire and your company information. We will also be taking feedback/changes from you and once you are done with the layout we will move further with remaining pages.</p><p>We will then show the project progress on our development server URL, e.g. yourcompany.thevirtualtechies.net, so that you can have a review of the website, we will provide you the admin, so that you can check if you are able to change the contents/images of the site or not.</p>And once you agree with the development server website then we will upload to your domain name after receiving the remaining payment of the website.",
					icon     :"fa-desktop"
				},
				{
					question :"Are you using Template?",
					answer	 :"We only worked on templates upon client request, else generally we start from scratch using custom designed Templates specially designed for you. We have excellent Template artist inhouse who can help you design the layouts for you.",
					icon     :"fa-desktop"
				},
				{
					question :"How many developer will be working on my project?",
					answer	 :"It varies based on the project requirement and complexity. There are projects in which only 1 developer is assigned, and there are projects in which we have assigned 3+ developers to work on a Single Project.",
					icon     :"fa-desktop"
				},
				{
					question :"Time availability",
					answer	 :"Development team works from Indian Standard time 10:00 AM to 7:00 PM, and Sales team works from 11:00 AM to 11:00 PM basically Indian Time zone is GMT +5:30 so if you are from United states best time to contact us is your any morning time.",
					icon     :"fa-desktop"
				},
				{
					question :"The preferred mode of communication ?",
					answer	 :"<p>We use email, phone conference, Skype and Google Hangout as mode of communication for the sales inquiries and during project co-ordination.</p><p>For any technical support we charge 700 an hour or what ever is mentioned in your quote. ( the price varies based on the type of resource you are hiring ) And for project communication we use basecamp.com</p>",
					icon     :"fa-desktop"
				},
				{
					question :"Payment Terms",
					answer	 :"<p>Generally our Payment terms are as under</p></ul><li>50% upfront and remaining upon completion before publishing your website live ( for project below 5000 value )</li><li>35% upfront, 35% after approval of Design mock up Homepage and remaining upon completion before publishing your website live ( for project value above 10000 USD)</li></ul>",
					icon     :"fa-desktop"
				},
				{
					question :"What is the Technology + Platform used for development ?",
					answer	 :"It varies based on your requirements and best possible platform compatible with the scope of work which will reduce the time / effort and hence to cost for you. We majorly use PHP, HTML5, HTML/CSS and we work on major different 100+ open source.",
					icon     :"fa-desktop"
				},
				{
					question :"Technical Support we offer?",
					answer	 :"<p>Generally most of the websites we build today are self managed. A person not having much of IT skills but know how to send an email with an attachment would be able to learn how to manage the website from a password protected admin interface (depends on the package you select and the functionality you need).</p><p>We will provide one month of free support for bug rectifications after the site has been made live. This support does not include addition / alteration of features. After the support period, our charges will be at 1000 per man hour for bug rectification and feature addition/alteration.</p>",
					icon     :"fa-desktop"
				},
				{
					question :"Do I get source code?",
					answer	 :"Yes, at the end of project after making your website live (provided we have mentioned this in the scope of work) we will provide you with the source code.",
					icon     :"fa-desktop"
				}
			]
		},

		//app
		{
			storageServiceName : "app",
			mainImagePath  : "img/service/appDevelopment/appDevelopment.jpg",
			serviceName    : "App Development",
			serviceTagLine : "Transform your idea into an outstanding app with the latest mobile technology. We are there to support you at every phase, right from design to development to marketing.",
			showServiceSection : true,
			serviceSectionHeading : "Apps for productivity, profitability and more...",
			serviceSectionTagLine : "Apps power-up your lifestyle. It changes the way you collaborate and communicate with your peers as well as dear and near ones – at work, at home or at play.We bring to your table a seamless integration of cross-device and cross-platform solutions topped with app discovery and mobile analytics.",
			serviceSections: [
				{
					sectionImg  : "img/service/appDevelopment/pic1.png",
					sectionDesc : "Our team includes highly skilled iOS developers and UI designers who create visually stunning and easy-to-use iPhone apps. We ensure every pixel is in its exact position that pieces together crisp, clutter-free functional designs. We offer resources and tools designed for companies and individuals for accessing a portfolio of learning experiences which allow you to refine or develop your dream service or product. We soak in the feedback of iPhone apps users and fine-tune the polished quality that helps your firm stay ahead of the rest."
				},
				{
					sectionImg  : "img/service/appDevelopment/pic2.png",
					sectionDesc : "We help your ideas and concepts take shape to deliver your objectives. Your preferences and our creativity helps create the perfect design that is implemented using our expert skills of the current tools. Our Progressive, Measurable and Timely development begins as soon as the design is approved.We maintain the quality standards by ensuring that each App is checked for specifications, client preferences and requirements as well as functionality.Our creation takes wings only once you approve the final build and is available on iTunes once Apple approves it."
				},
				{
					sectionImg  : "img/service/appDevelopment/pic3.png",
					sectionDesc : "Our team is made of highly skilled engineers and product managers who have years of experience working on mobile technology.We are zealous to ensure our clients’ success in leveraging technology solutions. We are capable of delivering powerful business solutions which are cost-effective."
				}
			],
			showWorksSection : false,
			works:[],
			showPoliciesSection : false,
			pricingPolicies:[],
			showFAQsection : false,
			FAQS:[]
		},

		//digital
		{
			storageServiceName : "digital",
			mainImagePath  : "img/service/digital/digital.jpg",
			serviceName    : "Digital Marketing",
			serviceTagLine : "Have a brand? We make it reach out to millions. We digitally create all the awareness that your brand needs.",
			showServiceSection : true,
			serviceSectionHeading : "THE BEST MARKETING STRATEGY ALWAYS WINS",
			serviceSectionTagLine : "Digital marketing today has become a vast arena which continues to expand rapidly. Your company needs to formulate its digital marketing strategy carefully before jumping onto the next big trend that becomes hot. In today’s digital marketing, data points are easy to come by but understanding which ones to pay attention to is what really matters.",
			serviceSections: [
				{
					sectionImg  : "img/service/digital/pic1.png",
					sectionDesc : "We believe that the marketer with the best plan wins. And the best plans start with a solid framework, or marketing strategy, to make them easy to create and communicate over digital channels. If you want to be able to see results from digital marketing then all of your efforts need to be integrated and aligned towards a single goal using a digital strategy. But due to an ever changing digital landscape, even a solid digital marketing strategy needs constant fine tuning and tweaking to see an increase in gains."
				},
				{
					sectionImg  : "img/service/digital/pic2.png",
					sectionDesc : "We offer a suite of services to strategize, execute, measure and optimize your digital interactions across channels. Our focus is on delivering exceptional digital experience to your audience thereby offering maximum bang for your marketing budget."
				},
				{
					sectionImg  : "img/service/digital/pic3.png",
					sectionDesc : "To stay relevant and competitive in a constantly changing market, businesses have to change the way they reach out to their audience and connect with them. To make a mark in the digital space, a deep understanding of user psyche, aided by analytic insights, engaging content and marketing automation is required across all digital channels."
				}
			],
			showWorksSection : false,
			works:[],
			showPoliciesSection : false,
			pricingPolicies:[],
			showFAQsection : false,
			FAQS:[]
		},

		//ecommerce
		{
			storageServiceName : "ecommerce",
			mainImagePath  : "img/service/ecommerce/ecommerce.jpg",
			serviceName    : "Ecommerce Website Development",
			serviceTagLine : "Buying your trust more than your products and services!",
			showServiceSection : true,
			serviceSectionHeading : "Do not lose out on your customers at points-of-sale",
			serviceSectionTagLine : "Customers have embraced ecommerce with enthusiasm. Businesses have reaped the rewards has online buying has come of age with the opening of multiple avenues – marketplaces and mobile apps. Growing competition has also given rise to cost-per-click campaigns boosting ecommerce with digital advertising. At Niyati, we look at ecommerce has more than just a website-enabled-with-online-payments. We treat it as a lifeline for your business.",
			serviceSections: [
				{
					sectionImg  : "img/service/ecommerce/pic1.png",
					sectionDesc : "Our designers build responsive website design to ensure they look great on any device. We use best CMS platform according to needs of your ecommerce website. We use best CMS platform according to needs of your ecommerce website. We provide you with point of sale software that Fully integrates with your eCommerce website and is easy to use with minimal training. Now your website is converting visitors to customers, keep the traffic coming with our SEO/SMO campaigns and adwords. Once your new website is live, we provide high quality technical support."
				},
				{
					sectionImg  : "img/service/ecommerce/pic2.png",
					sectionDesc : "Custom-built or integrated on popular open-source platforms like Magento, Niyati has the expertise to build single/multi-store e-commerce websites as well as e-com marketplaces and portals. We work with businesses to identify alternative revenue models and sales channels through digital, social and mobile properties tied to e-commerce."
				},
				{
					sectionImg  : "img/service/ecommerce/pic3.png",
					sectionDesc : "Equipped with plastic cash, mobile money, online banking, gift cards and reward points, your customers are more than ready. Deliver at decisive moments with personalized communication and support process integrating smart CRM features that do not cost you through the roof."
				}
			],
			showWorksSection : false,
			works:[],
			showPoliciesSection : false,
			pricingPolicies:[],
			showFAQsection : false,
			FAQS:[]
		}
	]
};