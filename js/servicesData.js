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
		{
			storageServiceName : "website",
			mainImagePath  : "img/service/websiteDevelopment.jpg",
			serviceName    : "Website Development",
			serviceTagLine : "These days, when people need ‘something’ they ask the internet. So if your online presence isn’t up to scratch - you’re not even going to be considered. A good website will not only look awesome, it’ll build credibility and turn your visitors into customers.",
			serviceIntroduction : {
				heading : "Can your website lift twice its weight?",
				tagline : "We can beef up your web design and skyrocket conversions",
				desc 	: "In today’s fiercely competitive market, your website is more than just a pretty face. If it’s done right, your website will do all the “heavy lifting” for your business... from capturing web visitors' attention, to delivering a delightful digital experience, to converting your potential prospects into loyal customers. Unlike other web design firms who only care about how pretty your page looks, we specialize in websites that convert. We view web design as both an art and a science, and we have the technical skills and marketing know-how to build you a custom website that gets visitors to put their money in your pockets.",
				introductionImg : "img/services/Web_designing_icon.png"
			},
			showServiceSection : true,
			serviceSectionHeading : "Website is the online face of business",
			serviceSectionTagLine : "We know web changes continuously, so we are keeping our eyes on new stuff. We build websites that look beautiful on all different screen sizes, using clean code that search engines love. And yes, mobile first!",
			serviceSections: [
				{
					sectionImg  : "img/service/websiteDevelopment.jpg",
					sectionDesc : "Our website development process is five years in the making -- structured for efficiency and high-quality output. We start with a website specifications document, ensuring your requirements are outlined and communicated to our team at the start, and follow-through with extensive quality assurance testing."
				},
				{
					sectionImg  : "img/service/websiteDevelopment.jpg",
					sectionDesc : "We also use a unique framework to streamline our website development process. It’s called FusionCMS and it’s designed to be scalable, customizable, and secure. It helps ensure consistent output and allows us more bandwidth to support you."
				},
				{
					sectionImg  : "img/service/websiteDevelopment.jpg",
					sectionDesc : "Want to be kept in the loop? During the Development Phase, we’ll create a development environment for your work-in-progress website so you can monitor our progress in real-time, while having an available test environment for your website training. This is just one of the many ways we approach websites differently."
				}
			],
			showPlatformSection : true,
			platformsheading:"Technologies And Platforms Used for ",
			platforms:[
				{
					platformName:"Html",
					platformImg :"img/approach/technologies/javascript.png"
				},
				{
					platformName:"CSS",
					platformImg :"img/approach/technologies/javascript.png"
				},
				{
					platformName:"Javasrcipt",
					platformImg :"img/approach/technologies/javascript.png"
				},
				{
					platformName:"php",
					platformImg :"img/approach/technologies/php.png"
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
					policyName : "FREE",
					policyType : "Monthly",
					policyText : ["1 Project", "5 Team Members", "55 Personal Contacts", "5.000 Messages"],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub>  89/mo</span>",
					active     : false
				},
				{
					policyName : "PREMIUM",
					policyType : "Monthly",
					policyText : ["500 Projects", "5 Team Members", "55 Personal Contacts", "5.000 Messages"],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub> 89/mo</span>",
					active     : true
				},
				{
					policyName : "PLATINUM",
					policyType : "Monthly",
					policyText : ["1000 Projects", "5 Team Members", "55 Personal Contacts", "5.000 Messages"],
					policyPrice: "<span class='valign'><sub><i class='fa fa-rupee fa-2x'></i></sub> 89/mo</span>",
					active     : false
				}
			],
			showFAQsection : true,
			FAQS:[
				{
					question :"Can I cancel my subscription?",
					answer	 :"Yes, you can cancel and perform other actions on your subscriptions via the My Account page.",
					icon     :"fa-desktop"
				},
				{
					question :"Can I cancel my subscription?",
					answer	 :"Yes, you can cancel and perform other actions on your subscriptions via the My Account page.",
					icon     :"fa-desktop"
				},
				{
					question :"Can I cancel my subscription?",
					answer	 :"Yes, you can cancel and perform other actions on your subscriptions via the My Account page.",
					icon     :"fa-desktop"
				},
				{
					question :"Can I cancel my subscription?",
					answer	 :"Yes, you can cancel and perform other actions on your subscriptions via the My Account page.",
					icon     :"fa-desktop"
				}
			]
		}
	]
};