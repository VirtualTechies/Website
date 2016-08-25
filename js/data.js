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

var homedata = {
	introFeatures:[
		{
			featureText:'<h4 class="bold">Prototyping and Wireframing, <span class="cyan-text">UX Design</span></h4>',
			featuredesc:'<p>We collaboate with clients, understand their needs, follow web trends to prepare perfect prototypes and layouts with high level user experience, using advanced technologies and tools.</p>',
			imgPath:'img/home/features/feat-1.png'
		},
		{
			featureText:'<h4 class="bold">User Interface <span class="cyan-text">Design</span></h4>',
			featuredesc:'<p>We love to design, draw, think and, at the same time, be simple, clean and modern. Our aim is to transform mockups and wireframes into cutting edge designs with perfect look.</p>',
			imgPath:'img/home/features/feat-2.png'
		},
		{
			featureText:'<h4 class="bold">Front-end <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p class="">We build rich interfaces mainly based on Bootstrap3 mobile-first framework. We always provide high quality results using latest web technologies by doing clean and semantic hand coding.</p>',
			imgPath:'img/home/features/feat-3.png'
		},
		{
			featureText:'<h4 class="bold">Web Application <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p>We develop functional web applications based on AngularJS and ReactJS.</p>',
			imgPath:'img/home/features/feat-4.png'
		},
		{
			featureText:'<h4 class="bold">Mobile Application <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p class="">We are also experienced in designing and building iOS and Android native applications with perfect and intuitive design and high performance backend functionality.</p>',
			imgPath:'img/home/features/feat-5.png'
		}
	]
};

var teamdata = {
	"culturedata" : [
		{
			imgPath : "img/members/ankits.png",
			name    : "Ankit Parekh",
			role	: "Creative Director"
		},
		{
			imgPath : "img/members/sagars.png",
			name    : "Sagar Patel",
			role	: "Strategy Director"
		},
		{
			imgPath : "img/members/gauravs.jpg",
			name    : "Gaurav Bhavsar",
			role	: "Technical Director"
		},
		{
			imgPath : "img/members/milinds.png",
			name    : "Milind Patel",
			role	: "Marketing Director"
		}
	],

	"memberdata" : [
		{
			name:"Ankit Parekh",
			tagline:"Let’s introduce you to our frontman of the front-end.",
			mailId:"ankit77parekh@gmail.com",
			imgPath:"img/members/pics/ankit.jpg",
			headingLine:"Sculpt Online Magic",
			role:"Creative Director",
			story:"Ankit is an enthusiastic, ambitious, and highly sociable front-end developer. Developing fast and efficient websites is his pride and joy. Crafting a pixel perfect and structured website is what gets him all worked up. Tom has an engineer's drive to build bridges across the gap between front- and back-end development.",
			fbId:"",
			skypeId:"",
			linkedinId:"",
			twitterId:"",
			googleplusId:"",
			happyPeople:"Every day I work on improving the skills that I need for building advanced and user centred websites. I feel building fast and beautiful websites is a key aspect of making happy people."
		},
		{
			name:"Sagar Patel",
			tagline:"Let's introduce you to our captain of the outside world.",
			mailId:"ankit77parekh@gmail.com",
			imgPath:"img/members/pics/sagar.jpg",
			headingLine:"Kickstart Ideas",
			role:"Strategy Director",
			story:"As one of the founding fathers and strategy director of Virtual Techies, Sagar helps clients to get what they need, which is not necessarily what they want. He is infinitely curious, open-minded and experienced, which makes him a solid sparring partner for new digital projects.",
			fbId:"",
			skypeId:"",
			linkedinId:"",
			twitterId:"",
			googleplusId:"",
			happyPeople:"I believe the Internet allows people to exploit new opportunities, in life and in business. Together with the Virtual Techies tribe I see it as our mission to make the journey to these opportunities pleasant and challenging."
		},
		{
			name:"Gaurav Bhavsar",
			tagline:"Let’s introduce you to our professor development.",
			mailId:"ankit77parekh@gmail.com",
			imgPath:"img/members/pics/gaurav.jpg",
			headingLine:"Make Everything Work, Always",
			role:"Technical Director",
			story:"Gaurav is one of the partners and the technical chief of the Virtual Techies Tribe. As a professor of development, Gaurav knows everything - literally everything - about the parts of digital products most people never get to see. He spends most of his time working 'under the hood' of the products we create. With his solid vision on technical processes his goal is to inspire the Rodesk developers and determine the long term technical strategy.",
			fbId:"",
			skypeId:"",
			linkedinId:"",
			twitterId:"",
			googleplusId:"",
			happyPeople:"I love technology. My main goal is using the power of technology to empower people, making their lives easier and more enjoyable. If I manage to make people smile along the way, that makes me a happier person myself."
		},
		{
			name:"Milind Patel",
			tagline:"Let’s introduce you to our Marketing core.",
			mailId:"ankit77parekh@gmail.com",
			imgPath:"img/members/pics/milind.jpg",
			headingLine:"Create Online Aesthetics",
			role:"Marketing Director",
			story:"Milind is the marketing head and director at Virtual Techies, bringing over a decade of experience designing brand identities, data visualizations, online experiences and products to the table. He directs his designs at establishing tangible online worlds and draws his inspiration from urban habitats and mega-cities.",
			fbId:"",
			skypeId:"",
			linkedinId:"",
			twitterId:"",
			googleplusId:"",
			happyPeople:"Every day when I get to the studio, I have the privilege of directing and shaping our creative team. We create intuitive digital products that visitors can relate to. My main goal is seeing a twinkle in the eyes of our team members and the visitors of the worlds we create together."
		}
	]
};

