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
	var rootLocation = "C:/Users/ANKIT PAREKH/Desktop/techies/Website/js/"; 
 
	var options = {
		concat: {
			options:{},
            css: {
                src: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/*.css'],
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/production.css'
            },
            js: {
            	src: [
            		rootLocation + '/jquery-2.1.1.min',
            		rootLocation + '/data.js',
            		rootLocation + '/virtual.js',
            		rootLocation + '/jquery.lazyload.min.js',
            		rootLocation + '/libs/backbone/backbone.js',
            		rootLocation + '/libs/backbone/underscore.min.js',
            		rootLocation + '/libs/materialize/js/materialize.min.js',
            		rootLocation + '/libs/owl-carousel/owl.carousel.min.js',
            		rootLocation + '/libs/mobile-detect/mobile-detect.min.js',
            		rootLocation + '/libs/template/template.js',
                ],
                dest: rootLocation +'/production.js'           
            }
        },
        cssmin: {
            css: {
                src: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/production.css',
                dest: 'archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/min/production.min.css'
            }
        },
        uglify: {
            js: {            	
                src: [
            		rootLocation + '/jquery-2.1.1.min',
            		rootLocation + '/data.js',
            		rootLocation + '/virtual.js',
            		rootLocation + '/jquery.lazyload.min.js',
            		rootLocation + '/libs/backbone/backbone.js',
            		rootLocation + '/libs/backbone/underscore.min.js',
            		rootLocation + '/libs/materialize/js/materialize.min.js',
            		rootLocation + '/libs/owl-carousel/owl.carousel.min.js',
            		rootLocation + '/libs/mobile-detect/mobile-detect.min.js',
            		rootLocation + '/libs/template/template.js',
                ],
                dest: rootLocation +'/production.js' 
            }
        },
        watch: {
            css: {
                files: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/css/*.css'],
                tasks: ['concat:css', 'cssmin:css']
            },
            js: {
                files: ['archive/trunk_archived_16_06/Grouptree.UI.Web/UI.core/assets/js/*.js'],
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

	//var mode = grunt.option('dev') ? 'debugDist' : 'dist';

	// Task definition
	//grunt.registerTask('musafir-dist', ['packit:' + mode + 'Musafir1', 'packit:' + mode + 'Musafir2', 'packit:' + mode + 'Trip', 'packit:' + mode + 'Plus']);
    //grunt.registerTask('musafir-js', ['musafir-dist']);
    //grunt.registerTask('js', ['chmod:musafirjs', 'musafir-js', 'chmod:remotejs', 'copy:musafir']);
    //grunt.registerTask('css', ['chmod:musafircss', 'cssmin:musafir']);
	grunt.registerTask('development', ['concat', 'cssmin', 'uglify']);
	grunt.registerTask('production',  ['concat', 'cssmin', 'uglify']);
};
