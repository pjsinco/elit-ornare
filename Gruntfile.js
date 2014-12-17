module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-svgstore");
  grunt.loadNpmTasks("grunt-grunticon");
  grunt.loadNpmTasks("grunt-autoprefixer");


  grunt.initConfig({

    autoprefixer: {
      css: {
        src: 'builds/dev/css/**/*.css',
      }
    },

    grunticon: {

      myIcons: {
        files: [{
          expand: true,
          cwd: 'builds/dev/img/svg',
          src: ['*.svg', '*.png'],
          dest: 'output'
        }],
        options: {
        }
      }

    },

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: [{
          expand: true,
          cwd: 'components/jade/',
          src: '**/*.jade',
          dest: 'builds/dev',
          ext: '.html'
        }]
      }
    }, // jade

    copy: {
      js: {
        options: {

        },
        files: [{
          expand: true,
          cwd: 'components',
          src: ['js/*.js'],
          dest: 'builds/dev/js',
          ext: '.js' 
        }]
      }
    }, // copy

    watch: {
      options: {
        livereload: true
      },
      
      sass: {
        files: ['components/sass/**/*.scss'],
        tasks: ['compass:dev', 'autoprefixer:css'] 
      },

      compileHtml: {
        files: ['components/jade/*.jade'],
        tasks: ['jade']
      },

      copyJs: {
        files: ['components/js/**/*.js'],
        tasks: ['copy:js']
      }
    }, // watch

    svgstore: {
      options: {
        svg: {
          viewbox: '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        symbol: {

        },
        formatting: {
          indent_size: 2,
          indent_char: ' '
        },
        includedemo: true
      },
      default: {
        files: {
          'builds/dev/img/*.svg': ['builds/dev/img/svg/*.svg']
        } 
      }
    } // svgstore

  }); // initConfig
  
  grunt.registerTask('copy-js', ['copy:js'])
  grunt.registerTask('compile-jade', ['jade:compile'])
  grunt.registerTask('compile-sass', ['compass:dev'])
  grunt.registerTask('svg-grunticon', ['grunticon:myIcons']);
  grunt.registerTask('svg-iconize', ['svgstore']);
  grunt.registerTask('default', ['watch']);

}; // exports