var approachData = {
	process : [
		{
			name:"ANALYSIS",
			desc:"The first step is always about information gathering, identifying things like the website purpose, goals and target audience.",
			icon : "fa-search"
		},
		{
			name:"PLANNING",
			desc:"The second step is planning. A plan includes a definition of the site map, structure and technologies that we're about to use.",
			icon : "fa-sitemap"
		},
		{
			name:"DESIGN",
			desc:"Not only do we focus on wireframe models and the visual styles in this stage but also usability	of the user interface for the best possible user experience.",
			icon : "fa-paint-brush"
		},
		{
			name:"CONTENT",
			desc:"A very important part of the process is choosing the right text, photos or videos. All optimized not only for visitors but for search engines.",
			icon : "fa-file-text-o"
		},
		{
			name:"DEVELOPMENT",
			desc:"Here we actually create the website using the hypertext mark up language and cascading style sheets with some help from databases and other technologies as well.",
			icon : "fa-tasks"
		},
		{
			name:"TESTING",
			desc:"We test all the technical features like coded scripts, compatibility with major	browser but we also ask ourselves if the website really fulfills it’s purpose.",
			icon : "fa-check-square-o"
		},
		{
			name:"DEPLOYMENT",
			desc:"After we launch the site our job is definitely not done yet, we always monitor what’s happening after the start, enabling us to fix any possible deficiencies.",
			icon : "fa-laptop"
		}
	],

	technologies : [
		{
			imgPath:"img/approach/technologies/nodejs.png",
			name:"Node Js"
		},
		{
			imgPath:"img/approach/technologies/angular.png",
			name:"Angular JS"
		},
		{
			imgPath:"img/approach/technologies/mysql.png",
			name:"Mysql"
		},
		{
			imgPath:"img/approach/technologies/postgres.png",
			name:"Postgres"
		},
		{
			imgPath:"img/approach/technologies/wordpress.png",
			name:"Wordpress"
		},
		{
			imgPath:"img/approach/technologies/php.png",
			name:"PHP"
		},
		{
			imgPath:"img/approach/technologies/android.png",
			name:"Android"
		},
		{
			imgPath:"img/approach/technologies/javascript.png",
			name:"Javascript"
		},
		{
			imgPath:"img/approach/technologies/javascript.png",
			name:"JQuery"
		},
		{
			imgPath:"img/approach/technologies/ios.png",
			name:"IOS"
		},
		{
			imgPath:"img/approach/technologies/aws.png",
			name:"AWS"
		},
		{
			imgPath:"img/approach/technologies/react.png",
			name:"ReactJS"
		},
		{
			imgPath:"img/approach/technologies/mongodb.png",
			name:"MongoDB"
		}
	],

	choose: [
		{
			heading:"Dedicated Designers",
			desc:"From mock-ups to development, you will be assigned a dedicated web design specialist who will work alongside you and be on hand to answer any questions throughout your project.",
			icon:"fa-users"
		},
		{
			heading:"Built With SEO in Mind",
			desc:"Whether you plan to have SEO or not, we will build your website to be as search engine friendly as possible, so if you change your mind there won't be any additional costs.",
			icon:"fa-cog"
		},
		{
			heading:"100% Open Source",
			desc:"We only use open source software, meaning you won't end up tied to an agencies proprietary software and their sky high maintenance fees. It also means that you own 100% of your website.",
			icon:"fa-terminal"
		},
		{
			heading:"Responsive Design",
			desc:"We design and develop all our websites to be responsive, which means your websites will look universally great on a smart phone, tablet and desktop computer.",
			icon:"fa-tablet"
		},
		{
			heading:"We're Experienced",
			desc:"With over 700 projects under our belt and 45 years combined experience we are committed to your success whether you're a start up business or a Fortune 500 company.",
			icon:"fa-thumbs-up"
		},
		{
			heading:"We're Affordable",
			desc:"We believe that good work isn't cheap and cheap work isn't good. Now we're not the cheapest, but we're not the most expensive either. We are however,the best bang for your buck.",
			icon:"fa-rupee"
		}
	]
};

