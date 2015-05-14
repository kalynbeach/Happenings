module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: ['public/js/app.js'],
        dest: 'public/js/bundle.js'
      }
    },

    less: {
      css: {
        files: {
          "public/css/styles.css": "public/css/styles.less"
        }
      }
    },

    watch: {

      scripts: {
        files: ['public/js/components/*.jsx'],
        tasks: ['browserify']
      },

      css: {
        files: ['public/css/styles.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'less']);

};