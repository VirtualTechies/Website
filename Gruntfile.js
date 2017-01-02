module.exports = function(grunt) {
	
	grunt.option( "oldver" , "0.0.1");
	grunt.option( "newver" , "0.0.1");

	// configure the tasks
	grunt.initConfig({
		//  Copy
		copy: {
			dist: { cwd: 'fonts', src: [ '**' ], dest: 'dist/fonts', expand: true },
		},

		//  Jasmine
		jasmine: {
			components: {
				src: [
					'bin/cool.js'
				],
				options: {
					vendor: [
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
					],
					styles     : 'bin/cool.css',
					specs      : 'tests/spec/**/*Spec.js',
					helpers    : 'tests/spec/helper.js',
					keepRunner : true,
					//helpers: 'test/spec/*.js'
				}
			}
		},

		// Sass Tasks
		sass: {
			expanded: {
				options: {
					style: 'compact',
					sourcemap:'none'
				},
				files: {
					// Non-minified Main Files
					'dist/css/cool.css'        : 'scss/cool.scss',					
					'dist/css/cool-reboot.css' : 'scss/cool-reboot.scss',
					'dist/css/cool-flex.css'   : 'scss/cool-flex.scss',
					'dist/css/cool-grid.css'   : 'scss/cool-grid.scss',

					// version files
					'dist/css/light/cool.light.css' : 'scss/cool.light.scss',					
					'dist/css/pro/cool.pro.css' 	: 'scss/cool.pro.scss',
					'dist/css/full/cool.full.css'   : 'scss/cool.full.scss',
				}
			},

			expanded_Individuals:{
				options: {
					style: 'compact',
					sourcemap:'none'
				},
				files: [{
					expand: true,
					cwd: 'dist/assets/sass/',
					src: [ '**/*.scss' ],
					dest: 'dist/assets/css/',
					ext: '.css'
				}]
			},

			min: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: { 
					// Minified Main Files
					'dist/css/cool.min.css'        : 'scss/cool.scss',
					'dist/css/cool-reboot.min.css' : 'scss/cool-reboot.scss',
					'dist/css/cool-flex.min.css'   : 'scss/cool-flex.scss',
					'dist/css/cool-grid.min.css'   : 'scss/cool-grid.scss',
					'dist/css/gh-colors.min.css'   : 'scss/gh-colors.scss',

					// version files
					'dist/css/light/cool.light.min.css' : 'scss/cool.light.scss',					
					'dist/css/pro/cool.pro.min.css' 	: 'scss/cool.pro.scss',
					'dist/css/full/cool.full.min.css'   : 'scss/cool.full.scss',
				}
			},
			// ind
					
			min_Individals:{
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: 'dist/assets/sass/',
					src: [ '**/*.scss' ],
					dest: 'dist/assets/css/minified/',
					ext: '.min.css'
				}]
			},

			// Compile website css
			website: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'resources/css/site.min.css' : 'scss/ghpages-cool.scss'
				}
			},

			// Compile bin css
			bin: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'bin/cool.css' : 'sass/cool.scss'
				}
			}
		},

		cssnano: {
			options: {
				sourcemap: false,
				transforms:{
					discardComments: {
						removeAll: true
					},
					discardDuplicates:true,
					core:true,
					convertValues:true,
					discardEmpty:true,
					mergeLonghand:true,
					mergeRules:true,
					minifyFontValues:true,
					minifyGradients:true,
					minifyParams:true,
					minifySelectors:true,
					uniqueSelectors:true,
					mergeIdents :true
				}
			},
			dist: {
				files: {
					'dist/css/cool.min.css'        : 'dist/css/cool.min.css',
					'dist/css/cool-reboot.min.css' : 'dist/css/cool-reboot.min.css',
					'dist/css/cool-flex.min.css'   : 'dist/css/cool-flex.min.css',
					'dist/css/cool-grid.min.css'   : 'dist/css/cool-grid.min.css',
					'dist/css/gh-colors.min.css'   : 'dist/css/gh-colors.min.css',
					'resources/css/site.min.css'   : 'resources/css/site.min.css',

					// version files
					'dist/css/light/cool.light.min.css' : 'dist/css/light/cool.light.min.css',
					'dist/css/pro/cool.pro.min.css'   	: 'dist/css/pro/cool.pro.min.css',
					'dist/css/full/cool.full.min.css'   : 'dist/css/full/cool.full.min.css'
				}
			},

			assets: {
				files: [{
					expand : true,
					cwd    : 'dist/css/assets/minified',
					src    : ['*min.css'],
					dest   : 'dist/css/assets/minified',
					ext    : '.min.css'
				}]
			},

			website: {
				files: {
					'resources/css/site.min.css' : 'resources/css/site.min.css'
				}
			}
		},

		// PostCss Autoprefixer
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: [
							'last 2 versions',
							'Chrome >= 30',
							'Firefox >= 30',
							'ie >= 10',
							'Safari >= 8']
					})
				]
			},
			expended: {
				src: 'dist/css/cool.css'
			},
			min: {
				src: 'dist/css/cool.min.css'
			},
			gh: {
				src: 'css/ghpages-cool.css'
			},
			bin: {
				src: 'bin/cool.css'
			}
		},

		// Browser Sync integration
		browserSync: {
			bsFiles: ["bin/*.js", "bin/*.css", "!**/node_modules/**/*"],
			options: {
				server: {
					baseDir: "./" // make server from root dir
				},
				port: 8000,
				ui: {
					port: 8080,
					weinre: {
						port: 9090
					}
				},
				open: false
			}
		},

		//  Concat
		concat: {

			options: {
				separator: '\n/* ================================= */\n\n\n'
			},
		
			dist: {
				// the files to concatenate
				src: [
					"js/initial.js",
					"js/jquery.easing.1.3.js",
					"js/alerts.js",
					"js/animation.js",
					"js/velocity.min.js",
					"js/hammer.min.js",
					"js/jquery.hammer.js",
					"js/global.js",
					"js/collapsible.js",
					"js/dropdown.js",
					"js/modal.js",
					"js/materialbox.js",
					"js/parallax.js",
					"js/tabs.js",
					"js/tooltip.js",
					"js/waves.js",
					"js/toasts.js",
					"js/sideNav.js",
					"js/scrollspy.js",
					"js/forms.js",
					"js/slider.js",
					"js/cards.js",
					"js/chips.js",
					"js/pushpin.js",
					"js/buttons.js",
					"js/transitions.js",
					"js/scrollFire.js",
					"js/date_picker/picker.js",
					"js/date_picker/picker.date.js",
					"js/character_counter.js",
					"js/carousel.js",
				],
				// the location of the resulting JS file
				dest: 'dist/js/cool.js'
			},
		
			temp: {
				// the files to concatenate
				src: [
					"js/initial.js",
					"js/jquery.easing.1.3.js",
					"js/animation.js",
					"js/alerts.js",
					"js/velocity.min.js",
					"js/hammer.min.js",
					"js/jquery.hammer.js",
					"js/global.js",
					"js/collapsible.js",
					"js/dropdown.js",
					"js/modal.js",
					"js/materialbox.js",
					"js/parallax.js",
					"js/tabs.js",
					"js/tooltip.js",
					"js/waves.js",
					"js/toasts.js",
					"js/sideNav.js",
					"js/scrollspy.js",
					"js/forms.js",
					"js/slider.js",
					"js/cards.js",
					"js/chips.js",
					"js/pushpin.js",
					"js/buttons.js",
					"js/transitions.js",
					"js/scrollFire.js",
					"js/date_picker/picker.js",
					"js/date_picker/picker.date.js",
					"js/character_counter.js",
					"js/carousel.js",
				],
				// the location of the resulting JS file
				dest: 'temp/js/cool.js'
			},

			// concating cool website files needed during first load
			websiteInit : {
				options:{
					separator: '\n\n',
					stripBanners: false
				},
				src:[
					'resources/plugins/jquery/jquery-2.1.1.min.js',
					'resources/plugins/fakeLoader/fakeloader.min.js',
					'resources/plugins/prism/prism.min.js',
					'resources/js/init.js'
				],
				dest: 'resources/js/websiteInitialization.min.js'
			},

			allPagePlugins : {
				options:{
					separator: '\n\n\n',
					stripBanners: false
				},
				src:[
					'resources/plugins/lazyload/lazyloadxt.min.js',
					'resources/plugins/fileSaver/fileSaver.min.js',
					'resources/plugins/matchHeight/jquery.matchHeight.min.js',
					'resources/plugins/mobileDetect/mobile-detect.min.js',
					'resources/plugins/jszip/jszip.min.js',
				],
				dest: 'resources/js/allPagePlugins.js'
			},

			websiteLoadPageSpecific: {
				options:{
					separator: '\n\n\n',
					stripBanners: false
				},
				src:[
					'resources/js/website/source/cool.js',
					'resources/js/website/source/cool.config.js',
					'resources/js/website/source/cool.events.js',
					'resources/js/website/source/cool.plugins.js',
					'resources/js/website/source/cool.ui.js'
				],
				dest: 'resources/js/website/cool.min.js'
			}
		},

		//  Uglify
		uglify: {
			
			dist: {
				options: {
					mangle: false,
					compress: true,
					beautify: false
				},
				files: {
					'dist/js/cool.min.js' : ['dist/js/cool.js']
				}
			},

			debug:{
				options: {
					mangle: false,
					compress: false,
					beautify: true
				},
				files: {
					'dist/js/cool.min.js' : ['dist/js/cool.js']
				}
			},

			bin: {
				files: {
					'bin/cool.js': ['temp/js/cool.js']
				}
			},

			extras: {
				files: {
					'extras/noUiSlider/nouislider.min.js': ['extras/noUiSlider/nouislider.js']
				}
			},

			initialJS: {
				files: {
					'resources/js/init.js': ['resources/js/website/source/init.js']
				}
			},

			initialJSDebug: {
				options: {
					mangle: false,
					compress: false,
					beautify: true
				},
				files: {
					'resources/js/init.js': ['resources/js/website/source/init.js']
				}
			},

			websiteInit : {
				files: {
					'resources/js/websiteInitialization.min.js': ['resources/js/websiteInitialization.min.js']
				}
			},

			websiteInitDebug : {
				options: {
					mangle: false,
					compress: false,
					beautify: true
				},
				files: {
					'resources/js/websiteInitialization.min.js': ['resources/js/websiteInitialization.min.js']
				}
			},

			website: {
				files: {
					'resources/js/cool.website.js': ['resources/js/website/cool.min.js']
				}
			},

			websiteDebug: {
				options: {
					mangle: false,
					compress: false,
					beautify: true
				},
				files: {
					'resources/js/cool.website.js': ['resources/js/website/cool.min.js']
				}
			},

			websitePageWiseJS:{
				files: {
					'resources/js/website/cool.homePage.min.js'		: ['resources/js/website/source/cool.homePage.js'],
					'resources/js/website/cool.cardsPage.min.js'	: ['resources/js/website/source/cool.cardsPage.js'],
					'resources/js/website/cool.colorsPage.min.js'	: ['resources/js/website/source/cool.colorsPage.js'],
					'resources/js/website/cool.componentPage.min.js': ['resources/js/website/source/cool.componentPage.js'],
					'resources/js/website/cool.toastsPage.min.js'	: ['resources/js/website/source/cool.toastsPage.js'],
					'resources/js/website/cool.tooltipPage.min.js'	: ['resources/js/website/source/cool.tooltipPage.js']
				}
			},

			websitePageWiseJSDebug:{
				options: {
					mangle: false,
					compress: false,
					beautify: true
				},
				files: {
					'resources/js/website/cool.homePage.min.js'		: ['resources/js/website/source/cool.homePage.js'],
					'resources/js/website/cool.cardsPage.min.js'	: ['resources/js/website/source/cool.cardsPage.js'],
					'resources/js/website/cool.colorsPage.min.js'	: ['resources/js/website/source/cool.colorsPage.js'],
					'resources/js/website/cool.componentPage.min.js': ['resources/js/website/source/cool.componentPage.js'],
					'resources/js/website/cool.toastsPage.min.js'	: ['resources/js/website/source/cool.toastsPage.js'],
					'resources/js/website/cool.tooltipPage.min.js'	: ['resources/js/website/source/cool.tooltipPage.js']
				}
			},

			downloadContent: {
				options: {
					mangle:false,
					compress:false,
					beautify:true,
					report:'none'
				},
				files: [{
					expand: true,
					cwd: 'js/',
					src: [ '*.js' ],
					dest: 'dist/assets/js/',
					ext: '.js'
				}]
			},

			downloadContentMinify: {
				options: {
					mangle:false,
					compress:true,
					beautify:false,
					report:'min'
				},
				files: [{
					expand: true,
					cwd: 'js/',
					src: [ '*.js' ],
					dest: 'dist/assets/js/minified/',
					ext: '.min.js'
				}]
			},
		},


		//  Compress
		compress: {
			main: {
				options: {
					archive: 'bin/cool.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'cool/'},
					{ expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: 'cool/'},
				]
			},

			light:{
				options: {
					archive: 'bin/cool.light.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'cool-light/'},
					{ expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: 'cool/'},
				]
			},

			pro:{
				options: {
					archive: 'bin/cool.pro.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'cool-pro/'},
					{ expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: 'cool/'},
				]
			},

			full:{
				options: {
					archive: 'bin/cool.full.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'cool-full/'},
					{ expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: 'cool/'},
				]
			},

			src: {
				options: {
					archive: 'bin/cool-src.zip',
					level: 6
				},
				files:[
					{expand: true, cwd: 'fonts/', src: ['**/*'], dest: 'cool-src/fonts/'},
					{expand: true, cwd: 'sass/', src: ['cool.scss'], dest: 'cool-src/sass/'},
					{expand: true, cwd: 'sass/', src: ['components/**/*'], dest: 'cool-src/sass/'},
					{expand: true, cwd: 'js/', src: [
						"initial.js",
						"alerts.js",
						"jquery.easing.1.3.js",
						"animation.js",
						"velocity.min.js",
						"hammer.min.js",
						"jquery.hammer.js",
						"global.js",
						"collapsible.js",
						"dropdown.js",
						"modal.js",
						"materialbox.js",
						"parallax.js",
						"tabs.js",
						"tooltip.js",
						"waves.js",
						"toasts.js",
						"sideNav.js",
						"scrollspy.js",
						"forms.js",
						"slider.js",
						"cards.js",
						"chips.js",
						"pushpin.js",
						"buttons.js",
						"transitions.js",
						"scrollFire.js",
						"date_picker/picker.js",
						"date_picker/picker.date.js",
						"character_counter.js",
						"carousel.js",
					], dest: 'cool-src/js/'},
					{expand: true, cwd: 'dist/js/', src: ['**/*'], dest: 'cool-src/js/bin/'},
					{expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: 'cool-src/'}

				]
			},

			starter_template: {
				options: {
					archive: 'templates/starter-template.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'starter-template/'},
					{ expand: true, cwd: 'templates/starter-template/', src: ['index.html', 'LICENSE'], dest: 'starter-template/'},
					{ expand: true, cwd: 'templates/starter-template/css', src: ['style.css'], dest: 'starter-template/css'},
					{ expand: true, cwd: 'templates/starter-template/js', src: ['init.js'], dest: 'starter-template/js'}

				]
			},

			parallax_template: {
				options: {
					archive: 'templates/parallax-template.zip',
					level: 6
				},
				files:[
					{ expand: true, cwd: 'dist/', src: ['**/*'], dest: 'parallax-template/'},
					{ expand: true, cwd: 'templates/parallax-template/', src: ['index.html', 'LICENSE', 'background1.jpg', 'background2.jpg', 'background3.jpg'], dest: 'parallax-template/'},
					{ expand: true, cwd: 'templates/parallax-template/css', src: ['style.css'], dest: 'parallax-template/css'},
					{ expand: true, cwd: 'templates/parallax-template/js', src: ['init.js'], dest: 'parallax-template/js'}
				]
			}
		},

		//  Clean
		clean: {
			temp: {
				src: [ 'temp/' ]
			},
		},

		//  pug
		pug: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},

				files: {
					
					// main HTML Files
					"index.html"			: "templates/index.pug",
					"about.html"			: "templates/about.pug",
					"getting-started.html"  : "templates/getting-started.pug",
					"javascript.html"       : "templates/javascript.pug",
					"mobile.html"           : "templates/mobile.pug",
					"customize.html"        : "templates/customize.pug",
					"parallax-demo.html"    : "templates/partials/javascript/parallax-demo.pug",

					// css HTML Files
					"css/css.html"              : "templates/partials/css/css.pug",
					"css/color.html"  			: "templates/partials/css/color.pug",
					"css/grid.html"  			: "templates/partials/css/grid.pug",
					"css/flexbox.html"			: "templates/partials/css/flexbox.pug",
					"css/media_content.html"	: "templates/partials/css/media.pug",
					"css/gradients.html"		: "templates/partials/css/gradients.pug",
					"css/shadow.html"			: "templates/partials/css/shadow.pug",
					"css/spacers.html"			: "templates/partials/css/spacers.pug",
					"css/table.html"			: "templates/partials/css/table.pug",
					"css/typography.html"		: "templates/partials/css/typography.pug",
					"css/display.html"			: "templates/partials/css/display.pug",
					"css/text.html"				: "templates/partials/css/text.pug",
					"css/border.html"			: "templates/partials/css/border.pug",
					"css/utilities.html"		: "templates/partials/css/utilities.pug",

					// components HTML Files
					"components/alerts.html"       : "templates/partials/components/alerts.pug",
					"components/breadcrumb.html"   : "templates/partials/components/breadcrumb.pug",
					"components/buttons.html"      : "templates/partials/components/buttons.pug",
					"components/button_group.html" : "templates/partials/components/button_group.pug",
					"components/cards.html"		   : "templates/partials/components/cards.pug",
					"components/chips.html"		   : "templates/partials/components/chips.pug",
					"components/collections.html"  : "templates/partials/components/collections.pug",
					"components/footer.html"  	   : "templates/partials/components/footer.pug",
					"components/forms.html"  	   : "templates/partials/components/forms.pug",
					"components/icons.html"  	   : "templates/partials/components/icons.pug",
					"components/navbar.html"  	   : "templates/partials/components/navbar.pug",
					"components/pagination.html"   : "templates/partials/components/pagination.pug",
					"components/preloader.html"    : "templates/partials/components/preloader.pug",
					
					// javascript HTML Files
					"javascript/carousel.html"     : "templates/partials/javascript/carousel.pug",
					"javascript/collapsible.html"  : "templates/partials/javascript/collapsible.pug",
					"javascript/toasts.html"       : "templates/partials/javascript/toasts.pug",
					"javascript/tooltip.html"      : "templates/partials/javascript/tooltip.pug",
					"javascript/dropdown.html" 	   : "templates/partials/javascript/dropdown.pug",
					"javascript/media.html"		   : "templates/partials/javascript/media.pug",
					"javascript/modals.html"	   : "templates/partials/javascript/modals.pug",
					"javascript/parallax.html"     : "templates/partials/javascript/parallax.pug",
					"javascript/pushpin.html"  	   : "templates/partials/javascript/pushpin.pug",
					"javascript/scrollfire.html"   : "templates/partials/javascript/scrollfire.pug",
					"javascript/scrollspy.html"    : "templates/partials/javascript/scrollspy.pug",
					"javascript/sidenav.html"  	   : "templates/partials/javascript/sidenav.pug",
					"javascript/tabs.html"   	   : "templates/partials/javascript/tabs.pug",
					"javascript/transitions.html"  : "templates/partials/javascript/transitions.pug",
					"javascript/waves.html"    	   : "templates/partials/javascript/waves.pug"
				}
			}
		},

		// minify html Files
		htmlmin: {
			prod: {
				options: {
					removeComments: false,
					collapseWhitespace: true
				},
				files: {
					"index.html" 			 : "index.html",
					"about.html" 			 : "about.html",
					"getting-started.html" 	 : "getting-started.html",
					"components.html"		 : "components.html",

					//minify  css html pages
					"css/css.html"			 : "css/css.html",
					"css/color.html"		 : "css/color.html",
					"css/display.html"		 : "css/display.html",
					"css/flexbox.html"		 : "css/flexbox.html",
					"css/gradients.html"	 : "css/gradients.html",
					"css/grid.html"			 : "css/grid.html",
					"css/media_content.html" : "css/media_content.html",
					"css/shadow.html"		 : "css/shadow.html",
					"css/spacers.html"		 : "css/spacers.html",
					"css/table.html"		 : "css/table.html",
					"css/text.html"		 	 : "css/text.html",
					"css/typography.html"	 : "css/typography.html",
					"css/utilities.html"	 : "css/utilities.html",

					//minify components html pages
					"components/alerts.html"		 : "components/alerts.html",
					"components/breadcrumb.html"	 : "components/breadcrumb.html",
					"components/button_group.html"   : "components/button_group.html",
					"components/buttons.html"		 : "components/buttons.html",
					"components/cards.html"	 	 	 : "components/cards.html",
					"components/chips.html"			 : "components/chips.html",
					"components/collections.html"  	 : "components/collections.html",
					"components/footer.html"		 : "components/footer.html",
					"components/forms.html"		 	 : "components/forms.html",
					"components/icons.html"		 	 : "components/icons.html",
					"components/navbar.html"		 : "components/navbar.html",
					"components/pagination.html"	 : "components/pagination.html",
					"components/preloader.html"	 	 : "components/preloader.html",

					// javascript HTML Files
					"javascript/carousel.html"     : "javascript/carousel.html",
					"javascript/collapsible.html"  : "javascript/collapsible.html",
					"javascript/toasts.html"       : "javascript/toasts.html",
					"javascript/tooltip.html"      : "javascript/tooltip.html",
					"javascript/dropdown.html" 	   : "javascript/dropdown.html",
					"javascript/media.html"		   : "javascript/media.html",
					"javascript/modals.html"	   : "javascript/modals.html",
					"javascript/parallax.html"     : "javascript/parallax.html",
					"javascript/pushpin.html"  	   : "javascript/pushpin.html",
					"javascript/scrollfire.html"   : "javascript/scrollfire.html",
					"javascript/scrollspy.html"    : "javascript/scrollspy.html",
					"javascript/sidenav.html"  	   : "javascript/sidenav.html",
					"javascript/tabs.html"   	   : "javascript/tabs.html",
					"javascript/transitions.html"  : "javascript/transitions.html",
					"javascript/waves.html"    	   : "javascript/waves.html"
 				}
			}
		},

		//  Watch Files
		watch: {
			pug: {
				files: ['jade/**/*'],
				tasks: ['jade_compile'],
				options: {
					interrupt: false,
					spawn: false,
				},
			},

			js: {
				files: [ "js/**/*", "!js/init.js"],
				tasks: ['js_compile'],
				options: {
					interrupt: false,
					spawn: false,
				},
			},

			sass: {
				files: ['sass/**/*'],
				tasks: ['sass_compile'],
				options: {
					interrupt: false,
					spawn: false,
				},
			}
		},

		//  Concurrent
		concurrent: {
			options: {
				logConcurrentOutput: true,
				limit: 10,
			},
			monitor: {
				tasks: ["watch:jade", "watch:js", "watch:sass", "notify:watching", 'server']
			},
		},


		//  Notifications
		notify: {
			watching: {
				options: {
					enabled: true,
					message: 'Watching Files!',
					title: "cool", // defaults to the name in package.json, or will use project directory's name
					success: true, // whether successful grunt executions should be notified automatically
					duration: 1 // the duration of notification in seconds, for `notify-send only
				}
			},

			sass_compile: {
				options: {
					enabled: true,
					message: 'Sass Compiled!',
					title: "cool",
					success: true,
					duration: 1
				}
			},

			js_compile: {
				options: {
					enabled: true,
					message: 'JS Compiled!',
					title: "cool",
					success: true,
					duration: 1
				}
			},

			jade_compile: {
				options: {
					enabled: true,
					message: 'Pug Compiled!',
					title: "cool",
					success: true,
					duration: 1
				}
			},

			server: {
				options: {
					enabled: true,
					message: 'Server Running!',
					title: "cool",
					success: true,
					duration: 1
				}
			}
		},

		// Text Replace
		replace: {
			version: { // Does not edit README.md
				src: [
					'bower.json',
					'package.json',
					'package.js',
					'jade/**/*.html'
				],
				overwrite: true,
				replacements: [{
					from: grunt.option( "oldver" ),
					to: grunt.option( "newver" )
				}]
			},
			readme: { // Changes README.md
				src: [
					'README.md'
				],
				overwrite: true,
				replacements: [{
					from: 'Current Version : v'+grunt.option( "oldver" ),
					to: 'Current Version : v'+grunt.option( "newver" )
				}]
			},
		},

		// Create Version Header for files
		usebanner: {
			release: {
				options: {
					position: 'top',
					banner: "/*!\n * cool v"+ grunt.option( "newver" ) +" (http://coolcss.com)\n * Copyright 2014-2015 cool\n * MIT License (https://raw.githubusercontent.com/Dogfalo/cool/master/LICENSE)\n */",
					linebreak: true
				},
				files: {
					src: [ 'dist/css/*.css', 'dist/js/*.js']
				}
			}
		},

		// Rename files
		rename: {
			rename_src: {
				src: 'bin/cool-src'+'.zip',
				dest: 'bin/cool-src-v'+grunt.option( "newver" )+'.zip',
				options: {
					ignore: true
				}
			},
			rename_compiled: {
				src: 'bin/cool'+'.zip',
				dest: 'bin/cool-v'+grunt.option( "newver" )+'.zip',
				options: {
					ignore: true
				}
			},
			rename_light: {
				src: 'bin/cool.light'+'.zip',
				dest: 'bin/cool.light-v'+grunt.option( "newver" )+'.zip',
				options: {
					ignore: true
				}
			},
			rename_pro: {
				src: 'bin/cool.pro'+'.zip',
				dest: 'bin/cool.pro-v'+grunt.option( "newver" )+'.zip',
				options: {
					ignore: true
				}
			},
			rename_full: {
				src: 'bin/cool.full'+'.zip',
				dest: 'bin/cool.full-v'+grunt.option( "newver" )+'.zip',
				options: {
					ignore: true
				}
			}
		},

		// Removes console logs
		removelogging: {
			source: {
				src: ["js/**/*.js", "!js/velocity.min.js"],
				options: {
					// see below for options. this is optional.
				}
			}
		},
	});

	// load the tasks
	// grunt.loadNpmTasks('grunt-gitinfo');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-cssnano');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-rename');
	grunt.loadNpmTasks('grunt-remove-logging');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-postcss');
	
	// define the tasks
	grunt.registerTask(
		'release',[
			'lint',
			'copy',
			'pug',
			'sass:expanded',
			'sass:min',
			'cssnano',
			'postcss:expended',
			'postcss:min',
			'concat:dist',
			'uglify:dist',
			'uglify:extras',
			'usebanner:release',
			'compress:main',
			'compress:src',
			'compress:starter_template',
			'compress:parallax_template',
			'replace:version',
			'replace:readme',
			'rename:rename_src',
			'rename:rename_compiled'
		]
	);

	grunt.registerTask(
		'website_Html_Compile_Minification', [
			'pug',
			'htmlmin'
		]
	);

	grunt.registerTask(
		'website_Scripts_MinificationInDevelopMode', [
			'uglify:initialJS',
			'concat:websiteInit',
			'uglify:websiteInit',
			'concat:websiteLoadPageSpecific',
			'uglify:website',
			'concat:allPagePlugins',
			'uglify:websitePageWiseJS'
		]
	);

	grunt.registerTask(
		'website_Scripts_MinificationInDebugMode', [
			'uglify:initialJSDebug',
			'concat:websiteInit',
			'uglify:websiteInitDebug',
			'concat:websiteLoadPageSpecific',
			'uglify:websiteDebug',
			'concat:allPagePlugins',
			'uglify:websitePageWiseJSDebug'
		]
	);

	grunt.registerTask(
		'website_Css_Minification', [
			'sass:website',
			'cssnano:website',
			'sass:expanded_Individuals',
			'sass:min_Individals',
			'cssnano:assets'
		]
	);

	grunt.registerTask(
		'devSassAndNanoCss',[
			'lint',
			'copy',
			'sass:website',
			'sass:min',
			'cssnano',
			'sass:expanded',
			'sass:min',
			'postcss:expended',
			'postcss:min',
			'concat:dist',
			'uglify:dist',
			'uglify:extras',
			'uglify:downloadContent',
			'uglify:downloadContentMinify',
			'usebanner:release',
			'compress:main',
			'compress:src',
			'compress:light',
			'compress:pro',
			'compress:full',
			'compress:starter_template',
			'compress:parallax_template',
			'replace:version',
			'replace:readme',
			'rename:rename_src',
			'rename:rename_compiled',
			'rename:rename_light',
			'rename:rename_pro',
			'rename:rename_full'
		]
	);

	grunt.registerTask('jade_compile', ['pug', 'notify:jade_compile']);
	grunt.registerTask('js_compile', ['concat:temp', 'uglify:bin', 'notify:js_compile', 'clean:temp']);
	grunt.registerTask('sass_compile', ['sass:gh', 'sass:bin', 'postcss:gh', 'postcss:bin', 'notify:sass_compile']);
	grunt.registerTask('server', ['browserSync', 'notify:server']);
	grunt.registerTask('lint', ['removelogging:source']);
	grunt.registerTask('monitor', ["concurrent:monitor"]);
	grunt.registerTask('travis', ['jasmine']);
};
