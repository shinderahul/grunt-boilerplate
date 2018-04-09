module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scss: {
        files: ['src/assets/scss/**/*.scss'],
        tasks: ['sass', 'concat']
      }
    },

    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/assets/images/'
          }
        ]
      }
    },

    concat: {
      js: {
        src: ['src/assets/js/*.js', '!src/assets/js/*.min.js'],
        dest: 'src/assets/js/script.min.js'
      },
      css: {
        src: ['src/assets/css/*.css', '!src/assets/css/*.min.css'],
        dest: 'src/assets/css/style.min.css'
      }
    },

    sass: {
      build: {
        files: [
          {
            src: 'src/assets/scss/main.scss',
            dest: 'src/assets/css/style.css'
          }
        ]
      }
    },

    uglify: {
      build: {
        files: [
          {
            src: 'src/assets/js/script.min.js',
            dest: 'build/assets/js/script.min.js'
          }
        ]
      }
    },

    cssmin: {
      build: {
        files: [
          {
            src: 'src/assets/css/style.min.css',
            dest: 'build/assets/css/style.min.css'
          }
        ]
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',

            src: ['*.html'],
            dest: 'build/',
            ext: '.html'
          },
          {
            expand: true,
            cwd: 'src/assets/vendor/',
            src: '**',
            dest: 'build/assets/vendor/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['uglify', 'cssmin', 'imagemin', 'copy']);
};
