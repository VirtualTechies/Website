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
        { 
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
        },
        { 
        	text     : "Services",
        	isMain   : true,
        	hasChild : false,
        	link     : "services.html",
        	childs   : []
        },
        { 
        	text     : "Blog",
        	isMain   : true,
        	hasChild : false,
        	link     : "blog.html",
        	childs   : []
        },
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
			imgPath:'img/feat-1.png'
		},
		{
			featureText:'<h4 class="bold">User Interface <span class="cyan-text">Design</span></h4>',
			featuredesc:'<p>We love to design, draw, think and, at the same time, be simple, clean and modern. Our aim is to transform mockups and wireframes into cutting edge designs with perfect look.</p>',
			imgPath:'img/feat-2.png'
		},
		{
			featureText:'<h4 class="bold">Front-end <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p class="">We build rich interfaces mainly based on Bootstrap3 mobile-first framework. We always provide high quality results using latest web technologies by doing clean and semantic hand coding.</p>',
			imgPath:'img/feat-3.png'
		},
		{
			featureText:'<h4 class="bold">Web Application <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p>We develop functional web applications based on AngularJS and ReactJS.</p>',
			imgPath:'img/feat-4.png'
		},
		{
			featureText:'<h4 class="bold">Mobile Application <span class="cyan-text">Development</span></h4>',
			featuredesc:'<p class="">We are also experienced in designing and building iOS and Android native applications with perfect and intuitive design and high performance backend functionality.</p>',
			imgPath:'img/feat-5.png'
		}
	]
};

var teamdata = {
	"culturedata" : [
		{
			imgPath : "img/ankits.png",
			name    : "Ankit Parekh",
			role	: "Creative Director"
		},
		{
			imgPath : "img/sagars.png",
			name    : "Sagar Patel",
			role	: "Strategy Director"
		},
		{
			imgPath : "img/gauravs.jpg",
			name    : "Gaurav Bhavsar",
			role	: "Technical Director"
		},
		{
			imgPath : "img/milinds.png",
			name    : "Milind Patel",
			role	: "Marketing Director"
		}
	]
};

var approachData = {
	process : [
		{
			name:"Agility",
			desc:"We believe in a seamless client partnership that connects us into a single unified team. We're not only agile in code but in discovery, planning and design."
		},
		{
			name:"Team",
			desc:"Our dedicated team model ensures that every project receives the meticulous attention and resource it deserves from our Strategists, Designers, Producers, Engineers, & Filmmakers."
		},
		{
			name:"Collaboration",
			desc:"Nothing we do is in isolation. Our process is extremely collaborative, leveraging our clients unique perspectives to activate our own expertise."
		},
		{
			name:"Iteration",
			desc:"Even if the first try is a hit, we believe that constant analysis and adjustment helps us realize the best possible version of whatever we're creating."
		},
		{
			name:"Results",
			desc:"More than how a product looks, we care about how it works. Our results-driven approach guides every aspect of the engagement from technical discovery to deployment."
		}
	],

	technologies : [
		{
			imgPath:"img/technologies/nodejs.png",
			name:"Node Js"
		},
		{
			imgPath:"img/technologies/angular.png",
			name:"Angular JS"
		},
		{
			imgPath:"img/technologies/mysql.png",
			name:"Mysql"
		},
		{
			imgPath:"img/technologies/postgres.png",
			name:"Postgres"
		},
		{
			imgPath:"img/technologies/wordpress.png",
			name:"Wordpress"
		},
		{
			imgPath:"img/technologies/php.png",
			name:"PHP"
		},
		{
			imgPath:"img/technologies/android.png",
			name:"Android"
		},
		{
			imgPath:"img/technologies/javascript.png",
			name:"Javascript"
		},
		{
			imgPath:"img/technologies/javascript.png",
			name:"JQuery"
		},
		{
			imgPath:"img/technologies/ios.png",
			name:"IOS"
		},
		{
			imgPath:"img/technologies/aws.png",
			name:"AWS"
		},
		{
			imgPath:"img/technologies/react.png",
			name:"ReactJS"
		},
		{
			imgPath:"img/technologies/mongodb.png",
			name:"MongoDB"
		}
	]
};