var serviceData = {
	services : [
		{
			heading:'<h4 class="bold">HELP! I NEED A <span class="cyan-text">WEBSITE</span></h4>',
			desc:"A well built website should generate revenue, strengthen your brand and relieve pressure from your customer support. But the demands and complexity of modern websites have risen enormously in the past few years, leaving many outdated and broken. Let’s try to fix that.",
			img : "img/services/Web_designing_icon.png"
		},
		{
			heading:'<h4 class="bold">HELP! I NEED AN <span class="cyan-text">APP</span></h4>',
			desc:"We have created everything from corporate apps to multiplayer games to virtual pets. We have found that the real challenge isn’t designing or building the functionalities but knowing which ones give actual value - and how to distribute the man hours. We have been through the process countless times and we will get you through too.",
			img : "img/services/app_development1.png"
		},
		{
			heading:'<h4 class="bold">HELP! I NEED A <span class="cyan-text">DIGITAL PARTNER</span></h4>',
			desc:"We work in partnership with brands, agencies, public organizations and anyone else who is looking for specialists to complete their skill set. This allows us to be the best at what we do and do what we enjoy the most. Are you looking for a partnership? You have come to the right place.",
			img : "img/services/digital.jpg"
		},
		{
			heading:'<h4 class="bold">HELP! I NEED A <span class="cyan-text">ECOMMERCE</span> SYSTEM</h4>',
			desc:"Online retail through integrated platforms and highly engaging experiences.",
			img : "img/services/ecomm.png"
		},
		{
			heading:'<h4 class="bold">HELP! I NEED A <span class="cyan-text">WEB</span> Application</h4>',
			desc:"Intelligent systems and simpler experiences through digital platforms.",
			img : "img/services/web_Application_Development.jpg"
		},
		{
			heading:'<h4 class="bold">HELP! I NEED AN AWESOME <span class="cyan-text">DESIGN AND USER EXPERIENCE</span></h4>',
			desc:"Form and function through high fidelity interfaces and human experiences.",
			img : "img/services/responsive_dev.jpg"
		}
	]
};
