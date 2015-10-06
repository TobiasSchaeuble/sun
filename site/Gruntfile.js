/**
 * @file Gruntfile.js
 * 
 * See README.md
 */

'use strict';

module.exports = function(grunt) {

	// load all deps
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt
			.initConfig({

				// load package information
				pkg : grunt.file.readJSON('package.json'),

				// additional general information
				project : {
					buildtarget : 'src/'
				},

				// clean the dev/ directory
				clean : {
					build : {
						src : [ '<%= project.buildtarget %>' ]
					},
					sassfrombuild : {
						src : [ '<%= project.buildtarget %>/scss/' ]
					},
					contribfrombuild : {
						src : [ '<%= project.buildtarget %>/contrib/' ]
					},
					useless : {
						src : [ '<%= project.buildtarget %>/**/*mock*',
								'<%= project.buildtarget %>/**/*spec*',
								'<%= project.buildtarget %>/resources' ]
					},
					all : {
						src : [ '<%= project.buildtarget %>', 'node_modules/',
								'src/contrib/', '.sass-cache/' ]
					}
				},

				// copy files to target build/dev directories
				copy : {
					all : {
						files : [ {
							expand : true,
							cwd : 'src/',
							src : '**',
							dest : '<%= project.buildtarget %>/'
						} ]
					}
				},

				// bowercopy to final destination
				bowercopy : {
					options : {
						srcPrefix : 'src/contrib/',
						destPrefix : '<%= project.buildtarget %>/contrib/'
					},
					files : {
						files : {// dest: src
//							// fontawesome
//							'fontawesome/css/font-awesome.min.css' : 'fontawesome/css/font-awesome.min.css',
//							'fontawesome/fonts/FontAwesome.otf' : 'fontawesome/fonts/FontAwesome.otf',
//							'fontawesome/fonts/fontawesome-webfont.svg' : 'fontawesome/fonts/fontawesome-webfont.svg',
//							'fontawesome/fonts/fontawesome-webfont.woff' : 'fontawesome/fonts/fontawesome-webfont.woff',
//							'fontawesome/fonts/fontawesome-webfont.eot' : 'fontawesome/fonts/fontawesome-webfont.eot',
//							'fontawesome/fonts/fontawesome-webfont.ttf' : 'fontawesome/fonts/fontawesome-webfont.ttf',
							// jquery
			//				'jquery/dist/jquery.min.js':'jquery/dist/jquery.min.js', 
							// angularjs
							'angular/angular.min.js' : 'angular/angular.min.js',
							// angularjs
							'angular-ms/dist/js//angular.min.js' : 'angular-ms/dist/js//angular-ms.min.js',
						}
					}
				},

				// sass processing
				sass : {
					all : {
						options : {
							style : 'compressed'
						},
						files : [ {
							expand : true,
							cwd : 'src/scss/',
							src : [ '*.scss' ],
							dest : '<%= project.buildtarget %>/css/',
							ext : '.css'
						} ]
					}
				},

				// replace strings
				replace : {
					all : {
						options : {
							patterns : [
									{
										// first process the source header, that may contain other
										// below pattern matches
										match : 'source_header',
										replacement : '<%= grunt.file.read( "resources/documentation/source-header.txt") %>'
									}, {
										match : 'timestamp',
										replacement : '<%= new Date().getTime() %>'
									}, {
										match : 'human_date',
										replacement : '<%= grunt.template.today() %>'
									}, {
										match : 'pkg_name',
										replacement : '<%= pkg.name %>'
									}, {
										match : 'pkg_version',
										replacement : '<%= pkg.version %>'
									}

							]
						},
						files : [ {
							expand : true,
							cwd : '<%= project.buildtarget %>/',
							src : [ 'index.html', 'app/**/*.html', 'app/**/*.js' ],
							dest : '<%= project.buildtarget %>/'
						} ]
					}
				},

				// watch
				watch : {
					index : {
						files : [ 'src/index.html', 'src/**/*.tpl.html' ],
						tasks : [],
						options : {
							livereload : true
						}
					},
					sass : {
						files : 'src/scss/{,*/}*.{scss,sass}',
						tasks : [ 'sass:all' ],
						options : {
							livereload : true
						}
					}
				},

				// run a connect web server
				express : {
					all : {
						options : {
							bases : [ 'src/' ],
							port : 9000,
							hostname : "0.0.0.0",
							livereload : true
						}
					}
				},

				// Open the target URL
				open : {
					firefox : {
						path : 'http://localhost:<%= express.all.options.port %>',
						app : 'firefox'
					}
				},

				// run tests continuously
				karma : {
					singlerun : {
						configFile : 'karma.conf.js'
					},
					liverun : {
						configFile : 'karma.conf.js',
						singleRun : false
					}
				},

				protractor : {
					options : {
						configFile : "protractor.conf.js"
					},
					all : {}
				},
			});

	// Tasks
	grunt.registerTask('build-dev', [ 'sass:all', 'bowercopy' ]);

	grunt.registerTask('build-package', function() {
		grunt.config.set('project.buildtarget',
				'<%= pkg.name %>-v<%= pkg.version %>/');
		grunt.task.run([ 'clean:build', 'copy:all', 'sass:all',
				'clean:sassfrombuild', 'replace:all', 'clean:contribfrombuild',
				'bowercopy', 'clean:useless', ]);
	});

	grunt.registerTask('build-dev-watch', [ 'build-dev', 'watch' ]);
	grunt.registerTask('build-dev-live', [ 'build-dev', 'express',
			'open:firefox', 'watch' ]);

	grunt.registerTask('run-unit-tests', [ 'karma:singlerun' ]);
	grunt.registerTask('run-unit-tests-live', [ 'karma:liverun' ]);

	grunt.registerTask('run-e2e-tests', [ 'build-dev', 'protractor:all' ]);

};
