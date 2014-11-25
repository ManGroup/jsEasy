/* jshint node: true */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('./package.json'),
    banner: '/**\n' +
      '* jsEasy v<%= pkg.version %> by @Antony \n' +
      '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.email %>\n' +
      '*/\n',
    dist: '../dist',

    // Task configuration.
    clean: {
      dist: [
        'dist/css',
        'dist/fonts',
        'dist/img',
        'dist/js',
        'dist/md',
        'dist/tpl'
      ]
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: 'src/js/*.js'
      },
      server: {
        src: ['../app.js', '../app.js', '../api/*.js', '../dao/*.js', '../lib/*.js']
      }
    },

    uglify: {
      options: {
        beautify : true,
        mangle   : false, //混淆变量名
        banner: '<%= banner %>'
      },
      reserveLoad: {
        dest: 'dist/js/reserveLoad.min.js',
        src: 'src/vendor/reserveLoadjs/reserveLoad.js'
      },
      ie: {
        dest: 'dist/js/ie.min.js',
        src: [
          'src/vendor/es5-shim/es5-shim.js',
          'src/vendor/json2/json2.js',
          'src/vendor/html5shiv/dist/html5shiv.js',
          'src/vendor/respond/respond.src.js'
        ]
      },
      jquery: {
        dest: 'dist/js/jquery.old.js',
        src: ['src/vendor/jquery.old/jquery.js']
      },
      angular: {
        dest: 'dist/js/angular-all.min.js',
        src: [
          'src/vendor/angular/angular.js',
          'src/vendor/angular-animate/angular-animate.js',
          'src/vendor/angular-cookies/angular-cookies.js',
          'src/vendor/angular-resource/angular-resource.js',
          'src/vendor/angular-route/angular-route.js'
        ]
      },
//      lib: {
//        dest: 'dist/js/lib.min.js',
//        src: [
//          'src/vendor/angular-file-upload/angular-file-upload.js',
//          'src/vendor/google-code-prettify/src/prettify.js',
//          'src/vendor/marked/lib/marked.js',
//          'src/vendor/toastr/toastr.js',
//          'src/js/lib/angular-locale_zh-cn.js',
//          'src/js/lib/angular-ui.js',
//          'src/js/lib/bootstrap.js',
//          'src/js/lib/hmac-sha256.js',
//          'src/js/lib/Markdown.Editor.js',
//          'src/js/lib/sanitize.js',
//          'src/js/lib/store.js',
//          'src/js/lib/utf8.js'
//        ]
//      },
      jsEasy: {
        dest: 'dist/js/<%= pkg.name %>.min.js',
        src: [
          'src/js/location/locale_zh.js',
          'src/js/utils/tools.js',
          'src/js/controllers/*',
          'src/js/services/*',
          'src/js/router.js',
          'src/js/filters.js',
          'src/js/directives.js',
          'src/js/app.js'
        ]
      }
    },

//    recess: {
//      dist: {
//        options: {
//          compile: true,
//          compress: true
//        },
//        dest: 'dist/css/<%= pkg.name %>.min.css',
//        src: [
//          'src/vendor/pure/pure.css',
//          'src/vendor/toastr/toastr.css',
//          'src/css/prettify.css',
//          'src/css/main.css'
//        ]
//      }
//    },
    less: {
      development: {
        options: {
          paths: ["src/theme/css"],
          cleancss: true
        },
        files: {
          "src/theme/css/style.css": "src/theme/css/style.less"
        }
      }
    },


    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        dest: 'dist/tpl/',
        src: ['src/tpl/*.html']
      }
    },

    copy: {
      fonts: {
        expand: true,
        flatten: true,
        dest: 'dist/fonts/',
        src: ['src/vendor/font-awesome/fonts/*']
      },
      theme : {
        expand: true,
        flatten: true,
        dest: 'dist/css/',
        src: ['src/theme/css/*.css']
      },
      css: {
        expand: true,
        flatten: true,
        dest: 'dist/css/',
        src: ['src/vendor/font-awesome/css/font-awesome.min.css']
      },
      jquery: {
        expand: true,
        flatten: true,
        dest: 'dist/js/',
        src: ['src/vendor/jquery/jquery.min.js']
      },
      img: {
        expand: true,
        flatten: true,
        dest: 'dist/img/',
        src: ['src/img/*']
      },
      tpl: {
        expand: true,
        flatten: true,
        dest: 'dist/tpl/',
        src: ['src/tpl/*']
      },
      md: {
        expand: true,
        flatten: true,
        dest: 'dist/md/',
        src: ['src/md/*']
      }
    },

    hash: {
      index: {
        options: {
          algorithm: 'md5',
          urlCwd: 'dist/'
        },
        dest: 'dist/index.html',
        src: '../index.html'
      }
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-hash-url');
  grunt.loadNpmTasks('grunt-recess');

  // Default task.
  grunt.registerTask('default', ['clean', 'uglify' , 'less', 'copy', 'hash']);
};
