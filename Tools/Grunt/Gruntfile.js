// Pre-requisite: "nodejs"
// Setup: in command line, navigate to directory containing Gruntfile.js (MusafirPresentationWebsite) and enter command "npm install" to install all dependencies
// Usage:
// 1. JS minification - distribution mode
// * command: "grunt watch:js"
// * Just start watching with above command on command line and any change to source JS files will trigger minifications
// 2. JS minification - debug mode
// * command: "grunt watch:js --dev" (debug mode)
// * Just start watching with above command on command line and any change to source JS files will trigger minifications

// Warning: Avoid usage of below if you are unsure of it's implications
// 3. CSS minification
// * command: "grunt watch:css"
// * Just start watching with above command on command line and any change to source CSS files files will trigger minifications
// 4. JS+CSS minification
// * command: "grunt watch:all"
// * command: "grunt watch:all --dev" (debug mode)
// * Just start watching with above command on command line and any change to source CSS files or source JS files will trigger minifications. Only JS will be affected with debug/dist modes, css is always on dist mode

//Gruntfile
module.exports = function(grunt) {
	var rootLocation = "C:/Users/Admin/Desktop/VirtualTechies/Website/"; 
 
	var options = {
	
		concat: {
			options:{},
			homeCss: {
				src: [
					rootLocation + 'js/libs/materialize/css/materialize.min.css',
					rootLocation + 'css/style.css',
					rootLocation + 'css/extra.css',
					rootLocation + 'css/font-awesome.min.css',
					rootLocation + 'js/libs/owl-carousel/owl.carousel.css',
					rootLocation + 'js/libs/owl-carousel/owl.theme.css',
					rootLocation + 'js/libs/owl-carousel/owl.transitions.css'
				],
				dest: rootLocation + 'assets/style.home.min.css'
			},

			siteCss:{
				src: [
					rootLocation + 'js/libs/materialize/css/materialize.min.css',
					rootLocation + 'css/style.css',
					rootLocation + 'css/extra.css',
					rootLocation + 'css/font-awesome.min.css'
				],
				dest: rootLocation + 'assets/style.min.css'
			},

			homeJs: {
				src: [
					rootLocation + 'js/libs/jquery/jquery-2.1.1.min.js',
					rootLocation + 'js/libs/jquery/jquery.lazyload.min.js',
					rootLocation + 'js/libs/materialize/js/materialize.min.js',
					rootLocation + 'js/jquery.lazyload.min.js',
					rootLocation + 'js/libs/owl-carousel/owl.carousel.min.js',
					rootLocation + 'js/libs/mobile-detect/mobile-detect.min.js',
					rootLocation + 'js/data.js',
					rootLocation + 'js/virtual.js'
				],
				dest: rootLocation +'assets/home.min.js'           
			},

			siteJs: {
				src: [
				 	rootLocation + 'js/libs/jquery/jquery-2.1.1.min.js',
					rootLocation + 'js/libs/jquery/jquery.lazyload.min.js',
					rootLocation + 'js/libs/materialize/js/materialize.min.js',
					rootLocation + 'js/jquery.lazyload.min.js',
					rootLocation + 'js/libs/mobile-detect/mobile-detect.min.js',
					rootLocation + 'js/data.js',
					rootLocation + 'js/virtual.js'
				],
				dest: rootLocation +'assets/site.min.js'
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			homeCss: {
				expand: false,
				src : rootLocation + 'assets/style.home.min.css',
				dest: rootLocation + 'assets/style.home.min.css'
			},
			siteCss : {
				expand: false,
				src : rootLocation + 'assets/style.style.min.css',
				dest: rootLocation + 'assets/style.style.min.css'
			}
		},

		uglify: {
			options:{
				beautify:false
			},
			homeJs: {            	
				src: [
					rootLocation +'assets/home.min.js'
				],
				dest: rootLocation +'assets/home.min.js'
			},
			siteJs: {            	
				src: [
					rootLocation +'assets/site.min.js'
				],
				dest: rootLocation +'assets/site.min.js'
			}
		},

		watch: {
			css: {
				files: [ rootLocation + 'css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: [rootLocation + 'js/*.js'],
				tasks: ['concat:js', 'uglify:js']
			}
		}
	}
	
	//Initializing the configuration object
	grunt.initConfig(options);

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Task definition
	grunt.registerTask('development', [
			'concat',
			//'uglify',
			'cssmin'
	]);
	grunt.registerTask('production',  [		
			'concat',
			//'uglify',
			'cssmin'			
	]);
};
